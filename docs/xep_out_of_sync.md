---
id: xep_out_of_sync
title: Out of Sync
---

## Out of Sync, Database Errors, Critcial Errors in XEP Core Wallet

If you see Out of Sync, a critical error, or syncing stopped or frozen, more than likely your blockchain is corrupted. This is caused a number of ways:

* Incorrectly shutting down the computer when the wallet is open
* Network card goes to a low powered or sleep mode when wallet is open (refer to Google or search engine how to disable this)
* Power failure when the wallet is open

To fix these issues, the most common fix is to download a new copy of the blockchain. Yes this may take time to fully sync with the current wallet (improvments are in the works), but this will fix your issue.

<i>NOTE</i>

* Your coins will show 0 balance during this process. This is normal as the wallet does not know where to search for your coins on the blockchain. As the blockchain starts to sync, your coins will start to appear.

## Windows

1. First, turn off your wallet.

2. Make a copy of your wallet

   1. Press the windows key (bottom left corner of the keyboard) and letter 'r' together
    
   2. In the Run dialog box, type:
   ```
   %appdata%\XEP
   ```
   3. Click OK
  
   4. The XEP folder will open, then copy and paste your wallets folder to a safe location such as another folder or even better, a usb drive.

   5. Delete all files and folders in the XEP folder EXCEPT the wallets folder.

3. Uninstall your current wallet from Add and Remove Programs (DO NOT DELETE THE XEP FOLDER)

   * It is normal for files to populate in the XEP folder once the XEP Core program is ran again

4. Download and install the latest wallet version: https://www.electraprotocol.com/downloads/

5. Run the wallet and wait for the full sync. Do note:

   * Balance will be 0 and transactions will be empty. These will populate as the blockchain syncs.

6. If you wish, you can see all created wallet addresses in File->"Receiving addresses" in the XEP Menu

## MacOS

1. First, turn off your wallet.

2. Make a copy of your wallet

   1. Click anywhere on the desktop (screen with your background) and click "Go" in the top menu and click "Go to Folder..." or press: Shift ⇧ + Command ⌘ + G

   2. Type:
   ```
   ~/Library/Application Support/XEP
   ```
   3. Click Go

   4. The XEP folder will open, then copy and paste your wallets folder to a safe location such as another folder or even better, a usb drive.

   5. Delete all files and folders in the XEP folder <b>EXCEPT</b> the wallets folder

3. Uninstall your current wallet (DO NOT DELETE THE XEP FOLDER)

   * It is normal for files to populate in the XEP folder once the XEP program is ran again

4. Download and install the latest wallet version: https://www.electraprotocol.com/downloads/

5. Run the wallet and wait for the full sync. Do note:

   * Balance will be 0 and transactions will be empty. These will populate as the blockchain syncs.

6. If you wish, you can see all created wallet addresses in File->"Receiving addresses" in the XEP Menu

## Linux

Due to the numerous distros of Linux, this is a generic set of instructions for the GUI interface.

1. First, turn off your wallet.

2. Make a copy of your wallet

    1. Open the Home directory and press Control + H
    2. Hidden folders are displayed, open the folder .xep
    3. Copy and paste your wallets folder to a safe location such as another folder or even better, a usb drive.
    4. Delete all files and folders in the XEP folder <b>EXCEPT</b> the wallets folder 

3. Uninstall your current wallet (or trash the current xep-qt program)

   * It is normal for files to populate in the XEP folder once the XEP program is ran again

4. Download and install the latest wallet version: https://www.electraprotocol.com/downloads/

5. Run the wallet and wait for the full sync. Do note:

   * Balance will be 0 and transactions will be empty. These will populate as the blockchain syncs.

6. If you wish, you can see all created wallet addresses in File->"Receiving addresses" in the XEP Menu
