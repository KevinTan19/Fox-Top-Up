

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
    return result*1
}

function prosesTransaksi(nama, game, beli, umur) {
    if (!nama) {
        return "masukkan nama"
    }
    let database = {
        game1: {
            '10.000': 100,
            '20.000': 150,
            '30.000': 200,
        },
    }
    let listBelanja = []
    let totalNominal = 0
    let totalCash = 0
    let restriction = checkUmur(umur)
    if (restriction) {
        let cap = 50000
    }


    for (let i = 0; i < beli.length; i++) {
        const element = beli[i];
        // console.log(element);
        totalCash += database[game][element]
        let nominalFormater = splitDot(element)
        // console.log(nominalFormater);
        totalNominal += nominalFormater
    }

    console.log(totalNominal);
    console.log(totalCash);
}

console.log(prosesTransaksi("romzi", 'game1', ['10.000', '20.000'], 19));