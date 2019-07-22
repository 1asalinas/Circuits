funciton row(len){

    let row = "";
    for(let k = 0;k < len; k++){
        console.log(row);
        row += "#";
    }
    return row
}

function testpower(watts){
    if(watts < 1000){
        console.log("W | "+row(watts));
    }
    else if(watts < 1000000){
        Math.floor(watts/1000)
        console.log("kW | "+row(watts));
    }
    else if(watts < 1000000000){
        Math.floor(watts/1000000)
        console.log("MW | "+row(watts));
    }
    else if(watts < 1000000000000){
        Math.floor(watts/1000000000)
        console.log("GW | "+row(watts));
    }
}

testpower(18);