var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch
	 
// Image List
images[0] = "assets/images/TEDx_01.jpg";
images[1] = "assets/images/TEDx_03.jpg";
images[2] = "assets/images/TEDx_04.jpg";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;