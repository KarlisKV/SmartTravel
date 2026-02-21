import requests
import pandas as pd
from datetime import datetime

# Henley API: pivot.visa_access_id maps to requirement type
# 1=Visa Free, 2=Visa Required, 3=E-VISA, 4=VOA, 5=ETA, 7=ETA (e.g. Australia eVisitor)
VISA_ACCESS_LABELS = {
    1: "Visa Free",
    2: "Visa Required",
    3: "E-VISA",
    4: "VOA",
    5: "ETA",
    6: "ETA",  # if present
    7: "ETA",
}

res = requests.get('https://api.henleypassportindex.com/api/passports')
data = res.json()

code_list = [{'code': item.get('code'), 'country': item.get('name')} for item in data if item.get('code') != '']
code_list = sorted(code_list, key=lambda k: k['country'])

origin_lst = []
destination_lst = []
requirement = []
visa_free_count_lst = []
visa_required_count_lst = []
origin_for_count = []

for origin in code_list:
    origin_country = origin.get('country')
    origin_for_count.append(origin_country)
    count_vf = 0
    count_vr = 0
    code = origin.get('code') or ''
    res = requests.get(f'https://api.henleypassportindex.com/api/passports/{code}/countries')
    data = res.json()
    for destination in data['default']:
        destination_country = destination.get('name')
        origin_lst.append(origin_country)
        destination_lst.append(destination_country)
        pivot = destination.get('pivot') or {}
        visa_access_id = pivot.get('visa_access_id')
        is_visa_free = pivot.get('is_visa_free')
        if str(origin_country) == str(destination_country):
            req_label = "N/A"
        elif visa_access_id is not None and visa_access_id in VISA_ACCESS_LABELS:
            req_label = VISA_ACCESS_LABELS[visa_access_id]
        else:
            req_label = "Visa Free" if str(is_visa_free) == "1" else "Visa Required"
        requirement.append(req_label)
        if str(is_visa_free) == "1":
            count_vf += 1
        else:
            if str(origin_country) != str(destination_country):
                count_vr += 1
    visa_free_count_lst.append(count_vf)
    visa_required_count_lst.append(count_vr)

    today_date = datetime.today().strftime('%Y-%m-%d')
file_name = "henley-passport-index"+"-"+today_date+".csv"

pd_1 = pd.DataFrame({'Origin': origin_lst, 'Destination': destination_lst, 'Requirement': requirement})
pd_1.to_csv(file_name, index=False)

#filter unique countries in origin_lst
origin_lst = list(set(origin_lst))
#filter unique countries in destination_lst
destination_lst = list(set(destination_lst))

print(
    "Total number of countries in origin_lst: " + str(len(origin_lst)) ,
    "Total number of countries in destination_lst: " + str(len(destination_lst))
)



today_date = datetime.today().strftime('%Y-%m-%d')
file_name = "henley-passport-index-count"+"-"+today_date+".csv"

pd_2 = pd.DataFrame({'Origin': origin_for_count, 'Visa Free': visa_free_count_lst, 'Visa Required': visa_required_count_lst})
pd_2.to_csv(file_name, index=False)
