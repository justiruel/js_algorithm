var _ = require('lodash');

//0 -> tidak lulus
//1 -> lulus

var objectData = [
{
    nama:"joni",
    alamat:"malang",
    status_kelulusan:0
},
{
    nama:"joko",
    alamat:"jakarta",
    status_kelulusan:1
},
{
    nama:"katya",
    alamat:"bandung",
    status_kelulusan:0
},
]

var rest = _.map(objectData, function(item,index){
    //console.log(item.status_kelulusan,index);    
    switch(item.status_kelulusan) {
        case 0:
            objectData[index].status_kelulusan = "Tidak Lulus";
            break;
        case 1:
            objectData[index].status_kelulusan = "Lulus";
            break;
        default:
            objectData[index].status_kelulusan = "Tidak Lulus";
            break;
    }
});

console.log(objectData);


