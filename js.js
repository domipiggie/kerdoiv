function checkAnswers(){
    let haloYear = document.getElementById("haloYear").value;
    let sebWDCcount = document.getElementById("sebWDC").value;
    let tyreTrue = document.getElementById("tyreT").checked;
    let tyreFalse = document.getElementById("tyreF").checked;

    let kerdes1 = document.getElementById("kerdes1").value;
    let kerdes2 = document.getElementById("kerdes2").value;
    let kerdes3 = document.getElementById("kerdes3").value;

    if (haloYear==""||sebWDCcount==""||kerdes1==""||kerdes2==""||kerdes3==""||(tyreFalse==false&&tyreTrue==false)){
        alert("Kérem töltse ki az összes mezőt (ne legyé marky)");
        return false;
    }

    let pontszam = 0;

    if (haloYear=="2018"){pontszam++}
    if (sebWDCcount=="4"){pontszam++}
    if (tyreTrue){pontszam++}
    if (kerdes1.toLowerCase()=="oliver giroud" || kerdes1.toLowerCase()== "giroud"){pontszam++}
    if (kerdes2.toLowerCase()=="lionel messi" || kerdes2.toLowerCase()== "messi"){pontszam++}
    if (kerdes3.toLowerCase()=="pelé"){pontszam++}

    alert("Pontszámod: " + pontszam + "/6");
}