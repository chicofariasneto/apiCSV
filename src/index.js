const express = require('express')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

// for body
app.use(bodyParser.json())
// for params
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
// for files
app.use(fileUpload())

app.get('/', (request, response) => {
    response.json({
        info: "💻📋 Api for uploading and reading .csv files, finally exporting the data in json..."
    })
})

require('./app/controllers/index')(app)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})