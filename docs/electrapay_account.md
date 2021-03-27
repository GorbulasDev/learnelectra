---
id: electrapay_account
title: Account Page Setup
---

## Account Page

On this page, you will find several options to customize your ElectraPay experience. This guide will give you some more information for each box.

### Personal Information
* **Account Name** - The username you entered when creating your account
* **Account Description** - Description of the account for your reference
* **Account Type** - You have the choice of personal, business, or non-profit
* **Logo Image** - Change the image of your account profile 
![Personal](/img/xep_account2.png)

### Address Details
This information is used to identify yourself.
![Address](/img/xep_account3.png)

### Payment Details
* **Callback URL** - The web address or url where after crypto payment is made, the user will be sent to that page (example: Thank You page)
* **Fiat Currency** - What is the main currency that will be used on your store besides XEP? Ensure to have at least one selected to avoid errors.
* **eCommerce Plugin** - Select the platform on your website that will interface with ElectraPay.
* **Wallet Address** - The wallet address where XEP will be sent
* **Crypto Currency** - Ensure you have the correct form of currency that will be accepted with ElectraPay.
* **Website** - Enter the website address
![Payment](/img/xep_account4.png)

### Callback URL Extra Details
This section explains extra details and options of the Callback URLs as how it works server side. This shows the coding how the Callback URL works.
* **WordPress / WooCommerce Plugin** - (websiteUrl + "?wc-api=wc_electrapay")

### Contact Person Information

This section is for users to know who to contact if they have questions about the payment.
![Contact](/img/xep_account5.png)

### Organization Details

Used to enter in VAT information about your organization, if it applies.
![Organization](/img/xep_account6.png)

## Settings Page

This section is used to generate your API key to interface with the plugin of your choice. It also has extra settings for payment rules, such as to give a percentage to the Electra Protocol Foundation if you desire or how many confirmations before payment is accepted.
![Settings](/img/xep_settings.png)
