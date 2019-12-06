---
id: restore_mnemonic
title: Restore Electra QT Wallet Using Mnemonic
---

## Restoring Your Electra QT Wallet Using Mnemonic Phrase for Old Electra Desktop Wallet

WARNING: This process is quite long and can easily be messed up. We highly recommend if you do this process, once you have fully set up everything and recovered the phase properly, go to [HERE](backup.md) to backup your wallet.dat.

The process is very similar for all OS platforms. This process also used a old version of Electra Desktop Wallet (the one with checking, savings, purse, etc). The Desktop Wallet is outdated as we don't not have methods to update the wallet automatically nor a coder to upgrade it. This is a work around so it does require patience and may possibly take multiple tries.

There is a video to follow at the bottom of the page. Feel free to use that with the instructions below as a guide.

### Follow These Steps

1. If this is for a computer with no Electra Wallet currently installed go to step 4, otherwise if you have a wallet currently installed go to step 2.
2. Backup any wallet.dat using our link [HERE](backup.md) first just in case.
3. Uninstall any Electra Wallet you may have installed on your computer. Do so through add remove programs and also using these steps:
   
   Windows:
   - On your keyboard press the Windows Key usually located in the bottom left corner and the letter r together to have the Run window appear
   - In the Run box type:
   ```
   %APPDATA%
   ```
   - Press Enter and your Roaming folder will appear.
   - In this folder, removed any folder called Electra or Electra Desktop

   Linux:
   - Open terminal and navigate to your home folder with the user that has ran the Electra Wallet.
   ```
   cd ~
   ```
   - Next, use this command to remove the Electra folder and Electra Desktop folder (if they exist). If they do not exist move to the next step.
   ```
   sudo rm -R .electra .Electra_Desktop
   ```

   MacOS:
   *   Click on the desktop to make the Finder active and click on Go to folder in the top menu or press Shift ⇧ + Command ⌘ + G
   *   In the box that appeared type:
   ```
   ~/Library/Application Support and then click on Go
   ```
   *   Delete any folders in here called Electra or Electra Desktop

4. Download and install Electra Desktop Wallet ver. 1.0.6 from this link for your OS version [https://github.com/Electra-project/electra-desktop/releases/tag/v1.0.6](https://github.com/Electra-project/electra-desktop/releases/tag/v1.0.6)
   - You may have to expand the Assets tab to see the downloads

5. Once the Desktop Wallet start, click Recover A Wallet Via Mnemonic.

6. Type your mnemonic in the TOP BOX ONLY. Use a single space between each word. If your using the video, type your own mnemonic as the one I typed was for DEMO purposes only and may even have been used already.

7. Create a password on the next screen. You can use the same or a new one. We have found issues if you have a space as your last character, we recommend not to do that.

8. Type your password in again to confirm you typed it in correctly.

9. Allow the wallet to recover the mnemonic and show the main screen (with checking, savings, etc)

10. Your balance will be 0 at this time. This is normal. DO NOT WAIT for a full sync now as you will be on the wrong blockchain. At this point FULLY close the wallet.

11. Next download the new wallet from our Github. Ensure you get the correct one for you OS. [https://github.com/Electra-project/electra-core/releases](https://github.com/Electra-project/electra-core/releases)

12. Install the wallet as normal. DO NOT uninstall the Electra Desktop Wallet at this time.

13. After the wallet is installed, run the wallet. Wait for a full sync to get all your coins.

14. Full sync on a good connection takes about 2 hours. If you have issues downloading the blockchain or getting connections please contact user support in Telegram or Discord.

[![wallet_mnemonic](https://img.youtube.com/vi/nvOAhf9g1Fg/0.jpg)](https://www.youtube.com/watch?v=nvOAhf9g1Fg "Electra ECA Wallet Restore Mnemonic")
