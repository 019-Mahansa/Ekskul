import React from "react"

const Controlflow = () => {
    const nilai = 80

    if(nilai >= 90){
        return <h1>Nilai predikat anda adalah A</h1>
    } else if(nilai >= 80){
        return <h1>Nilai predikat anda adalah B</h1>        
    } else if(nilai >= 70){
        return <h1>Nilai predikat anda adalah C</h1>        
    } else if(nilai >= 60){
        return <h1>Nilai predikat anda adalah D</h1>        
    } else{
        return <h1>Nilai predikat anda adalah E</h1>        
    }

    const lampuJalan = "hijau";
    let hasil = "";

    switch(lampuJalan){
        case hijau:
            hasil = "Silakan jalan";
            break;
        case merah:
            hasil = "Berherhenti"
            break;
        case kuning:
            hasil = "hati-hati!"
    }

    const dataSiswa = ["Aldien","Mahansa","Rasya","Hashirae"]
    const listsiswa = [];

    for(let i = 0; i < dataSiswa.length(); i++){
        listsiswa.push(dataSiswa[i])
    }
    console.log(listsiswa)

}

export default Controlflow