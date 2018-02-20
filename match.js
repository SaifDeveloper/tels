const fs = require('fs');



module.exports.match = function (filename) {
    let convFile=filename.replace(/\.[^/.]+$/, "");
    var lhs = fs.readFileSync('original.json', 'utf8');
    var rhs = fs.readFileSync('./ConvertedJSONs/'+convFile+'.json','utf8');

    var parsed_lhs = JSON.parse(lhs)
    var parsed_rhs = JSON.parse(rhs)



    var key = Object.keys(parsed_lhs[0]);
    var count_keys = key.length;

    //Initialize json

    var assetId=12345;
    var d = new Date();
    var date = d.toUTCString()

    var data = "[{"

    data += '"'+ "assetId" + '"' +':' + '"' + assetId + '"' +',';

    data += '"'+ "timestamp" + '"' +':' + '"' + date + '"' +',';

    if(parsed_lhs[0].notes===parsed_rhs[0].notes){
        data += '"'+key[0]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[0]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].unallocated===parsed_rhs[0].unallocated){
        data += '"'+key[1]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[1]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Costsheet===parsed_rhs[0].Costsheet){
        data += '"'+key[2]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[2]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Assetstatus===parsed_rhs[0].Assetstatus){
        data += '"'+key[3]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[3]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].CAPEX===parsed_rhs[0].CAPEX){
        data += '"'+key[4]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[4]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Materialdetails===parsed_rhs[0].Materialdetails){
        data += '"'+key[5]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[5]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].DBORS===parsed_rhs[0].DBORS){
        data += '"'+key[6]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[6]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Activitytype===parsed_rhs[0].Activitytype){
        data += '"'+key[7]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[7]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Transferdetails===parsed_rhs[0].Transferdetails){
        data += '"'+key[8]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[8]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].ItemMapping===parsed_rhs[0].ItemMapping){
        data += '"'+key[9]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[9]+'"'+':'+'"'+"No"+'"'+','
    }

    if(parsed_lhs[0].Missinginformation===parsed_rhs[0].Missinginformation){
        data += '"'+key[10]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[10]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].NDPM===parsed_rhs[0].NDPM){
        data += '"'+key[11]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[11]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].LIC===parsed_rhs[0].LIC){
        data += '"'+key[12]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[12]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].PropertyLease===parsed_rhs[0].PropertyLease){
        data += '"'+key[13]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[13]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Login===parsed_rhs[0].Login){
        data += '"'+key[14]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[14]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].IPaCassetmodule===parsed_rhs[0].IPaCassetmodule){
        data += '"'+key[15]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[15]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].IPaCordersummary===parsed_rhs[0].IPaCordersummary){
        data += '"'+key[16]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[16]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Reviewprojectbrief===parsed_rhs[0].Reviewprojectbrief){
        data += '"'+key[17]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[17]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Portfolio===parsed_rhs[0].Portfolio){
        data += '"'+key[18]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[18]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].equipmentcodes===parsed_rhs[0].equipmentcodes){
        data += '"'+key[19]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[19]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].UpdateActivity===parsed_rhs[0].UpdateActivity){
        data += '"'+key[20]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[20]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Disposalmethod===parsed_rhs[0].Disposalmethod){
        data += '"'+key[21]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[21]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].FIMValue===parsed_rhs[0].FIMValue){
        data += '"'+key[22]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[22]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].Transfer===parsed_rhs[0].Transfer){
        data += '"'+key[23]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[23]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].assetclass===parsed_rhs[0].assetclass){
        data += '"'+key[24]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[24]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].physicalquantity===parsed_rhs[0].physicalquantity){
        data += '"'+key[25]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[25]+'"'+':'+'"'+"No"+'"'+','
    }
    if(parsed_lhs[0].RFUdate===parsed_rhs[0].RFUdate){
        data += '"'+key[26]+'"'+':'+'"'+"Yes"+'"'+','
    }else {
        data += '"'+key[26]+'"'+':'+'"'+"No"+'"'+','
    }


    var count_Yes = (data.match(/Yes/g) || []).length;
    var count_No = (data.match(/No/g) || []).length;
    console.log("Yes:",count_Yes);
    console.log("No:",count_No);

    data += '"'+"countYes"+'"'+':'+'"'+count_Yes+'"'+',';
    data += '"'+"countNo"+'"'+':'+'"'+count_No+'"'+',';

    data+="}]";
//USING REGEX TO REMOVE THE LAST TRAILING COMMA
    let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
    let correct_json = data.replace(regex, '');
    let newdata = JSON.parse(correct_json);
//console.log("data", newdata);
    let stringdata = JSON.stringify(newdata);

// var count_Yes = (stringdata.match(/Yes/g) || []).length;
// var count_No = (stringdata.match(/No/g) || []).length;
// console.log("Yes:",count_Yes);
// console.log("No:",count_No);

    //fs.writeFileSync('./assetdata/asset1.json', stringdata);

    fs.writeFileSync('./assetdata/asset_'+convFile+'.json', stringdata);

    //MERGING DATA





return stringdata;
}