function checkAnswers(){
    let haloYear = document.getElementById("haloYear").value;
    let sebWDCcount = document.getElementById("sebWDC").value;
    let tyreTrue = document.getElementById("tyreT").checked;
    let tyreFalse = document.getElementById("tyreF").checked;

    if (haloYear==""||sebWDCcount==""||(tyreFalse==false&&tyreTrue==false)){
        alert("Kérem töltse ki az összes mezőt");
        return false;
    }

    
}