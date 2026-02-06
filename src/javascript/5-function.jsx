import react from "react"

/**
 * 1. ketahui sisi
 */

export const Fungsi = () => {
	let kubusA = 8;
	let kubusB = 3;
	
	
	function hasil(a,b){
		let volumeKubusA = a*a*a;
		let VolumekubusB = b*b*b;
		let total = volumeKubusA + VolumekubusB;
		return total;
	}
	return(
		<div>
		<h1>Menentukan 2 jumlah vol kubus:</h1>
		<p>total kedua volume kubus a dengan sisi {kubusA} dan kubus b {kubusB} adalah {hasil(kubusA,kubusB)}</p>
		</div>
	)
}
