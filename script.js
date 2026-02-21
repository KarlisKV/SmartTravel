/**
 * SmartTravel — Climate Travel Planner
 * Expects climate API at http://127.0.0.1:5000
 */

const API_BASE = 'http://127.0.0.1:5000';

// Register datalabels plugin so labels show on charts (must run after Chart.js and plugin are loaded)
if (typeof Chart !== 'undefined' && typeof ChartDataLabels !== 'undefined') {
    Chart.register(ChartDataLabels);
}

// --- Screen helpers
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    const screen = document.getElementById(id);
    if (screen) screen.classList.add('active');
    
    // Ensure nationality dropdown is visible when destination-selection-screen is shown
    if (id === 'destination-selection-screen') {
        setTimeout(() => {
            const customDropdown = document.getElementById('nationality-custom-dropdown');
            if (customDropdown) {
                customDropdown.style.display = 'block';
                customDropdown.style.visibility = 'visible';
                customDropdown.style.opacity = '1';
                customDropdown.style.pointerEvents = 'auto';
            }
        }, 100);
    }
}

// --- LGBTQ+ Data (loaded via API, backend uses csv.DictReader)
let lgbtqDataCache = null;
let lgbtqDataLoadPromise = null;

function loadLgbtqTable() {
    if (lgbtqDataLoadPromise) return lgbtqDataLoadPromise;
    lgbtqDataLoadPromise = fetch(API_BASE + '/lgbtq')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            return res.json();
        })
        .then(json => {
            console.log('LGBTQ+ API response:', json);
            const rows = json && Array.isArray(json.rows) ? json.rows : [];
            console.log('LGBTQ+ rows count:', rows.length);
            const table = {};
            rows.forEach(row => {
                const region = (row['Region'] || row['region'] || '').trim();
                const location = (row['Location'] || row['location'] || '').trim();
                if (!location) return;
                const key = location.toLowerCase();
                table[key] = {
                    location_name: location,
                    region: region,
                    sameSexActivity: (row['Same-sex sexual activity'] || '').trim(),
                    sameSexUnions: (row['Recognition of same-sex unions'] || '').trim(),
                    sameSexMarriage: (row['Same-sex marriage'] || '').trim(),
                    adoption: (row['Adoption by same-sex couples'] || '').trim(),
                    militaryService: (row['LGBT military service'] || '').trim(),
                    antiDiscrimination: (row['Anti-discrimination (sexual orientation)'] || '').trim(),
                    genderIdentity: (row['Gender identity/expression laws'] || '').trim()
                };
            });
            console.log('LGBTQ+ table built with', Object.keys(table).length, 'locations');
            console.log('Latvia in table?', 'latvia' in table, table['latvia']);
            lgbtqDataCache = table;
            return table;
        })
        .catch(e => {
            console.error('Failed to load LGBTQ+ data from API:', e);
            lgbtqDataCache = {};
            return {};
        });
    return lgbtqDataLoadPromise;
}

function getLgbtqInfo(country, place) {
    const data = lgbtqDataCache;
    if (!data || Object.keys(data).length === 0) {
        console.log('getLgbtqInfo: No data available, cache:', data);
        return null;
    }

    function lookupOne(name) {
        if (!name || !name.trim()) return null;
        name = name.trim().replace(/\n/g, ' ');
        const key = name.toLowerCase();
        
        // Exact match first
        if (key in data) {
            console.log('getLgbtqInfo: Exact match found for', name, '->', key);
            return data[key];
        }
        
        // Fuzzy match: check if key is in location name or location name is in key
        for (const k in data) {
            if (key === k) {
                console.log('getLgbtqInfo: Exact match found (case)', name, '->', k);
                return data[k];
            }
            if (key.includes(k) || k.includes(key)) {
                console.log('getLgbtqInfo: Fuzzy match found', name, '->', k, '(key in k or k in key)');
                return data[k];
            }
        }
        console.log('getLgbtqInfo: No match found for', name);
        return null;
    }

    // Try place parts first (same as plug voltage matching)
    // This handles cases like "Riga, Latvia" -> tries "Riga" then "Latvia"
    if (place && place.trim()) {
        const placeParts = place.split(',').map(p => p.trim()).filter(p => p);
        console.log('getLgbtqInfo: Trying place parts:', placeParts, 'from place:', place);
        // Try parts in reverse order (country is usually last)
        for (let i = placeParts.length - 1; i >= 0; i--) {
            const part = placeParts[i];
            console.log('getLgbtqInfo: Trying place part:', part);
            const match = lookupOne(part);
            if (match) {
                console.log('getLgbtqInfo: Match found in place part:', part);
                return match;
            }
        }
        // Also try forward order
        for (const part of placeParts) {
            const match = lookupOne(part);
            if (match) {
                console.log('getLgbtqInfo: Match found in place part (forward):', part);
                return match;
            }
        }
    }
    
    // Then try country
    if (country && country.trim()) {
        console.log('getLgbtqInfo: Trying country:', country);
        const match = lookupOne(country.trim());
        if (match) {
            console.log('getLgbtqInfo: Match found for country:', country);
            return match;
        }
    }
    
    console.log('getLgbtqInfo: No match found for country:', country, 'place:', place);
    console.log('getLgbtqInfo: Available locations sample:', Object.keys(data).slice(0, 20));
    return null;
}

function loadAndRenderLgbtqTable() {
    const loadingEl = document.getElementById('lgbtq-table-loading');
    const wrapperEl = document.getElementById('lgbtq-table-wrapper');
    const theadEl = document.getElementById('lgbtq-table-head');
    const tbodyEl = document.getElementById('lgbtq-table-body');
    
    if (!loadingEl || !wrapperEl || !theadEl || !tbodyEl) return;
    
    loadingEl.style.display = 'block';
    wrapperEl.style.display = 'none';
    theadEl.innerHTML = '';
    tbodyEl.innerHTML = '';
    
    loadLgbtqTable().then((data) => {
        console.log('LGBTQ+ table data loaded:', data);
        console.log('lgbtqDataCache:', lgbtqDataCache);
        console.log('Data keys count:', data ? Object.keys(data).length : 0);
        console.log('Cache keys count:', lgbtqDataCache ? Object.keys(lgbtqDataCache).length : 0);
        
        // Use the returned data or cache (should be the same)
        const tableData = data || lgbtqDataCache || {};
        if (!tableData || Object.keys(tableData).length === 0) {
            console.error('No LGBTQ+ data available after loading');
            console.error('Data object:', data);
            console.error('Cache object:', lgbtqDataCache);
            loadingEl.textContent = 'No LGBTQ+ data available. Please check the console for errors.';
            return;
        }
        
        console.log('Using table data with', Object.keys(tableData).length, 'locations');
        
        // Create table header (only 4 columns)
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = 
            '<th>Location</th>' +
            '<th>Same-sex sexual activity</th>' +
            '<th>Anti-discrimination (sexual orientation)</th>' +
            '<th>Gender identity/expression laws</th>';
        theadEl.appendChild(headerRow);
        
        // Sort locations alphabetically for better UX
        const sortedLocations = Object.values(tableData).sort((a, b) => {
            return a.location_name.localeCompare(b.location_name);
        });
        
        // Create table rows (only 4 columns)
        sortedLocations.forEach(item => {
            const row = document.createElement('tr');
            const formatValue = (val) => {
                if (!val || val === 'No' || val === '') return '<span class="lgbtq-no">No</span>';
                if (val === 'Yes') return '<span class="lgbtq-yes">Yes</span>';
                if (val === 'Legal') return '<span class="lgbtq-yes">Legal</span>';
                if (val.startsWith('Yes')) return '<span class="lgbtq-yes">' + escapeHtml(val) + '</span>';
                if (val.startsWith('No')) return '<span class="lgbtq-no">' + escapeHtml(val) + '</span>';
                if (val.toLowerCase().includes('legal')) return '<span class="lgbtq-yes">' + escapeHtml(val) + '</span>';
                return escapeHtml(val);
            };
            
            // Format location with region: "Location (Region)"
            const locationDisplay = item.region 
                ? escapeHtml(item.location_name) + ' <span class="lgbtq-region">(' + escapeHtml(item.region) + ')</span>'
                : escapeHtml(item.location_name);
            
            row.innerHTML = 
                '<td><strong>' + locationDisplay + '</strong></td>' +
                '<td>' + formatValue(item.sameSexActivity) + '</td>' +
                '<td>' + formatValue(item.antiDiscrimination) + '</td>' +
                '<td>' + formatValue(item.genderIdentity) + '</td>';
            tbodyEl.appendChild(row);
        });
        
        loadingEl.style.display = 'none';
        wrapperEl.style.display = 'block';
    }).catch(e => {
        console.error('Error loading LGBTQ+ table:', e);
        loadingEl.textContent = 'Failed to load LGBTQ+ data. Please try again.';
    });
}

// --- Flags
let flagsCache = null;
let flagsLoadPromise = null;

async function loadFlags() {
    if (flagsLoadPromise) return flagsLoadPromise;
    flagsLoadPromise = fetch(API_BASE + '/flags')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            return res.json();
        })
        .then(json => {
            const flags = {};
            (json.flags || []).forEach(flag => {
                const country = flag.country || '';
                if (country) {
                    flags[country.toLowerCase()] = flag.flag;
                }
            });
            flagsCache = flags;
            return flags;
        })
        .catch(e => {
            console.error('Failed to load flags:', e);
            flagsCache = {};
            return {};
        });
    return flagsLoadPromise;
}

// Country name aliases to match dataset flag names
const COUNTRY_NAME_ALIASES = {
    'cape verde islands': 'cabo verde',
    'cape verde': 'cabo verde',
    'comoro islands': 'comoros',
    'comoros islands': 'comoros',
    'congo (dem. rep.)': 'democratic republic of the congo',
    'congo (rep.)': 'congo',
    'republic of the congo': 'congo',
    'democratic republic of congo': 'democratic republic of the congo',
    'dr congo': 'democratic republic of the congo',
    'drc': 'democratic republic of the congo',
    'russian federation': 'russia',
    'cote d\'ivoire': 'côte d\'ivoire',
    'ivory coast': 'côte d\'ivoire',
    'czechia': 'czech republic',
    'myanmar': 'myanmar (burma)',
    'burma': 'myanmar (burma)',
    'north macedonia': 'macedonia',
    'macedonia (fyrom)': 'macedonia',
    'east timor': 'timor-leste',
    'timor leste': 'timor-leste',
    'swaziland': 'eswatini',
    'the bahamas': 'bahamas',
    'the gambia': 'gambia',
    'the netherlands': 'netherlands',
    'the philippines': 'philippines',
    'united states': 'united states of america',
    'usa': 'united states of america',
    'us': 'united states of america',
    'united kingdom': 'united kingdom of great britain and northern ireland',
    'uk': 'united kingdom of great britain and northern ireland',
    'great britain': 'united kingdom of great britain and northern ireland',
    'south korea': 'korea, republic of',
    'north korea': 'korea, democratic people\'s republic of',
    'dprk': 'korea, democratic people\'s republic of',
    'vietnam': 'viet nam',
    'laos': 'lao people\'s democratic republic',
    'syria': 'syrian arab republic',
    'libya': 'libya',
    'iran': 'iran, islamic republic of',
    'venezuela': 'venezuela, bolivarian republic of',
    'moldova': 'republic of moldova',
    'brunei': 'brunei darussalam',
    'taiwan (chinese taipei)': 'taiwan',
    'chinese taipei': 'taiwan',
    'turkiye': 'turkey',
    'st. kitts and nevis': 'saint kitts and nevis',
    'st kitts and nevis': 'saint kitts and nevis',
    'st. lucia': 'saint lucia',
    'st lucia': 'saint lucia',
    'st. vincent and the grenadines': 'saint vincent and the grenadines',
    'st vincent and the grenadines': 'saint vincent and the grenadines',
    'sao tome and principe': 'são tomé and príncipe',
    'sao tome and príncipe': 'são tomé and príncipe',
    'são tome and principe': 'são tomé and príncipe',
    'palestinian territory': 'palestine',
    'palestinian teritory': 'palestine',
    'palestinian territories': 'palestine'
};

function getFlagForCountry(countryName) {
    if (!flagsCache || !countryName) return null;
    
    const normalized = countryName.toLowerCase().trim();
    
    // Try direct match first
    if (flagsCache[normalized]) {
        return flagsCache[normalized];
    }
    
    // Try alias mapping
    const alias = COUNTRY_NAME_ALIASES[normalized];
    if (alias && flagsCache[alias]) {
        return flagsCache[alias];
    }
    
    // Try fuzzy matching: check if any flag country name contains the search term or vice versa
    for (const flagKey in flagsCache) {
        const flagCountry = flagKey.toLowerCase();
        // Check if normalized name is contained in flag country name or vice versa
        if (normalized.includes(flagCountry) || flagCountry.includes(normalized)) {
            // But avoid too short matches (at least 3 characters)
            if (normalized.length >= 3 || flagCountry.length >= 3) {
                return flagsCache[flagKey];
            }
        }
    }
    
    return null;
}

// --- Nationalities
let nationalitiesList = [];

