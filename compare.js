const fs = require('fs');
const diff = require('deep-diff').diff;
const util = require('util');

module.exports.compare = function (filename) {
    console.log("filename for comparision",filename);
    var convFile=filename.replace(/\.[^/.]+$/, "");


    console.log("file:",convFile);

    // lhs is the original json
    // rhs is the converted json from csv
    var lhs = fs.readFileSync('original.json', 'utf8');
    var rhs = fs.readFileSync('./ConvertedJSONs/input.json','utf8');
    //var rhs = fs.readFileSync('./ConvertedJSONs/'+convFile+'.json', 'utf8');

    //Uncomment for the JSON values
    //console.log("lhs:",lhs);
    //console.log("rhs:",rhs);
    if (lhs === rhs) {
        console.log("No differences");

        return 1;
    }
    if (lhs !== rhs) {


        var differences = diff(JSON.parse(lhs), JSON.parse(rhs));

        var length = differences.length;

        let jsondata = "[{";

        for (i = 0; i < length; i++) {
            console.log("difference in the following path:")
            console.log(differences[i].path[1]);
            jsondata = jsondata + '"' + differences[i].path[1] + '"' + ":";
            console.log('Original value', differences[i].lhs);
            console.log('value in file', differences[i].rhs);
            jsondata = jsondata + '"' + differences[i].rhs + '"' + ',';
        }

        jsondata = jsondata + "}]";

//USING REGEX TO REMOVE THE LAST TRAILING COMMA
        let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
        let correct_json = jsondata.replace(regex, '');
        let data = JSON.parse(correct_json);
        console.log("data", data);


        fs.writeFileSync('./DifferenceJSONs/differences.json', JSON.stringify(data));
        //WRITING INSIDE ANGULAR FROM WHERE CHKLIST IS UPDATED
        fs.writeFileSync('../telstra/src/assets/data.json', JSON.stringify(data));
        //fs.writeFileSync('./DifferenceJSONs/'+convFile+'.json', JSON.stringify(data));
    }
}