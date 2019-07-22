let dozens = [12,24,36,48];
console.log(total(dozens))

function total(list){
    let sum = 0;

    for(let k = 0;k<list.length;k++){
        sum += list[k];
    }
    return sum;
}

function average(list){
    return total(list) / list.length;
}

function findMax(list){
    let theMax = list[0];

    for(let k = 0;k<list.length;k++){

        if(list[k] > theMax){
            theMax = list[k];
        }
    }
    return theMax;
}

function findMin(list){
    let theMin = list[0];

    for(let k = 0;k<list.length;k++){

        if(list[k] < theMin){
            theMin = list[k];
        }
    }
    return theMin;
}

function tooHot(){
    return list.filter(k => k>114.8);
}

function justRight(list){
    return list.filter(k => k<114.8 && k>97.6)
}

let temps = [71,75,95,93,350,42,450,100];

console.log(justRight(temps));
console.log(tooHot(temps));

function double(list){
    return list.map(x => 2*x);
}

function time(list){
    return list.map(ampm);
}

function ampm(){
    let hasAM = word.includes("am");
    
    if(word == "12am"){
        return "0";
    }

    if(hasAM){
        return word.substring(0,word.length-2);
    }

    else{
        if(word == "12pm"){
            return "12";
        }

        let pm = word.substring(0,word.length-2);
        
        pm = Number(pm);
        pm += 12;
        return String(pm);
    }
}

let clocktime = ["12am","6am","2pm","8pm","12pm"];
console.log(time(clocktime));