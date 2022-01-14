const params = (new URL(document.location)).searchParams.get('birth');

const bday = {
    year : parseInt(params.substring(0, 4)),
    month : parseInt(params.substring(4, 6)),
    day : parseInt(params.substring(6))
};

const current = {
    year : new Date().getFullYear(),
    month : new Date().getMonth()+1,
    day : new Date().getDate()
};

let isPassed =
    (bday.month <= current.month) ?
        (bday.month < current.month) ? true
        : (bday.day >= current.day) ? true : false
    : false;

(function(isPassed) {
    let selector;
    let ageFromCurrentYear = current.year - bday.year;
    let age = ageFromCurrentYear - ((isPassed) ? 0 : 1);
    
    if(ageFromCurrentYear < 0 || exception(ageFromCurrentYear)) {
        selector = ".result";
        age = "Are you from the future?";
    }
    else selector = ".message";

    document.querySelector(selector).innerHTML = (age < 0) ? 0 : age;
}(isPassed));

function exception(year) {
    let result = false;

    if(year == 0)
        if(bday.day > current.day)
            result = true;
        
    return result;
}