async function loadNationalities() {
    try {
        const res = await fetch(API_BASE + '/nationalities');
        const data = await res.json();
        nationalitiesList = data.nationalities || [];
    } catch (e) {
        nationalitiesList = [];
    }
    
    // Load flags in parallel
    await loadFlags();
    
    const sel = document.getElementById('nationality-select');
    const customDropdown = document.getElementById('nationality-custom-dropdown');
    
    // Show dropdown immediately
    if (customDropdown) {
        customDropdown.style.display = 'block';
    }
    
    const customOptions = customDropdown?.querySelector('.nationality-dropdown-options');
    const customList = customOptions?.querySelector('.nationality-dropdown-list');
    const searchInput = customOptions?.querySelector('#nationality-search-input');
    const customSelected = customDropdown?.querySelector('.nationality-selected-text');
    
    if (!sel || !customDropdown || !customList) {
        console.error('Nationality dropdown elements not found');
        return;
    }
    
    // Populate hidden select (for form value)
    sel.innerHTML = '<option value="">Select your nationality</option>';
    nationalitiesList.forEach(n => {
        const opt = document.createElement('option');
        opt.value = n;
        opt.textContent = n;
        sel.appendChild(opt);
    });
    
    let allItems = [];
    
    // Function to render filtered list
    function renderNationalityList(filter = '') {
        if (!customList) return;
        customList.innerHTML = '';
        const filterLower = filter.toLowerCase().trim();
        
        const filtered = filterLower 
            ? nationalitiesList.filter(n => n.toLowerCase().includes(filterLower))
            : nationalitiesList;
        
        if (filtered.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'nationality-dropdown-item nationality-dropdown-empty';
            empty.textContent = 'No countries found';
            customList.appendChild(empty);
            return;
        }
        
        allItems = [];
        filtered.forEach(n => {
            const flagUrl = getFlagForCountry(n);
            const item = document.createElement('div');
            item.className = 'nationality-dropdown-item';
            item.dataset.value = n;
            item.tabIndex = 0;
            item.setAttribute('role', 'option');
            if (flagUrl) {
                item.innerHTML = `<img src="${escapeHtml(flagUrl)}" alt="" class="flag-icon"> <span>${escapeHtml(n)}</span>`;
            } else {
                item.innerHTML = `<span>${escapeHtml(n)}</span>`;
            }
            item.addEventListener('click', () => {
                sel.value = n;
                sel.dispatchEvent(new Event('change'));
                if (flagUrl && customSelected) {
                    customSelected.innerHTML = `<img src="${escapeHtml(flagUrl)}" alt="" class="flag-icon"> ${escapeHtml(n)}`;
                } else if (customSelected) {
                    customSelected.textContent = n;
                }
                if (searchInput) searchInput.value = '';
                customDropdown.classList.remove('open');
                renderNationalityList(''); // Reset filter
            });
            customList.appendChild(item);
            allItems.push({ element: item, country: n });
        });
    }
    
    // Initial render
    renderNationalityList('');
    
    // Ensure dropdown is visible and clickable
    customDropdown.style.display = 'block';
    customDropdown.style.visibility = 'visible';
    customDropdown.style.opacity = '1';
    customDropdown.style.pointerEvents = 'auto';
    
    // Ensure the selected element is also clickable
    const selectedEl = customDropdown.querySelector('.nationality-dropdown-selected');
    if (selectedEl) {
        selectedEl.style.pointerEvents = 'auto';
        selectedEl.style.cursor = 'pointer';
    }
    
    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderNationalityList(e.target.value);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const firstItem = customList.querySelector('.nationality-dropdown-item:not(.nationality-dropdown-empty)');
                if (firstItem) firstItem.focus();
            }
        });
    }
    
    // Keyboard navigation
    customList.addEventListener('keydown', (e) => {
        const items = Array.from(customList.querySelectorAll('.nationality-dropdown-item:not(.nationality-dropdown-empty)'));
        const currentIndex = items.findIndex(item => item === document.activeElement);
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            items[nextIndex]?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            items[prevIndex]?.focus();
        } else if (e.key === 'Enter' && document.activeElement.classList.contains('nationality-dropdown-item')) {
            e.preventDefault();
            document.activeElement.click();
        } else if (e.key === 'Escape') {
            customDropdown.classList.remove('open');
            if (searchInput) searchInput.value = '';
            renderNationalityList('');
        }
    });
    
    // Toggle dropdown - use a flag to prevent duplicate listeners
    if (!customDropdown.dataset.listenersAttached) {
        const selectedEl = customDropdown.querySelector('.nationality-dropdown-selected');
        if (selectedEl) {
            selectedEl.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                customDropdown.classList.toggle('open');
                if (customDropdown.classList.contains('open') && searchInput) {
                    setTimeout(() => searchInput.focus(), 50);
                }
            });
            
            // Ensure it's clickable
            selectedEl.style.pointerEvents = 'auto';
            selectedEl.style.cursor = 'pointer';
        }
        
        // Close on outside click - only attach once
        const outsideClickHandler = (e) => {
            if (!customDropdown.contains(e.target)) {
                customDropdown.classList.remove('open');
                if (searchInput) {
                    searchInput.value = '';
                    renderNationalityList('');
                }
            }
        };
        document.addEventListener('click', outsideClickHandler);
        customDropdown.dataset.listenersAttached = 'true';
    }
    
    // Sync with hidden select
    sel.addEventListener('change', () => {
        const selectedValue = sel.value;
        const flagUrl = getFlagForCountry(selectedValue);
        if (customSelected) {
            if (selectedValue && flagUrl) {
                customSelected.innerHTML = `<img src="${escapeHtml(flagUrl)}" alt="" class="flag-icon"> ${escapeHtml(selectedValue)}`;
            } else if (selectedValue) {
                customSelected.textContent = selectedValue;
            } else {
                customSelected.textContent = 'Select your nationality';
            }
        }
    });
    
    // Manual selection only - auto-detection removed
}

// Auto-detection removed - users select nationality manually

// --- Destination search (Nominatim geocoding)
let selectedDestination = null;
const autocompleteDebounceMs = 300;
let autocompleteTimer = null;

async function searchPlaces(query) {
    if (!query || query.trim().length < 2) return [];
    try {
        const res = await fetch(
            'https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(query.trim()) +
            '&format=json&limit=6',
            { headers: { 'Accept': 'application/json' } }
        );
        const data = await res.json();
        return (data || []).map(item => ({
            name: item.display_name,
            lat: parseFloat(item.lat),
            lon: parseFloat(item.lon),
            country: item.address?.country || ''
        }));
    } catch (e) {
        return [];
    }
}

function showAutocomplete(results) {
    const container = document.getElementById('autocomplete-results');
    if (!container) return;
    container.innerHTML = '';
    if (!results.length) {
        container.classList.remove('show');
        return;
    }
    results.forEach(place => {
        const div = document.createElement('div');
        div.className = 'autocomplete-item';
        div.textContent = place.name;
        div.addEventListener('click', () => {
            selectDestination(place);
            container.innerHTML = '';
            container.classList.remove('show');
        });
        container.appendChild(div);
    });
    container.classList.add('show');
}

function selectDestination(place) {
    selectedDestination = place;
    const el = document.getElementById('selected-destination');
    if (el) {
        el.textContent = place.name;
        el.classList.add('show');
    }
    const continueBtn = document.getElementById('btn-continue-to-dates');
    if (continueBtn) continueBtn.style.display = 'inline-block';
    document.getElementById('destination-search').value = '';
    document.getElementById('autocomplete-results').innerHTML = '';
    document.getElementById('autocomplete-results').classList.remove('show');
    tryAutoAdvanceFromDestination();
}

function tryAutoAdvanceFromDestination() {
    const natSel = document.getElementById('nationality-select');
    const hasNat = natSel && natSel.value && natSel.value.trim();
    if (selectedDestination && hasNat) showScreen('destination-screen');
}

// --- Date selection
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let startMonth = null;
let endMonth = null;

function buildMonthGrids() {
    [['start-month-grid', 'start'], ['end-month-grid', 'end']].forEach(([gridId, kind]) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        grid.innerHTML = '';
        MONTHS.forEach((name, i) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'month-btn';
            btn.dataset.month = String(i + 1);
            btn.textContent = name;
            btn.addEventListener('click', () => pickMonth(kind, i + 1));
            grid.appendChild(btn);
        });
    });
}

function pickMonth(kind, month) {
    if (kind === 'start') startMonth = month;
    else endMonth = month;
    updateMonthSelection();
    updateDatesInfo();
    tryAutoAdvanceFromDates();
}

function updateMonthSelection() {
    document.querySelectorAll('#start-month-grid .month-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.month, 10) === startMonth);
    });
    document.querySelectorAll('#end-month-grid .month-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.month, 10) === endMonth);
    });
}

function updateDatesInfo() {
    const info = document.getElementById('selected-dates-info');
    const hint = document.getElementById('date-hint');
    if (!info || !hint) return;
    if (startMonth != null && endMonth != null) {
        if (startMonth > endMonth) {
            [startMonth, endMonth] = [endMonth, startMonth];
            updateMonthSelection();
        }
        info.textContent = `${MONTHS[startMonth - 1]} – ${MONTHS[endMonth - 1]}`;
        info.classList.add('show');
        hint.textContent = 'Taking you to your climate results…';
    } else {
        info.textContent = '';
        info.classList.remove('show');
        hint.textContent = 'Select start and end month — we\'ll show your climate charts next.';
    }
}

function tryAutoAdvanceFromDates() {
    if (startMonth != null && endMonth != null && selectedDestination) {
        showScreen('results-screen');
        loadAndShowResults();
    }
}

// --- Results: climate charts and API
let resultsCharts = {};
let resultsMap = null;

function destroyCharts() {
    Object.values(resultsCharts).forEach(chart => { if (chart) chart.destroy(); });
    resultsCharts = {};
}

// Plugin to highlight selected month range (startMonth–endMonth) on charts (drawn behind data)
// Use actual data point positions so the band aligns with the drawn bars/points
function getMonthHighlightPlugin() {
    return {
        id: 'monthHighlight',
        beforeDatasetsDraw(chart) {
            const s = startMonth;
            const n = endMonth;
            if (s == null || n == null) return;
            const meta = chart.getDatasetMeta(0);
            if (!meta?.data?.length) return;
            const data = meta.data;
            const minM = Math.min(s, n);
            const maxM = Math.max(s, n);
            const iLeft = Math.max(0, minM - 1);
            const iRight = Math.min(data.length - 1, maxM - 1);
            const step = data.length > 1 ? data[1].x - data[0].x : (chart.chartArea.right - chart.chartArea.left) / 12;
            const left = data[iLeft].x - step / 2;
            const right = data[iRight].x + step / 2;
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            ctx.save();
            ctx.fillStyle = 'rgba(91, 33, 182, 0.12)';
            ctx.fillRect(Math.max(left, chartArea.left), chartArea.top, Math.min(right, chartArea.right) - Math.max(left, chartArea.left), chartArea.bottom - chartArea.top);
            ctx.restore();
        }
    };
}

function getDatalabelsOptionsForSelectedMonths(opts) {
    opts = opts || {};
    const s = startMonth != null ? startMonth : 1;
    const e = endMonth != null ? endMonth : 12;
    const low = Math.min(s, e);
    const high = Math.max(s, e);
    return {
        display: function (ctx) {
            const i = ctx.dataIndex + 1;
            return i >= low && i <= high;
        },
        anchor: opts.anchor != null ? opts.anchor : 'center',
        align: opts.align != null ? opts.align : 'bottom',
        offset: opts.offset != null ? opts.offset : 6,
        formatter: function (value, ctx) {
            if (value == null) return '';
            const label = (ctx.dataset && ctx.dataset.label) || '';
            if (label.indexOf('°C') !== -1 || label.indexOf('Day') !== -1 || label.indexOf('Night') !== -1)
                return Number(value).toFixed(1) + '°C';
            if (label.indexOf('Cloud') !== -1 || label.indexOf('%') !== -1)
                return Math.round(value) + '%';
            if (label.indexOf('Rainy') !== -1)
                return String(Math.round(value));
            return value;
        },
        color: '#1f2937',
        font: { size: 12, weight: '600' },
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: 4,
        borderColor: 'rgba(0, 0, 0, 0.08)',
        borderWidth: 1,
        borderRadius: 4
    };
}

function tempToHeatColor(temp) {
    if (temp == null || !Number.isFinite(Number(temp))) return 'rgb(200, 200, 200)';
    const t = Math.max(-10, Math.min(45, Number(temp)));
    const r = Math.round(255 * Math.min(1, (t + 10) / 27.5));
    const b = Math.round(255 * Math.max(0, 1 - (t + 10) / 27.5));
    const g = Math.round(120 + (t + 10) / 55 * 135);
    return 'rgb(' + r + ',' + Math.min(255, g) + ',' + b + ')';
}

function renderCharts(data) {
    destroyCharts();
    const labels = MONTHS;
    const highlightPlugin = getMonthHighlightPlugin();
    const opts = { responsive: true, maintainAspectRatio: true };

    const tempCombinedCtx = document.getElementById('chart-temp-combined');
    if (tempCombinedCtx && (data.temperature_day || data.temperature_night)) {
        function sanitizeTemp(arr) {
            if (!arr || !Array.isArray(arr)) return [];
            return arr.map(function (v) {
                const n = Number(v);
                return (v != null && Number.isFinite(n)) ? n : null;
            });
        }
        function hasValidPoint(arr) {
            return arr.some(function (v) { return v != null && Number.isFinite(Number(v)); });
        }
        const dayArr = sanitizeTemp(data.temperature_day);
        const nightArr = sanitizeTemp(data.temperature_night);
        const hasDay = hasValidPoint(dayArr);
        const hasNight = hasValidPoint(nightArr);
        const datasets = [];
        if (hasDay || dayArr.length) datasets.push({ label: 'Day - Max', data: dayArr.length ? dayArr : Array(12).fill(null), borderColor: '#e74c3c', backgroundColor: 'rgba(231, 76, 60, 0.1)', fill: false, spanGaps: true });
        if (hasNight || nightArr.length) datasets.push({ label: 'Night - Min', data: nightArr.length ? nightArr : Array(12).fill(null), borderColor: '#3498db', backgroundColor: 'rgba(52, 152, 219, 0.1)', fill: false, spanGaps: true });
        if (datasets.length) {
            resultsCharts.tempCombined = new Chart(tempCombinedCtx.getContext('2d'), {
                type: 'line',
                data: { labels, datasets },
                options: {
                    ...opts,
                    scales: {
                        y: {
                            suggestedMin: 0,
                            suggestedMax: 40
                        }
                    },
                    plugins: { datalabels: getDatalabelsOptionsForSelectedMonths() }
                },
                plugins: [highlightPlugin]
            });
        }
    }
    const cloudRainyCtx = document.getElementById('chart-cloud-rainy');
    if (cloudRainyCtx && (data.cloud_cover || data.rainy_days)) {
        const datasets = [];
        if (data.cloud_cover) {
            datasets.push({
                type: 'line',
                label: 'Cloud %',
                data: data.cloud_cover,
                borderColor: '#95a5a6',
                backgroundColor: 'rgba(149, 165, 166, 0.1)',
                fill: false,
                yAxisID: 'y',
                order: 1
            });
        }
        if (data.rainy_days) {
            datasets.push({
                type: 'bar',
                label: 'Rainy days',
                data: data.rainy_days,
                backgroundColor: 'rgba(155, 89, 182, 0.6)',
                borderColor: '#9b59b6',
                yAxisID: 'y1',
                order: 0
            });
        }
        resultsCharts.cloudRainy = new Chart(cloudRainyCtx.getContext('2d'), {
            type: 'bar',
            data: { labels, datasets },
            options: {
                ...opts,
                layout: {
                    padding: { bottom: 28 }
                },
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: { display: true, text: 'Cloud cover %' },
                        min: 0,
                        max: 100
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        title: { display: true, text: 'Rainy days' },
                        min: 0,
                        grid: { drawOnChartArea: false }
                    }
                },
                plugins: {
                    datalabels: {
                        ...getDatalabelsOptionsForSelectedMonths({ anchor: 'center', align: 'top', offset: 4 }),
                        display: function(context) {
                            // Only show labels for rainy days (bar chart), not for cloud cover (line chart)
                            const datasetLabel = context.dataset?.label || '';
                            if (datasetLabel.indexOf('Cloud') !== -1 || datasetLabel.indexOf('%') !== -1) {
                                return false; // Hide labels for cloud cover
                            }
                            // For rainy days, check month selection
                            const s = startMonth != null ? startMonth : 1;
                            const e = endMonth != null ? endMonth : 12;
                            const low = Math.min(s, e);
                            const high = Math.max(s, e);
                            const i = context.dataIndex + 1;
                            return i >= low && i <= high;
                        },
                        anchor: 'center',
                        align: 'top'
                    }
                }
            },
            plugins: [highlightPlugin]
        });
    }
}

