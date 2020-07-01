const express = require('express')
const router = express.Router()

const neatCsv = require('neat-csv')

router.post('/', async (request, response) => {
    try {
        var file = request.files.file

        var myData = await neatCsv(file.data)

        return response.status(201).send(
            { myData }
        )
    }
    catch (err) {
        console.log(err)
        return response.status(400).send(
            { message: "Something went wrong, check logs..." }
        )
    }
})

module.exports = app => app.use('/upload', router)