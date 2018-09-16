const express = require("express")
const router = express.Router()

router.use("/list", require("./modules/list"))

module.exports = router