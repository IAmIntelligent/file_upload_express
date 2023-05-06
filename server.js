const express = require("express")
const app = express()
const path = require("path")

const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Images/")
        console.log("destination",file)
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

app.set("view engine", "ejs")


app.get("/upload", (req, res) => {
    res.render("upload")
    console.log("get =  Image uploaded")
})

app.post('/upload',upload.single("image"), (req, res) => {
    res.send("Image Uploaded")
    console.log(upload)
})

app.listen(3000)