// LG&E url - http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.EEI-LGEE.ID.H

//California day ahead - http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.CAL-ALL.D.H

//Get all regions' data and add either a dropdown add option to the chart or a dropdown that generates one chart for the regions

//URL for datasets - http://api.eia.gov/category/?api_key=9efbf856649057f0dc4c8269b27d938c&category_id=2122628
//http://api.eia.gov/category/?api_key=${api_key}&category_id=2122628

//URL brings you to all  categories - will want to narrow by the arrray of region names
//Each region category has series listed for Hourly UTC and hourly Local (we'll use UTC, should be first series ID available for all)


/*Got the list of regions using this code
function getElementByXpath(path) {
return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log( getElementByXpath("/html/body/div[1]/div/section/div/div/div[3]/div[1]/ul/li[2]/ul") );

var c = getElementByXpath("/html/body/div[1]/div/section/div/div/div[3]/div[1]/ul/li[2]/ul").children;

var list = [];

var i;

for (i = 0; i < c.length; i++) {
list.push(c[i].textContent);
}
console.log(list);

["California (CAL)", "Carolinas (CAR)", "Central (CENT)", "Florida (FLA)", "Mid-Atlantic (MIDA)", "Midwest (MIDW)", "New England (NE)", "New York (NY)", "Northwest (NW)", "Southeast (SE)", "Southwest (SW)", "Tennessee (TEN)", "Texas (TEX)"]
*/


//Turning this array of regions into an object
// const regions = ["California (CAL)", "Carolinas (CAR)", "Central (CENT)", "Florida (FLA)", "Mid-Atlantic (MIDA)", "Midwest (MIDW)", "New England (NE)", "New York (NY)", "Northwest (NW)", "Southeast (SE)", "Southwest (SW)", "Tennessee (TEN)", "Texas (TEX)"];

//defining function to convert array into object - may not be neccessary?
// var listOfObjects = [];
// var regions = ["California (CAL)", "Carolinas (CAR)", "Central (CENT)", "Florida (FLA)", "Mid-Atlantic (MIDA)", "Midwest (MIDW)", "New England (NE)", "New York (NY)", "Northwest (NW)", "Southeast (SE)", "Southwest (SW)", "Tennessee (TEN)", "Texas (TEX)"];
// regions.forEach(function(entry) {
//     var singleObj = {}
//    // singleObj['type'] = 'name';
//     singleObj['name'] = entry;
//     listOfObjects.push(singleObj);
// });

// console.log(listOfObjects);


const api_key = '9efbf856649057f0dc4c8269b27d938c';

// const url = `http://api.eia.gov/series/?api_key=${api_key}&series_id=EBA.EEI-LGEE.ID.H`; -> LG&E url used in first run (not being used in next iteration as we are searching by region)


// const categoryUrl = `https://api.eia.gov/category/?api_key=${api_key}&category_id=2122628`;


// const getCategories = async () => {
//     const response = await fetch(categoryUrl);
//     const categoryJSON = await response.json();
//     const childcategories = api_data.category[0].childcategories;
//     console.log(childcategories);
  
//   }



// let url = `http://api.eia.gov/series/?api_key=${api_key}&series_id=EBA.CAL-ALL.D.H`;
// const url = getRegion();
// var time = document.getElementById("time");
// var timeValue = time.value;
// console.log(timeValue);

// 2020 02 28 T03 Z
// [0-4] - [5-6] - [7-8] - [10-11]

// console.log(url);

const getEIA = async () => {
    const xlabelsTemp = [];
    const yValues = [];
    const url = await getRegion();
    console.log(url);
    const response = await fetch(url);
    const api_data = await response.json();
    const series = api_data.series[0].data;
    // console.log(series);
    const rows = series?.length; //? optional chaining - checks if series exists
    // series ? series.length: null; 
    // const table = [];
    for (i = 0; i < rows; i++) {
        //Getting date field into a better date format
        const rawDate = series[i][0];
        const year = rawDate.slice(0, 4);
        // console.log(year);
        const month = rawDate.slice(5, 6);
        const day = rawDate.slice(7, 8);
        const hour = rawDate.slice(10, 11);
        const formattedDate = year.concat('-', month, '-', day, ' ', hour, ':00');
        // console.log(formattedDate);
        // xlabels.push(series[i][0]);
        xlabelsTemp.push(formattedDate);
        yValues.push(series[i][1]);

    }
    const xlabels = xlabelsTemp.reverse();
    // console.log(xlabels, yValues);
    // var chart = chartIt();
    return { xlabels, yValues };
    // var chart = chartIt();

}

// getEIA();

