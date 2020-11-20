# EIA_Project
## Visualization of EIA datasets with JS

###### Using EIA's API and Chart.js to graph hourly data from EIA

This project was completed as part of the requirements for the Fall-2020 Code Louisville session focused on learning vanilla javascript. This page uses the fetch api to get data from the EIA and visualize it in a chart. The [Energy Information Administration (EIA)](https://www.eia.gov/opendata/qb.php?category=2122628) is the data source for the charts shown on this page. The charts in this application shows  Users may select different time scales, date ranges, and regions to view the data.

# Requirements Met
Requirement | Feature
------------ | -------------
Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app | JSON data retreived using fetch api and shown in a chart
Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX) | Data retreived from EIA's api
Visualize data in a graph, chart, or other visual representation of data | Chart.js used to visualize data in a line chart
Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams) | User can change between hourly, monthly, and annual views of the data

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
