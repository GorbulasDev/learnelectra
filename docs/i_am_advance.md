---
id: i_am_advance
title: I Have the Basics. Now Teach Me More!
---
## Private Keys

Private keys, priv keys, what does all this mean? These are hashes that are a long chain of letters and numbers. With these keys, they hold the access to your coins on the blockchain. Your wallet stores these keys, in short, your wallet never stores actual coins. It retrieves the coins associated with the private keys in your wallet on the blockchain and displays them on your wallet.

### Dump Private Keys Using Wallet Dump
1. Open your XEP Wallet
2. Unlock your wallet (make sure you leave the box unchecked for staking only)
3. Go to Tools --> Debug Console
4. The format for the command to dump the file is:
```
dumpwallet "filename"
```
For example, you can do
```
dumpwallet mydumpedwallet.txt
```
If it gives you an error about unlocking wallet first (even if you unlocked already from step 2, do this command in the console, example if your password is FluffyBunny58 type:
```
walletpassphrase FluffyBunny58 0
```
The 0 is for the wallet to be unlocked until it is locked again. 

4a. If you still receive an error, it means the file location the Electra Protocol application is launched from is protected. To get around this, copy and paste the electra-qt.exe file to your Desktop. Then run the commands again.

5. If both commands succeeded, there will be no return result. It will be a blank line.

6. The file will now be located where the XEP Wallet runs (or on the Desktop if you did step 4a above). Example, most people on Windows for example use a shortcut to start the wallet from the start menu or desktop. The file is where the actual .exe of the XEP Wallet program is located. On Windows, it's located in:
```
C:\Program Files\Electra\
```
Now you will find your new dumped file in there! If you used the .txt extension above, it will be able to be opened with your default text editor (Notepad, Vim, Notepadd++, TextEdit, etc)

5. Keep this file safe as it has many private keys!

### Dump Private Key of Address
1. Open up your XEP Wallet
2. Unlock your wallet (make sure you leave the box unchecked for staking only)
3. Go to Tools --> Debug Console
4. The format for the command to dump the private key for the individual address is:
```
dumpprivkey MyAddressHere
```
Where do I find my Receiving Addresses? Don't use the Reeive tab on the side! It does not have all your created addresses.

5. Instead, go to File (on Mac, it's tab Electra Protocol on top left), then choose Receiving Addresses

6. Find the address you want to dump the private key of. NOTE: You cannot dump addresses that don't belong to your wallet. Essentially if you don't own the private key, you cannot dump it.
- You can either use the Copy button or right-click and choose copy address 

7. Now go back to the Debug Console and type
```
dumpprivkey YourCopiedAddressHere
```

8. If you press Enter, you should see if done correctly your private key.

9. KEEP THESE SAFE! This allows direct access to your coins.

### Import Private Keys from Wallet Dump
If you have your wallet dump file, you can import it! This is not importing a wallet.dat file but rather a text file usually as I have mentioned above. Here are the steps to import the dumped wallet file. Make a backup of your current wallet first before continuing!

1. Open up your XEP Wallet

2. Unlock your wallet (make sure you leave the box unchecked for staking only)

3. Go to Tools --> Debug Console

4. Ensure the wallet dumped file is in the same location as the exe file of the XEP Wallet program.
- Again, that location on Windows for example is:
```
C:\Program Files\Electra\
```

5. Type this command in the Debug Console:
```
importwallet FileName
```
If you named the file as mydumpedwallet.txt, then the command is:
```
importwallet mydumpedwallet.txt
```
If successful, after some time, you wallet should be fully imported!

### Import Private Keys from Address Private Key

1. Open up your XEP Wallet

2. Unlock your wallet (make sure you leave the box unchecked for staking only)

3. Go to Tools --> Debug Console

4. In Debug Console, type:
```
importprivkey PrivateKeyGoesHere MyLabel rescan
```
Let's go over what is above. Importprivkey command is of course the command to import the private key. PrivateKeyGoesHere is the actual private key you dumped using the section above. MyLabel is the label you want to give the new imported key as it will be an address in your wallet. Example you may call it Checking or MyFavoriteAccount, whatever you want. Rescan command will when imported, will rescan the blockchain for any transactions that is used by this private key / address.

## Protecting Your wallet.dat

Your wallet.dat file contains all your possible private keys that could be made for your wallet. What does this mean? NEVER share this file with anyone! User support personal will never ask for it. This is just as important to keep safe just as the private keys are. Most wallet.dat files are stored in:  

Windows:
```
C:/Users/YOUR_USER_NAME/AppData/Roaming/Electra
```
Mac:
```
~/Library/Application Support/Electra
```
Linux:
```
~/.electra
```

## Commands in Debug Console and CLI
1. Open up your XEP Wallet
2. Unlock your wallet (make sure you leave the box unchecked for staking only)
3. Go to Tools --> Debug Console
4. Type in the command on the Debug Console:
```
help
```
This will list all the commands that have been programmed into the wallet. 

**NOTE** All commands may not function / may not work fully. Use at your own risk! Backup wallet before you try any if you are unsure of what you are doing. This was a fork from PIVX as some of the commands may look very familiar.

## Mnemonic Phrases

The Mnemonic Phrase is a random list of words that when used and used in a specific order, create your wallet. Instead of typing up easy to mistype hashes, this phrase replaces that and makes it easier for the average human to work with. The only platforms as of creation of this article that use Mnemonic Phrases for Electra Protocol are the old Electra Desktop Wallet and the Electra Mobile Wallet. These two are NOT compatible with each other. The mnemonic phrase is not supported in the QT wallet but still can be used to recover your wallet through a process.
