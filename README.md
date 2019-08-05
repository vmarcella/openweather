# Openweather API takehome project

![GitHub repo size](https://img.shields.io/github/repo-size/C3NZ/openweather?style=plastic)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/C3NZ/openweather?style=plastic)
![GitHub issues](https://img.shields.io/github/issues/C3NZ/openweather?style=plastic)
![Twitter Follow](https://img.shields.io/twitter/follow/xC3NZ?style=social)

## Description

This application is a simple api that allows users to retrieve the weather for any city and
then fill in their mood for said weather in the city.

## Resources

[Openweather]('https://openweathermap.org/')

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [getWeatherByCity](#getweatherbycity)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
-   [getWeatherByID](#getweatherbyid)
    -   [Parameters](#parameters-1)
    -   [Examples](#examples-1)
-   [getWeatherByZipCode](#getweatherbyzipcode)
    -   [Parameters](#parameters-2)
    -   [Examples](#examples-2)
-   [getWeatherByName](#getweatherbyname)
    -   [Parameters](#parameters-3)
    -   [Examples](#examples-3)
-   [getWeatherById](#getweatherbyid-1)
    -   [Parameters](#parameters-4)
    -   [Examples](#examples-4)
-   [getWeatherByZip](#getweatherbyzip)
    -   [Parameters](#parameters-5)
    -   [Examples](#examples-5)
-   [handleRequest](#handlerequest)
    -   [Parameters](#parameters-6)
-   [getMoods](#getmoods)
    -   [Parameters](#parameters-7)
    -   [Examples](#examples-6)
-   [getMood](#getmood)
    -   [Parameters](#parameters-8)
    -   [Examples](#examples-7)
-   [getMoodsByCity](#getmoodsbycity)
    -   [Parameters](#parameters-9)
    -   [Examples](#examples-8)
-   [postMood](#postmood)
    -   [Parameters](#parameters-10)
    -   [Examples](#examples-9)

### getWeatherByCity

Get the weather by city name through the query parameters

#### Parameters

-   `req`  The express Request context
-   `res`  The express Response context

#### Examples

```javascript
GET /api/v1/weather/city?city=San Francisco&country=us -> {SF weather data}
```

Returns **any** A JSON response

### getWeatherByID

Get the weather by id through the query parameter: id

#### Parameters

-   `req`  The express Request context
-   `res`  The express Response context

#### Examples

```javascript
GET /api/v1/weather/id?id=5391959 -> {SF weather data}
```

Returns **any** A JSON response

### getWeatherByZipCode

Get the weather by city name

#### Parameters

-   `req`  The express Request context
-   `res`  The express Response context

#### Examples

```javascript
GET /api/v1/weather/zip?zip=94102&country=us -> {SF weather data}
```

Returns **any** A JSON response

### getWeatherByName

Get the weather by the city name and the country

#### Parameters

-   `cityName`  
-   `country` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The country for the city (optional, default `"us"`)
-   `cityName-null` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The zip code for the city

#### Examples

```javascript
weather.getWeatherByName("San Francisco", country="us") -> {SF weather data from OW}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the weather object containing weather data about the particular
area.

### getWeatherById

Get the weather by the city ID

#### Parameters

-   `cityID` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The city ID for the city

#### Examples

```javascript
weather.getWeatherById(cityId) -> {City ID weather from OW}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the weather object containing weather data about the particular
area.

### getWeatherByZip

Get the weather by the zipcode and country

#### Parameters

-   `zip` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The zip code for the city
-   `country` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The country for the city (optional, default `"us"`)

#### Examples

```javascript
weather.getWeatherByZip(94102, country='us') -> {SF weather data from OW}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the weather object containing weather data about the particular
area.

### handleRequest

Contact the openweather api to get weather data

#### Parameters

-   `url`  
-   `url-null` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The endpoint url with query strings attached to make a request to.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the weather object containing weather data about the particular
area.

### getMoods

Get all the moods ever stored on the server

#### Parameters

-   `req`  The Express request context
-   `res`  The Express response context

#### Examples

```javascript
GET /api/v1/moods -> {Mood object}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** All of the stored mood data about cities

### getMood

Get all the moods ever stored on the server

#### Parameters

-   `req`  The Express request context
-   `res`  The Express response context

#### Examples

```javascript
GET /api/v1/mood/:moodId -> {Mood object}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The mood object for the requested mood object

### getMoodsByCity

Get all the moods ever stored on the server

#### Parameters

-   `req`  The Express request context
-   `res`  The Express response context

#### Examples

```javascript
GET /api/v1/moods/city?city=San Francisco -> [{List of mood objects}]
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the mood of an object for a particular city

### postMood

Send a mood about a city to the server

#### Parameters

-   `req`  The Express request context
-   `res`  The Express response context

#### Examples

```javascript
POST /api/v1/moods?city=San Francisco { mood: "Happy"} -> {Mood object}
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The created mood object with information about the weather
