const express = require("express")

const SERVER_PORT = 8088
const app = express()

app.use(express.static("./statics"))

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express Js</h1>")
})


app.get("/user", (req, res) => {
    var user = {
        first_name: "Ellyn",
        last_name: "Bibon"
    }
    res.send(JSON.stringify(user))
})

app.get("/user", (req, res) => {
    res.send(JSON.stringify(req.query))

})

//path paramaeter
//http://localhost:8088/user/Ellyn/Bibon
app.post("/user/:fnm/:lnm", (req, res) => {
    const s = req.params

    var first_name = s.fnm
    var last_name = s.lnm

    const newS = {
        first_name,
        last_name,
    }
    res.json(newS)
    // res.send(JSON.stringify(req.params))
})


app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}`)
})