// Visa glossary: requirement text (from API/CSV) -> description. Source: Passport Index.
const VISA_GLOSSARY = {
    'visa required': 'Visa required means that prior to travel, you must apply for a visa. This may require filling out forms, providing documents, and paying fees. It must be completed and approved prior to departure.',
    'visa-free': 'Visa-free means that you can travel to the destination country without the need for a travel visa. In such a case only a valid passport is required for entry and exit purposes.',
    'visa free': 'Visa-free means that you can travel to the destination country without the need for a travel visa. In such a case only a valid passport is required for entry and exit purposes.',
    'evisa': 'This eVisa (electronic visa) is a digital alternative to the conventional visa obtained by an embassy. Online submission of personal information and payment is still required, and applicants may be subject to further questionnaires and interviews. Once approved, the eVisa is required at immigration checkpoint for verification.',
    'e-visa': 'This eVisa (electronic visa) is a digital alternative to the conventional visa obtained by an embassy. Online submission of personal information and payment is still required, and applicants may be subject to further questionnaires and interviews. Once approved, the eVisa is required at immigration checkpoint for verification.',
    'voa': 'Visa-on-arrival means that you must obtain a visa in order to enter the destination country, but it can be obtained upon arrival at the designated border checkpoints and may require a fee payment.',
    'visa-on-arrival': 'Visa-on-arrival means that you must obtain a visa in order to enter the destination country, but it can be obtained upon arrival at the designated border checkpoints and may require a fee payment.',
    'free visa-on-arrival': 'Free visa-on-arrival means that you must obtain a visa in order to enter the destination country, but it can be obtained upon arrival, and is provided free of charge.',
    'tourist card': 'A tourist card is an on-site registration issued to a tourist for a stated period of time, in lieu of a passport or a visa, and is obtained upon arrival.',
    'eta': 'An Electronic Travel Authorization (eTA) is an entry requirement for visa-exempt foreign nationals. An eTA is a type of registration which is electronically linked to a traveler\'s passport.'
};

function getVisaGlossaryDescription(requirement) {
    if (!requirement || typeof requirement !== 'string') return '';
    const key = requirement.trim().toLowerCase();
    return VISA_GLOSSARY[key] || '';
}

// --- Currency Calculator
let currentCurrencyData = null;

function initCurrencyCalculator(currencyData) {
    currentCurrencyData = currencyData;
    const fromSelect = document.getElementById('currency-from-select');
    const toSelect = document.getElementById('currency-to-select');
    const amountInput = document.getElementById('currency-amount-input');
    const resultAmount = document.getElementById('currency-result-amount');
    const swapBtn = document.getElementById('currency-swap-btn');
    
    if (!fromSelect || !toSelect || !amountInput || !resultAmount) return;
    
    // Check if rates exist and are valid numbers
    const hasEurRate = currencyData.eur_rate !== null && currencyData.eur_rate !== undefined && typeof currencyData.eur_rate === 'number' && !isNaN(currencyData.eur_rate);
    const hasUsdRate = currencyData.usd_rate !== null && currencyData.usd_rate !== undefined && typeof currencyData.usd_rate === 'number' && !isNaN(currencyData.usd_rate);
    
    // Build available currencies list
    const currencies = [];
    currencies.push({ code: currencyData.iso_code, name: currencyData.currency, symbol: currencyData.symbol });
    if (hasEurRate) {
        currencies.push({ code: 'EUR', name: 'Euro', symbol: '€' });
    }
    if (hasUsdRate) {
        currencies.push({ code: 'USD', name: 'US Dollar', symbol: '$' });
    }
    
    // If no rates available, show message
    if (!hasEurRate && !hasUsdRate) {
        fromSelect.innerHTML = `<option value="${escapeHtml(currencyData.iso_code)}">${escapeHtml(currencyData.iso_code)} - ${escapeHtml(currencyData.currency)}</option>`;
        toSelect.innerHTML = '<option value="">Exchange rates not available</option>';
        amountInput.disabled = true;
        resultAmount.textContent = 'N/A';
        resultAmount.style.color = '#6b7280';
        if (swapBtn) swapBtn.disabled = true;
        return;
    }
    
    // Populate selects
    fromSelect.innerHTML = currencies.map(c => `<option value="${escapeHtml(c.code)}">${escapeHtml(c.code)} - ${escapeHtml(c.name)}</option>`).join('');
    toSelect.innerHTML = currencies.map(c => `<option value="${escapeHtml(c.code)}">${escapeHtml(c.code)} - ${escapeHtml(c.name)}</option>`).join('');
    
    // Set default: from local currency to EUR (or USD if EUR not available)
    const defaultTo = hasEurRate ? 'EUR' : 'USD';
    toSelect.value = defaultTo;
    amountInput.disabled = false;
    resultAmount.style.color = '#5b21b6';
    if (swapBtn) swapBtn.disabled = false;
    
    // Calculate function
    function calculate() {
        const amount = parseFloat(amountInput.value) || 0;
        const from = fromSelect.value;
        const to = toSelect.value;
        
        if (amount <= 0 || from === to) {
            resultAmount.textContent = '0.00';
            return;
        }
        
        let result = 0;
        const localCode = currencyData.iso_code;
        
        // Direct conversion cases
        if (from === localCode && to === 'EUR' && currencyData.eur_rate !== null && currencyData.eur_rate !== undefined) {
            // Local to EUR: multiply by rate
            result = amount * currencyData.eur_rate;
        } else if (from === localCode && to === 'USD' && currencyData.usd_rate !== null && currencyData.usd_rate !== undefined) {
            // Local to USD: multiply by rate
            result = amount * currencyData.usd_rate;
        } else if (from === 'EUR' && to === localCode && currencyData.eur_rate !== null && currencyData.eur_rate !== undefined) {
            // EUR to local: divide by rate
            result = amount / currencyData.eur_rate;
        } else if (from === 'USD' && to === localCode && currencyData.usd_rate !== null && currencyData.usd_rate !== undefined) {
            // USD to local: divide by rate
            result = amount / currencyData.usd_rate;
        } else if (from === 'EUR' && to === 'USD' && currencyData.eur_rate !== null && currencyData.usd_rate !== null) {
            // EUR to USD: EUR -> local -> USD
            const localAmount = amount / currencyData.eur_rate;
            result = localAmount * currencyData.usd_rate;
        } else if (from === 'USD' && to === 'EUR' && currencyData.eur_rate !== null && currencyData.usd_rate !== null) {
            // USD to EUR: USD -> local -> EUR
            const localAmount = amount / currencyData.usd_rate;
            result = localAmount * currencyData.eur_rate;
        }
        
        resultAmount.textContent = result > 0 ? result.toFixed(2) : '0.00';
    }
    
    // Event listeners
    amountInput.addEventListener('input', calculate);
    fromSelect.addEventListener('change', calculate);
    toSelect.addEventListener('change', calculate);
    
    if (swapBtn) {
        swapBtn.addEventListener('click', () => {
            const temp = fromSelect.value;
            fromSelect.value = toSelect.value;
            toSelect.value = temp;
            calculate();
        });
    }
    
    // Initial calculation
    amountInput.value = '1';
    calculate();
}

function escapeHtml(s) {
    if (s == null) return '';
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
}

function showSection(id, show) {
    const el = document.getElementById(id);
    if (!el) return;
    if (show) {
        el.style.display = (id === 'results-charts') ? 'grid' : 'block';
    } else {
        el.style.display = 'none';
    }
}

