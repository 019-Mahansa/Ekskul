import React, { useState } from "react";


const OperatorPage = () =>{
    //Operator -> simbol yang melakukan operasi pada operan
    /**
     * Note : 
     * Operator : simbol
     * Operand : objek yang di operasiokan
     * Operasi  : tindaka yang dilakukan operator terhadap operand
     */

    /**
     * Macam-macam Operator :
     * 1.Operator Aritmatika
     * 2.Operator Assignment (Penugasa)
     * 3.Operator Comparison (Perbandingan)
     * 4.Operator Logical (logika)
     */
    let angka1 = 20
    let angka2 = 10
    let hasil = 0
    //Operator Aritmatika
    hasil = angka1 + angka2
    console.log(`${angka1} + ${angka2} = ${hasil}`)
    hasil = angka1 - angka2
    console.log(`${angka1} - ${angka2} = ${hasil}`)
    hasil = angka1 * angka2
    console.log(`${angka1} x ${angka2} = ${hasil}`)
    hasil = angka1 / angka2
    console.log(`${angka1} / ${angka2} = ${hasil}`)
    hasil = angka1 ** angka2
    console.log(`${angka1} ** ${angka2} = ${hasil}`)
    hasil = angka1 % angka2
    console.log(`${angka1} % ${angka2} = ${hasil}`)

    let lives = 3
    //Operator Assigment
    lives += 1;
    console.log(`sisa nyawa : ${lives}`)
    lives -= 2;
    console.log(`sisa nyawa : ${lives}`)
    lives *= 2;
    console.log(`sisa nyawa : ${lives}`)
    lives /= 2;
    console.log(`sisa nyawa : ${lives}`)
    lives **= 2;
    console.log(`sisa nyawa : ${lives}`)
    lives %= 2;
    console.log(`sisa nyawa : ${lives}`)
    //Operator Logical -> Hasil akan selalu booelan
    let sudahMakan = true
    let nyuciPiring = false

    console.log(sudahMakan && nyuciPiring)
    console.log(sudahMakan || nyuciPiring)
    console.log(!sudahMakan)
    console.log(!nyuciPiring)
    return (
        
        <div>
            <h1>MATERI 2 - OPERATOR </h1>
        </div>
    )
}

export default OperatorPage 