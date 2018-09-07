function isOldEnoughToDrink(age) {
    if(age>=21){
        return true;
    }else{
        return false;
    }
}
function getProperty(obj, key) {
    return obj.key;
}
function addProperty(obj, key) {
    obj.myProperty = true;
}
function removeProperty(obj, key) {
    delete obj.key;
}
function isEven(num) {
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
function isOdd(num) {
    if(num%2!=0){
        return true;
    }else{
        return false;
    }
}
function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}
function addToBack(arr, element) {
    arr.push(element);
    return arr;
}
function joinArrays(arr1, arr2) {
    var arr= arr1.concat(arr2);
    return arr;
}
function getAllWords(str) {
    if(str.length == 0){
        return[];
    }
    return str.split(" ");
}
function extend(obj1, obj2) {
    for(var key in obj2){
        if(!obj1.hasOwnProperty(key)){
            obj1[key]=obj2[key];
        }
    }
    return obj1;
}
function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key] == "string"){
            delete obj[key];
        }
    }
}
function getIndexOf(char, str) {
    for(var i=0; i<str.length; i++){
        if(str[i]==char){
            return i;
        }
    }
    return -1;
}
function keep(array, keeper) {
    var arr= [];
    for(var i=0; i<array.length; i++){
        if(array[i]==keeper){
            arr.push(keeper);
        }
    }
    delete array;
    return arr;
}
function getLargestElementAtProperty(obj, key) {
    var largest = 0;
    if(obj.key=== undefined || obj[key].length ==0 || !Array.isArray(obj[key])){
        return undefined;
    }

    for(var i=0; i<obj[key].length;i++){
        if(obj[key][i]> largest){
            largest= obj[key][i];

        }
    }
    return largest;
}
function calculateBillTotal(preTaxAndTipAmount) {
    var tax= (preTaxAndTipAmount*1.095)-preTaxAndTipAmount;
    var tip= preTaxAndTipAmount*1.15
    var bill= (tip+tax);
    var finalbill=Math.round(1000*bill)/1000
    return  finalbill;
}
function sumDigits(num) {
    var str = num.toString();
    var output=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=="-"){
            output-=parseInt(str[i+1]);
            i++;
        }else{
            output += parseInt(str[i]);
        }
    }
    return output;
}
function listAllValues(obj) {
    var arr=[];
    for(var key in obj){
        arr.push(obj[key]);
    }
    return arr;
}
function detectOutlierValue(string) {
    var even = 0;
    var odd = 0;
    var array = string.split(' ');
    for(var i = 0; i<array.length ; i++) {
        if(parseInt(array[i])%2 === 0) {
            even++;
        }else{
            odd++;
        }
    }
    var outlier = (even>odd)? 1: 0;
    for (var a = 0; a<array.length ; a++) {
        if (parseInt(array[a])%2 == outlier) {
            return a + 1;
        }
    }
}
function search(array, value) {
    var addIndex = 0;
    while(array.length>1){
        if(array[Math.floor(array.length/2)]>value){
            array= array.slice(0,Math.floor(array.length/2));

        }else
        if(array[Math.floor(array.length/2)]<value){
            addIndex += Math.floor(array.length/2) + 1;
            array = array.slice((Math.floor(array.length/2)+1));
        }
    }
    if(array.length==1 && array[Math.floor(array.length/2)]!= value){
        return null;
    }
    return addIndex;
}
