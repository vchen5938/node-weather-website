const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cddce692f8b39e69de93fc2562c7e0e9&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, response) => {
        const {error:error1} = response.body
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (error1) {
            callback('Unable to find location.', undefined)
        } else {
            const {weather_descriptions, temperature, feelslike} = response.body.current
            callback(undefined, weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast