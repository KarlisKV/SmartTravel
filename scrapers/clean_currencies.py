import pandas as pd
import numpy as np
import csv
from pathlib import Path

# currency_list.csv in SmartTravel datasets folder
CURRENCY_CSV = Path(__file__).resolve().parent.parent / "SmartTravel" / "datasets" / "currency_list.csv"

#currency_list.csv first row header
# Handle parsing errors by reading with csv module (handles quoted fields) and padding/truncating
expected_columns = 6  # Based on header: State_or_territory,Currency,Symbol_or_Abbrev,ISO_code,Fractional_unit,Number_to_basic

rows = []
with open(CURRENCY_CSV, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    header = next(reader)
    for row in reader:
        # Pad with NaN if too few fields, truncate if too many
        if len(row) < expected_columns:
            row.extend([np.nan] * (expected_columns - len(row)))
        elif len(row) > expected_columns:
            row = row[:expected_columns]
        rows.append(row)

currency_list = pd.DataFrame(rows, columns=header)

#drop all which don't have ISO_code
currency_list = currency_list[currency_list['ISO_code'].notna() & (currency_list['ISO_code'] != '')]

#print the columns
print(currency_list.columns)

#print the first 5 rows
print(currency_list.head())

#print the shape
print(currency_list.shape)

#print the info
print(currency_list.info())