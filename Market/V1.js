// Market V.1
// Data harga
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// jumlah pesanan buah yang dimasukan user
var apple = prompt("masukan jumlah Apel :")
var Grape = prompt("masukan jumlah anggur :")
var orange = prompt("masukan jumlah jeruk :")

// Aritmatika
var totalApple = priceApple * apple
var totalGrape = priceGrape * Grape
var totalOrange = priceOrange * orange

// Hasil
var totalPrice = totalApple + totalGrape + totalOrange

// Alert
alert( `Detail pesanan buah anda \n` +
`Apple : ` + apple + ` X ` + priceApple + ` = ` + `Rp ` + totalApple.toLocaleString(`in`) +`\n`+
`Grape : ` + Grape + ` X ` + priceGrape + ` = ` + `Rp ` + totalGrape.toLocaleString(`in`) +`\n`+
`Orange : ` + orange + ` X ` + priceOrange + ` = ` + `Rp ` + totalOrange.toLocaleString(`in`) +`\n`+
`Total Price : Rp ` + totalPrice.toLocaleString(`in`)
)