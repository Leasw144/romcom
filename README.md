
---
# Exploring Class Constructors and HTML Elements:
> A JavaScript project by Linus Leas and Jeff Woltjen
>(Project webpage) (https://jwoltjen.github.io/romcom/)
---

![alt text] (https://turingschool.slack.com/files/URRHC6JJW/F01455JA7GR/screen_shot_2020-05-16_at_2.02.49_pm.png)

##Introduction

As part of the Turing School of Software and Design's Front-End Module One curriculum, we have created a website which uses HTML, CSS, and JavaScript together to display randomized data (Cover image, title, and two descriptors) from a database, provide the user an option to save their favorite combinations, and allow the user to customize their own romance novel like the one we have linked above.

##Features

1. Randomize Cover

<a href="http://recordit.co/" target="https://recordit.co/4YrD3EsLRr">**Recordit**</a>

Using a constructor function, The Randomize Cover function will generate a new cover from the Cover class, which consists of four properties:
''* The cover image
''* The title
''* The first descriptor
''* The second descriptor

2. Make Your Own Covers

<a href="http://recordit.co/" target="https://recordit.co/fkeTODu4be">**Recordit**</a>

Using the Cover class, the Make My Own Cover function will grab input from any image, using .src and .value, while title, descriptor one and descriptor two take user input and display that input using .value and .innerText. Together, these inputs are then displayed on the sreen.

3. Saving Unique Covers

<a href="http://recordit.co/" target="https://recordit.co/CZgJedT4sI"> **Recordit**</a>

The Save Cover function checks for duplicates within the savedCovers array. If there are no duplicates, it will push the saved cover into the savedCovers array, and display the associated data onto the Saved Covers Section. If the cover has already been saved, it will alert the user.

##Core Concepts

1. Class Constructors

2. querySelector

3. Event listeners

4. Looping through arrays

5. Accessing data through arrays

6. .src, .value, and .innerText

###About the Developers

[Project repository](https://github.com/Leasw144/romcom)

[Linus's Github page](https://github.com/Leasw144)

[Jeff's Github page](https://github.com/JWoltjen)

###Acknowledgements

We would like to acknowledge our Module One instructors, [Leta Keane] (https://github.com/letakeane), [Scott Ertmer] (https://github.com/sertmer), and [Casey Delavalle] (https://github.com/cbdallavalle) for their assistance and guidance through these core JavaScript concepts, as well as the other members of 2005FE cohort, who have made this difficult journey collegial, supportive, and inclusive.
