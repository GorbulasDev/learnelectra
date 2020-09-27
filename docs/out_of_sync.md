---
id: out_of_sync
title: Out of Sync
---

## Out of Sync, Database Errors, Critcial Errors in Electra QT Wallet

If you see Out of Sync, a critical error, or syncing stopped or frozen, more than likely your blockchain is corrupted. This is caused a number of ways:

* Incorrectly shutting down the computer when the wallet is open
* Network card goes to a low powered or sleep mode when wallet is open (refer to Google or search engine how to disable this)
* Power failure when the wallet is open

To fix these issues, the most common fix is to download a new copy of the blockchain. Yes this may take two to three hours to fully sync with the current wallet (improvments are in the works), but this will fix your issue.

<i>NOTE</i>

* Your coins will show 0 balance during this process. This is normal as the wallet does not know where to search for your coins on the blockchain. As the blockchain starts to sync, your coins will start to appear.

## Windows

1. First, turn off your wallet.

2. Make a copy of your wallet.dat

   1. Press the windows key (bottom left corner of the keyboard) and letter 'r' together
    
   2. In the Run dialog box, type:
   ```
   %appdata%\Electra
   ```
   3. Click OK
  
   4. Electra folder will open, then copy and paste your wallet.dat file to a safe location such as another folder or even better, a usb drive. The file may not have .dat and that is due to hidden file types.

   5. Delete all files and folders in the Electra folder EXCEPT wallet.dat

3. Uninstall your current wallet from Add and Remove Programs (DO NOT DELETE THE ELECTRA FOLDER)

   * It is normal for files to populate in the Electra folder once the Electra program is ran again

4. Download and install the latest wallet version: https://electraproject.org/wallets

5. Run the wallet and wait for the full sync. Do note:

   * Balance will be 0 and transactions will be empty. These will populate as the blockchain syncs.

6. If you wish, you can see all created wallet addresses in File->"Receiving addresses" in the Electra Menu

## MacOS

1. First, turn off your wallet.

2. Make a copy of your wallet.dat

   1. Click anywhere on the desktop (screen with your background) and click "Go" in the top menu and click "Go to Folder..." or press: Shift ⇧ + Command ⌘ + G

   2. Type:
   ```
   ~/Library/Application Support/Electra
   ```
   3. Click Go

   4. Electra folder will open, then copy and paste your wallet.dat file to a safe location such as another folder or even better, a usb drive. The file may not have .dat and that is due to hidden file types.

   5. Delete all files and folders in the Electra folder <b>EXCEPT</b> wallet.dat

3. Uninstall your current wallet (DO NOT DELETE THE ELECTRA FOLDER)

   * It is normal for files to populate in the Electra folder once the Electra program is ran again

4. Download and install the latest wallet version: https://electraproject.org/wallets

5. Run the wallet and wait for the full sync. Do note:

   * Balance will be 0 and transactions will be empty. These will populate as the blockchain syncs.

6. If you wish, you can see all created wallet addresses in File->"Receiving addresses" in the Electra Menu

## Linux

Due to the numerous distros of Linux, this is a generic set of instructions for the GUI interface.

1. First, turn off your wallet.

2. Make a copy of your wallet.dat

    1. Open the Home directory and press Control + H
    2. Hidden folders are displayed, open the folder .Electra
    3. Copy and paste your wallet.dat file to a safe location such as another folder or even better, a usb drive.
    4. Delete all files and folders in the Electra folder <b>EXCEPT</b> wallet.dat 

3. Uninstall your current wallet (or trash the current Electra-qt program)

   * It is normal for files to populate in the Electra folder once the Electra program is ran again

4. Download and install the latest wallet version: https://electraproject.org/wallets

5. Run the wallet and wait for the full sync. Do note:

   * Balance will be 0 and transactions will be empty. These will populate as the blockchain syncs.

6. If you wish, you can see all created wallet addresses in File->"Receiving addresses" in the Electra Menu
