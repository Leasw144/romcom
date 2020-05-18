
---
# Exploring Class Constructors and HTML Elements:
> A JavaScript project by Linus Leas and Jeff Woltjen
---

[Imgur Link](https://imgur.com/JmlG8bj)

## Introduction

As part of the Turing School of Software and Design's Front-End Module One curriculum, we have created a website which uses HTML, CSS, and JavaScript together to display randomized data (Cover image, title, and two descriptors) from a database, provide the user an option to save their favorite combinations, and allow the user to customize their own romance novel like the one we have linked above.

## Features

1. Randomize Cover

![Recordit GIF](http://g.recordit.co/4YrD3EsLRr.gif)

Using a constructor function, The Randomize Cover function will generate a new cover from the Cover class, which consists of four properties:
* The cover image
* The title
* The first descriptor
* The second descriptor

2. Make Your Own Covers

![Recordit GIF](http://g.recordit.co/fkeTODu4be.gif)

Using the Cover class, the Make My Own Cover function will grab input from any image, using .src and .value, while title, descriptor one and descriptor two take user input and display that input using .value and .innerText. Together, these inputs are then displayed on the sreen.

3. Saving Unique Covers

![Recordit GIF](http://g.recordit.co/CZgJedT4sI.gif)

The Save Cover function checks for duplicates within the savedCovers array. If there are no duplicates, it will push the saved cover into the savedCovers array, and display the associated data onto the Saved Covers Section. If the cover has already been saved, it will alert the user.

## Core Concepts

1. Class Constructors

Class constructors allowed us to create new instances of covers, titles, and descriptors dynamically. These constructors allow us to call a randomizer function onto four arrays in data.js and display them to the DOM.

2. querySelector()

querySelector() is a powerful method that allows JavasScript to hook an element by class, id, or specific name. It allows us to reach out and select the specific element we want to add code to. We then stored that element's "address" within a variable so that our event handler functions would be easier to read for other developers.   

3. Event listeners

the addEventListener is another powerful method that allows us to dynamically interact with the DOM by selecting a specific element and assigning it the duty to "listen" for a specific interaction within the DOM, most commonly a mouse click for this project. Learning about event listeners really started to bring the JavaScript coding language to life for us.

4. .src, .value, and .innerText

Like event listeners, learning how to manipulate these element properties also makes the webpage come alive. Learning how to use these made it much easier to manipulate the webpage.

## Challenges

One of the biggest challenges faced during this project, which spanned the course of six days, was dealing with the amount of data required in an orderly and logical manner. With several variables for buttons, sections, it became important to consciously think about the variables, functions, buttons, and event listeners we named and how they would interact with each other. If we had to change the name of a variable or function down the line, it had a chance of blowing up the code entirely.

We handled this challenge following the Turing formatting convention, storing our variables at the top of the screen, followed by the buttons, followed by the event listeners, followed by the event handler functions followed by the helper functions. Additionally, subsections of variables were broken down into different groups for further organization.

Another large challenge was grappling with the precision required to process effective, error-free code. A large portion of our time on some days was taken up trying to understand why the code wasn't working when it turned out to be a simple syntax error (using {} instead of () ). After we found the error, we were relieved and elated, but also exhausted and could not make much more progress that night. Moving forward we will be mindful that when writing code, slower and deliberate is the superior approach.

Iteration five, employing the delete saved images function was also technically challenging, but once more instruction and individual learning was applied, we ended up tackling that as well!

### About the Developers

[Project repository](https://github.com/Leasw144/romcom)

[Linus's Github page](https://github.com/Leasw144)

[Jeff's Github page](https://github.com/JWoltjen)

### Acknowledgements

We would like to acknowledge our Module One instructors, [Leta Keane](https://github.com/letakeane), [Scott Ertmer](https://github.com/sertmer), and [Casey Delavalle](https://github.com/cbdallavalle) for their assistance and guidance through these core JavaScript concepts, as well as the other members of 2005FE cohort, who have made this difficult journey collegial, supportive, and inclusive.
