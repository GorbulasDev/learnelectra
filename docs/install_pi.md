---
id: install_pi
title: Setup XEP Core Wallet On Raspberry Pi
---


## **XEP Core Wallet on the Raspberry Pi**

The following is the instructions how to setup the XEP Core Wallet on the Raspberry Pi. Minimum tested pi version is 3B.

## **Instructions**

### Pre-Setup

This has been tested on Ubuntu Mate and Raspbian.

1) It's best to update your pi. Though it may not be necessary, it's highly recommended.

*   Run the following command to update your pi:
```
sudo apt update
```

Then once that completes do (optional but recommended):
```
sudo apt upgrade
```

It was recommended by another user to add a swap space or better known to Windows users as virtual memory. This will help in times when the Raspberry Pi needs more resources to operate and prevent a crash of your wallet. Though this step is optional, it can be recommended. Please use the link below if you want to set up this swap:

[Setup Swap or Virtual Memory](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-18-04/)


### Setup

2) Download and install the wallet from this location:
<https://github.com/ElectraProtocol/XEP-Core/releases>
* Find the file that has Pi in the filename. The versions will change over time. Use the QT version for the GUI (Graphical User Interface) or has the desktop interface. Use the CLI version if you are using CLI or Non-GUI, just text no desktop mode.

![Github](/img/guinogui.png)

3) Navigate to your downloads folder either by using the file & folder browser or by using Terminal.
Typical command to use is:
```
cd ~/Downloads
```

![Downloads](/img/downloads_folder.png)


4) Extract your downloaded file. You can either right-click on the file and choose Extract Here or extract the file using Terimnal using the following command:
```
tar -xvf filenamehere.tar.gz
```
* If you have permission issues, try adding the word "sudo" in front of the command with a space then they command.

![Commands](/img/commands.png)

5) Next, move the file to a more easy to access area. For the GUI version, I prefer to move it to the user's home folder, designated with ~ symbol. To move the file simply open up the user folder, absolute path is /home/username or easier put, the folder where you can see Desktop, Documents, and the Downloads folder. To move the file per Terminal, do the following command:
```
mv xep-qt ~
```
This command will move the file named xep-qt to the location ~, which again is the place where you find the Documents and Downloads folders.

6) Now navigate to that folder where you ust moved the xep-qt to. Use the cd command, for example:
```
cd ~
```
* For this portion, you will want to use Terminal as we have not made the package yet to launch the program from a double-click method.

7) Now in the ~ folder, type this command to launch the program:
```
./xep-qt
```
* NOTICE: Ensure you have the period in front of the slash. If you get any error you may have to chmod the file as shown below. If it still can not run, please contact support.
```
chmod +x xep-qt
```

8) If all is good, the wallet will then start up! You will have to keep the terminal open if you want to keep the wallet open. You can close the program through the normal close methods in the wallet or if it freezes, you can go back to the same terminal window, and press the key combo, Ctrl + c (Control and letter c) this will then terminate the program.

