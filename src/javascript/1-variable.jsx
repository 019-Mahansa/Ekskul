import React from "react"

const VariablePage = () => {
    //variable : wadah yang menyimpan sebuah nilai
    /*
        3 cara deklatarasi Variable:
        - var
        - let
        - const
        

        syantax Pattern :
        declare_name variable_name = value
        contoh,
        let nama = "Mahansa"
    */
    let nama = "Mahansa";
    var umur = 20
    const alamat = "Jl Untung Jawa";
    /**
     * Macam Macam tipe data:
     * 1. Primitive Data Types :
     * -number (int,float) : bilangan bulat (integer) dam bilangan desimal (float)
     * -String => teks,character
     * -boolean => tipe data logika (true/false)
     * undefined => belum mendifinisikan nilai
     * null => kosong
     * symbol => simbol
     * ....
     * 2.Reference (object) Data type
     * - objek
     * - array
     * - function
     * - class
     */
    //contoh : 
    //1. NUmber
        let noAntrian = 1;
        let tinggibadan = 185.8;
    //2. String
        let role = "President";
        let gender = "L"
        let address = 'Jl u ntung jawa'

    //3. Boolean
        let sudahMakan = false;
        let rangking1 = true;
    //4. undifined
        // let scire = undefined;
        // let skr;
    //5 null
    // let MBG = null
    return(
        <div>
        <h1>MATERI 1 - BELAJAR VARIABLE</h1>
        <h1>nomor antrian : {noAntrian}</h1>
        <h1>Tinggi badan : {tinggibadan}</h1>
        <h1>Jabatan : {role}</h1>
        <h1>Jenis Kelamin : {gender}</h1>
        <h1>Alamat : {address}</h1>
        <h1>sudah makan : {sudahMakan}</h1>
        <h1>rangking : {rangking1}</h1>
        {/* <h1>score : {score}</h1>
        <h1>skor : {skor}</h1>
        <h1>MBG : {MBG}</h1> */}
        </div>
    )
}

export default VariablePage;