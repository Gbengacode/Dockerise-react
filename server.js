import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).json(
            [
            {
                "id": 1, 
                name: "Emmanuel"
            },
            {
                "id": 2, 
                name: "Isaac John"
            }
        ]
     )}
)

const PORT = 7000
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})