//find data
let data = require('./data')

var datas = data.filter((dt) => {
    if (dt.id == "2") {
        console.log(dt);
    }
})

var datass = data.find((dtt) => {
    if (dtt.id == "1") {
        console.log(dtt);
    }
})