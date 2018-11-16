
const displaySubMenu = () => {
	document.getElementById('sub-menu').classList.toggle("show");
}

window.onclick = (c) => {
	if(!c.target.matches('.first')){
		const categoryMenu = document.getElementById('sub-menu');
		if(categoryMenu.classList.contains('show')){
			categoryMenu.classList.remove('show');
		}
		}
}




let i = 0;
const images = [
	'assets/placeholder1.jpg',
	'assets/placeholder2.jpg',
	'assets/placeholder3.jpg'
	];
const imgCount = images.length -1;

	// initially hide prev button because it does not need to show

		document.getElementById('prev-btn').style.visibility = "hidden";


const cntrls = (x) =>{
	if(x === 'next'){
	i++;
		document.getElementById('prev-btn').style.visibility = "visible";

		// if (i === images.length){
		// 	i = imgCount;
		// 	}
			if (i === imgCount){
			document.getElementById('next-btn').style.visibility = "hidden";
			document.getElementById('prev-btn').style.visibility = "visible";

			}

		}else{
			document.getElementById('next-btn').style.visibility = "visible";
			i--;
			if(i === 0){
			document.getElementById('prev-btn').style.visibility = "hidden";

			}
			if(i < 0){
				i = 0;
			}
		}
	document.getElementById('slide').src = images[i];
}

