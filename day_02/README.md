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

use keyfile - then you can save the database in the cloud

