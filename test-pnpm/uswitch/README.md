# 🧾 **Objective**

[TOC]

Your **task** is to help make the customer’s decision easier by writing a program that prices plans on the marketaccording to how much energy is consumed.

------

## 🧮 **Pricing Logic Details**

The data in an **energy plan** looks like this:

```json
const energyPlan = {
  "supplier": "sse",
  "plan": "standard",
  "rates": [
    {"price": 13.5, "threshold": 150},
    {"price": 11.1, "threshold": 100},
    {"price": 10}
  ],
  "standing_charge": 9
}
```

- ***Plans*** contain a set of rates that describe how much the customer will be charged for each **kilowatt-hour** (kWh) of energy that they use over the *year*.
- Additionally, plans **may** also include a daily standing charge. (`Daily charge = 365 * 9`) 
- **Plans** may have more than one rate but all but the last rate will contain a threshold value. 
- **Rates** are *ordered* and the last rate will always have no threshold. (`for const rate of rates`) 
  - **Thresholds** indicate the *quantity of energy* (up to and including) that may be consumed at that price during the **course of the year**. 
  - Rates without a threshold have no limit.
- **First test:** In the example above, the first 150kWh will be charged at 13.5p/kWh, the next 100kWh will be charged at 11.1p/kWh and all subsequent consumption will be charged at 10p/kWh.

**Note that**:

- Standing charge is a daily charge stated in pence exclusive of VAT and is applied regardless of consumption.
- VAT for Energy is rated at 5%.
- Prices are stated in pence and are exclusive of VAT. (`totalInPence + (totalInPence * 0.05`)

For the first part of this exercise, we would like you to write a function that takes in a plan and an annual usage amount (in kWh) and returns what a customer would be charged annually (in pounds, including VAT). (`calculateAnnualCost(energyPlan, 1000`)

For the example plan above, when a consumer uses 1000 kWH your function should return 146.16. 

For `1000 kWh` of usage:

- First 150 kWh @ 13.5p = 2025p `calculateUsingThreshold`
- Next 100 kWh @ 11.1p = 1110p 
- Remaining 750 kWh @ 10p = 7500p
- Standing charge = 9p/day × 365 = 3285p `calculateStandingChargeWithNoThreshold`
- Subtotal (before VAT) = 2025 + 1110 + 7500 + 3285 = 13,920p `calculateOrApplyVat`
- VAT @ 5% = 696p → Total = 146.16 **pounds** `convertPenceToPounds()`

(`expect(calculateAnnualCost(energyPlan, 1000)).toBe(146.16)`)

## 🧾 Output

In the next stages of this exercise, we’ll be handling **multiple plans**, and **multiple diﬀerent usage amounts**.

- Your program will need to be able to **format the output** to be easily readable.

- In this step, you should extend your program to log out the price of a plan in the format `SUPPLIER,PLAN,TOTAL_COST. TOTAL_COST` should be in pounds, include VAT, and be given to two decimal places.

For the example plan above, when a consumer uses 1000 kWH your program should log out: `sse,standard,146.16`

**Note** that all rounding should be natural (i.e. 1.045 rounded to 2 decimal places is 1.05).

## 📁 **File-Based Input**

Energy providers send new plans to us on a regular basis. In this step, we would like you to extend your program to load plans from a file. 

- Your interviewer will provide you with a json file containing a list of plans.

- Your program should take a single command line argument - the path of the file - and should log the price of
  - each plan in the format above, assuming a usage of 1000 kWh.

For example, I should be able to run

`npx tsx uswitch.ts test/fixtures/plans.json`

```json
# package.json
"bin": {
    "uswitch": "./uswitch/uswitch.ts"
 },
❯ npx tsx uswitch/uswitch.ts uswitch/plans.json
sse,standard,146.16
```

## 🖥️ **Interactive Mode (stdin CLI)**

Diﬀerent customers use diﬀerent amounts of energy - we need to be able to tell the customer the price of each plan according to their own usage. In this step we would like you to extend your program to take input from **stdin**. It should accept **two commands**:

- **price ANNUAL_USAGE**
  - For a given annual kWh consumption produces an annual inclusive of VAT price for all plans available on the market sorted by cheapest first and prints to stdout. Each plan will be printed on its own line in the format SUPPLIER,PLAN,TOTAL_COST. Total cost should be rounded to 2 decimal places, i.e. pounds mand pence.

- **exit** Leaves the program.
  - So, for example, I should be able to run the program as follows:

```
$ uswitch plans.json
price 1000
sse,standard,146.16
price 1200
sse,standard,167.16
exit
```

# ✅ Summary of features now complete

| Feature                               | Description                                                  |
| ------------------------------------- | ------------------------------------------------------------ |
| **Step 1: Compute cost of a plan**    | Calculates the total annual cost (in pounds, inc. 5% VAT) for a plan based on usage in kWh. |
| **Step 2: Output formatting**         | Outputs results in the format: `SUPPLIER,PLAN,TOTAL_COST` with 2 decimal rounding. |
| **Step 3: Load plans from file**      | Reads a JSON file of energy plans, computes cost for fixed usage (default: 1000kWh). |
| **Step 4: Interactive CLI via stdin** | Accepts user commands: `price USAGE` to show all plan prices sorted by cost, and `exit` to quit. |
| **Tests (unit + integration)**        | All major features are covered by tests for correctness and integration. |