async function loadAndShowResults() {
    if (!selectedDestination) return;
    const dest = selectedDestination;
    const natSel = document.getElementById('nationality-select');
    const nationality = (natSel && natSel.value) ? natSel.value.trim() : '';
    const country = dest.country || '';
    const place = dest.name || '';
    
    console.log('loadAndShowResults: dest =', dest);
    console.log('loadAndShowResults: country =', country, 'place =', place);

    showSection('results-loading', true);
    showSection('results-header', false);
    showSection('results-charts', false);
    showSection('results-travel-advisory', false);
    showSection('results-plug-voltage', false);
    showSection('results-driving-side', false);
    showSection('results-visa-requirement', false);
    showSection('results-currency', false);
    showSection('results-religion', false);
    showSection('results-languages', false);
    showSection('results-heritage', false);
    showSection('results-airports', false);
    showSection('results-map-container', false);
    showSection('results-lgbtq', false);
    showSection('results-error', false);

    // Animate loading percentage 0 → 100%
    const pctEl = document.getElementById('results-loading-pct');
    let loadingPct = 0;
    const LOADING_PCT_MAX = 95;
    const loadingInterval = setInterval(() => {
        if (loadingPct < LOADING_PCT_MAX) {
            loadingPct = Math.min(loadingPct + 2, LOADING_PCT_MAX);
            if (pctEl) pctEl.textContent = loadingPct + '%';
        }
    }, 80);

    const params = new URLSearchParams({ lat: dest.lat, lon: dest.lon });
    if (country) params.set('country', country);
    if (place) params.set('place', place);
    if (nationality) params.set('nationality', nationality);

    try {
        const res = await fetch(API_BASE + '/climate?' + params.toString());
        const data = await res.json();
        clearInterval(loadingInterval);
        if (pctEl) pctEl.textContent = '100%';
        showSection('results-loading', false);

        if (data.error) {
            document.getElementById('results-error').textContent = data.error;
            showSection('results-error', true);
            return;
        }

        // Update title and show flag
        const titleEl = document.getElementById('results-title');
        const headerEl = document.getElementById('results-header');
        const flagEl = document.getElementById('results-flag');
        
        if (titleEl) {
            titleEl.textContent = 'Climate at ' + (place || country || 'your destination');
        }
        
        // Load and display flag
        loadFlags().then(() => {
            // Try to get country from various sources
            let countryForFlag = country || '';
            if (data.travel_advisory && data.travel_advisory.destination_name) {
                countryForFlag = data.travel_advisory.destination_name;
            } else if (data.visa_requirement && data.visa_requirement.destination_name) {
                countryForFlag = data.visa_requirement.destination_name;
            } else if (data.nearest_airports && data.nearest_airports.length > 0 && data.nearest_airports[0].country) {
                countryForFlag = data.nearest_airports[0].country;
            }
            
            const flagUrl = getFlagForCountry(countryForFlag);
            if (flagEl && flagUrl) {
                flagEl.src = flagUrl;
                flagEl.alt = countryForFlag;
                flagEl.style.display = 'block';
            } else if (flagEl) {
                flagEl.style.display = 'none';
            }
            
            if (headerEl) {
                headerEl.style.display = 'flex';
            }
        });
        
        renderCharts(data);
        showSection('results-charts', true);

        if (data.travel_advisory) {
            const adv = data.travel_advisory;
            const content = document.getElementById('travel-advisory-content');
            if (content) {
                const levelColors = { 1: '#22c55e', 2: '#eab308', 3: '#f97316', 4: '#dc2626' };
                const levelColor = levelColors[adv.level] || '#6b7280';
                let riskHtml = '';
                if (adv.risk_indicators && adv.risk_indicators.length) {
                    const raw = adv.risk_indicators.map(s => String(s)).join('');
                    const pills = raw.split(/\)(?=[A-Z])/).map(p => {
                        const t = p.trim();
                        return t.endsWith(')') ? t : t + ')';
                    }).filter(Boolean);
                    riskHtml = '<div class="advisory-risks"><span class="advisory-risk-list">' +
                        pills.map(p => '<span class="advisory-risk-pill">' + escapeHtml(p) + '</span>').join('') + '</span></div>';
                }
                content.innerHTML =
                    '<div class="advisory-card">' +
                    '<div class="advisory-header">' +
                    '<span class="advisory-level-badge" style="background:' + levelColor + '">Level ' + escapeHtml(String(adv.level)) + '</span>' +
                    '<span class="advisory-destination">' + escapeHtml(adv.destination_name || '') + '</span></div>' +
                    (adv.level_text ? '<p class="advisory-text">' + escapeHtml(adv.level_text) + '</p>' : '') +
                    riskHtml +
                    (adv.date_issued ? '<p class="advisory-date">Issued: ' + escapeHtml(adv.date_issued) + '</p>' : '') +
                    '<div class="advisory-links">' +
                    (adv.url ? '<a href="' + escapeHtml(adv.url) + '" target="_blank" rel="noopener">Country information</a>' : '') +
                    (adv.map_url ? '<a href="' + escapeHtml(adv.map_url) + '" target="_blank" rel="noopener">Advisory map</a>' : '') +
                    '</div></div>';
            }
            showSection('results-travel-advisory', true);
        }

        if (data.plug_voltage) {
            const pv = data.plug_voltage;
            const plugEl = document.getElementById('plug-voltage-content');
            if (plugEl) {
                const plugTypes = pv.plug_types || [];
                const socketListHtml = plugTypes.length
                    ? '<div class="plug-socket-list">' + plugTypes.map(letter =>
                        '<div class="plug-socket-item">' +
                        '<span class="plug-socket-label">Type ' + escapeHtml(letter) + '</span>' +
                        '<img class="plug-socket-img" src="sockets/' + escapeHtml(letter) + '.png" alt="Plug type ' + escapeHtml(letter) + '" loading="lazy" onerror="this.style.display=\'none\'">' +
                        '</div>'
                    ).join('') + '</div>' : '';
                plugEl.innerHTML =
                    '<p><strong>' + escapeHtml(pv.location_name || '') + '</strong></p>' +
                    socketListHtml +
                    '<p style="margin-top:0.75rem">Voltage: ' + escapeHtml(pv.voltage || '') + ', ' + escapeHtml(pv.frequency || '') + '</p>';
            }
            showSection('results-plug-voltage', true);
        }

        if (data.driving_side) {
            const ds = data.driving_side;
            const drivingSideEl = document.getElementById('driving-side-content');
            if (drivingSideEl) {
                const sideText = ds.side === 'left' ? 'Left-hand side' : 'Right-hand side';
                drivingSideEl.innerHTML =
                    '<p><strong>' + escapeHtml(ds.territory || '') + '</strong></p>' +
                    '<p style="margin-top:0.5rem">Driving side: <strong>' + escapeHtml(sideText) + '</strong></p>';
            }
            showSection('results-driving-side', true);
        }

        if (data.currency) {
            const curr = data.currency;
            const currencyEl = document.getElementById('currency-content');
            const calculatorEl = document.getElementById('currency-calculator');
            if (currencyEl) {
                let html = '<div class="currency-info-table">';
                html += '<div class="currency-info-row"><span class="currency-info-label">Territory:</span><span class="currency-info-value">' + escapeHtml(curr.territory || '') + '</span></div>';
                html += '<div class="currency-info-row"><span class="currency-info-label">Currency:</span><span class="currency-info-value">' + escapeHtml(curr.currency || '') + '</span></div>';
                html += '<div class="currency-info-row"><span class="currency-info-label">Symbol:</span><span class="currency-info-value">' + escapeHtml(curr.symbol || '') + '</span></div>';
                html += '<div class="currency-info-row"><span class="currency-info-label">ISO Code:</span><span class="currency-info-value">' + escapeHtml(curr.iso_code || '') + '</span></div>';
                
                // Check if rates exist and are valid numbers
                const hasEurRate = curr.eur_rate !== null && curr.eur_rate !== undefined && typeof curr.eur_rate === 'number' && !isNaN(curr.eur_rate);
                const hasUsdRate = curr.usd_rate !== null && curr.usd_rate !== undefined && typeof curr.usd_rate === 'number' && !isNaN(curr.usd_rate);
                
                if (hasEurRate || hasUsdRate) {
                    html += '<div class="currency-info-row currency-info-divider"></div>';
                    html += '<div class="currency-info-row"><span class="currency-info-label">Exchange Rates:</span><span class="currency-info-value"></span></div>';
                    if (hasEurRate) {
                        // Invert rate: show 1 EUR = X Currency instead of 1 Currency = X EUR
                        const invertedRate = 1 / curr.eur_rate;
                        html += '<div class="currency-info-row"><span class="currency-info-label"></span><span class="currency-info-value">1 EUR = ' + invertedRate.toFixed(4) + ' ' + escapeHtml(curr.iso_code || '') + '</span></div>';
                    }
                    if (hasUsdRate) {
                        // Invert rate: show 1 USD = X Currency instead of 1 Currency = X USD
                        const invertedRate = 1 / curr.usd_rate;
                        html += '<div class="currency-info-row"><span class="currency-info-label"></span><span class="currency-info-value">1 USD = ' + invertedRate.toFixed(4) + ' ' + escapeHtml(curr.iso_code || '') + '</span></div>';
                    }
                } else {
                    html += '<div class="currency-info-row currency-info-divider"></div>';
                    html += '<div class="currency-info-row"><span class="currency-info-label">Exchange Rates:</span><span class="currency-info-value" style="color: #6b7280; font-style: italic;">Exchange rates not available</span></div>';
                }
                html += '</div>';
                
                currencyEl.innerHTML = html;
            }
            
            // Always show calculator (it will handle missing rates gracefully)
            if (calculatorEl) {
                initCurrencyCalculator(curr);
                calculatorEl.style.display = 'block';
            }
            
            showSection('results-currency', true);
        }

        if (data.languages) {
            const lang = data.languages;
            const languagesEl = document.getElementById('languages-content');
            if (languagesEl) {
                let html = '<div class="languages-info">';
                html += '<div class="languages-country"><strong>' + escapeHtml(lang.country || '') + '</strong></div>';
                html += '<div class="languages-text">' + escapeHtml(lang.languages || '') + '</div>';
                html += '</div>';
                languagesEl.innerHTML = html;
            }
            showSection('results-languages', true);
        }

        if (data.religion) {
            const religionData = data.religion;
            const religionCtx = document.getElementById('chart-religion');
            if (religionCtx) {
                // Prepare data for pie chart - exclude country name
                const religionLabels = [];
                const religionValues = [];
                const colors = [
                    '#e74c3c', // Buddhists - red
                    '#3498db', // Christians - blue
                    '#2ecc71', // Folk Religions - green
                    '#f39c12', // Hindus - orange
                    '#9b59b6', // Jews - purple
                    '#1abc9c', // Muslims - teal
                    '#e67e22', // Other Religions - dark orange
                    '#95a5a6'  // Unaffiliated - gray
                ];
                
                const religionOrder = ['Buddhists', 'Christians', 'Folk Religions', 'Hindus', 'Jews', 'Muslims', 'Other Religions', 'Unaffiliated'];
                
                religionOrder.forEach((religion, index) => {
                    if (religionData[religion] !== undefined && religionData[religion] !== null) {
                        religionLabels.push(religion);
                        religionValues.push(religionData[religion]);
                    }
                });
                
                if (religionValues.length > 0) {
                    // Destroy existing chart if it exists
                    if (resultsCharts.religion) {
                        resultsCharts.religion.destroy();
                    }
                    
                    resultsCharts.religion = new Chart(religionCtx.getContext('2d'), {
                        type: 'pie',
                        data: {
                            labels: religionLabels,
                            datasets: [{
                                data: religionValues,
                                backgroundColor: colors.slice(0, religionValues.length),
                                borderColor: '#fff',
                                borderWidth: 2
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        padding: 15,
                                        font: {
                                            size: 12
                                        }
                                    }
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            const label = context.label || '';
                                            const value = context.parsed || 0;
                                            return label + ': ' + value.toFixed(1) + '%';
                                        }
                                    }
                                },
                                datalabels: {
                                    color: '#fff',
                                    font: {
                                        weight: 'bold',
                                        size: 12
                                    },
                                    formatter: function(value, context) {
                                        return value.toFixed(1) + '%';
                                    },
                                    anchor: 'center',
                                    align: 'center',
                                    display: function(context) {
                                        // Only show labels for slices > 5% to avoid clutter
                                        const value = context.dataset.data[context.dataIndex];
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = (value / total) * 100;
                                        return percentage > 5;
                                    }
                                }
                            }
                        },
                        plugins: [ChartDataLabels]
                    });
                    showSection('results-religion', true);
                }
            }
        }

        if (data.visa_requirement) {
            const vr = data.visa_requirement;
            const visaEl = document.getElementById('visa-requirement-results-content');
            if (visaEl) {
                const desc = getVisaGlossaryDescription(vr.requirement);
                visaEl.innerHTML =
                    '<p><strong>' + escapeHtml(vr.requirement || '') + '</strong></p>' +
                    '<p class="visa-route">From ' + escapeHtml(vr.nationality_name || '') + ' to ' + escapeHtml(vr.destination_name || '') + '</p>' +
                    (desc ? '<p class="visa-glossary-desc">' + escapeHtml(desc) + '</p>' : '');
            }
            showSection('results-visa-requirement', true);
        }

        const heritageSites = await loadAndRenderHeritageSites(dest.lat, dest.lon);

        if (data.nearest_airports && data.nearest_airports.length) {
            const tbody = document.getElementById('airports-tbody');
            if (tbody) {
                tbody.innerHTML = data.nearest_airports.map(a =>
                    '<tr><td>' + escapeHtml(a.airport_name || a.iata_code) + '</td><td>' + escapeHtml(a.city) + '</td><td>' + escapeHtml(a.country) + '</td><td>' + (a.distance_km != null ? a.distance_km + ' km' : '') + '</td></tr>'
                ).join('');
            }
            showSection('results-airports', true);
        }

        if (typeof L !== 'undefined' && (data.nearest_airports?.length || heritageSites?.length)) {
            showSection('results-map-container', true);
            renderResultsMap(dest.lat, dest.lon, data.nearest_airports || [], heritageSites || []);
        }

        // Load and display LGBTQ+ travel information (same pattern as plug voltage)
        // Extract country from API response (same as plug voltage uses)
        // Start with the original country from Nominatim
        let lgbtqCountry = country || '';
        console.log('LGBTQ+ country extraction - initial country from Nominatim:', lgbtqCountry);
        
        // Try to get country from API responses (prioritize these as they're more reliable)
        if (data.nearest_airports && data.nearest_airports.length > 0 && data.nearest_airports[0].country) {
            lgbtqCountry = data.nearest_airports[0].country;
            console.log('LGBTQ+ country from nearest_airports:', lgbtqCountry);
        } else if (data.travel_advisory && data.travel_advisory.destination_name) {
            lgbtqCountry = data.travel_advisory.destination_name;
            console.log('LGBTQ+ country from travel_advisory:', lgbtqCountry);
        } else if (data.visa_requirement && data.visa_requirement.destination_name) {
            lgbtqCountry = data.visa_requirement.destination_name;
            console.log('LGBTQ+ country from visa_requirement:', lgbtqCountry);
        } else if (data.plug_voltage && data.plug_voltage.location_name) {
            // Extract country from location_name if it's in format "City, Country"
            const locationParts = data.plug_voltage.location_name.split(',').map(s => s.trim());
            if (locationParts.length > 1) {
                lgbtqCountry = locationParts[locationParts.length - 1];
                console.log('LGBTQ+ country from plug_voltage location_name:', lgbtqCountry);
            }
        }
        
        // Fallback: extract country from place name (e.g., "Barcelona, Catalonia, Spain" -> "Spain")
        if (!lgbtqCountry && place) {
            const placeParts = place.split(',').map(s => s.trim());
            if (placeParts.length > 1) {
                // Try last part (usually country)
                lgbtqCountry = placeParts[placeParts.length - 1];
                console.log('LGBTQ+ country extracted from place (last part):', lgbtqCountry);
                // If that doesn't work, try second-to-last (sometimes country is there)
                if (!lgbtqCountry && placeParts.length > 2) {
                    lgbtqCountry = placeParts[placeParts.length - 2];
                    console.log('LGBTQ+ country extracted from place (second-to-last):', lgbtqCountry);
                }
            }
        }
        
        console.log('LGBTQ+ matching - final country:', lgbtqCountry, 'place:', place);
        console.log('LGBTQ+ cache before load:', lgbtqDataCache ? Object.keys(lgbtqDataCache).length + ' entries' : 'null');
        
        loadLgbtqTable().then((loadedData) => {
            console.log('LGBTQ+ data loaded, cache has:', lgbtqDataCache ? Object.keys(lgbtqDataCache).length + ' entries' : 'null');
            console.log('Sample keys:', lgbtqDataCache ? Object.keys(lgbtqDataCache).slice(0, 10) : 'none');
            console.log('Checking for "latvia" in cache:', 'latvia' in lgbtqDataCache);
            if ('latvia' in lgbtqDataCache) {
                console.log('Latvia data:', lgbtqDataCache['latvia']);
            }
            
            // Pass both country and place - getLgbtqInfo will try place parts first, then country
            // This ensures cities like "Riga, Latvia" will match "Latvia" from place parts
            const lgbtqInfo = getLgbtqInfo(lgbtqCountry, place);
            console.log('LGBTQ+ lookup result:', lgbtqInfo ? 'FOUND' : 'NOT FOUND', 'for country:', lgbtqCountry, 'place:', place);
            if (lgbtqInfo) {
                console.log('LGBTQ+ matched location:', lgbtqInfo.location_name);
            }
            if (lgbtqInfo) {
                const container = document.getElementById('lgbtq-content');
                if (container) {
                    const formatValue = (val) => {
                        if (!val || val === 'No' || val === '') return '<span class="lgbtq-no">No</span>';
                        if (val === 'Yes') return '<span class="lgbtq-yes">Yes</span>';
                        if (val === 'Legal') return '<span class="lgbtq-yes">Legal</span>';
                        if (val.startsWith('Yes')) return '<span class="lgbtq-yes">' + escapeHtml(val) + '</span>';
                        if (val.startsWith('No')) return '<span class="lgbtq-no">' + escapeHtml(val) + '</span>';
                        if (val.toLowerCase().includes('legal')) return '<span class="lgbtq-yes">' + escapeHtml(val) + '</span>';
                        return escapeHtml(val);
                    };
                    
                    container.innerHTML =
                        '<div class="lgbtq-info-card">' +
                        '<p class="lgbtq-location"><strong>' + escapeHtml(lgbtqInfo.location_name) + '</strong>' +
                        (lgbtqInfo.region ? ' <span class="lgbtq-region">(' + escapeHtml(lgbtqInfo.region) + ')</span>' : '') +
                        '</p>' +
                        '<div class="lgbtq-grid">' +
                        '<div class="lgbtq-item"><span class="lgbtq-label">Same-sex sexual activity:</span> ' + formatValue(lgbtqInfo.sameSexActivity) + '</div>' +
                        '<div class="lgbtq-item"><span class="lgbtq-label">Anti-discrimination (sexual orientation):</span> ' + formatValue(lgbtqInfo.antiDiscrimination) + '</div>' +
                        '<div class="lgbtq-item"><span class="lgbtq-label">Gender identity/expression laws:</span> ' + formatValue(lgbtqInfo.genderIdentity) + '</div>' +
                        '</div></div>';
                    showSection('results-lgbtq', true);
                }
            } else {
                showSection('results-lgbtq', false);
            }
        });
    } catch (e) {
        clearInterval(loadingInterval);
        showSection('results-loading', false);
        document.getElementById('results-error').textContent = 'Failed to load climate data. Is the API running at ' + API_BASE + '?';
        showSection('results-error', true);
    }
}

// --- UNESCO World Heritage (via API, 400 km)
const HERITAGE_RADIUS_KM = 400;

function renderHeritageEmptyMessage(tbody) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="5" class="heritage-empty">No World Heritage sites in 400 km radius of your destination.</td>';
    tbody.appendChild(tr);
}

/** Load and render heritage sites table; returns the sites array for the map (or [] on error/empty). */
async function loadAndRenderHeritageSites(destLat, destLon) {
    const section = document.getElementById('results-heritage');
    const tbody = document.getElementById('heritage-tbody');
    if (!section || !tbody) return [];
    tbody.innerHTML = '';
    section.style.display = 'block';
    const lat = Number(destLat);
    const lon = Number(destLon);
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
        renderHeritageEmptyMessage(tbody);
        return [];
    }
    try {
        const res = await fetch(API_BASE + '/heritage?lat=' + encodeURIComponent(lat) + '&lon=' + encodeURIComponent(lon) + '&radius_km=' + HERITAGE_RADIUS_KM);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to load heritage sites');
        const sites = data.sites || [];
        if (sites.length === 0) {
            renderHeritageEmptyMessage(tbody);
            return [];
        }
        const DESC_TRUNCATE_LEN = 200;
        sites.forEach(function (site) {
            const tr = document.createElement('tr');
            tr.innerHTML =
                '<td>' + escapeHtml(site.name_en || '') + '</td>' +
                '<td>' + escapeHtml(site.date_inscribed || '') + '</td>' +
                '<td>' + escapeHtml(site.category || '') + '</td>' +
                '<td class="heritage-desc-cell"></td>' +
                '<td class="heritage-distance">' + escapeHtml(site.distance_km != null ? Number(site.distance_km).toFixed(1) + ' km' : '') + '</td>';
            const fullDesc = site.short_desc || '';
            const shortDesc = fullDesc.length <= DESC_TRUNCATE_LEN ? fullDesc : fullDesc.slice(0, DESC_TRUNCATE_LEN) + '…';
            const descTd = tr.querySelector('.heritage-desc-cell');
            const wrap = document.createElement('div');
            wrap.className = 'heritage-desc-wrap';
            const textSpan = document.createElement('span');
            textSpan.className = 'heritage-desc-text';
            textSpan.textContent = shortDesc;
            wrap.appendChild(textSpan);
            if (fullDesc.length > DESC_TRUNCATE_LEN) {
                const toggleBtn = document.createElement('button');
                toggleBtn.type = 'button';
                toggleBtn.className = 'heritage-desc-toggle';
                toggleBtn.textContent = 'Read more';
                toggleBtn.addEventListener('click', function () {
                    if (toggleBtn.classList.contains('is-expanded')) {
                        textSpan.textContent = shortDesc;
                        toggleBtn.textContent = 'Read more';
                        toggleBtn.classList.remove('is-expanded');
                    } else {
                        textSpan.textContent = fullDesc;
                        toggleBtn.textContent = 'Show less';
                        toggleBtn.classList.add('is-expanded');
                    }
                });
                wrap.appendChild(toggleBtn);
            }
            descTd.appendChild(wrap);
            tbody.appendChild(tr);
        });
        return sites;
    } catch (e) {
        console.warn('Heritage sites:', e);
        renderHeritageEmptyMessage(tbody);
        return [];
    }
}

