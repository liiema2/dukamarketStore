function showSlider(){
    let list = document.getElementsByClassName('swiper-wrapper')
    let prev = document.getElementsByClassName('bs-button bs-button-prev')
    let next= document.getElementsByClassName('bs-button bs-button-next')
     console.log(list, prev, next)
     
     if (list && next) {
         next.onclick = function() {
           // Xử lý khi nút "next" được bấm
           list.style.left = '-25%';
           console.log(1);
         };
       }
        
   }
   showSlider();