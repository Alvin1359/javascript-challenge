# JavaScript and DOM Manipulation Challenge - UFO Sightings
Build a web application that returns a table listing all UFO sightings based on one/multiple filters.
## Project structure
```
project  
|__ UFO-level-2/                     # contains level one script
|                |_ static/            # contains web page html
|                          |_ css/       # contains css files
|                          |_ images/    # contains image files
|                          |_ js/        # contains javascript files
|
|__ UFO-level-2/                     # contains level two script
|                |_ static/            # contains web page html
|                          |_ css/       # contains css files
|                          |_ images/    # contains image files
|                          |_ js/        # contains javascript files
|
|__ README.md                        # Readme file
```


## Level 1 - Automatic Table and Date Search
- Using the dataset, write code that appends a table to the page and the nadds new rows of data for each UFO sighting
- Each row has the columns `date/time`, `city`, `state`, `country`, `shape`, and `comment`
- Use JavaScript event listners to listen for events
```
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
```
- Filter the data according to the inputted `date/time`
```
// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

// Filter data according to input
var filteredData = data.filter(sigthing => sigthing.datetime === inputValue);
```
- Appending filtered data to page
```
if(filteredData.length == 0) {
    alert("No results found for current filters");
}
else {
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
```
## Level 2 - Multiple Search Categories
- Completing the same as above except adding additional user filters for `date/time`, `city`, `state`, `country`, and `shape`
- Find value of user filters
```
// Select the input element and get the raw HTML node
var dateInputElement = d3.select("#datetime");
var cityInputElement = d3.select("#city");
var stateInputElement = d3.select("#state");
var countryInputElement = d3.select("#country");
var shapeInputElement = d3.select("#shape");

// Get the value property of the input element
var dateInputValue = dateInputElement.property("value");
var cityInputValue = cityInputElement.property("value");
var stateInputValue = stateInputElement.property("value");
var countryInputValue = countryInputElement.property("value");
var shapeInputValue = shapeInputElement.property("value");
```
- Filter the data according to the user filters
```
var filteredData = data.filter(sigthing => sigthing.datetime === dateInputValue 
    && sigthing.city === cityInputValue
    && sigthing.state === stateInputValue
    && sigthing.country === countryInputValue
    && sigthing.shape === shapeInputValue);
console.log(filteredData);
```
- Appending filtered data to page
```
if(filteredData.length == 0) {
    alert("No results found for current filters");
}
else {
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
```
