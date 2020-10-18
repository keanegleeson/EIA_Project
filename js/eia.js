// LG&E url - http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.EEI-LGEE.ID.H

//California day ahead - http://api.eia.gov/series/?api_key=9efbf856649057f0dc4c8269b27d938c&series_id=EBA.CAL-ALL.D.H

const api_key = '9efbf856649057f0dc4c8269b27d938c';

// const url = `http://api.eia.gov/series/?api_key=${api_key}&series_id=EBA.EEI-LGEE.ID.H`;
const url = `http://api.eia.gov/series/?api_key=${api_key}&series_id=EBA.CAL-ALL.D.H`;

// 2020 02 28 T03 Z
// [0-4] - [5-6] - [7-8] - [10-11]

// console.log(url);

    const getEIA = async() =>  {
    const xlabelsTemp = [];
    const yValues = [];

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
        const year = rawDate.slice(0,4);
        // console.log(year);
        const month = rawDate.slice(5,6);
        const day = rawDate.slice(7,8);
        const hour = rawDate.slice(10,11);
        const formattedDate =  year.concat('-',month,'-',day,' ',hour, ':00');
        // console.log(formattedDate);
        // xlabels.push(series[i][0]);
        xlabelsTemp.push(formattedDate);
        yValues.push(series[i][1]);
        
    }
    const xlabels = xlabelsTemp.reverse();
    // console.log(xlabels, yValues);
    return { xlabels, yValues };


}

// getEIA();