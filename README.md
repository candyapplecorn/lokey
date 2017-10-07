# lokey
### LoKey implements the Google Maps API and React native to create a location-aware app for connecting strangers

## Background and Overview

## Functionality & MVP

#### Bonus Features

## Technologies & Technical Challenges
  ##### Backend: Ruby on Rails
  ##### Frontend: React Native

#### Composing a dataset
  + ##### Accessing song data
    + 'Million Song Dataset' has produced a publicly available dataset from Last.fm, which contains songs and genre tags. We may be able to extract the meta-data we need for building out a list of training songs directly from this dataset
    + Regardless, we can use the Last.fm API to determine 20-30 top tags that we feel adequately covers a wide range of genres. We will use SQL queries on the MSD, or API calls by tag-name to Last.fm to get a robust list of tracks with which to train our model

  + ##### Feature Extraction
    + Using this list of song titles and tags, we will stream 30-second clips of songs from the Spotify API into our Feature Extraction module
    + Our Feature Extraction module will implement the pyAudioAnalysis Library to extract a variety of features of the audio into a multi dimensional vector which, along with the corresponding genre tag, will constitute an entry into our training dataset

#### Constructing the neural network
  + ##### Building the network
    - Powerful tools are available for the construction of neural networks, including the Tensorflow library, as well as several detailed tutorials for building and training a neural network
    - We intend to build a 3- to 4-layer neural network with an input dimensionality equal to the number of audio features we extract, and an output dimensionality equal to the number of genres we select as possibilities
  + ##### Determining the fitness function
    - We intend to use the softmax linear regression optimizer to judge the fitness of outcomes
  + ##### Training and validating the model
    - Once the network is constructed and dataset established, it is somewhat trivial to train the model
    - Validation will be done with a subset of our dataset, and by subjective judgement

#### UX
  + ##### Frontend Interface
    - We will implement calls to Spotify search to populate an autosuggest field to allow users to select a song to evaluate
    - We will send the songId to the backend and then receive genre results for user evaluation
    - There will be some sort of animation or information pop-up to occupy the user while waiting for results.

  + #### Backend
    + Our backend will be a standard Django build that will be able to receive urls from the frontend when the user selects a song
    + The backend will make a request for the 30-preview of the song from Spotify and load it into a buffer
    + The audio features will be extracted from the buffer, and a test object created and fed into the NN
    + The results of the NN will be sent back to the frontend

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
 
