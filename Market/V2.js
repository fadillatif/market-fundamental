
// Market V.2
var stockApple = 10
var stockGrape = 10
var stockOrange = 20

var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

/*Upgrade :
    1. Setiap meminta input, jika melebihi stock :
        Munculkan alert 'Kesalahan input, stock (nama buah) = (stock buah)
        Qty belanjaan untuk buah tersebut menjadi nol
*/        

var apple = parseInt(prompt("masukan jumlah Apel :"))
if(apple > stockApple){
    apple = 0
    alert(`kesalahan input, anda melakukan kesalahan input stok apel = ${stockApple} ` )      
} 

var Grape = prompt("masukan jumlah Anggur :")
if(Grape > stockGrape){
    Grape = 0
    alert(`kesalahan input, anda melakukan kesalahan input stok Anggur = ${stockGrape} ` )
}

var orange = prompt("masukan jumlah Jeruk")
if(orange > stockOrange){
    orange = 0
    alert(`kesalahan input, anda melakukan kesalahan input stok Jeruk = ${stockOrange} ` )
}
/*    2. Jika ada salah satu buah yang memiliki qty nol :
        Munculkan alert 'Transaksi dibatalkan, salah satu atau lebih mengalami kesalahan input'
        lalu selesai
*/
// if (apple == 0 || Grape == 0 || orange == 0){
//     alert(`transaksi dibatalkan, anda salah input `)
// }
/*    3. Jika tidak ada kesalahan input
        Munculkan informasi biaya (seperti versi sebelumnya)
*/        
// else {
    var totalApple = priceApple * apple
    var totalGrape = priceGrape * Grape
    var totalOrange = priceOrange * orange

    // Hasil
    var totalPrice = totalApple + totalGrape + totalOrange
// }

alert( `Detail pesanan buah anda \n` +
`Apple : ` + apple + ` X ` + priceApple + ` = `+ totalApple +`\n`+
`Grape : ` + Grape + ` X ` + priceGrape + ` = `+ totalGrape +`\n`+
`Orange : ` + orange + ` X ` + priceOrange + ` = `+ totalOrange +`\n`+
`Total Price : Rp ` + totalPrice)


/*   4. Meminta user untuk input sejumlah uang :
        Jika uang yang dimasukkan kurang :
            Munculkan alert 'Transaksi dibatalkan, Uang yang Anda masukkan kurang (jumlah uang) '
        Jika uang yang dimasukkan lebih :
            Munculkan alert 'Terimakasih, Uang kembali untuk Anda (Jumlah Uang)
        Jika uang uyang dimasukkan pas :
            Munculkan alert 'Terimakasih'
*/
var money = parseInt(prompt(`masukan jumlah uang : `))
var margin = money - totalPrice

if(money < totalPrice){
    alert(`Transaksi dibatalkan, uang Anda kurang Rp. ${margin}`)
} else if (money > totalPrice){
    alert(`Terimakasih\n uang kembali Anda Rp. ${margin}`)
} else {
    alert('Terimakasih !')
}
