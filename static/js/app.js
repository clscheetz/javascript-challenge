// from data.js
const tableData = data;

// Create data to sort UFO sightings
const tbody = d3.select("tbody");

tableData.forEach((sighting) => {
    console.log(sighting);

    // Add 'tr' for each sighting
    const tr = tbody.append("tr");

    // Use Object.entries to console for each sighting
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);

        // Add values to each table cell
        tr.append("td").text(value);
    });
});

// Select the button
const button = d3.select("#filter-btn");

button.on("click", function() {

    // Select input element
    let inputElement = d3.select("#datetime");

    // Get value prop. of input element
    let inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // let filteredData = tableData.filter(sighting => sighting.datetime == inputValue);
    });