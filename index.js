const request = require('request');
const cheerio = require('cheerio');
const d = new Date();

console.log("Updating data...")
console.log("...")
console.log("Worldwide Coronavirus data for " + d);

// requesting the covid-19 website
request("https://www.worldometers.info/coronavirus/", cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    }
    else {
        handlehtml(html);  // Getting the html on request
    }
}
function handlehtml(html) {
    // loading the html that we had obtained by requesting
    let seltools = cheerio.load(html);
    // Obtaining the required data from 
    // html which is stored in the seltools
    let content = seltools("#maincounter-wrap span");
    let obj = ["Coronavirus Cases: ", "Coronavirus Deaths: ", "People Recovered: "];

    console.log("")
    console.log(("******************************"));

    for (let i = 0; i < content.length; i++) {
        let data = seltools(content[i]).text();
        console.log(obj[i] + data);
    }
    
    console.log(("******************************"));
    console.log("");
}