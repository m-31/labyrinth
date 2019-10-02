# Day 02

we will initialize things and install some tools

## chocolatey - choco

Install Windows Package Manager

https://chocolatey.org

install now

- Click Start and type “powershell“
- Right-click Windows Powershell and choose “Run as Administrator“
- Paste the following command into Powershell and press enter.
  
      Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

- Answer Yes when prompted
- Close and reopen an elevated PowerShell window to start using choco

    choco feature enable -n=useRememberedArgumentsForUpgrades
    
    choco search vlc
    
    choco install vlc
    
    choco install chrome --yes
    
    choco install 7zip
    
    choco list --local-only
    
    choco update vlc


## Notepad++

Install from:

https://notepad-plus-plus.org/downloads/

Or by calling

    choco install notepadplusplus
    
    choco uninstall notepadpluspus

    choco install notepadplusplus
 

## keepass

    choco install keepass

Or https://keepass.info/download.html

https://keepass.info/help/base/firststeps.html

use keyfile


## Github

### Create account

Choose user name wisely!

https://github.com


## Git

   choco install git --params "/GitAndUnixToolsOnPath"

https://zachgoll.github.io/blog/2019/git-crash-course/

Or download the latest Git for Windows installer https://gitforwindows.org

Look at this documentation:
https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/

You should install _Git Bash_ and _Git GUI_ 
default editor should be Notepad++
Allow Git to be added to the windows PATH
chose extra option to enable system caching
install credential helper



Open Git Bash.
Run the following commands to configure your Git username and email using the following commands, replacing Emma's name
with your own. These details will be associated with any commits that you create:


$ git config --global user.name "Emma Paris"
$ git config --global user.email "eparis@atlassian.com"

Further documentation: 
https://www.linode.com/docs/development/version-control/how-to-configure-git/


### Clone existing project

    git clone https://github.com/m-31/maze.git

    git clone https://github.com/<emma/>labyrinth.git



## Visual Studio Code

    choco install vscode

Or from https://code.visualstudio.com/Download

https://visualstudio.github.com

File / Autosave Click

open directory in Visual Studio Code

change description

commit change

There are no staged changes to commit.

Would you like to automatically stage all your changes and commit them directly?

[Always]

allow automatically fetch


