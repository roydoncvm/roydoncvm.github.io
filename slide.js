var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch
	 
// Image List
images[0] = "https://supermodel-bestawards.s3.amazonaws.com/resized/sm/entry/x9/09/ts/0r/TEDxsmall%20brand%20identity2-0-2344-0-1652.jpg?k=bb4eec92db";
images[1] = "assets/images/TEDx_02.jpg";
images[2] = "assets/images/TEDx_03.jpg";
images[3] = "assets/images/TEDx_04.jpg";


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