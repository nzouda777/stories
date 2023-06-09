const stories = document.querySelectorAll('.story');
const popup = document.getElementById('popup');
const popupSafari = document.getElementById('safari-video');
const popupVideo = document.getElementById('popup-video');
const popupUsername = document.getElementById('popup-username');
const closeButton = document.getElementById('close-button');


const storiesContainer = document.querySelector('.stories');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

    



if (! navigator. userAgent. includes('Chrome') && navigator. userAgent. includes('Safari')) {
stories.forEach((story) => {
    story.addEventListener('click', () => {
      const imageSrc = story.querySelector('video').src;
      const username = story.querySelector('.username').textContent;
      popupVideo.src = imageSrc;
      popupVideo.setAttribute("controls", "true")
      video = story.querySelector('video')
      popupVideo.play()
      arrowLeft.style.visibility = "hidden"
      
      arrowRight.style.visibility = "hidden"
      popupUsername.textContent = username;
      popup.style.visibility = 'visible';
    });
  });
  
  closeButton.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
    popupVideo.pause()
    arrowLeft.style.visibility = "visible"
    arrowRight.style.visibility = "visible"
  });
  arrowLeft.addEventListener('click', () => {
      storiesContainer.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    });
    
    arrowRight.addEventListener('click', () => {
      storiesContainer.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    });
    
    storiesContainer.addEventListener('scroll', () => {
      arrowLeft.style.opacity = storiesContainer.scrollLeft > 0 ? 1 : 0;
      arrowRight.style.opacity =
        storiesContainer.scrollLeft + storiesContainer.offsetWidth <
        storiesContainer.scrollWidth
          ? 1
          : 0;
    });
    

} else {
    stories.forEach((story) => {
        story.addEventListener('click', () => {
          const imageSrc = story.querySelector('video').src;
          const username = story.querySelector('.username').textContent;
          popupVideo.src = imageSrc;
          video = story.querySelector('video')
          popupVideo.play()
          arrowLeft.style.visibility = "hidden"
          
          arrowRight.style.visibility = "hidden"
          popupUsername.textContent = username;
          popup.style.display = 'flex';
        });
      });
      
      closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
        window.location.reload()
        arrowLeft.style.visibility = "visible"
        arrowRight.style.visibility = "visible"
      });
      arrowLeft.addEventListener('click', () => {
          storiesContainer.scrollBy({
            left: -200,
            behavior: 'smooth'
          });
        });
        
        arrowRight.addEventListener('click', () => {
          storiesContainer.scrollBy({
            left: 200,
            behavior: 'smooth'
          });
        });
        
        storiesContainer.addEventListener('scroll', () => {
          arrowLeft.style.opacity = storiesContainer.scrollLeft > 0 ? 1 : 0;
          arrowRight.style.opacity =
            storiesContainer.scrollLeft + storiesContainer.offsetWidth <
            storiesContainer.scrollWidth
              ? 1
              : 0;
        });
      
}
