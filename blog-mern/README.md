# MERN-Blog

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Technology](#technology)
- [Features](#features)
- [Run](#run)

## Introduction

Introducing "Blog," a powerful web application developed using the cutting-edge MERN stack—consisting of MongoDB, Express.js, React.js, and Node.js. This comprehensive application offers an array of exciting features designed to enhance the blogging experience.

Blog allows both logged-in and unlogged users to access a wealth of content. Unlogged users have the privilege of browsing through the vast collection of blog posts, effortlessly navigating through various categories. With a simple click, they can delve into the detailed content of a specific post and explore the accompanying comments. Furthermore, unlogged users are provided with the option to sign up, granting them access to additional features.

For logged-in users, the experience is taken a step further. They can easily log in or log out of their accounts, ensuring a personalized journey through the application. By logging in, users gain the ability to create captivating blog posts, enabling them to share their thoughts and experiences with the world. Additionally, logged-in users have complete control over their posts, as they can conveniently view, edit, or delete their own creations.

With its intuitive interface and seamless user experience, Blog represents a remarkable application in the world of blogging. Whether you're an avid reader or a passionate writer, Blog offers an immersive platform that encourages interaction, engagement, and the sharing of ideas. Embrace the power of the MERN stack and unlock your potential in the world of blogging with Blog.

## Demo

![Image description](screenshot-1.png)

![Image description](screenshot-2.png)

<!-- This application is deployed on Heroku and can be accessed through the following link:

[MERN Blog on Heroku](https://mern-blog-01.herokuapp.com/)
 -->
## Technology

The main technologies used to build this application are:

- Node.js 
- MongoDB 
- Express.js 
- React.js 

## Features

A blog app with the following features.

Unlogged in users can do the following:

- View all posts.
- View one post's content by clicking on it.
- View post's comments.
- Signup.

In addition to the above points, logged in users can do the following:

- Login or logout.
- Create a new post.
- View/Edit/delete their posts.

## Run

To run this application (the master branch), You have to run the client and server together. First you have to clone the frontend part repository via this link [MERN-blog-frontend](https://github.com/goodelias/goodelias.github.io/tree/master/mern-blog-frontend). Since you have both parts of the project we can start set everything up to run the app.

**Backend**

Open the server part of the project and set your own environmental variables in the server root folder. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the server:

- MONGO_URI: this is the connection string of your MongoDB Atlas database.

- SECRET_KEY: you can provide any string here, it is used to encrypt the JWT authentication token.

- PORT: provide any port you want this application to run on

After you've set these environmental variables in the .env file at the root of the server folder, run "node index.js" to run the server.

**Frontend**

Open frontend part and run in the console "npm init" to set up an existing npm package. Then run "npm start" to start the client.

And now the application should start.
