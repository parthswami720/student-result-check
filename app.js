let studentname = document.querySelector("#studentname")
let studentmarks = document.querySelector("#studentmark")
let name = document.querySelector("#name")
let mark = document.querySelector("#mark")
let result = document.querySelector("#result")
btn.addEventListener("click", () => {
    console.log("hello");
    let nameVal = studentname.value;
    let markVal = parseInt(studentmarks.value);

    name.innerHTML =nameVal;
    mark.innerHTML =markVal;



    if (markVal >= 96){
        result.innerHTML = "Topper";
    }else if ( markVal >= 33 ){
        result.innerHTML = "Pass";
    }else{
        result.innerHTML = "Fail";
    }

})