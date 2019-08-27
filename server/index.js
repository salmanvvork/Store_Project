const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname, "../dist")))
const POR = process.env.POR || 3000
app.listen(POR, () => {
    console.log("hello")
})