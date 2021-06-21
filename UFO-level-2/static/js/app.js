// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var dateInputElement = d3.select("#datetime");

    var cityInputElement = d3.select("#city");

    var stateInputElement = d3.select("#state");

    var countryInputElement = d3.select("#country");

    var shapeInputElement = d3.select("#shape");

    // Get the value property of the input element
    var dateInputValue = dateInputElement.property("value");
    console.log(dateInputValue);

    var cityInputValue = cityInputElement.property("value");
    console.log(dateInputValue);

    var stateInputValue = stateInputElement.property("value");
    console.log(dateInputValue);

    var countryInputValue = countryInputElement.property("value");
    console.log(dateInputValue);

    var shapeInputValue = shapeInputElement.property("value");
    console.log(dateInputValue);

    // Filter data according to input
    var dateData = data.filter(sigthing => sigthing.datetime === dateInputValue);
    console.log(dateData);

    var cityData = data.filter(sigthing => sigthing.city === cityInputValue);
    console.log(cityData);

    var stateData = data.filter(sigthing => sigthing.state === stateInputValue);
    console.log(stateData);

    var countryData = data.filter(sigthing => sigthing.country === countryInputValue);
    console.log(countryData);

    var shapeData = data.filter(sigthing => sigthing.shape === shapeInputValue);
    console.log(shapeData);

    // Combine filtered data
    // var filteredData = 

    // // Clear current table body
    // d3.select("tbody").text("");

    // // Get a reference to the table body
    // var tbody = d3.select("tbody");

    // // Append table with filtered results
    // filteredData.forEach((ufoSighting) => {
    //     var row = tbody.append("tr");
    //     Object.entries(ufoSighting).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    // });
};