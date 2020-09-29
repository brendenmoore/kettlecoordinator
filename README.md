# Kettle Coordinator
Capstone Project for Liftoff - Volunteer management software for the Salvation Army

### Overview
The Kettles Coordinator app serves as an administrative tool for the Salvation Army's annual Red Kettle fundraising campaign. Each year, the Salvation Army raises money for its charity services by stationing the iconic red kettles and bell ringers outside of stores during the holidy season. In large areas such as Tampa, there are a lot of logistics involved when dealing with hundreds of stores, kettles, and bell ringers. 

This app allows organizers of this campaign to register bell ringers, create routes with store locations, and assign bell ringers to these locations. This app comes from my own experience working as an assistant kettles coordinator and my desire to solve routine scheduling problems more efficiantly.

### Features
1. *Create Ringers*: The coordinater can create and update a list of everyone who is signed up to ring bells. Phone numbers can be included with each ringer for convenience.
2. *Create Locations*: A list of store locations containing the name of the store and the street address.
3. *Create Routes*: The user can group locations into routes, which are simply a list of locations in a particular order. These routes are used for coordinating drop-off and pick up of ringers and kettles.
4. *Create a new Sheet*: A sheet (maybe I can think of a better name for it) contains a list of routes and is tied to a specific date.
5. *Sign in Ringers*: In the currrent sheet, the coordinator can sign-in any number of ringers to designate those people as available for assignment.
6. *Assign Ringers to Locations*: Ringers that have been signed in can be added to a specific location to designate that they will be working at that site on any given day. The app should highlight or prevent the following common errors:
    - Double booking a ringer (ask the user if they would like to change the currently assigned location to the new one)
   - Assigning a ringer that has not been signed in (ask the user if they would like to automatically sign in this ringer)
   - Assinging two ringers to one location will not be possible
7. *Record start time, end time, and earnings for each location on the sheet

### Technologies
Backend:
- Java
- Spring Boot
- MySQL
- Hibernate

Frontend:
- Typscript
- Angular

### What I'll Have to Learn
- Using Auth0 for authentication
- Creating REST APIs
- Hosting the database and deploying the frontend using cloud services

### User Stories
[User Stories Link](https://docs.google.com/document/d/1L_-yorWdI5OCi5Fo3ab7mfZoWJJUjsVqM3X1StGX3js/edit?usp=sharing)

### Project Tracker
[Trello Board Link](https://trello.com/b/DY0blRUP/kettles-coordinator-app)
