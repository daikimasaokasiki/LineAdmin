import express from 'express'
const app = express()
const port = 3000
let booklog = {}

app.use(express.json())

app.post('/booklog', (req, res) => {
    booklog = req.body
    
    if (!(booklog.name && booklog.text)) {
        return res.json({
            "ok": false,
            "error": "name and text are required"
        })
    }

    res.json({
        "ok": true,
        "booklog": booklog
    })
})

app.get('/booklog', (req, res) => {
    res.json({
        "ok": true,
        "booklog": [
            booklog
        ]
    })
})

 app.listen(port, () => {
    console.log(`App listen at http://locallhost:${port}`)
 })

