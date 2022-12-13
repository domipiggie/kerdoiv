function checkAnswers(){
    let haloYear = document.getElementById("haloYear").value;
    let sebWDCcount = document.getElementById("sebWDC").value;
    let tyreTrue = document.getElementById("tyreT").checked;
    let tyreFalse = document.getElementById("tyreF").checked;

    let kerdes1 = document.getElementById("kerdes1").value;
    let kerdes2 = document.getElementById("kerdes2").value;
    let kerdes3 = document.getElementById("kerdes3").value;

    if (haloYear==""||sebWDCcount==""||kerdes1==""||kerdes2==""||kerdes3==""||(tyreFalse==false&&tyreTrue==false)){
        alert("Kérem töltse ki az összes mezőt");
        return false;
    }

    
}