function renderResultsMap(destLat, destLon, nearestAirports, heritageSites) {
    if (resultsMap) {
        resultsMap.remove();
        resultsMap = null;
    }
    const container = document.getElementById('results-map');
    if (!container) return;
    const hasAirports = nearestAirports && nearestAirports.length && nearestAirports.some(a => a.latitude != null && a.longitude != null);
    const hasHeritage = heritageSites && heritageSites.length;
    if (!hasAirports && !hasHeritage) return;

    resultsMap = L.map('results-map', { zoomControl: true }).setView([destLat, destLon], 10);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(resultsMap);

    const destIcon = L.divIcon({ className: 'dest-marker', html: '<span aria-hidden="true">●</span>', iconSize: [28, 28], iconAnchor: [14, 14] });
    L.marker([destLat, destLon], { icon: destIcon }).addTo(resultsMap);

    const bounds = L.latLngBounds([[destLat, destLon]]);

    const airportIcon = L.divIcon({ className: 'airport-marker', html: '<span aria-hidden="true">✈</span>', iconSize: [56, 56], iconAnchor: [28, 28] });
    if (nearestAirports) {
        nearestAirports.forEach(a => {
            if (a.latitude == null || a.longitude == null) return;
            const lat = Number(a.latitude);
            const lon = Number(a.longitude);
            L.marker([lat, lon], { icon: airportIcon }).addTo(resultsMap).bindPopup(escapeHtml(a.airport_name || a.iata_code));
            bounds.extend([lat, lon]);
        });
    }

    const heritageIcon = L.divIcon({ className: 'heritage-marker', html: '<span aria-hidden="true">🏛</span>', iconSize: [32, 32], iconAnchor: [16, 16] });
    if (heritageSites) {
        heritageSites.forEach(s => {
            const lat = Number(s.lat);
            const lon = Number(s.lon);
            if (Number.isNaN(lat) || Number.isNaN(lon)) return;
            const name = s.name_en || 'UNESCO site';
            const dist = s.distance_km != null ? ' (' + Number(s.distance_km).toFixed(1) + ' km)' : '';
            L.marker([lat, lon], { icon: heritageIcon }).addTo(resultsMap).bindPopup(escapeHtml(name) + dist);
            bounds.extend([lat, lon]);
        });
    }

    resultsMap.fitBounds(bounds, { padding: [30, 30] });

    setTimeout(function () {
        if (resultsMap) {
            resultsMap.invalidateSize();
            resultsMap.fitBounds(bounds, { padding: [30, 30] });
        }
    }, 100);
}

// --- Event bindings
function bindEvents() {
    const btnKnowDest = document.getElementById('btn-know-destination');
    if (btnKnowDest) {
        btnKnowDest.addEventListener('click', async () => {
            showScreen('destination-selection-screen');
            // Small delay to ensure screen is visible
            await new Promise(resolve => setTimeout(resolve, 50));
            // Ensure dropdown is visible after screen is shown
            await loadNationalities();
            // Double-check dropdown is visible and clickable
            const customDropdown = document.getElementById('nationality-custom-dropdown');
            if (customDropdown) {
                customDropdown.style.display = 'block';
                customDropdown.style.visibility = 'visible';
                customDropdown.style.opacity = '1';
                customDropdown.style.pointerEvents = 'auto';
            }
        });
    }
    
    const btnExplore = document.getElementById('btn-explore-world');
    if (btnExplore) {
        btnExplore.addEventListener('click', () => {
            showScreen('map-screen');
            setTimeout(initExploreMap, 50);
        });
    }
    const btnVisaGlossary = document.getElementById('btn-visa-glossary');
    if (btnVisaGlossary) {
        btnVisaGlossary.addEventListener('click', async () => {
            showScreen('visa-glossary-screen');
            if (nationalitiesList.length === 0) await loadNationalities();
            if (!window.visaGlossaryDropdownInited) {
                initVisaGlossaryNationalityDropdown();
                window.visaGlossaryDropdownInited = true;
            }
        });
    }
    
    const btnBackVisaGlossary = document.getElementById('btn-back-visa-glossary');
    if (btnBackVisaGlossary) {
        btnBackVisaGlossary.addEventListener('click', () => showScreen('loading-screen'));
    }

    document.getElementById('btn-back-destination-selection')?.addEventListener('click', () => showScreen('loading-screen'));

    const destScreen = document.getElementById('destination-selection-screen');
    let continueToDatesBtn = document.getElementById('btn-continue-to-dates');
    if (!continueToDatesBtn && destScreen) {
        continueToDatesBtn = document.createElement('button');
        continueToDatesBtn.id = 'btn-continue-to-dates';
        continueToDatesBtn.className = 'btn btn-primary';
        continueToDatesBtn.textContent = 'Continue to date selection';
        continueToDatesBtn.style.marginTop = '1rem';
        continueToDatesBtn.style.display = 'none';
        continueToDatesBtn.addEventListener('click', () => {
            if (selectedDestination) showScreen('destination-screen');
        });
        const container = destScreen.querySelector('.container');
        if (container) container.appendChild(continueToDatesBtn);
    }
    const searchInput = document.getElementById('destination-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            clearTimeout(autocompleteTimer);
            const q = searchInput.value.trim();
            if (q.length < 2) {
                showAutocomplete([]);
                return;
            }
            autocompleteTimer = setTimeout(async () => {
                const results = await searchPlaces(q);
                showAutocomplete(results);
            }, autocompleteDebounceMs);
        });
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                document.getElementById('autocomplete-results').classList.remove('show');
            }, 200);
        });
    }
    document.getElementById('nationality-select')?.addEventListener('change', tryAutoAdvanceFromDestination);

    document.getElementById('btn-back-destination')?.addEventListener('click', () => showScreen('destination-selection-screen'));

    let btnContinueDates = document.getElementById('btn-continue-dates');
    if (!btnContinueDates) {
        const dateButtons = document.querySelector('.date-buttons');
        if (dateButtons) {
            btnContinueDates = document.createElement('button');
            btnContinueDates.id = 'btn-continue-dates';
            btnContinueDates.className = 'btn btn-primary';
            btnContinueDates.textContent = 'Continue with Selected Dates';
            btnContinueDates.addEventListener('click', () => {
                if (!selectedDestination) return;
                if (startMonth == null || endMonth == null) return;
                showScreen('results-screen');
                loadAndShowResults();
            });
            dateButtons.appendChild(btnContinueDates);
        }
    } else {
        btnContinueDates.addEventListener('click', () => {
            if (!selectedDestination) return;
            if (startMonth == null || endMonth == null) return;
            showScreen('results-screen');
            loadAndShowResults();
        });
    }

    document.getElementById('btn-best-time')?.addEventListener('click', () => {
        startMonth = 1;
        endMonth = 12;
        updateMonthSelection();
        updateDatesInfo();
        tryAutoAdvanceFromDates();
    });

    document.getElementById('btn-back-results')?.addEventListener('click', () => showScreen('destination-screen'));
    document.getElementById('btn-back-map')?.addEventListener('click', () => showScreen('loading-screen'));
    const btnScratchMap = document.getElementById('btn-scratch-map');
    if (btnScratchMap) {
        btnScratchMap.addEventListener('click', () => {
            showScreen('scratch-map-screen');
            // Delay init slightly so the screen is fully laid out (prevents Leaflet grey tiles).
            setTimeout(initScratchMap, 50);
        });
    }
    
    const btnBackScratchMap = document.getElementById('btn-back-scratch-map');
    if (btnBackScratchMap) {
        btnBackScratchMap.addEventListener('click', () => showScreen('loading-screen'));
    }
    
    const btnLgbtq = document.getElementById('btn-lgbtq-table');
    if (btnLgbtq) {
        btnLgbtq.addEventListener('click', () => {
            showScreen('lgbtq-table-screen');
            loadAndRenderLgbtqTable();
        });
    }
    
    const btnBackLgbtq = document.getElementById('btn-back-lgbtq-table');
    if (btnBackLgbtq) {
        btnBackLgbtq.addEventListener('click', () => showScreen('loading-screen'));
    }
    
    // Scratch map mode toggle buttons
    document.getElementById('btn-mode-visited')?.addEventListener('click', () => {
        scratchMapMode = 'visited';
        document.getElementById('btn-mode-visited').classList.add('active');
        document.getElementById('btn-mode-want-to-visit').classList.remove('active');
    });

    document.getElementById('btn-mode-want-to-visit')?.addEventListener('click', () => {
        scratchMapMode = 'want-to-visit';
        document.getElementById('btn-mode-want-to-visit').classList.add('active');
        document.getElementById('btn-mode-visited').classList.remove('active');
    });

    // Lists are always visible now, no need for show/hide buttons

    document.getElementById('selected-destination')?.addEventListener('click', () => {
        selectedDestination = null;
        document.getElementById('selected-destination').textContent = '';
        document.getElementById('selected-destination').classList.remove('show');
        const continueBtn = document.getElementById('btn-continue-to-dates');
        if (continueBtn) continueBtn.style.display = 'none';
    });
}

// --- Scratch Map functionality
let scratchMapMode = 'visited'; // 'visited' or 'want-to-visit'
let visitedCountries = new Set();
let wantToVisitCountries = new Set();
let countryCodeToName = {}; // Map country codes to names
let worldMap = null;

// Scratch map colors
const SCRATCH_DEFAULT_FILL = '#e0e0e0';
const SCRATCH_VISITED_FILL = '#fbbf24'; // golden
const SCRATCH_WANT_FILL = '#0d9488'; // tiffany blue

// ISO3 -> continent mapping (lazy-loaded)
let iso3ToContinent = {};
let iso3ToContinentLoadPromise = null;

function getCountryCodeFromFeature(feature) {
    if (!feature) return '';
    // Both GeoJSON sources used in initScratchMap store ISO3 in `feature.id`
    return (feature.id || feature.properties?.ISO_A3 || feature.properties?.ISO_A2 || feature.properties?.ISO3 || '').toString().trim();
}

function getCountryNameFromFeature(feature) {
    if (!feature) return 'Unknown';
    return (feature.properties?.name || feature.properties?.NAME || feature.properties?.ADMIN || feature.properties?.NAME_LONG || 'Unknown').toString();
}

// Display name for map tooltips: show "United Kingdom" / "United States" instead of England / USA
function getDisplayNameForMap(feature) {
    const name = getCountryNameFromFeature(feature);
    const g = normalizeForMatch(name);
    if (g === 'england' || g === 'scotland' || g === 'wales' || g === 'northern ireland' || g === 'united kingdom' || g === 'uk' || g === 'great britain') return 'United Kingdom';
    if (g === 'united states of america' || g === 'usa' || g === 'us') return 'United States';
    return name;
}

// --- Explore the World map (layers: driving side, travel advisory, airports, heritage)
let exploreMap = null;
let exploreMapLayersData = null;
let exploreMapGeoJsonLayer = null;
let exploreMapOverlayLayers = [];
const EXPLORE_GEOJSON_URL = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';

function normalizeForMatch(s) {
    if (typeof s !== 'string') return '';
    return s.toLowerCase().trim().replace(/\s+/g, ' ');
}

function findMatch(geoName, dataList, nameKey) {
    const g = normalizeForMatch(geoName);
    if (!g) return null;
    for (const item of dataList) {
        const n = normalizeForMatch(item[nameKey] || '');
        if (!n) continue;
        if (g === n) return item;
        if (g.includes(n) || n.includes(g)) return item;
    }
    return null;
}

// Driving side: map GeoJSON country names to driving_side_cleaned territory names
const DRIVING_GEO_ALIASES = {
    'united states': 'United States of America',
    'united states of america': 'United States of America',
    'usa': 'United States of America',
    'us': 'United States of America'
};

// Travel advisory: map GeoJSON country names to advisory list names (exact match only to avoid e.g. Niger vs Nigeria)
const ADVISORY_GEO_ALIASES = {
    'north korea': "North Korea (Democratic People's Republic of Korea)",
    "democratic people's republic of korea": "North Korea (Democratic People's Republic of Korea)",
    'dprk': "North Korea (Democratic People's Republic of Korea)",
    'korea, north': "North Korea (Democratic People's Republic of Korea)",
    'east timor': 'Timor-Leste',
    'timor-leste': 'Timor-Leste',
    'gambia': 'The Gambia',
    'the gambia': 'The Gambia',
    'guinea bissau': 'Guinea-Bissau',
    'guinea bisseau': 'Guinea-Bissau',
    'guinea-bissau': 'Guinea-Bissau',
    'cape verde': 'Cabo Verde',
    'cabo verde': 'Cabo Verde',
    'cape verde islands': 'Cabo Verde',
    'republic of cabo verde': 'Cabo Verde',
    'somaliland': 'Somalia',
    'bahamas': 'The Bahamas',
    'the bahamas': 'The Bahamas',
    'puerto rico': 'Puerto Rico',
    'french guiana': 'French Guiana',
    'guyane': 'French Guiana',
    'st. lucia': 'Saint Lucia',
    'st lucia': 'Saint Lucia',
    'saint lucia': 'Saint Lucia',
    'st. vincent and the grenadines': 'Saint Vincent and the Grenadines',
    'st vincent and the grenadines': 'Saint Vincent and the Grenadines',
    'saint vincent and the grenadines': 'Saint Vincent and the Grenadines',
    'st. vincent': 'Saint Vincent and the Grenadines',
    'st vincent': 'Saint Vincent and the Grenadines',
    'st. kitts and nevis': 'Saint Kitts and Nevis',
    'st kitts and nevis': 'Saint Kitts and Nevis',
    'saint kitts and nevis': 'Saint Kitts and Nevis',
    'st. kitts': 'Saint Kitts and Nevis',
    'st kitts': 'Saint Kitts and Nevis',
    'antigua and barbuda': 'Antigua and Barbuda',
    'antigua': 'Antigua and Barbuda',
    'barbuda': 'Antigua and Barbuda',
    'curacao': 'Curaçao',
    'curaçao': 'Curaçao',
    'sint maarten': 'Sint Maarten',
    'saint martin': 'Saint Martin (French West Indies)',
    'st. martin': 'Saint Martin (French West Indies)',
    'british virgin islands': 'British Virgin Islands',
    'virgin islands': 'British Virgin Islands',
    'u.s. virgin islands': 'U.S. Virgin Islands',
    'us virgin islands': 'U.S. Virgin Islands',
    'turks and caicos': 'Turks and Caicos Islands',
    'turks and caicos islands': 'Turks and Caicos Islands',
    'cayman islands': 'Cayman Islands',
    'ivory coast': "Côte d'Ivoire (Ivory-Coast)",
    "côte d'ivoire": "Côte d'Ivoire (Ivory-Coast)",
    "cote d'ivoire": "Côte d'Ivoire (Ivory-Coast)",
    'england': 'United Kingdom of Great Britain and Northern Ireland',
    'united kingdom': 'United Kingdom of Great Britain and Northern Ireland',
    'uk': 'United Kingdom of Great Britain and Northern Ireland',
    'great britain': 'United Kingdom of Great Britain and Northern Ireland',
    'scotland': 'United Kingdom of Great Britain and Northern Ireland',
    'wales': 'United Kingdom of Great Britain and Northern Ireland',
    'northern ireland': 'United Kingdom of Great Britain and Northern Ireland',
    'western sahara': 'Morocco',
    'czech republic': 'Czechia',
    'united republic of tanzania': 'Tanzania',
    'tanzania': 'Tanzania',
    'myanmar': 'Burma (Myanmar)',
    'burma': 'Burma (Myanmar)',
    'macedonia': 'Republic of North Macedonia',
    'north macedonia': 'Republic of North Macedonia',
    'republic of serbia': 'Serbia',
    'serbia': 'Serbia',
    'democratic republic of the congo': 'Democratic Republic of the Congo (D.R.C.)',
    'democratic republic of congo': 'Democratic Republic of the Congo (D.R.C.)',
    'drc': 'Democratic Republic of the Congo (D.R.C.)'
};

