const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmNoZW41IiwiYSI6ImNrY2RyNTkydjAxN3Qyd29kZXN6YXhscnQifQ.i0d2QgYYRWBBSa489AvQQw&limit=1'

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length == 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const {center, place_name} = response.body.features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            })
        }
    })
}

module.exports = geocode