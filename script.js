const stories = document.querySelectorAll('.story');
const popup = document.getElementById('popup');
const popupSafari = document.getElementById('safari-video');
const popupVideo = document.getElementById('popup-video');
const popupUsername = document.getElementById('popup-username');
const closeButton = document.getElementById('close-button');
const popupImage = document.querySelector("#popup-image")
const loader = document.querySelector(".loader")
const storiesContainer = document.querySelector('.stories');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

    



 if (! navigator. userAgent. includes('Chrome') && navigator. userAgent. includes('Safari')) {


    stories.forEach((story) => {
     story.addEventListener('click', async () => {
      if (story.querySelector('video')) {
        video = story.querySelector('video')
        const videoSrc = story.querySelector('video').src;
         popupVideo.src = videoSrc;
        document.querySelector(".status-bar").style.display = "none"
        popupVideo.style.display = "block"
        popupImage.style.display = "none"
        popupVideo.play()
        
        }else if(story.querySelector('img')){
          
          popupVideo.style.display = "none"
          popupImage.style.display = "block"
          document.querySelector(".status-bar").style.display = "block"
          const imageSrc = story.querySelector('img').src
          popupImage.src = imageSrc
          loader.style.animation = 'loadBar 5s linear'
          
        setTimeout(() => {
          popup.style.display = 'none';
        }, 5000);
        }
      // const videoSrc = story.querySelector('video').src;
      const username = story.querySelector('.username').textContent;
      // popupVideo.src = videoSrc;
      // popupVideo.setAttribute("controls", "true")
      // video = story.querySelector('video')
      // popupVideo.play()
      popupUsername.textContent = username;
      popup.style.visibility = 'visible';
    });
  });
  
  closeButton.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
    popupVideo.pause()
  }); 

} else {
    stories.forEach((story) => {
      // document.querySelector(".status-bar").style.display = "none !important"
      story.addEventListener('click', () => {
        
        if (story.querySelector('video')) {
        video = story.querySelector('video')
        const videoSrc = story.querySelector('video').src;
        popupVideo.src = videoSrc;
        popupVideo.play()
        document.querySelector(".status-bar").style.display = "none"
        popupVideo.style.display = "block"
        popupImage.style.display = "none"
        }else if(story.querySelector('img')){
        popupVideo.style.display = "none"
        popupImage.style.display = "block"
          document.querySelector(".status-bar").style.display = "block"
          const imageSrc = story.querySelector('img').src
          popupImage.src = imageSrc
          loader.style.animation = 'loadBar 5s linear'
          
        setTimeout(() => {
          popup.style.display = 'none';
        }, 5000);
        }
        const username = story.querySelector('.username').textContent;
        
        popupUsername.textContent = username;
        popup.style.display = 'flex';
      });
    });
    
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });    
}
