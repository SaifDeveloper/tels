const express = require('express');
const redirect = require("express-redirect");
const path = require('path');

const bodyParser = require('body-parser');
const cors= require('cors');

const fileUpload = require('express-fileupload');
const diff = require('deep-diff').diff;
const fs = require('fs');
//var del = require('node-delete');

const PDFParser = require("pdf2json");


let pdfParser = new PDFParser();


let _convert = require('./convert');
let _compare = require('./compare');
const app = express();


app.use(fileUpload());

//set public folder
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS
app.use(cors());

var filename="";



//FILE UPLOAD AND CONVERT TO JSON
app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.sampleFile;
    filename +=sampleFile.name;
    console.log("FILE:",filename);
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./CSVs/'+filename, function(err) {
        //sampleFile.mv('./XLSXs/'+filename, function(err) {
    //sampleFile.mv('./'+filename, function(err) {
        if (err)
            return res.status(500).send(err);
            //res.send('File uploaded!');
// popupS.alert({
//     content: 'Hello World!'
// });
        res.redirect('http://localhost:8080/');


    });



    //CONVERT TO CSV to JSON
    _convert.convert(filename);

});


app.post('/compare',function (req,res) {

    _compare.compare(filename);
    //res.send("Check the difference folder !")

    res.redirect('http://localhost:8080/');
});

//START SERVER
const port = 8080;
app.listen(port,()=>console.log(`Server started on port:${port}`));
