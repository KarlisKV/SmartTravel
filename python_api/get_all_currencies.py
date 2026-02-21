#!/usr/bin/env python3
"""
Get all world currencies using Yahoo Finance.
Fetches exchange rates for major currencies against USD.
"""

import yfinance as yf
import pandas as pd
from pathlib import Path
from datetime import datetime

# Major world currencies (ISO 4217 codes) - deduplicated
CURRENCIES = sorted(set([
    # Major currencies
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD',
    # European
    'SEK', 'NOK', 'DKK', 'PLN', 'CZK', 'HUF', 'RON', 'BGN', 'HRK', 'RSD',
    'BAM', 'MKD', 'ALL', 'ISK', 'RUB', 'UAH', 'BYN', 'MDL', 'GEL', 'AMD',
    'AZN', 'KZT', 'KGS', 'TJS', 'TMT', 'UZS', 'MNT',
    # Asian
    'KRW', 'INR', 'SGD', 'MYR', 'THB', 'IDR', 'PHP', 'VND', 'LAK', 'KHR',
    'MMK', 'BND', 'MOP', 'TWD', 'PKR', 'BDT', 'LKR', 'NPR', 'AFN', 'IRR',
    'IQD', 'SYP', 'LBP',
    # Middle East
    'AED', 'SAR', 'QAR', 'KWD', 'BHD', 'OMR', 'JOD', 'ILS', 'YER',
    # African
    'EGP', 'LYD', 'TND', 'DZD', 'MAD', 'MRU', 'NGN', 'GHS', 'GMD', 'GNF',
    'SLL', 'LRD', 'CVE', 'STN', 'AOA', 'ZAR', 'SZL', 'LSL', 'BWP', 'NAD',
    'ZMW', 'MWK', 'MZN', 'MGA', 'SCR', 'KMF', 'DJF', 'ERN', 'ETB', 'SDG',
    'SSP', 'UGX', 'RWF', 'BIF', 'TZS', 'KES', 'SOS',
    # Americas
    'BRL', 'ARS', 'CLP', 'COP', 'PEN', 'BOB', 'PYG', 'UYU', 'VES', 'MXN',
    'GYD', 'SRD', 'TTD', 'BBD', 'BMD', 'BZD', 'KYD', 'JMD', 'XCD', 'AWG',
    'ANG',
    # Pacific
    'FJD', 'PGK', 'SBD', 'VUV', 'WST', 'TOP', 'TVD', 'XPF',
    # Others
    'TRY', 'XOF', 'XAF'
]))

def get_currency_rate(base_currency='USD', target_currency='EUR'):
    """
    Get exchange rate from Yahoo Finance.
    Format: TARGETBASE=X (e.g., EURUSD=X for EUR to USD rate)
    """
    ticker = f"{target_currency}{base_currency}=X"
    try:
        currency = yf.Ticker(ticker)
        info = currency.info
        
        # Try to get current price from history if info doesn't have it
        if not info or 'regularMarketPrice' not in info or info.get('regularMarketPrice') is None:
            hist = currency.history(period="1d")
            if not hist.empty:
                current_price = hist['Close'].iloc[-1]
            else:
                return None
        else:
            current_price = info.get('regularMarketPrice')
        
        return {
            'symbol': ticker,
            'base': base_currency,
            'target': target_currency,
            'name': info.get('longName', f'{target_currency}/{base_currency}') if info else f'{target_currency}/{base_currency}',
            'rate': current_price,
            'previous_close': info.get('previousClose') if info else None,
            'bid': info.get('bid') if info else None,
            'ask': info.get('ask') if info else None,
        }
    except Exception as e:
        return None

def get_all_currencies(base_currency='USD'):
    """
    Get exchange rates for all currencies against a base currency.
    """
    results = []
    unique_currencies = [c for c in CURRENCIES if c != base_currency]
    total = len(unique_currencies)
    
    print(f"Fetching exchange rates for {total} currencies against {base_currency}...")
    
    import time
    for i, currency in enumerate(unique_currencies, 1):
        rate_data = get_currency_rate(base_currency, currency)
        if rate_data:
            results.append(rate_data)
            print(f"[{i}/{total}] ✓ {currency}: {rate_data['rate']:.6f}" if rate_data['rate'] else f"[{i}/{total}] ✓ {currency}")
        else:
            print(f"[{i}/{total}] ✗ {currency}: Not available")
        # Small delay to avoid rate limiting
        time.sleep(0.1)
    
    return results

def main():
    """Main function to fetch and display all currencies."""
    print("=" * 60)
    print("Fetching world currencies from Yahoo Finance...")
    print("=" * 60)
    
    currencies = get_all_currencies('USD')
    
    if currencies:
        print(f"\n{'=' * 60}")
        print(f"Successfully retrieved {len(currencies)} currencies")
        print(f"{'=' * 60}\n")
        
        df = pd.DataFrame(currencies)
        # Display key columns
        display_cols = ['target', 'name', 'rate', 'previous_close']
        available_cols = [col for col in display_cols if col in df.columns]
        print(df[available_cols].to_string(index=False))
        
        # Save to CSV in SmartTravel/datasets
        _datasets = Path(__file__).resolve().parent.parent / "datasets"
        output_file = _datasets / "world_currencies.csv"
        output_file.parent.mkdir(parents=True, exist_ok=True)
        df.to_csv(output_file, index=False)
        print(f"\n✓ Saved {len(currencies)} currencies to {output_file}")
    else:
        print("\n✗ No currency data retrieved. Please check your internet connection.")

if __name__ == "__main__":
    main()
