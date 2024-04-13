// Simple intersecton observer that plays
// videos when the videos enter the viewport 
// and pauses upon exit. This saves bandwith. 


let allVideos = document.querySelectorAll('.js-video')

let options={

    // this is where you can set the off
    // set of when the video is played / paused 
 
    rootMargin: '0px',
    threshold: '0.25'
}


// function that handels the play and pauseing

let videoFunc=( e)=>{

    e.forEach((el)=>{
       
        if(el.isIntersecting){
            el.target.play()
            // console.log( `paused - ${el.target}` )
        }else{
            el.target.pause()
            // console.log( `paused - ${el.target}`)
        }
    })
}

// Defineing the observer 

let observer = new IntersectionObserver( videoFunc, options )


allVideos.forEach(e => {
    observer.observe(e)
});