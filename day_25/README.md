# Day 25

we build a home

# home page

## Reminder 

Short html overview: https://raw.githubusercontent.com/iLoveCodingOrg/html-cheatsheet/master/html-cheatsheet.gif

about html: https://www.w3schools.com/default.asp

compendium: https://developer.mozilla.org/en-US/docs/Web/HTML/Element


## Create Github Repo 

now we want to build a home page

1. click the New repository icon from your github account homepage

2. name your repository <user name>.github.io (replacing <user name> with your github user name.)

3. 


## Clone new project

Open git bash

Replace `<user name>` by your github user name and execute

    git clone https://github.com/<user name>/github.io.git


##  add html file

open repo folder in visual code

add a file named `index.html` with the following contents:

     <!DOCTYPE html>
     <html>
         <body>
             <h1>Hello World</h1>
         </body>
     </html>
     
## push content on git bash
 
      git add --all
      git commit -m "Initial commit"
      git push -u origin master
      
## view result on
      
https://<user name>.github.io     


## now we build our home page


## getting some content

look at: https://github.com/alvaromontoro/CSS-Simpsons

within git shell at correct location, clone this repo

look at browser locally on this directory

copy content of bart.html into index.html

add css directory and css file

enable blinking

adapt title, description 

add before body end tag:

    <div class="row">
        <div class="col-sm col-sm-offset-6">
            <i>Bart made by <a href="https://github.com/alvaromontoro/CSS-Simpsons">Alvaro Montoro</a></i>
        </div>
    </div>

if everything is ok, push to github


## https://minicss.org

include in header tag:

    <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css">

add at begin of body

     <header class="sticky row">
         <div class="col-sm col-lg-10 col-lg-offset-1">
             <a href="#" role="button">user name's <span class="icon-home"></span></a>
             <a href="maze.html" role="button">Maze</a>
             <a href="https://github.com/user name/" role="button">Github</a>
             <a href="https://en.wikiquote.org/wiki/Special:Random" role="button">Random</a>
         </div>
     </header>








