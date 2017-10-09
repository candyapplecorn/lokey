# lokey
### LoKey implements the Google Maps API and React native to create a location-aware app for connecting strangers

## Background and Overview
LoKey is a social peer-to-peer meetup app utilizing React Native that allows users to connect with one another to participate in low-key activities in their local area. LoKey is designed specifically with obscure and underappreciated hobbies and activities-- as well as their participants-- in mind, allowing users to come together, make new connections, and create memorable experiences doing things they enjoy with other likeminded people who enjoy them too.

## Functionality & MVP
Utilizing Google Maps API, users will be able to view and search for various activities taking place in their area.

### MVPs
* Secure frontend-to-backend user authentication using BCrypt
* Display map through Google API of local area
* Display activites on map; allow users to create / join activites
* Search / filter events

#### Bonus Features
 + User-requested activity types
 + In-app event-oriented chat system

## Technologies & Technical Challenges
  ##### Backend: Ruby on Rails
  ##### Frontend: React Native

#### Seeding the Database
  + ##### Whitelisting Activities
    + LoKey is not a dating app. Users should not be able to post activities like "m4w 19y/o bbw pref". LoKey will initially have common activities, after which more will be added. Common activities may be like:
     - Catch
     - Sculpting
     - Painting
     - Unicycling
     - Banana Juggling

  + ##### Initial Events
    + The creators will place activities on the app's map.

#### Map
 + We will use Google Map's API
 + AirBnB has a [React Google Maps](https://github.com/airbnb/react-native-maps) component which may be used.

#### Creating a seamless mobile experience
  + ##### _Including bonus MVP's_, users should be able to place & find events, and coordinate with **event hosts**, all using the app.
    + Without bonus MVP's, users should be able to place and find events, and have a means of contacting event hosts.


#### Frontend Interface
  + Implemented in React Native
  + There will be 5+ scenes including:
    - Account Creation / Signup
    - Event Creation / Edit
    - Event Show
    - User Dashboard
    - Map
  + These scenes entail creating forms in React native, as well as a filter/search bar and navbar components.

#### Backend
   + Ruby on Rails with PostgreSQL will store:
     - User information
     - Events with coordinates to be displayed on a map
     - Event Types, conceptually similar to tags

## Project Flowchart

## Accomplished over the Weekend

## Group Members & Work Breakdown

**Sunayna Bhikha**,
**Joseph Bieze**,
**Joseph Burger**,

### Day 1

### Day 2

### Day 3

### Day 4

### Day 5

### Day 6
