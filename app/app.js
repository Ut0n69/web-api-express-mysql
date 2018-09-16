const LISTEN_PORT = 3000

const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const router = require("./routes/v1/")
app.use("/api/v1/", router)

app.listen(process.env.PORT || LISTEN_PORT, () => {
  console.log(`listening on port ${LISTEN_PORT}`)
})
  