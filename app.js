const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('hello Toma'))

app.listen('3000', () => {
    console.log('run on 3000');
})
