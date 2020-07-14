const geocode = require('./geocode')
const forecast = require('./forecast')

//const address = process.argv[2]

const process = (req, res, callback) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please provide the address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            callback(({
                     forecast: forecastData,
                     location,
                     address: req.query.address
                 }))
            // res.send({
            //     forecast: forecastData,
            //     location,
            //     address: req.query.address
            // })
        })
    })

}

module.exports = process




