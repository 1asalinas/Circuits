function calc_voltage(current,resistiance){
    let v = current * resistiance;
    return v;
}

function calc_current(voltage,resistiance){
    let i = voltage / resistiance;
    return i;
}

function calc_resistiance(voltage,current){
    let r = voltage / current; 
    return r;
}

function calc_r_total_series(list){
    let total = 0;

    for(let i=0; i < list.length; i++){
        total += list[i];
    }
    return total;
}
//console.log(calc_r_total_series([30,40,50,60,88])) 

function calc_r_total_parallel(list){
    let recips = []; 
    for(let i=0; i < list.length; i++){
        recips[i] = Math.pow(list[i],-1);
    }
    let total = 0;
    for(let i=0; i < recips.length; i++) {
        total += recips[i];}



total = Math.pow(total,-1); 
return total; 
}

console.log(calc_r_total_parallel([10,10]));