# Metrichor Challenge

The purpose of this exercise is to create a live weather report for a given location.

## What you need to do

1. Signup to [OpenWeatherMap](https://openweathermap.org) to get a free API key

   - You will need to use the [current](https://openweathermap.org/current) API call for this exercise

2. Install and run the provided server

```
    npm install
    npm start
```

or if you are using yarn:

```
    yarn
    yarn start
```

3. Complete all the TODOs. Search for 'TODO:' to quickly find them. They all live in the current directory. They are also summarised below:
   (a) In `main.js`:

   - Write some code to show fetch weather from the OpenWeatherMap API given a location as input
   - Take a user provided location (city name) and fetch the weather for it
   - Fetch updated weather every 1 minute
   - Count down the number of minutes and seconds till the next refresh
   - Convert the temperature from Kelvin to degrees Celcius
     (b) In `index.html`:
   - Write the necessary HTML to capture a user provided location
   - Format the data obtained from the API response
   - Show how many minutes and seconds remain till the next update
     (c) In `weather.css`:
   - Write the necessary styles to create an interface as close to the spec (see [data/spec.png](./data/spec.png))
     (d) In `main.test.js`:
   - Write at least one test for your code

4. Write tests to test your code. An example can be found for each component in '\*.test.js' files. To run your tests:
   `npm test`
   or
   `yarn test`
5. _You should deliver your solution as a `git` repository, preferably hosted on GitHub._

## Things you should know

1. You may NOT use sass/scss styles.
2. You will use jQuery for all DOM manipulation and data fetching. Sample response data is provided in /data/weather.json. You can view this file but you can't change the data in it.
3. You may not use any other external or third party libraries in your solution
4. You should produce an interface as close to that in [data/spec.png](./data/spec.png)
5. Please read familiarise yourself with our [disclaimer](./DISCLAIMER.md)

## What we are looking for:

1. Correctness (you write code that does what it's supposed to do)
2. Readability (you clean/lint your code)
3. Good code design (you demonstrate code re-use)

## Libraries:

You may not use any external libraries
