
document.addEventListener("DOMContentLoaded", function(event) {

jamgadang();

});
function jamgadang(){
    const today = new Date();
    var jam = today.getHours();
    var menit = today.getMinutes();
    var detik = today.getSeconds();
    menit = checkTime(menit);
    detik = checkTime(detik);
    document.getElementById('text').innerHTML = jam + ":" + menit + ":" + detik;
    setTimeout(jamgadang, 1000);

}

function checkTime(i) {
    if (i<10) {i = "0"+i};
    return i;
}

function gantijamjepang(){
    const today = new Date();
    var jamjepang = today.getHours() + 3;
    var menitjepang = today.getMinutes();
    var detikjepang = today.getSeconds();
    menitjepang = checkTime(menitjepang);
    detikjepang = checkTime(detikjepang);
    document.getElementById('text').innerHTML = jamjepang + ":" + menitjepang + ":" + detikjepang;
    setTimeout(gantijamjepang, 1000);
  console.log("KONTOL UDAH SAMPE SINI")
}


function tambah(){
    let angkasatu = document.getElementById("angka1").value;
    let angkadua = document.getElementById("angka2").value;
    let hasil = parseInt(angkasatu) + parseInt(angkadua);
    let jawaban = document.getElementById("hasil");
    jawaban.value = hasil;
    console.log(hasil)
    console.log(angkasatu)
    console.log(angkadua)
}
function kurang(){
    let angkasatu = document.getElementById("angka1").value;
    let angkadua = document.getElementById("angka2").value;
    let hasil = parseInt(angkasatu) - parseInt(angkadua);
    let jawaban = document.getElementById("hasil");
    jawaban.value = hasil;
    console.log(hasil)
    console.log(angkasatu)
    console.log(angkadua)
}
function bagi(){
    let angkasatu = document.getElementById("angka1").value;
    let angkadua = document.getElementById("angka2").value;
    let hasil = parseInt(angkasatu) / parseInt(angkadua);
    let jawaban = document.getElementById("hasil");
    jawaban.value = hasil;
    console.log(hasil)
    console.log(angkasatu)
    console.log(angkadua)
}
function kali(){
    let angkasatu = document.getElementById("angka1").value;
    let angkadua = document.getElementById("angka2").value;
    let hasil = parseInt(angkasatu) * parseInt(angkadua);
    let jawaban = document.getElementById("hasil");
    jawaban.value = hasil;
    console.log(hasil)
    console.log(angkasatu)
    console.log(angkadua)
}

document.getElementById("apaya").addEventListener("change", brutal);

function brutal() {

    let angkasatutambah = document.getElementById("angka1tambah").value;
    let angkaduatambah = document.getElementById("angka2tambah").value;
    let angkasatukurang = document.getElementById("angka1kurang").value;
    let angkaduakurang = document.getElementById("angka2kurang").value;
    let angkasatukali= document.getElementById("angka1kali").value;
    let angkaduakali = document.getElementById("angka2kali").value;
    let angkasatubagi = document.getElementById("angka1bagi").value;
    let angkaduabagi = document.getElementById("angka2bagi").value;

    let hasiltambah = parseInt(angkasatutambah) + parseInt(angkaduatambah);
    let jawabantambah = document.getElementById("hasiltambah");
    jawabantambah.value = hasiltambah;
    
    let hasilkurang = parseInt(angkasatukurang) - parseInt(angkaduakurang);
    let jawabankurang = document.getElementById("hasilkurang");
    jawabankurang.value = hasilkurang;

    let hasilkali = parseInt(angkasatukali) * parseInt(angkaduakali);
    let jawabankali = document.getElementById("hasilkali");
    jawabankali.value = hasilkali;

    let hasilbagi = parseInt(angkasatubagi) / parseInt(angkaduabagi);
    let jawabanbagi = document.getElementById("hasilbagi");
    jawabanbagi.value = hasilbagi;
}

function tampilJson(){
    let y = Math.floor(Math.random()*3);
    const data1 = '{"bio": [ {"nama":"yusuf", "umur":21},{"nama":"satria", "umur":29},{"nama":"hisyam", "umur":22} ] }';
    const dataprase = JSON.parse(data1);
    document.getElementById("nama").value = dataprase.bio[y].nama;
    document.getElementById("umur").value = dataprase.bio[y].umur;
}

