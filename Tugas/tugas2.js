/* 
SOLVE 8
*/

function cari(){
    var kalimat = document.getElementById("kalimat").value
    var huruf = document.getElementById("huruf").value

    var find = " "
    for( var i = 0; i < kalimat.length; i++){
        if( 
            kalimat[i] == huruf
        )
        find++
    }
    var kata = document.getElementById("kata")
    kata.innerHTML = `Jumlah ${huruf} sebanyak ${find} buah`
}


/* K A L K U L A T O R 
SOLVE 9
*/

function kali(){
    var nilai = parseInt(document.getElementById("angka ").value)
    var nilai2 = parseInt(document.getElementById("angka1").value)
    var output = document.getElementById("result")


    var kali = nilai * nilai2
    var hasilKali = kali
     
    console.log(hasilKali) 
    output.innerHTML = `${nilai} X ${nilai2} = ${hasilKali}`
    
}

function tambah(){
    var nilai = parseInt(document.getElementById("angka ").value)
    var nilai2 = parseInt(document.getElementById("angka1").value)
    var output = document.getElementById("result")

    var tambah = nilai + nilai2
    var hasilTambah = tambah
     
    console.log(hasilTambah) 
    output.innerHTML = `${nilai} + ${nilai2} = ${hasilTambah}`
}

function bagi(){
    var nilai = document.getElementById("angka ").value
    var nilai2 = document.getElementById("angka1").value
    var output = document.getElementById("result")
    
    var bagi = nilai / nilai2
    var hasilBagi = bagi
     
    console.log(hasilBagi) 
    output.innerHTML = `${nilai} / ${nilai2} = ${hasilBagi}`
}

function kurang(){
    var nilai = document.getElementById("angka ").value
    var nilai2 = document.getElementById("angka1").value
    var output = document.getElementById("result")
    
    var kurang = nilai - nilai2
    var hasilKurang = kurang
     
    console.log(hasilKurang) 
    output.innerHTML = `${nilai} - ${nilai2} = ${hasilKurang}`
}

function modulus(){
    var nilai = document.getElementById("angka ").value
    var nilai2 = document.getElementById("angka1").value
    var output = document.getElementById("result")
    
    var modulus = nilai % nilai2
    var hasilModulus = modulus
     
    console.log(hasilModulus) 
    output.innerHTML = `${nilai} % ${nilai2} = ${hasilModulus}`
}

function pangkat(){
    var nilai = document.getElementById("angka ").value
    var nilai2 = document.getElementById("angka1").value
    var output = document.getElementById("result")
    
    var pangkat = Math.pow(nilai, nilai2)
    var hasilPangkat = pangkat
     
    console.log(hasilPangkat) 
    output.innerHTML = `${nilai} ^ ${nilai2} = ${hasilPangkat}`
}

/* 
SOLVE 10
*/

function solve10() {
    var pilihan1 = document.querySelector("input[name=satu]:checked").value
    var pilihan2 = document.querySelector("input[name=dua]:checked").value
    var pilihan3 = document.querySelector("input[name=tiga]:checked").value
    var pilihan4 = document.querySelector("input[name=empat]:checked").value
    var hasilSolve10 = document.getElementById("hasilSolve10")
    var nilai = 0

    // for (var x = 1; x < 5; x++) {
    //     if (pilihan1 == "habibie") {
    //         nilai += 25
    //     } else if (pilihan2 == "microbit") {
    //         nilai += 25
    //     } else if (pilihan3 == "mirai") {
    //         nilai += 25
    //     } else if (pilihan4 == "bruce") {
    //         nilai += 25
    //     }
    // }

    for (var x = 1; x < 5; x++) {
        nilai = 0
        if (pilihan1 == "habibie") {
            nilai += 25
        }
        if (pilihan2 == "microbit") {
            nilai += 25
        }
        if (pilihan3 == "mirai") {
            nilai += 25
        }
        if (pilihan4 == "bruce") {
            nilai += 25
        }
    }

    hasilSolve10.innerHTML = `Nilai Akhir Anda adalah ${nilai} `

    console.log(pilihan1)
    console.log(pilihan2)
    console.log(pilihan3)
    console.log(pilihan4)
}