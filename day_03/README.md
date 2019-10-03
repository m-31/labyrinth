# Day 03

we continue to initialize things and install some more tools

## Github

### Create account

Choose user name wisely!

https://github.com


fork

https://github.com/m-31/maze


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

Open git bash

    git clone https://github.com/m-31/maze.git

Replace `emma` by your github user name and execute

    git clone https://github.com/<emma>/labyrinth.git



## Visual Studio Code

    choco install vscode

Or from https://code.visualstudio.com/Download

Include github extension:
https://visualstudio.github.com

File / Autosave Click

open directory in Visual Studio Code

change description

commit change

There are no staged changes to commit.

Would you like to automatically stage all your changes and commit them directly?

[Always]

allow automatically fetch