// LGBTQ+ map: map GeoJSON country names to LGBTQ location names (e.g. USA -> United States)
const LGBTQ_GEO_ALIASES = {
    'united states of america': 'United States',
    'usa': 'United States',
    'us': 'United States',
    'united kingdom of great britain and northern ireland': 'United Kingdom',
    'united kingdom': 'United Kingdom',
    'uk': 'United Kingdom',
    'great britain': 'United Kingdom',
    'england': 'United Kingdom',
    'scotland': 'United Kingdom',
    'wales': 'United Kingdom',
    'northern ireland': 'United Kingdom',
    'romania': 'Romania',
    'românia': 'Romania',
    'rom\u00E2nia': 'Romania'  // România (â = U+00E2) as on the map
};

function stripAccents(s) {
    if (typeof s !== 'string') return '';
    return s.normalize('NFD').replace(/\p{M}/gu, '');
}

function findLgbtqMatch(geoName, lgbtqList) {
    const g = normalizeForMatch(geoName);
    if (!g) return null;
    const gBase = stripAccents(g);
    // Romania is Legal in CSV; map uses "România" (with â) – ensure it matches
    if (gBase === 'romania' || g === 'romania' || g === 'rom\u00E2nia' || gBase.includes('romania')) {
        const m = findMatch('Romania', lgbtqList, 'location');
        if (m) return m;
    }
    const searchName = LGBTQ_GEO_ALIASES[g] || LGBTQ_GEO_ALIASES[gBase] || geoName.trim();
    return findMatch(searchName, lgbtqList, 'location');
}

function findAdvisoryMatch(geoName, advisories) {
    const g = normalizeForMatch(geoName);
    if (!g) return null;
    const searchName = ADVISORY_GEO_ALIASES[g] || geoName.trim();
    const searchNorm = normalizeForMatch(searchName);
    if (searchNorm === 'united states' || searchNorm === 'usa' || searchNorm === 'us') return null;
    for (let i = 0; i < advisories.length; i++) {
        const a = advisories[i];
        const n = normalizeForMatch(a.name || '');
        if (!n) continue;
        if (n === searchNorm) return a;
    }
    return null;
}

// Visa glossary map: requirement -> color (for choropleth)
const VISA_REQUIREMENT_COLORS = {
    'visa free': '#22c55e',
    'visa required': '#ef4444',
    'visa on arrival': '#2563eb',
    'voa': '#2563eb',
    'e-visa': '#f97316',
    'evisa': '#f97316',
    'eta': '#eab308',
    'n/a': '#64748b'
};

// Map GeoJSON country names (normalized) to CSV Destination strings used in passports_visas_cleaned.csv
const VISA_GEO_ALIASES = {
    'united states of america': 'United States',
    'usa': 'United States',
    'us': 'United States',
    'united states': 'United States',
    'united kingdom of great britain and northern ireland': 'United Kingdom',
    'united kingdom': 'United Kingdom',
    'uk': 'United Kingdom',
    'great britain': 'United Kingdom',
    'england': 'United Kingdom',
    'scotland': 'United Kingdom',
    'wales': 'United Kingdom',
    'northern ireland': 'United Kingdom',
    'russia': 'Russian Federation',
    'russian federation': 'Russian Federation',
    'democratic republic of the congo': 'Congo (Dem. Rep.)',
    'congo (dem. rep.)': 'Congo (Dem. Rep.)',
    'drc': 'Congo (Dem. Rep.)',
    'republic of the congo': 'Congo (Rep.)',
    'congo (rep.)': 'Congo (Rep.)',
    'congo': 'Congo (Rep.)',
    'burma': 'Myanmar',
    'myanmar': 'Myanmar'
};

function getVisaRequirementForGeoName(geoName, reqMap) {
    if (!geoName || !reqMap) return null;
    const g = normalizeForMatch(geoName);
    if (!g) return null;
    const searchName = VISA_GEO_ALIASES[g] || ADVISORY_GEO_ALIASES[g] || geoName.trim();
    const key = normalizeForMatch(searchName);
    return reqMap[key] || null;
}

let visaGlossaryMap = null;
let visaGlossaryGeoJsonLayer = null;

function initVisaGlossaryNationalityDropdown() {
    const sel = document.getElementById('visa-glossary-nationality-select');
    const customDropdown = document.getElementById('visa-glossary-nationality-dropdown');
    const customList = document.getElementById('visa-glossary-nationality-list');
    const searchInput = document.getElementById('visa-glossary-nationality-search');
    const customSelected = customDropdown?.querySelector('.nationality-selected-text');
    if (!sel || !customDropdown || !customList) return;

    function renderGlossaryNationalityList(filter) {
        customList.innerHTML = '';
        const filterLower = (filter || '').toLowerCase().trim();
        const filtered = filterLower
            ? nationalitiesList.filter(n => n.toLowerCase().includes(filterLower))
            : nationalitiesList;
        if (filtered.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'nationality-dropdown-item nationality-dropdown-empty';
            empty.textContent = 'No countries found';
            customList.appendChild(empty);
            return;
        }
        filtered.forEach(n => {
            const flagUrl = getFlagForCountry(n);
            const item = document.createElement('div');
            item.className = 'nationality-dropdown-item';
            item.dataset.value = n;
            item.tabIndex = 0;
            item.setAttribute('role', 'option');
            if (flagUrl) {
                item.innerHTML = `<img src="${escapeHtml(flagUrl)}" alt="" class="flag-icon"> <span>${escapeHtml(n)}</span>`;
            } else {
                item.innerHTML = `<span>${escapeHtml(n)}</span>`;
            }
            item.addEventListener('click', () => {
                sel.value = n;
                sel.dispatchEvent(new Event('change'));
                if (flagUrl && customSelected) {
                    customSelected.innerHTML = `<img src="${escapeHtml(flagUrl)}" alt="" class="flag-icon"> ${escapeHtml(n)}`;
                } else if (customSelected) {
                    customSelected.textContent = n;
                }
                if (searchInput) searchInput.value = '';
                customDropdown.classList.remove('open');
                renderGlossaryNationalityList('');
            });
            customList.appendChild(item);
        });
    }

    sel.innerHTML = '<option value="">Select your nationality</option>';
    nationalitiesList.forEach(n => {
        const opt = document.createElement('option');
        opt.value = n;
        opt.textContent = n;
        sel.appendChild(opt);
    });
    renderGlossaryNationalityList('');

    if (searchInput) {
        searchInput.addEventListener('input', e => renderGlossaryNationalityList(e.target.value));
        searchInput.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const first = customList.querySelector('.nationality-dropdown-item:not(.nationality-dropdown-empty)');
                if (first) first.focus();
            }
        });
    }
    
    // Manual selection only - auto-detection removed
    
    customList.addEventListener('keydown', e => {
        const items = Array.from(customList.querySelectorAll('.nationality-dropdown-item:not(.nationality-dropdown-empty)'));
        const idx = items.findIndex(item => item === document.activeElement);
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            items[idx < items.length - 1 ? idx + 1 : 0]?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            items[idx > 0 ? idx - 1 : items.length - 1]?.focus();
        } else if (e.key === 'Enter' && document.activeElement.classList.contains('nationality-dropdown-item')) {
            e.preventDefault();
            document.activeElement.click();
        } else if (e.key === 'Escape') {
            customDropdown.classList.remove('open');
            if (searchInput) searchInput.value = '';
            renderGlossaryNationalityList('');
        }
    });
    const selectedEl = customDropdown.querySelector('.nationality-dropdown-selected');
    if (selectedEl) {
        selectedEl.addEventListener('click', e => {
            e.stopPropagation();
            customDropdown.classList.toggle('open');
            if (customDropdown.classList.contains('open') && searchInput) setTimeout(() => searchInput.focus(), 50);
        });
    }
    document.addEventListener('click', e => {
        if (!customDropdown.contains(e.target)) {
            customDropdown.classList.remove('open');
            if (searchInput) { searchInput.value = ''; renderGlossaryNationalityList(''); }
        }
    });

    sel.addEventListener('change', async () => {
        const nat = sel.value;
        if (!nat) {
            document.getElementById('visa-glossary-map-legend').style.display = 'none';
            if (visaGlossaryGeoJsonLayer) {
                visaGlossaryGeoJsonLayer.setStyle({ fillColor: '#94a3b8', fillOpacity: 0.6, color: '#334155', weight: 0.8 });
            }
            return;
        }
        try {
            const res = await fetch(API_BASE + '/visa-by-nationality?nationality=' + encodeURIComponent(nat));
            const data = await res.json();
            if (data.destinations && data.destinations.length) {
                renderVisaGlossaryMap(data.destinations);
            } else {
                renderVisaGlossaryMap([]);
            }
        } catch (err) {
            console.error('Visa by nationality:', err);
            renderVisaGlossaryMap([]);
        }
    });
}

async function renderVisaGlossaryMap(destinations) {
    const container = document.getElementById('visa-glossary-map');
    const legendEl = document.getElementById('visa-glossary-map-legend');
    if (!container) return;

    const reqMap = {};
    destinations.forEach(d => {
        const key = normalizeForMatch(d.destination);
        if (key) reqMap[key] = (d.requirement || '').trim();
    });

    if (!visaGlossaryMap) {
        visaGlossaryMap = L.map(container, { center: [20, 0], zoom: 2, zoomControl: true });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(visaGlossaryMap);
    }

    const requirementToColor = (req) => {
        if (!req) return '#94a3b8';
        const r = (req || '').toLowerCase().trim();
        return VISA_REQUIREMENT_COLORS[r] || VISA_REQUIREMENT_COLORS[r.replace(/\s+/g, ' ')] || '#94a3b8';
    };

    const usedRequirements = new Set();
    destinations.forEach(d => { if (d.requirement) usedRequirements.add(d.requirement); });

    if (!visaGlossaryGeoJsonLayer) {
        fetch(EXPLORE_GEOJSON_URL)
            .then(r => r.json())
            .then(geojson => {
                visaGlossaryGeoJsonLayer = L.geoJSON(geojson, {
                    style: feature => {
                        const req = getVisaRequirementForGeoName(getCountryNameFromFeature(feature), reqMap);
                        const fillColor = requirementToColor(req);
                        return { fillColor, fillOpacity: 0.75, color: '#334155', weight: 0.8 };
                    },
                    onEachFeature: (feature, layer) => {
                        const name = getDisplayNameForMap(feature);
                        const req = getVisaRequirementForGeoName(getCountryNameFromFeature(feature), reqMap);
                        const label = name && name !== 'Unknown' ? (req ? name + ' — ' + req : name) : (req ? req : '');
                        if (label) layer.bindTooltip(label, { permanent: false, direction: 'top' });
                    }
                });
                visaGlossaryGeoJsonLayer.addTo(visaGlossaryMap);
                if (legendEl) {
                    const order = ['Visa Free', 'VOA', 'E-VISA', 'ETA', 'Visa Required', 'N/A'];
                    legendEl.innerHTML = order.filter(r => usedRequirements.has(r)).map(r =>
                        `<span><span style="background:${requirementToColor(r)};width:12px;height:12px;display:inline-block;border-radius:2px;"></span> ${escapeHtml(r)}</span>`
                    ).join('');
                    legendEl.style.display = 'flex';
                }
            })
            .catch(e => console.error('Visa glossary GeoJSON:', e));
    } else {
        visaGlossaryGeoJsonLayer.setStyle(feature => {
            const req = getVisaRequirementForGeoName(getCountryNameFromFeature(feature), reqMap);
            const fillColor = requirementToColor(req);
            return { fillColor, fillOpacity: 0.75, color: '#334155', weight: 0.8 };
        });
        visaGlossaryGeoJsonLayer.eachLayer(layer => {
            const name = getDisplayNameForMap(layer.feature);
            const req = getVisaRequirementForGeoName(getCountryNameFromFeature(layer.feature), reqMap);
            const label = name && name !== 'Unknown' ? (req ? name + ' — ' + req : name) : (req ? req : '');
            layer.unbindTooltip();
            if (label) layer.bindTooltip(label, { permanent: false, direction: 'top' });
        });
        if (legendEl) {
            const order = ['Visa Free', 'VOA', 'E-VISA', 'ETA', 'Visa Required', 'N/A'];
            legendEl.innerHTML = order.filter(r => usedRequirements.has(r)).map(r =>
                `<span><span style="background:${requirementToColor(r)};width:12px;height:12px;display:inline-block;border-radius:2px;"></span> ${escapeHtml(r)}</span>`
            ).join('');
            legendEl.style.display = 'flex';
        }
    }
    setTimeout(() => { if (visaGlossaryMap) visaGlossaryMap.invalidateSize(); }, 100);
}

