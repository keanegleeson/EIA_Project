// // this script populates the regions dropdown (I should probably get even more clever with this and have it scrape the region names at the url and populate it that way) code to scrape region names from the console is somewhere in the eia.js file
// function getRegion () {
//     var region = document.getElementById("region");
//     var regionValue = region.value;
//     var regionText = region.textContent;
//     console.log(regionText);
//     console.log(regionValue);
//     return regionValue;
//     // const chart = await chartIt();
// }

// let getEIA = async () => {
//     const xlabelsTemp = [];
//     const yValues = [];
//     const url = await getRegion();
//     console.log(url);
//     const response = await fetch(url);
//     const api_data = await response.json();
//     const series = api_data.series[0].data;
//     // console.log(series);
//     const rows = series?.length; //? optional chaining - checks if series exists
//     // series ? series.length: null; 
//     // const table = [];
//     for (i = 0; i < rows; i++) {
//         //Getting date field into a better date format
//         const rawDate = series[i][0];
//         const year = rawDate.slice(0, 4);
//         // console.log(year);
//         const month = rawDate.slice(5, 6);
//         const day = rawDate.slice(7, 8);
//         const hour = rawDate.slice(10, 11);
//         const formattedDate = year.concat('-', month, '-', day, ' ', hour, ':00');
//         // console.log(formattedDate);
//         // xlabels.push(series[i][0]);
//         xlabelsTemp.push(formattedDate);
//         yValues.push(series[i][1]);

//     }
//     const xlabels = xlabelsTemp.reverse();
//     // console.log(xlabels, yValues);
//     // var chart = chartIt();
//     return { xlabels, yValues };
//     // var chart = chartIt();

// }

// async function chartIt() {
//     const ctx = document.getElementById('chart').getContext('2d');
//     const data = await getEIA();


//     const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: data.xlabels,
//             datasets: [{
//                 label: 'Net Interchange (MWh)',
//                 data: data.yValues,
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 fill: false
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }

//         },
//         //plugins for zoom feature not working right now 10.25
//         plugins: {
//             zoom: {
//                 // Container for pan options
//                 pan: {
//                     // Boolean to enable panning
//                     enabled: true,

//                     // Panning directions. Remove the appropriate direction to disable
//                     // Eg. 'y' would only allow panning in the y direction
//                     mode: "xy"
//                 },

//                 // Container for zoom options
//                 zoom: {
//                     // Boolean to enable zooming
//                     enabled: true,

//                     // Zooming directions. Remove the appropriate direction to disable
//                     // Eg. 'y' would only allow zooming in the y direction
//                     mode: "xy"
//                 }
//             }
//         }
//     });
// }

// //everything above might be deleted, trying to see how this works if everythin is in the same js file
// window.onload = function () {
//             const regions = ["California (CAL)", "Carolinas (CAR)", "Central (CENT)", "Florida (FLA)", "Mid-Atlantic (MIDA)", "Midwest (MIDW)", "New England (NE)", "New York (NY)", "Northwest (NW)", "Southeast (SE)", "Southwest (SW)", "Tennessee (TEN)", "Texas (TEX)"];
//             //just pasting urls here for now, might make a function pass through to generate this array, but I'm worried it'll slow down my app
//             const urls = ["http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.CAL-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.CAR-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.CENT-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.FLA-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.MIDA-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.MIDW-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.NE-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.NY-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.NW-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.SE-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.SW-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.TEN-ALL.D.H", "http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.TEX-ALL.D.H"];
//             var select = document.getElementById("region");
//             var options = [];
//             var option = document.createElement('option');
//             chartIt();
//             const datasets = urls?.length;
//             // console.log(datasets);
//             for (i = 0; i < datasets; i++) {
//                 // option.text = option.value = i;
//                 option.text = regions[i];
//                 option.value = urls[i];
//                 options.push(option.outerHTML);
//             };
//             select.insertAdjacentHTML('beforeEnd', options.join('\n'));
//             chartIt();
//         }

//         function handleOnChange () {
//             // getRegion ();
//             chartIt();
//         }   
        