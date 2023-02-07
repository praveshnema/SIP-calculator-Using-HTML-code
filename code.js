function add(){
let invesmet =parseInt(document.getElementById('invesmet').value);
let return_rate =parseInt(document.getElementById("return_rate").value);
let year =parseInt(document.getElementById("year").value);


let monthlyrate=return_rate/12/100;
let months=year*12;
let futurevalue=(invesmet*((Math.pow(1+monthlyrate,months)-1)/monthlyrate)*(1+monthlyrate)).toFixed(2);

let invesmet_amonut=(invesmet*12*year).toFixed(2);
let est_rtn=(futurevalue-invesmet_amonut).toFixed(2);

document.getElementById("futurevalue").value=futurevalue;
document.getElementById("est_rtn").value=est_rtn;
document.getElementById("invesmet_amonut").value=invesmet_amonut;


}