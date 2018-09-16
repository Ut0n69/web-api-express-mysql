const express = require("express")
const router = express.Router()
const dbConnection = require("../../../db/dbConnection")

let query

// GET
router.get("/", (req, res) => {
  if (req._parsedUrl.query === null) {
    query = `SELECT * FROM list`
    dbConnection.query(query, (err, rows) => {
      if (err) {
        res.json({"RSuccess": false})
        console.log("Error", err)
        return false
      }
      res.json({
        "RSuccess": true,
        "Rdata": rows
      })
    })
  } else {
    query = `SELECT * FROM list where id = ${req.query.id}`
    dbConnection.query(query, (err, rows) => {
      if (err) {
        res.json({"RSuccess": false})
        console.log("Error", err)
        return false
      }
      if (rows[0] === undefined) {
        res.json({
          "RSuccess": false,
          "RMessage": "Data is not found.",
        })  
      } else {
        res.json({
          "RSuccess": true,
          "Rdata": rows[0]
        })  
      }
    })
  }
})

// POST
router.post("/", (req, res) => {
  query = `INSERT INTO list(item) value("${req.body.item}");`
  dbConnection.query(query, err => {
    if (err) {
      res.json({"RSuccess": false})
      console.log("Error", err)
      return false
    }
    res.json({
      "RSuccess": true
    })
  })
})

// PUT
router.put("/", (req, res) => {
  query = `UPDATE list SET item = "${req.body.item}" WHERE id = ${req.body.id};`
  dbConnection.query(query, err => {
    if (err) {
      res.json({"RSuccess": false})
      console.log("Error", err)
      return false
    }
    res.json({
      "RSuccess": true
    })
  })
})

// DELETE
router.delete("/", (req, res) => {
  query = `DELETE FROM list WHERE id = ${req.body.id};`
  dbConnection.query(query, err => {
    if (err) {
      res.json({"RSuccess": false})
      console.log("Error", err)
      return false
    }
    res.json({
      "RSuccess": true
    })
  })
})

module.exports = router