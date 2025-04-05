const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('header ul a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});



/*-----------------------------------------------*/
let inputs_form = document.querySelectorAll('#form div input');
let submit = document.getElementsByClassName('submit');

submit.onclick = function () {
  let boolean = false; 
  
  inputs_form.forEach(input => {
    if (input.value === '') {
      boolean = true;
    }
  });

  if (boolean) {
    Swal.fire({
      title: "Missing Fields!",
      text: "Please fill in all required fields before proceeding.",
      icon: "warning",
      confirmButtonText: "OK"
    });
      }

      else{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "YOUR BOOKING HAS BEEN SUCCESSFULLY COMPLETED!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: 'small-title'  
          }
        });
      }

      
};



/*----------------------------------------------------------------*/

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });

  let send = document.getElementById('sendBtn');
  let form = document.getElementById('myForm');
  
  send.onclick = function(event) {
    event.preventDefault(); 

    Swal.fire({
      title: "Send successfully!",
      icon: "success",
      draggable: true
    }).then(() => {
      form.submit(); 
    });
  };

  