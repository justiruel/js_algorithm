/*
  Cek apakah "suatu tanggal" berada dalam "range tanggal" yang ditentukan.
*/

function dateCheck(from,to,check) {
    var fDate,lDate,cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(check);

    if((cDate <= lDate && cDate >= fDate)) {
        return true;
    }
    return false;
}

if(dateCheck("02/05/2013","02/09/2013","02/07/2013")) //MM/DD/YYYY
    console.log("Availed");
else
    console.log("Not Availed");