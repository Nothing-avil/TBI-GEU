let userdate = document.getElementById("date");
userdate.max = new Date().toISOString().split("T")[0];
let res = document.getElementById("result");

function calcu(){
    let dob = new Date(userdate.value);
    let dd = dob.getDate();
    let mm = dob.getMonth()+1;
    let yyyy = dob.getFullYear();

    let today = new Date();
    let tdd = today.getDate();
    let tmm = today.getMonth()+1;
    let tyyyy = today.getFullYear();

    let rdd = 0, rmm = 0, ryyyy = 0;

    ryyyy = tyyyy - yyyy;

    if(tmm >= mm){
        rmm = tmm - mm;
    }
    else{
        ryyyy--;
        rmm = 12 + tmm - mm;
    }

    if(tdd >= dd){
        rdd = tdd - dd;
    }
    else{
        rmm--;
        rdd = getdates(yyyy, mm) + tdd - dd;
    }

    if(rmm < 0){
        rmm = 11;
        ryyyy--;
    }

    res.innerHTML= `You are ${ryyyy} years, ${rmm} months, ${rdd} days old.`;
}

function getdates(y, m){
    return new Date(y, m, 0).getDate();
}