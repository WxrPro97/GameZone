var i = 0; 		
var images = [];
var time = 3000;

images[0] = "img/slide1.jpeg";
images[1] = "img/slide2.jpeg";
images[2] = "img/slide3.jpeg";

function changeImg(){
	document.getElementById('slide').src = images[i];

	if(i < images.length - 1){
		i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;
