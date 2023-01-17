# Personal Intros
<!-- No screenshare, just our cameras on -->
<!-- Hi, my name is ** and I'm a developer with a background in ** -->
<!-- Hi, my name is ** and I'm a developer with a background in ** -->
 - BEN. - Hi my name is Ben, I am a web developer with a background of Graphic design and Engineering.

 - RUSSEL - hi, my name is Russel,   I am a web developer with a background in private business

 - JAE - Hi, my name is Jae and I'm a full stack developer with a background in psychology and the military.

As developers we want to use technologies to solve problems. I used to be a landmine technician in the army and this provided inspiration to address a prescient problem in our world today: 

Landmines and unexploded ordinance has been and continues to be a big issue for everyday people all over the world and given the current global situation we thought this a perfect opportunity to apply what we've learned in this bootcamp to this problem.

# Intro
<!-- Screenshare -->
Thank you for being here. We are excited to introduce our mobile app, Minaa.

We wanted to demonstrate our ability to learn and use different tech stacks, and utilise these technologies to make a practical difference to everyday people. This was a risk, and we are confident it has paid off!

And so, we present to you our mobile app and its supporting browser admin page. The app, which is the main focus of our project, offers Minaa users the ability to view a map of possible landmine locations and submit reports.

Supporting this, the admin page provides Minaa administrators with meta data about reports and users along with helpful visualizations. 

<!-- Powerpoint with Techstack Display -->
In our front end, we used Paper and Material UI on top of React-native and React, and in our backend we used GraphQL with Apollo Server and the Prisma ORM to interact with our PostgreSQL database.

# Walkthrough
## walkthrough part 1

<!-- Open up app screen share -->
 - BEN - Let's now take a walkthrough of the features of this app.

When we open the app to the Map Page. Here, you can quickly zoom in and out to see what's happening in your area. 

You will notice we have a handy carousel that provides information on nearby reports, including their status and distance from your current location.

Let's click on one of the pins. This will bring up a callout which shows basic information about the report. We can click on the callout to bring up more details. 

The Report Detail Screen displays things like the status of the report, the date it was reported, and more.

Back to the map, let's try and make our own report. 

## walkthrough part 2

//  Sylvia.Tremblay40@hotmail.com
//  CFPvtRPId
//  CFPvtRPIdwDYKv7

Oops, you need to login to the app so that you can access the full set of features.

Let's take a look at the register page, but you'll need to go back to the login page to actually log in. 

Once logged in you'll be taken to the main page again.

## Walkthrough part 3

To make a new report, simply long press on the map. From there, you'll be prompted to fill out the details of your report. 

We've made sure that the process of entering the details is as straightforward as possible, so you can quickly and easily make a report anytime, anywhere.

## Walkthrough part 4

Next let's take a look at the profile page. We see all of our user's reports at the top of the  page in an easy-to-navigate carousel. 

Clicking on "Saved" will bring up a Bottom Sheet where you can view all the important reports you've saved. 

Finally, on the settings page you can toggle options for the app, like dark mode.

## Walkthrough part 5

 - RUSSEL - Landmines are dangerous and upredictable by nature, and so we have created a resources page to give our users quick and easy access to key resources about these kinds of situations and best practices.

Let's take a look. First, we'll open up the resources page. Today, this page only contains general information about landmines for demonstration purposes. In deployment, these can be curated by our administrators to provide even more up to date and detailed safety information for our users.

## Walkthrough part 6 - browser

<!-- Screen share the browser, close the mobile app -->
We are now going to take a look at our browser-based webpage for administrators called 'Minaa Analytics'. It is a powerful tool to quickly and easily view data about Minaa users and reports made through the app. 

As an administrator, you will be able to login and have access to a wide variety of data. You can easily toggle which data sets you want to view. With Minaa Analytics, you have access to data such as user activity, report trends, and more to enable administratores to make informed decisions on situations as they arise.

## Walkthorugh part 7 - backend

<!-- Apollo Playground -->
 - JAE - Next we will talk about our backend and the powerful tech stack behind it. We're leveraging the strengths of GraphQL to provide a reliable, high-performance backend for our mobile application. 

GraphQL is a query language that allows us to define a data schema and access it from our mobile app. We implement this through Apollo Server, and with Apollo Playground, we can quickly execute our GraphQL queries and view the results. 

<!-- Slide for Prisma (schema) -->
Our GraphQL API employs Prisma to communicate with our PostgreSQL database. Prisma allowed us to quickly iterate and evolve our database and GraphQL resolvers throughout the development process. 

Though GraphQL was a large initial investment, our tech-stack empowered us to create a reliable and extensible backend for cross-platform capabilities.

## Wrap up
<!-- Slide for conclusion -->
 - RUSSEL - This brings us to the conclusion of our demo.

When we began this project, we sought to create a cross-platform application from scratch using technologies like React-Native and GraphQL. Though we had to learn these technologies from the ground up, we were able to leverage them in a meaningful way.

We experienced many challenges such as managing tech debt and ensuring that the app embodied our core features. Despite these challenges, we are proud of the what our app offers. 

<!-- Screen shot of admin and mobile pages -->
As we neared the end of our development timeframe, we wanted to make our app even more robust and feature-rich. This includes linking user actions and privileges to admin approval, offline map capabilities, user comments on reports, and fully utilizing mobile native features such as the camera and haptic responses. 

We hope you enjoyed our demo and look forward to hearing your feedback. 

<!-- Thank you Page: Github tags/linkedin -->
We are Minaa, thank you.