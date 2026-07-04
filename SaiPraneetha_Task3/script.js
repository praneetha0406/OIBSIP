function convertTemp(){

    let temp =
    parseFloat(document.getElementById("temp").value);

    let unit =
    document.getElementById("unit").value;

    let result;

    if(unit === "C"){
        result = (temp * 9/5) + 32;
        document.getElementById("result").innerHTML =
        result.toFixed(2) + " °F";
    }
    else{
        result = (temp - 32) * 5/9;
        document.getElementById("result").innerHTML =
        result.toFixed(2) + " °C";
    }
}