function initExploreMap() {
    const container = document.getElementById('map');
    if (!container) return;
    if (exploreMap) {
        exploreMap.invalidateSize();
        return;
    }

    exploreMap = L.map('map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 8,
        worldCopyJump: true,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19
    }).addTo(exploreMap);

    const layerButtons = document.getElementById('explore-layer-buttons');
    const legendEl = document.getElementById('explore-map-legend');

    let activeLayers = new Set();

    function getActiveLayers() {
        return new Set(activeLayers);
    }
    function toggleLayer(layerId) {
        if (layerId === 'none') {
            activeLayers.clear();
        } else {
            if (activeLayers.has(layerId)) activeLayers.delete(layerId);
            else activeLayers.add(layerId);
        }
        if (!layerButtons) return;
        layerButtons.querySelectorAll('.explore-layer-btn').forEach(b => {
            const id = b.getAttribute('data-layer') || 'none';
            b.classList.toggle('active', id === 'none' ? activeLayers.size === 0 : activeLayers.has(id));
        });
    }
    function updateFromActive() {
        if (activeLayers.size === 0) {
            if (exploreMapGeoJsonLayer) exploreMap.removeLayer(exploreMapGeoJsonLayer);
            exploreMapOverlayLayers.forEach(l => { exploreMap.removeLayer(l); });
            exploreMapOverlayLayers = [];
            setLegend(null);
            if (exploreMapGeoJsonLayer) {
                exploreMapGeoJsonLayer.setStyle({ fillColor: '#94a3b8', fillOpacity: 0.6, color: '#334155', weight: 0.8 });
                exploreMapGeoJsonLayer.eachLayer(layer => {
                    layer.unbindTooltip();
                    const displayName = getDisplayNameForMap(layer.feature);
                    if (displayName && displayName !== 'Unknown') layer.bindTooltip(displayName, { permanent: false, direction: 'top' });
                });
                exploreMapGeoJsonLayer.addTo(exploreMap);
            }
            return;
        }
        applyLayers(activeLayers);
    }

    function setLegend(html) {
        if (!legendEl) return;
        if (!html) {
            legendEl.style.display = 'none';
            legendEl.innerHTML = '';
            return;
        }
        legendEl.innerHTML = html;
        legendEl.style.display = 'block';
    }

    // Religion color mapping
    const RELIGION_COLORS = {
        'Christians': '#3498db',      // Blue
        'Muslims': '#1abc9c',         // Teal
        'Hindus': '#f39c12',          // Orange
        'Buddhists': '#e74c3c',       // Red
        'Unaffiliated': '#95a5a6',   // Gray
        'Folk Religions': '#2ecc71',  // Green
        'Jews': '#9b59b6',            // Purple
        'Other Religions': '#e67e22'  // Dark orange
    };

    function applyLayers(active) {
        if (exploreMapGeoJsonLayer) exploreMap.removeLayer(exploreMapGeoJsonLayer);
        exploreMapOverlayLayers.forEach(l => { exploreMap.removeLayer(l); });
        exploreMapOverlayLayers = [];
        setLegend(null);

        if (!exploreMapLayersData || !exploreMapGeoJsonLayer) return;

        const choroplethOrder = ['driving_side', 'travel_advisory', 'religion'];
        const colorMode = choroplethOrder.find(m => active.has(m)) || null;

        // Lightweight circleMarkers (no DOM icons)
        if (active.has('airports') && exploreMapLayersData.airports && exploreMapLayersData.airports.length) {
            const points = exploreMapLayersData.airports;
            const layer = L.layerGroup(points.map(a => {
                const m = L.circleMarker([a.lat, a.lon], { radius: 2, fillColor: '#2563eb', color: '#1d4ed8', weight: 1, fillOpacity: 0.8 });
                m.bindTooltip((a.city || a.country || a.iata_code) + (a.iata_code ? ' (' + a.iata_code + ')' : ''), { permanent: false });
                return m;
            }));
            layer.addTo(exploreMap);
            exploreMapOverlayLayers.push(layer);
        }

        if (active.has('heritage') && exploreMapLayersData.heritage_sites && exploreMapLayersData.heritage_sites.length) {
            const layer = L.layerGroup(exploreMapLayersData.heritage_sites.map(s => {
                const m = L.circleMarker([s.lat, s.lon], { radius: 3, fillColor: '#ca8a04', color: '#a16207', weight: 1, fillOpacity: 0.9 });
                m.bindTooltip(s.name_en || 'Heritage site', { permanent: false });
                return m;
            }));
            layer.addTo(exploreMap);
            exploreMapOverlayLayers.push(layer);
        }

        const driving = exploreMapLayersData.driving_side || [];
        const advisories = exploreMapLayersData.travel_advisories || [];
        const religions = exploreMapLayersData.religions || [];

        exploreMapGeoJsonLayer.setStyle(feature => {
            const name = getCountryNameFromFeature(feature);
            let fillColor = '#94a3b8';
            let fillOpacity = 0.6;
            if (colorMode === 'driving_side') {
                const drivingName = DRIVING_GEO_ALIASES[normalizeForMatch(name)] || name;
                const match = findMatch(drivingName, driving, 'territory');
                if (match) { fillColor = match.side === 'left' ? '#0ea5e9' : '#f97316'; fillOpacity = 0.85; }
            } else if (colorMode === 'travel_advisory') {
                const match = findAdvisoryMatch(name, advisories);
                if (match) {
                    const l = Number(match.level);
                    if (l === 1) fillColor = '#22c55e';
                    else if (l === 2) fillColor = '#eab308';
                    else if (l === 3) fillColor = '#f97316';
                    else if (l === 4) fillColor = '#ef4444';
                    else fillColor = '#94a3b8';
                    fillOpacity = 0.85;
                }
            } else if (colorMode === 'religion') {
                const match = findMatch(name, religions, 'country');
                if (match && match.dominant_religion) {
                    fillColor = RELIGION_COLORS[match.dominant_religion] || '#94a3b8';
                    fillOpacity = 0.85;
                }
            }
            return { fillColor, fillOpacity, color: '#334155', weight: 0.8, opacity: 0.9 };
        });
        exploreMapGeoJsonLayer.addTo(exploreMap);

        exploreMapGeoJsonLayer.eachLayer(layer => {
            const displayName = getDisplayNameForMap(layer.feature);
            layer.unbindTooltip();
            if (displayName && displayName !== 'Unknown') layer.bindTooltip(displayName, { permanent: false, direction: 'top' });
        });

        const leg = [];
        if (active.has('driving_side')) leg.push('<span style="background:#0ea5e9;padding:2px 8px;"></span> Left &nbsp; <span style="background:#f97316;padding:2px 8px;"></span> Right');
        if (active.has('travel_advisory')) leg.push('<span style="background:#22c55e;padding:2px 8px;"></span> 1 &nbsp; <span style="background:#eab308;padding:2px 8px;"></span> 2 &nbsp; <span style="background:#f97316;padding:2px 8px;"></span> 3 &nbsp; <span style="background:#ef4444;padding:2px 8px;"></span> 4');
        if (active.has('religion')) {
            const religionLegend = Object.entries(RELIGION_COLORS).map(([rel, col]) => 
                `<span style="background:${col};padding:2px 8px;"></span> ${rel}`
            ).join(' &nbsp; ');
            leg.push(religionLegend);
        }
        if (active.has('airports')) leg.push('<strong>Airports</strong>');
        if (active.has('heritage')) leg.push('<strong>UNESCO Heritage</strong>');
        if (leg.length) setLegend(leg.join(' &nbsp;|&nbsp; '));
    }

    fetch(API_BASE + '/map-layers')
        .then(r => r.json())
        .then(data => {
            exploreMapLayersData = data;
            if (activeLayers.size > 0) applyLayers(activeLayers);
        })
        .catch(e => {
            console.error('Explore map layers:', e);
            exploreMapLayersData = { driving_side: [], travel_advisories: [], lgbtq: [], heritage_sites: [], airports: [], religions: [], plug_voltage: [] };
        });

    fetch(EXPLORE_GEOJSON_URL)
        .then(r => r.json())
        .then(geojson => {
            exploreMapGeoJsonLayer = L.geoJSON(geojson, {
                style: { fillColor: '#94a3b8', fillOpacity: 0.6, color: '#334155', weight: 0.8 },
                onEachFeature: (feature, layer) => {
                    const displayName = getDisplayNameForMap(feature);
                    if (displayName && displayName !== 'Unknown') layer.bindTooltip(displayName, { permanent: false, direction: 'top' });
                }
            });
            if (activeLayers.size === 0) {
                exploreMapGeoJsonLayer.setStyle({ fillColor: '#94a3b8', fillOpacity: 0.6, color: '#334155', weight: 0.8 });
                exploreMapGeoJsonLayer.addTo(exploreMap);
            } else {
                applyLayers(activeLayers);
            }
        })
        .catch(e => console.error('Explore map GeoJSON:', e));

    if (layerButtons) {
        layerButtons.querySelectorAll('.explore-layer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const layerId = btn.getAttribute('data-layer') || 'none';
                toggleLayer(layerId);
                updateFromActive();
            });
        });
        activeLayers.clear();
        layerButtons.querySelectorAll('.explore-layer-btn').forEach(b => {
            b.classList.toggle('active', (b.getAttribute('data-layer') || 'none') === 'none');
        });
    }

    setTimeout(() => { if (exploreMap) exploreMap.invalidateSize(); }, 300);
}

function ensureIso3ToContinentLoaded() {
    if (iso3ToContinentLoadPromise) return iso3ToContinentLoadPromise;
    const url = 'https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json';
    iso3ToContinentLoadPromise = fetch(url)
        .then(res => res.json())
        .then(rows => {
            const map = {};
            (rows || []).forEach(row => {
                const iso3 = row?.['alpha-3'];
                if (!iso3) return;
                let region = (row?.region || '').toString().trim();
                // Special-case Antarctica (often blank in region field)
                if (!region && iso3 === 'ATA') region = 'Antarctica';
                if (region === 'Americas') {
                    const sub = (row?.['sub-region'] || '').toString().trim();
                    const intermediate = (row?.['intermediate-region'] || '').toString().trim();
                    if (sub === 'Northern America') region = 'North America';
                    else if (intermediate === 'South America') region = 'South America';
                    else region = 'North America'; // Central America + Caribbean => North America for continent view
                }
                map[iso3] = region || 'Unknown';
            });
            iso3ToContinent = map;
        })
        .catch(() => {
            // If continent data fails to load, keep mapping empty and render "Unknown" totals as 0.
            iso3ToContinent = {};
        });
    return iso3ToContinentLoadPromise;
}

function getContinentForIso3(iso3) {
    if (!iso3) return 'Unknown';
    return iso3ToContinent[iso3] || (iso3 === 'ATA' ? 'Antarctica' : 'Unknown');
}

function computeScratchMapTotalsByContinent() {
    const layer = window.scratchMapGeoJsonLayer;
    if (!layer) return null;
    const totals = {};
    const seen = new Set();
    layer.eachLayer(l => {
        const code = getCountryCodeFromFeature(l.feature);
        if (!code || seen.has(code)) return;
        seen.add(code);
        const continent = getContinentForIso3(code);
        if (!continent || continent === 'Unknown') return;
        totals[continent] = (totals[continent] || 0) + 1;
    });
    window.scratchMapTotalsByContinent = totals;
    return totals;
}

function getScratchMapWorldTotalCountries() {
    const totals = window.scratchMapTotalsByContinent;
    if (!totals) return null;
    const values = Object.values(totals);
    if (!values.length) return null;
    return values.reduce((sum, n) => sum + (Number(n) || 0), 0);
}

function updateScratchMapTopStats() {
    const visitedCountEl = document.getElementById('scratch-map-visited-count');
    const visitedPercentEl = document.getElementById('scratch-map-visited-percent');
    if (!visitedCountEl && !visitedPercentEl) return;

    const visitedCount = visitedCountries.size;
    if (visitedCountEl) visitedCountEl.textContent = String(visitedCount);

    const totalWorld = getScratchMapWorldTotalCountries();
    if (!visitedPercentEl) return;
    if (!totalWorld || totalWorld <= 0) {
        visitedPercentEl.textContent = '—';
        return;
    }
    const pct = (visitedCount / totalWorld) * 100;
    visitedPercentEl.textContent = pct.toFixed(1) + '%';
}

function renderContinentsBreakdown() {
    const container = document.getElementById('continents-list');
    if (!container) return;
    const totals = window.scratchMapTotalsByContinent;
    if (!totals) {
        container.innerHTML = '<p class="empty-list">Loading continent totals…</p>';
        return;
    }
    if (Object.keys(totals).length === 0) {
        container.innerHTML = '<p class="empty-list">Continent totals unavailable (could not load country region data).</p>';
        return;
    }

    const ordered = ['Africa', 'Europe', 'Asia', 'North America', 'South America', 'Oceania', 'Antarctica'];
    container.innerHTML = '';
    ordered.forEach(continent => {
        const total = totals[continent] || 0;
        if (!total) return;
        let visitedCount = 0;
        const visitedInContinent = [];
        visitedCountries.forEach(code => {
            if (getContinentForIso3(code) === continent) {
                visitedCount += 1;
                visitedInContinent.push(code);
            }
        });
        visitedInContinent.sort((a, b) => {
            const nameA = (countryCodeToName[a] || a).toString();
            const nameB = (countryCodeToName[b] || b).toString();
            return nameA.localeCompare(nameB);
        });

        const div = document.createElement('div');
        div.className = 'continent-section';
        div.innerHTML = '<h4>' + escapeHtml(continent) + ' — ' + escapeHtml(String(visitedCount)) + ' / ' + escapeHtml(String(total)) + ' visited</h4>';

        const list = document.createElement('div');
        list.className = 'continent-countries';
        if (visitedInContinent.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'empty-list';
            empty.style.padding = '0.75rem 0';
            empty.style.background = 'transparent';
            empty.style.boxShadow = 'none';
            empty.style.color = '#6b7280';
            empty.style.textAlign = 'left';
            empty.textContent = 'No visited countries yet';
            list.appendChild(empty);
        } else {
            visitedInContinent.forEach(code => {
                const pill = document.createElement('span');
                pill.className = 'country-item-small';
                pill.textContent = countryCodeToName[code] || code;
                pill.title = code;
                list.appendChild(pill);
            });
        }

        div.appendChild(list);
        container.appendChild(div);
    });
}

function renderWantToVisitContinentsBreakdown() {
    const container = document.getElementById('want-continents-list');
    if (!container) return;
    const totals = window.scratchMapTotalsByContinent;
    if (!totals) {
        container.innerHTML = '<p class="empty-list">Loading continent totals…</p>';
        return;
    }
    if (Object.keys(totals).length === 0) {
        container.innerHTML = '<p class="empty-list">Continent totals unavailable (could not load country region data).</p>';
        return;
    }

    const ordered = ['Africa', 'Europe', 'Asia', 'North America', 'South America', 'Oceania', 'Antarctica'];
    container.innerHTML = '';
    ordered.forEach(continent => {
        const total = totals[continent] || 0;
        if (!total) return;
        let wantCount = 0;
        const wantInContinent = [];
        wantToVisitCountries.forEach(code => {
            if (getContinentForIso3(code) === continent) {
                wantCount += 1;
                wantInContinent.push(code);
            }
        });
        wantInContinent.sort((a, b) => {
            const nameA = (countryCodeToName[a] || a).toString();
            const nameB = (countryCodeToName[b] || b).toString();
            return nameA.localeCompare(nameB);
        });

        const div = document.createElement('div');
        div.className = 'continent-section';
        div.innerHTML = '<h4>' + escapeHtml(continent) + ' — ' + escapeHtml(String(wantCount)) + ' / ' + escapeHtml(String(total)) + ' in wishlist</h4>';

        const list = document.createElement('div');
        list.className = 'continent-countries';
        if (wantInContinent.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'empty-list';
            empty.style.padding = '0.75rem 0';
            empty.style.background = 'transparent';
            empty.style.boxShadow = 'none';
            empty.style.color = '#6b7280';
            empty.style.textAlign = 'left';
            empty.textContent = 'No wishlist countries yet';
            list.appendChild(empty);
        } else {
            wantInContinent.forEach(code => {
                const pill = document.createElement('span');
                pill.className = 'country-item-small';
                pill.textContent = countryCodeToName[code] || code;
                pill.title = code;
                list.appendChild(pill);
            });
        }

        div.appendChild(list);
        container.appendChild(div);
    });
}

