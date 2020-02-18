
// Market V.3
var stockApple = 10
var stockGrape = 10
var stockOrange = 10

var priceApple = 10000
var priceGrape = 20000
var priceOrange = 30000

var orderApple = true
var orderGrape = true
var orderOrange = true


do{
    apple = prompt("masukan jumlah Apel :")
    if(apple > stockApple){  
        alert(`kesalahan input, anda melakukan kesalahan input stok, stok apel = ${stockApple} ` )     
        orderApple = true
    }else {
        orderApple = false
    }
            
}while(orderApple)
do{
    Grape =(prompt("masukan jumlah Anggur :"))    
    if(Grape > stockGrape){  
        alert(`kesalahan input, anda melakukan kesalahan input stok, stok Anggur = ${stockGrape} ` )     
        orderGrape = true
    }else {
        orderGrape = false
    }
            
}while(orderGrape)
do{
    orange =(prompt("masukan jumlah Jeruk :"))    
    if(orange > stockOrange){  
        alert(`kesalahan input, anda melakukan kesalahan input stok, stok Jeruk = ${stockOrange} ` )     
        orderoOrange = true
    }else {
        orderOrange = false
    }
            
}while(orderOrange)


var totalApple = priceApple * apple
var totalGrape = priceGrape * Grape
var totalOrange = priceOrange * orange
var totalPrice = totalApple + totalGrape + totalOrange
// console.log(totalPrice) 


alert( `Detail pesanan buah anda \n` +
`Apple : ` + apple + ` X ` + priceApple + ` = `+ totalApple +`\n`+
`Grape : ` + Grape + ` X ` + priceGrape + ` = `+ totalGrape +`\n`+
`Orange : ` + orange + ` X ` + priceOrange + ` = `+ totalOrange +`\n`+
`Total Price : Rp ` + totalPrice)

do{
    totalOrder =(prompt("masukan jumlah uang :"))    
    if(totalOrder < totalPrice){  
        alert(`kesalahan input, anda kurang memasukan jumlah uang, total pesanan adalah = ${totalPrice.toLocaleString("in")}`)
        
    }
}while(totalOrder<totalPrice)

var margin = totalOrder - totalPrice

if(totalOrder > totalPrice){
    alert(`Terimakasih \nuang kembali Anda Rp. ${margin}`)

} else if(totalOrder == totalPrice){
    alert(
        'Terimakasih'
    )
}
            

            


