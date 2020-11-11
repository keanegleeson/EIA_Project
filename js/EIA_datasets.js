//This script is used to set up the app. It is not really needed in the html or any of the other js files. Run this script again to get updated series urls for the regions or whatever dataset 
const key = '9efbf856649057f0dc4c8269b27d938c';
const categoryUrl = `https://api.eia.gov/category/?api_key=${key}&category_id=2122628`;
const regions =  ["California (CAL)", "Carolinas (CAR)", "Central (CENT)", "Florida (FLA)", "Mid-Atlantic (MIDA)", "Midwest (MIDW)", "New England (NE)", "New York (NY)", "Northwest (NW)", "Southeast (SE)", "Southwest (SW)", "Tennessee (TEN)", "Texas (TEX)"];

const getCategories = async () => {
    const response = await fetch(categoryUrl);
    const categoryJSON = await response.json();
    const childcategories = categoryJSON.category.childcategories;
    // console.log(childcategories)
    //For loop going through child categories, att category id to list that I want
    //where category name matches the names in my list of regions
    const catLen = childcategories?.length;
    const category_ids = [];
    const category_names = [];
    for (i = 0; i < catLen; i++) {
        // console.log(regions.indexOf(childcategories[i].name))

        // console.log(regions.indexOf(childcategories[i].name),childcategories[i].name);
        
        //if childcategories[i].name matches any name in regions
        if (regions.indexOf(childcategories[i].name)> -1) {
            category_ids.push(childcategories[i].category_id);
            category_names.push(childcategories[i].name);
        }
        
    }
    
    // console.log(category_ids);
    // console.log(catLen);
    return {category_ids , category_names};
}
// regions.forEach(function(entry) {
//         var singleObj = {}
//        singleObj['type'] = 'name';
//         singleObj['name'] = entry;
//         listOfObjects.push(singleObj);
//     });




const getChildCatURLs = async () => {
    const regionCategories = await getCategories();
    // console.log(regionCategories);
    const ids = regionCategories.category_ids;
    const region = regionCategories.category_names;

    const childCatUrls = [];
    ids.forEach(i => {
        childCatUrls.push(`https://api.eia.gov/category/?api_key=${key}&category_id=${i}`);
        // console.log(childSeriesUrl);
        // const catResponse = fetch(childSeriesUrl);
        // const catApiData = catResponse.json();
        // console.log(catApiData);
    });
    return{childCatUrls,region};
    // const childSeriesUrl = `https://api.eia.gov/category/?api_key=${key}&category_id=${i}`;
}

const getSeriesURLs = async () => {
    const catURLS = await getChildCatURLs();
    const childURLS = catURLS.childCatUrls;
    const region = catURLS.region;
    // console.log(childURLS);
    const seriesURLS = [];
    for (const url of childURLS) {
        const response = await fetch(url);
        const api_data = await response.json();
        // console.log(api_data);
        const childseries = api_data.category.childseries[0].series_id;
        // console.log(childseries);
        seriesURLS.push(`http://api.eia.gov/series/?api_key=${api_key}&series_id=${childseries}`);
    }
    console.log({seriesURLS,region});
    return {seriesURLS,region}
}
getSeriesURLs();


const sumTransactions = (transactions) => {

    const summed = transactions.reduce((acc, current) => {
      // Get the current date object
      const date = new Date(current.date);
      // Create your key/identifier
      const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      // Retreive the previous price from the accumulator
      const previousPrice = acc[key]; // Might also return undefined
      // Create your temp current price value, and be sure to deal with numbers.
      let currentPrice = Number(current.price);
      // If you had a previous value (and not undefined)
      if (previousPrice) {
        // Add it to our value
        currentPrice += Number(previousPrice);
      }
      // Return the future accumulator value
      return Object.assign(acc, {
        [key]: currentPrice, // new values will overwrite same old values
      })
    }, {})
  
    // Once we have all values, get the dates, and sort them (default: earlier first)
    // Return an array of each value from the summed object to our sortedArray
    const sortedArray = Object.keys(summed).sort().map((val) => {
      return summed[val];
    });
  
    console.log("sortedArray", sortedArray);
  };
  
  sumTransactions(transactions);