// Load saved data from localStorage
function loadScratchMapData() {
    const savedVisited = localStorage.getItem('scratchMapVisited');
    const savedWantToVisit = localStorage.getItem('scratchMapWantToVisit');
    const savedCountryNames = localStorage.getItem('scratchMapCountryNames');
    if (savedVisited) {
        visitedCountries = new Set(JSON.parse(savedVisited));
    }
    if (savedWantToVisit) {
        wantToVisitCountries = new Set(JSON.parse(savedWantToVisit));
    }
    if (savedCountryNames) {
        countryCodeToName = JSON.parse(savedCountryNames);
    }
}

// Save data to localStorage
function saveScratchMapData() {
    localStorage.setItem('scratchMapVisited', JSON.stringify([...visitedCountries]));
    localStorage.setItem('scratchMapWantToVisit', JSON.stringify([...wantToVisitCountries]));
    localStorage.setItem('scratchMapCountryNames', JSON.stringify(countryCodeToName));
}

// Initialize the scratch map
function initScratchMap() {
    loadScratchMapData();

    // Update top stats even before continent totals load
    updateScratchMapTopStats();
    
    const mapContainer = document.getElementById('world-map-svg');
    if (!mapContainer) return;

    // Remove existing map cleanly if present
    if (worldMap) {
        worldMap.remove();
        worldMap = null;
    }
    // Leaflet can leave an internal id on the container; clear it so re-init works reliably.
    if (mapContainer && mapContainer._leaflet_id) {
        try { delete mapContainer._leaflet_id; } catch (_) { mapContainer._leaflet_id = null; }
    }
    // Clear existing map DOM (after removing Leaflet instance)
    mapContainer.innerHTML = '';
    
    worldMap = L.map('world-map-svg', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 5,
        worldCopyJump: true,
        tap: false,  // Disable tap delay for better mobile interaction
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        scrollWheelZoom: true,
        boxZoom: true,
        keyboard: true
    });
    
    // Prevent map from consuming click events
    worldMap.on('click', function(e) {
        console.log('Map clicked at:', e.latlng);
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 5
    }).addTo(worldMap);

    // If the screen transition just happened, tiles can render grey until Leaflet recalculates size.
    // Force a size/paint recalculation after a short delay.
    setTimeout(() => {
        if (!worldMap) return;
        worldMap.invalidateSize(true);
    }, 200);
    
    // Ensure map is properly initialized
    worldMap.whenReady(() => {
        console.log('Map ready');
    });

    // Add country boundaries using GeoJSON
    // Try multiple GeoJSON sources for better compatibility
    const geoJsonUrls = [
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson',
        'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
    ];
    
    let geoJsonLoaded = false;
    
    for (const url of geoJsonUrls) {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                if (geoJsonLoaded) return; // Already loaded from another source
                geoJsonLoaded = true;
                
                const geoJsonLayer = L.geoJSON(data, {
                    style: (feature) => {
                        const countryCode = getCountryCodeFromFeature(feature);
                        const isVisited = visitedCountries.has(countryCode);
                        const isWantToVisit = wantToVisitCountries.has(countryCode);
                        
                        let fillColor = SCRATCH_DEFAULT_FILL; // Default gray
                        let fillOpacity = 0.6;
                        
                        if (isVisited) {
                            fillColor = SCRATCH_VISITED_FILL; // Golden for visited
                            fillOpacity = 0.9;
                        } else if (isWantToVisit) {
                            fillColor = SCRATCH_WANT_FILL; // Tiffany blue for want to visit
                            fillOpacity = 0.9;
                        }
                        
                        return {
                            fillColor: fillColor,
                            fillOpacity: fillOpacity,
                            color: '#333',
                            weight: 1,
                            opacity: 0.8
                        };
                    },
                    onEachFeature: (feature, layer) => {
                        const countryCode = getCountryCodeFromFeature(feature);
                        const countryName = getCountryNameFromFeature(feature);
                        
                        // Store country name mapping
                        if (countryCode && countryName && countryName !== 'Unknown') {
                            countryCodeToName[countryCode] = countryName;
                        }
                        
                        // Store country code and name in layer for click handler
                        layer.countryCode = countryCode;
                        layer.countryName = countryName;
                        
                        // Left click = mark as visited
                        layer.on('click', function(e) {
                            e.originalEvent.preventDefault();
                            e.originalEvent.stopPropagation();
                            
                            // Primary id is ISO3 stored on the feature
                            const code = this.countryCode || getCountryCodeFromFeature(this.feature) || countryCode;
                            const name = this.countryName || getCountryNameFromFeature(this.feature) || countryName;
                            
                            console.log('=== Left click - Mark as visited ===');
                            console.log('Code:', code);
                            console.log('Name:', name);
                            
                            if (code && code !== '' && code !== 'Unknown') {
                                markAsVisited(code, name);
                            } else {
                                console.error('Could not determine country code or name');
                                alert('Could not identify this country. Please try clicking on a different area of the country.');
                            }
                        });
                        
                        // Right click = mark as want to visit
                        layer.on('contextmenu', function(e) {
                            e.originalEvent.preventDefault();
                            e.originalEvent.stopPropagation();
                            
                            const code = this.countryCode || getCountryCodeFromFeature(this.feature) || countryCode;
                            const name = this.countryName || getCountryNameFromFeature(this.feature) || countryName;
                            
                            console.log('=== Right click - Mark as want to visit ===');
                            console.log('Code:', code);
                            console.log('Name:', name);
                            
                            if (code && code !== '' && code !== 'Unknown') {
                                markAsWantToVisit(code, name);
                            } else {
                                console.error('Could not determine country code or name');
                                alert('Could not identify this country. Please try clicking on a different area of the country.');
                            }
                            
                            return false; // Prevent context menu
                        });
                        
                        // Hover effects
                        layer.on('mouseover', function(e) {
                            const layer = e.target;
                            layer.setStyle({
                                weight: 3,
                                opacity: 1,
                                fillOpacity: 0.9
                            });
                            layer.bringToFront();
                        });
                        
                        layer.on('mouseout', function(e) {
                            geoJsonLayer.resetStyle(e.target);
                        });
                        
                        if (countryName && countryName !== 'Unknown') {
                            layer.bindTooltip(countryName, { permanent: false, direction: 'top' });
                        }
                    }
                }).addTo(worldMap);
                
                // Store reference for updates
                window.scratchMapGeoJsonLayer = geoJsonLayer;
                
                // Log some stats
                let countryCount = 0;
                geoJsonLayer.eachLayer(() => countryCount++);
                console.log(`Loaded ${countryCount} countries on map`);
                
                // Save country names mapping
                saveScratchMapData();
                
                // Initial color update
                updateMapColors();
                renderContinentsBreakdown(); // show loading/initial state
                renderWantToVisitContinentsBreakdown();
                updateScratchMapTopStats();

                // Load continent mapping and render continent totals + visited counts
                ensureIso3ToContinentLoaded().then(() => {
                    computeScratchMapTotalsByContinent();
                    renderContinentsBreakdown();
                    renderWantToVisitContinentsBreakdown();
                    updateScratchMapTopStats();
                });
            })
            .catch(err => {
                console.error(`Error loading world map from ${url}:`, err);
                // Try next URL
                if (url === geoJsonUrls[geoJsonUrls.length - 1] && !geoJsonLoaded) {
                    mapContainer.innerHTML = '<p style="color: white; padding: 2rem; text-align: center;">Error loading world map. Please check your internet connection and try again.</p>';
                }
            });
    }

    updateLists();
    
    // Ensure lists are visible
    const listsElement = document.getElementById('scratch-map-lists');
    if (listsElement) {
        listsElement.style.display = 'flex';
    }
}

// Explicit actions from map clicks (left/right click)
function markAsVisited(countryCode, countryName) {
    if (!countryCode) return;
    if (countryCode && countryName && countryName !== 'Unknown') {
        countryCodeToName[countryCode] = countryName;
    }
    if (visitedCountries.has(countryCode)) {
        visitedCountries.delete(countryCode);
    } else {
        visitedCountries.add(countryCode);
        wantToVisitCountries.delete(countryCode);
    }
    saveScratchMapData();
    updateMapColors();
    updateLists();
    renderContinentsBreakdown();
    renderWantToVisitContinentsBreakdown();
    updateScratchMapTopStats();
}

function markAsWantToVisit(countryCode, countryName) {
    if (!countryCode) return;
    if (countryCode && countryName && countryName !== 'Unknown') {
        countryCodeToName[countryCode] = countryName;
    }
    if (wantToVisitCountries.has(countryCode)) {
        wantToVisitCountries.delete(countryCode);
    } else {
        wantToVisitCountries.add(countryCode);
        visitedCountries.delete(countryCode);
    }
    saveScratchMapData();
    updateMapColors();
    updateLists();
    renderContinentsBreakdown();
    renderWantToVisitContinentsBreakdown();
    updateScratchMapTopStats();
}

// Toggle country status
function toggleCountry(countryCode, countryName) {
    console.log('=== toggleCountry called ===');
    console.log('Code:', countryCode);
    console.log('Name:', countryName);
    console.log('Mode:', scratchMapMode);
    console.log('Before - Visited:', Array.from(visitedCountries));
    console.log('Before - Want to visit:', Array.from(wantToVisitCountries));
    
    if (!countryCode || countryCode === '') {
        console.error('Invalid country code!');
        alert('Could not identify country. Please try clicking again.');
        return;
    }
    
    // Store country name mapping
    if (countryCode && countryName && countryName !== 'Unknown') {
        countryCodeToName[countryCode] = countryName;
    }
    
    if (scratchMapMode === 'visited') {
        if (visitedCountries.has(countryCode)) {
            visitedCountries.delete(countryCode);
            console.log('✓ Removed from visited:', countryCode);
        } else {
            visitedCountries.add(countryCode);
            // Remove from want-to-visit if it was there
            wantToVisitCountries.delete(countryCode);
            console.log('✓ Added to visited:', countryCode);
        }
    } else {
        if (wantToVisitCountries.has(countryCode)) {
            wantToVisitCountries.delete(countryCode);
            console.log('✓ Removed from want-to-visit:', countryCode);
        } else {
            wantToVisitCountries.add(countryCode);
            // Remove from visited if it was there
            visitedCountries.delete(countryCode);
            console.log('✓ Added to want-to-visit:', countryCode);
        }
    }
    
    console.log('After - Visited:', Array.from(visitedCountries));
    console.log('After - Want to visit:', Array.from(wantToVisitCountries));
    
    saveScratchMapData();
    updateMapColors();
    updateLists();
    
    console.log('=== toggleCountry complete ===');
}

// Update map colors after changes
function updateMapColors() {
    if (!window.scratchMapGeoJsonLayer) {
        console.log('No GeoJSON layer found');
        return;
    }
    
    console.log('Updating map colors. Visited:', visitedCountries.size, 'Want to visit:', wantToVisitCountries.size);
    
    window.scratchMapGeoJsonLayer.eachLayer((layer) => {
        const feature = layer.feature;
        if (!feature || !feature.properties) return;
        
        // ISO3 code
        const code = layer.countryCode || getCountryCodeFromFeature(feature);
        
        if (!code) return;
        
        const isVisited = visitedCountries.has(code);
        const isWantToVisit = wantToVisitCountries.has(code);
        
        let fillColor = SCRATCH_DEFAULT_FILL;
        let fillOpacity = 0.6;
        
        if (isVisited) {
            fillColor = SCRATCH_VISITED_FILL;
            fillOpacity = 0.9;
        } else if (isWantToVisit) {
            fillColor = SCRATCH_WANT_FILL;
            fillOpacity = 0.9;
        }
        
        layer.setStyle({
            fillColor: fillColor,
            fillOpacity: fillOpacity
        });
    });
    
    console.log('Map colors updated');
}

// Update the lists display
function updateLists() {
    console.log('updateLists called. Visited:', visitedCountries.size, 'Want to visit:', wantToVisitCountries.size);
    
    const visitedList = document.getElementById('visited-list');
    const wantToVisitList = document.getElementById('want-to-visit-list');
    const visitedCount = document.getElementById('visited-count');
    const wantToVisitCount = document.getElementById('want-to-visit-count');
    
    if (visitedList) {
        visitedList.innerHTML = '';
        if (visitedCountries.size === 0) {
            visitedList.innerHTML = '<p class="empty-list">No countries visited yet</p>';
        } else {
            const sorted = Array.from(visitedCountries).sort((a, b) => {
                const nameA = countryCodeToName[a] || a;
                const nameB = countryCodeToName[b] || b;
                return nameA.localeCompare(nameB);
            });
            sorted.forEach(code => {
                const div = document.createElement('div');
                div.className = 'country-item';
                const name = countryCodeToName[code] || code;
                div.textContent = name;
                div.title = code; // Show code on hover
                visitedList.appendChild(div);
            });
            console.log('Updated visited list with', sorted.length, 'countries');
        }
    }
    
    if (wantToVisitList) {
        wantToVisitList.innerHTML = '';
        if (wantToVisitCountries.size === 0) {
            wantToVisitList.innerHTML = '<p class="empty-list">No countries in your wishlist</p>';
        } else {
            const sorted = Array.from(wantToVisitCountries).sort((a, b) => {
                const nameA = countryCodeToName[a] || a;
                const nameB = countryCodeToName[b] || b;
                return nameA.localeCompare(nameB);
            });
            sorted.forEach(code => {
                const div = document.createElement('div');
                div.className = 'country-item';
                const name = countryCodeToName[code] || code;
                div.textContent = name;
                div.title = code; // Show code on hover
                wantToVisitList.appendChild(div);
            });
            console.log('Updated want-to-visit list with', sorted.length, 'countries');
        }
    }
    
    if (visitedCount) {
        visitedCount.textContent = visitedCountries.size;
        console.log('Updated visited count:', visitedCountries.size);
    }
    if (wantToVisitCount) {
        wantToVisitCount.textContent = wantToVisitCountries.size;
        console.log('Updated want-to-visit count:', wantToVisitCountries.size);
    }
}

function init() {
    buildMonthGrids();
    bindEvents();
    // Load nationalities on page load for auto-detection
    loadNationalities();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
