//looping data
let data = require('./data')

for (let i = 0; i < data.length; i++) {
    console.log(data[i].nama);
}

data.forEach(dt => {
    console.log(dt.nama);
});

data.map((dtt, index) => {
    console.log(dtt.nama);
})