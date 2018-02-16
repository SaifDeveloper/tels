const fs = require('fs');

const csv=require('csvtojson');
xlsxj = require("xlsx-to-json");


//CONVERT FROM CSV TO JSON

module.exports.convert = function (filename) {
    console.log("filename for converson",filename);
    let csvfile = filename;
    let convFile=filename.replace(/\.[^/.]+$/, "");
    //convFile=filename
    console.log("convfile:",convFile);

    const csvFilePath='./CSVs/'+filename;
    csv()
        .fromFile(csvFilePath)
        .on('json',(jsonObj)=>{
            //console.log(jsonObj);
            //fs.writeFile('./ConvertedJSONs/'+convFile+'.json',"["+JSON.stringify(jsonObj)+"]");
            fs.writeFile('./ConvertedJSONs/input.json',"["+JSON.stringify(jsonObj)+"]");
        })
        .on('done',(error)=>{
            console.log('converted to JSON !')
        })
};

//CONVERT FROM XLSX TO JSON
//if you upload a file as input.xlsx and you try to give the same path in input, it wont work
// module.exports.convert = function (filename) {
//     console.log("filename for converson",filename);
//     let xlsxfile = filename;
//     let convFile=filename.replace(/\.[^/.]+$/, "");
//     //convFile=filename
//     console.log("convfile:",convFile);
//
//     const xlsxFilePath='./XLSXs/'+filename;
//     console.log("xlsxFilePath:",xlsxFilePath);
//     const convertedjsonPath='./ConvertedJSONs/'+convFile+'.json';
//     xlsxj({
//         input: "input.xlsx",
//         output: "output.json"
//     }, function(err, result) {
//         if(err) {
//             console.error(err);
//         }else {
//             console.log(result);
//             fs.writeFile('./ConvertedJSONs/'+convFile+'.json',JSON.stringify(result));
//         }
//     });
// };





