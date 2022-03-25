const axios = require('axios');
const API_KEY =process.env.API_KEY;
exports.homeRoutes = (req, res) => {
    let latitude = 0;
    let longitude = 0;
    const temp = 0;
    let airpressue = "";
    // let city = "Bangalore";
    let recieved_Data = {};
    let weatherdata = {};
    let date = new Date();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let todayDate = day[date.getDay()] + "," + date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
    //console.log(getcoord.pos);
    if (req.body.city) {
        axios.get('https://api.openweathermap.org/geo/1.0/direct?q=' + req.body.city + '&limit=1&appid='+API_KEY)
            .then(
                (response1) => {
                    let output = response1.data;
                    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + output[0].lat + '&lon=' + output[0].lon + '&appid='+API_KEY)
                        .then((weatherdd) => {
                            res.render('index.twig', { weatherdata: weatherdd.data, cityname: req.body.city, todaydatex: todayDate });
                        })
                }
            )
            .catch(
                err => {
                    res.send(err)
                }
            );
    }
    else {
        axios.get('https://api.openweathermap.org/geo/1.0/direct?q=Bangalore&limit=1&appid=e43ace1d1640d2d7bd6108f3458e8f5c')
            .then(
                (response1) => {
                    let output = response1.data;
                    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + output[0].lat + '&lon=' + output[0].lon + '&appid=e43ace1d1640d2d7bd6108f3458e8f5c')
                        .then((weatherdd) => {
                            res.render('index.twig', { weatherdata: weatherdd.data, cityname: "Bangalore", todaydatex: todayDate });
                        })
                }
            )
            .catch(
                err => {
                    res.send(err)
                }
            )
    }
}
