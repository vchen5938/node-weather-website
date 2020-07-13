console.log('Client side javascript file is loaded!')

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/Boston.json?access_token=pk.eyJ1IjoidmNoZW41IiwiYSI6ImNrY2RyNTkydjAxN3Qyd29kZXN6YXhscnQifQ.i0d2QgYYRWBBSa489AvQQw&limit=1').then((response) => {
//     response.json().then((data) => {
//         if (data.features.length == 0) {
//             return console.log('error')
//         }
//         const { center, place_name } = data.features[0]
//         fetch('http://api.weatherstack.com/current?access_key=cddce692f8b39e69de93fc2562c7e0e9&query=' + center[1] + ',' + center[0]).then((response) => {
//             response.json().then((data) => {
//                 console.log(data)
//                 const { weather_descriptions, temperature, feelslike } = data.current
//                 console.log(place_name)
//                 console.log(weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.')
//             })
//         })
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From JavaScript '

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })

})
