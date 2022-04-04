# Contact Solution

**ContactSolution** is an app that I designed to help keep track of your contact lens usage. This was an everyday little problem that I wanted a long term solution for.

I wanted a tracker that updated automatically, and would alert me when it was time to replace my contacts or contact case. I would only need to access the app to update the counter for days I wore glasses, or accidentally fell asleep wearing contacts.

## Table of Contents

- [Overview](#overview)
    - [Application Breakdown](#application-breakdown)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Application Breakdown

Currently, the application is still in development, but you will soon be able to:

- Separately track the days of each contact lens use. Sometimes you may have to toss one contact out, and keeping track of two different lenses is an annoying task.

- An alert will be sent when your contacts have been worn 30 days, and should be replaced, prompting you to reset.

- Track the number of days your current contact case has been in use.

- An alert will be sent when your contact case has been in use for 90 days and should be replaced.

- This alert for now is just being sent from the browser. But I would like to implement and email/text alert. Which will let you refresh the counter by replying 'yes' when prompted.

- When starting with new lenses or a case, you can reset the counters for your left, and right contact. As well as for the contact case. 

- In addition to resetting the counter, you can subtract a day from the counter when you wear glasses, or add a day when you accidentally sleep in them :( .

- Soon, this app may implement the ability to track specific data, so each user can access the number of days that contacts were worn, glasses were worn, etc. 



### Screenshot

![Mobile Layout](./images/screenshot.png)

### Links

- [Github Repo](https://github.com/JohnMichaelD/contact-Solution)
- [Live Site](https://johnmichaeld.github.io/contact-Solution/)
- [Adobe XD Design](https://xd.adobe.com/view/e9bca82e-e203-45c7-b8b0-aa42c39eb9ba-bcef/?fullscreen)

## My Process

### Built With

- CSS custom properties
- Semantic HTML5 markup
- JavaScript
- Mobile-first Design principals
- Adobe XD
- Animate.CSS animations

### What I Learned

I am learning quite a lot from this project. 

###### Issues I've come across:

- querySelector kept coming up as null, solved by adding 'defer' to JS script tags. 

### Continued Development

This project is a fantastic learning roller coaster as I bring my design to life! Here's what I'm currently working on for this project:

- ###### JavaScript
    As development is ongoing, I will be adding more interactivity &  such as:
    - a calendar start date, which the counter(s) use as the starting reference point
    - counters are currently loaded as the browser loads and can't be saved
    

- ###### CSS custom properties
    - Currently all of the icons in the application are image source files from the XD design files. I would like to spend some time to create them purely in CSS.
    - Currently the Alert/Bell Icon, menu list, and contact case still need to be updated.
    - Design and implementation of side menu page that rolls out
    - The glasses & slept buttons need icons added.
    - Multi-browser design

- ###### Backend Development
    - cached data to keep track of the counters for multiple users
    - data tracking for multiple users information stored in a database
    - SQL

### Useful resources

- [Counter](https://dev.to/stewyearth/making-a-simple-counter-in-javascript-html-2ici)

- [defer](https://stackoverflow.com/questions/20495960/document-queryselector-is-null-error)
- [defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer)

- [Time](https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock)

- [Animate.CSS](https://animate.style/)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [.getDate](https://bobbyhadz.com/blog/javascript-typeerror-date-getdate-is-not-a-function)


## Author

- Website - [JMD](https://www.johnmdarrin.com)