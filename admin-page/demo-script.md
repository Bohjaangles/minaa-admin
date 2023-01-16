# intro
Good afternoon everyone! It's a pleasure to have you here today, our project is a mobile app called Minaa.

We wanted to demonstrate our ability to learn and use different tech stacks, and to use these technologies to make a practical difference in the world. This was a risk, and we are confident it has paid off!

Therefore, we present to you our mobile app and its supporting browser admin page. The app, which is the main focus of our project, offers Minaa users the ability to view a map of possible landmine locations and submit reports.

Supporting this, the admin page provides Minaa admin users with meta data about all user reported data and users, and some visualizations to make reading it easier. 

In terms of the technology stack, we used React-native, React, GraphQL and Apollo to interact with our PostgreSQL database, and Prisma Studio to manage our schema.  We also amde use of react-native-paper and Material UI libraries.

# Walkthrough
## walkthrough part 1

Let's now take a walkthrough of the features of this app.

Let's open up the app and start on the Map Page. Here, you can quickly zoom in and out to see what's happening in your area. 

You wil notice at the top portion of the screen, we have a handy carousel that provides information on nearby reports, including distance from current location and their respective status.

Let's click on one of the pins. This will bring up a callout which shows more detailed information about the report. We can click on the callout to bring up the Report Detail Screen. 

On the Report Detail Screen, you'll find all the details about the report. This includes things like the severity of the report, the date it was reported, and more.

Back to the map, let's try and make our own report. 

## walkthrough part 2

First, we need you to login to the app so that you can access the full set of features. When you open the app, you'll be taken to the start page. 

Here, you can take a look at the register page, but you'll need to go back to the login page to actually log in. Once you're on the login page, you can try entering incorrect credentials, and you'll see that the app won't let you through. You'll receive an error message, so make sure to enter the correct credentials. 

After you've logged in, you'll be taken to the map page. Here you can see the full range of features available to you.

## Walkthrough part 3

To make a new report, simply long press the map. From there, you'll be prompted to fill out the details of your report. 

This includes providing a unique picture for your report, as well as any other information that may be relevant. 

We've made sure that the process of entering the details is as straightforward as possible, so you can quickly and easily make a report anytime, anywhere.

## Walkthrough part 4

Next let's take a loook at the profile page. First, let's take a look at the current user submitted reports at the top of the profile page. As you can see, it's an easy to navigate carousel, so you can easily flip through the reports you've submitted. 

Now let's take a look at the saved reports page. Here, you can view all the reports you've saved for later viewing. 

Finally, let's check out the settings page. Here, you can make some changes to the app, like turning on dark mode.

## Walkthrough part 5

We understand that landmines are a dangerous business, and so we have created a resources page to give our users quick and easy access to key resources about the situation and best practices.

To show you how it works, let's take a look. First, we'll open up the resources page. As you can see, this contains general information about landmines and best practices for laypeople. These are carefully curated by our administrators for even more detailed information about landmine safety.

## Walkthrough part 6 - browser

We are now going to take a look at our browser-based webpage for Admin users. This page is called 'Minaa Analytics' and it is a powerful tool for Admin users to quickly and easily view data about their users and reports made through the Minaa app. 

As an Admin user, you will be able to login and have access to a wide variety of data. You can easily flip through switches to toggle between which data sets you want to view. With Minaa Analytics, you can have access to data such as user activity, report trends, and more. With this data, you can make informed decisions on situations as they arise

## Walkthorugh part 7 - backend

Next we will talk about our backend and the powerful tech stack behind it. We're leveraging the strengths of GraphQL to provide a reliable, high-performance backend for our mobile application. 

GraphQL is a query language that allows us to define a data schema and access it from our mobile app. We have implemented an Apollo Server to handle our GraphQL queries and mutations. With Apollo Playground, we can quickly test out our GraphQL queries and view the results. 

We also used Prisma to interact with our PostgreSQL database. Prisma Studio provides a graphical interface to our database and allows us to quickly design and modify our schema. We can also use the Prisma schema to automatically generate GraphQL types and fields. 

Our tech stack gives us the power to quickly and easily create a reliable backend for any application. Thanks to GraphQL, we can adapt our app to any mobile platform, while still maintaining a high performance.

## Wrap up

This brings us to the conclusion of our demo, at the beginning of this project, we sought to create a mobile application from scratch using React-Native and GraphQL. We had to learn these technologies from the ground up and implement them in order to create a cross-platform experience.  

We experienced many challenges along the way,  managing tech debt and ensure that the app was scalable and reliable. Despite these challenges, we are proud of the features our app offers. 

Our app allows users to make reports, view their profiles, and access an admin web page. In the future, we plan to implement more features to make the app even better. 

This includes admin approving certain user actions and privileges, as well as offline capabilities. We also want to implement features such as user comments on other users reports and fully utilizing mobile device features such as the camera. 

We hope you enjoyed our demo and look forward to hearing your feedback. Thank you.