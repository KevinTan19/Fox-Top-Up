let database = {
    '50.000': 100,
    '100.000': 150,
    '150.000': 200,
}

// let nominalInput = []
for (let i = 0; i < nominalInput.length; i++) {
    const element = nominalInput[i];
}
let umur = 19
let userName = "romzi"

function checkUmur(umur) {
    if (umur > 18) {
        return false
    }
    return true
}
function splitDot(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
        } else {
            result += str[i]
        }
    }
    // console.log(result);
    return result * 1
}
function prosesTransaksi(nama, /**beli*/ umur, database) {
    if (!nama) {
        return "masukkan nama"
    }
    let restriction = checkUmur(umur)
    // let totalNominal = 0
    let totalCash = 0

    if (restriction) {
        let cap = 50000
        for (let i = 0; i < beli.length; i++) {
            const element = beli[i];
            // let nominalFormater = splitDot(element)
            if (totalCash < cap) {
                // totalNominal += nominalFormater
                totalCash += database[element]
            }
        }
    } else {
        for (let i = 0; i < beli.length; i++) {
            const element = beli[i];
            totalCash += database[element]
            // let nominalFormater = splitDot(element)
            // totalNominal += nominalFormater
        }
    }
    // let numberFormat = (totalNominal / 1000).toFixed(3)
    // console.log(numberFormat);
    console.log(totalCash);
}

console.log(prosesTransaksi(nama, /**nominalInput*/ umur, database))