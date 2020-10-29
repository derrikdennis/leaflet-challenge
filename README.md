# Visualizing USGS Data - Leaflet Challenge <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->
- [Background](#background)
- [Your Task](#your-task)
  - [Obtain the latest information from USGS](#obtain-the-latest-information-from-usgs)
  - [Import & Visualize the Data](#import--visualize-the-data)
- [Results](#results)

## Background

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Your Task


### Obtain the latest information from USGS

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Select the dataset for the past 7 days.  Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

### Import & Visualize the Data

   Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

   - Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

   - Include popups that provide additional information about the earthquake when a marker is clicked.

   - Create a legend that will provide context for your map data.


## Results

Here is a look at what the results of step 1 look like with the past 7 days of information from the USGS


![step1](Images/Leaflet_Step1_Results.jpg)




For the most accurate step 1 results, please go to [here](Leaflet-Step-1/index.html)