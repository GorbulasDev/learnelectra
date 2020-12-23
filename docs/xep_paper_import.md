---
id: xep_paper_import
title: Import Paper Wallet
---

# Importing a Paper Wallet with Electra QT Wallet

## Windows/MacOS/Linux
The following guide is for all operating systems. This process can only be done on desktop or laptop Electra QT Wallet.

1. Download the latest Electra QT Wallet here: [https://electraproject.org/wallets](https://electraproject.org/wallets)

2. Unlock your wallet from Settings -- Unlock Wallet (if option is grayed out, your wallet is not encrypted yet)

3. Click Tools -- Debug Window/Console

4. Click on the Console tab

![Paper Wallet Import](/img/paper_import.png)

5. In the console, type the command using this format:
```
importprivkey PrivateKeyHere "labelofAddress"
```
*NOTE*
   * importprivkey = enter the command exactly as is
   * PrivateKeyHere = enter your long private key here from your paper wallet
   * "labelofAddress" = Quotes are requried. Enter any label to identify this address in your wallet.

6. In the same menu window click "Wallet Repair" tab

7. Click Rescan Blockchain Files. This may happen automatically after importing your private key.

8. Your coins should now appear in your wallet, if not make sure your wallet is synced.

