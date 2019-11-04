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
    let inputElement = d3.select("#searchkey");

    // Select the selected element
    let searchType = d3.select("#searchtype").property("value");

    // Get value prop. of input element
    let inputValue = inputElement.property("value");

    // Return total data set
    console.log('input: ' + inputValue);
    // Return filtered data set
    console.log('full dataset size: ' + tableData.length);

    // Filter data based on date/time of sighting
    let filteredData = tableData.filter(sighting => sighting[searchType] === inputValue);
    console.log('filtered dataset size: ' + filteredData.length);
    
    // Remove any sightings from the tbody
    tbody.html("");

    // Repopulate table rows
    filteredData.forEach((sighting) => {
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
});