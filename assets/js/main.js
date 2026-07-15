const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu.link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
})

// Change background header 
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);



// Scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        
        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*="' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href*="' + sectionId + '"]').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Scroll Resume
const pages = document.querySelectorAll('.page');
const resumeTabs = document.querySelectorAll('.resume_tabs a');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 50;

        let sectionId = page.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            resumeTabs.forEach(tab => {
                if (tab.getAttribute('href') === '#' + sectionId) {
                    tab.classList.add('current');
                } else {
                    tab.classList.remove('current');
                }
            });
        }
    });
}

window.addEventListener('scroll', resumeActive);

// About
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 3000; // Duration in milliseconds
      const increment = target / (duration / 10);
  
      let count = 0;
      const updateCount = () => {
        count += increment;
  
        if (count < target) {
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  

  
// Mixitup
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
})

// Portfolio popup


// Services
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll(".services_modal"),
    modalClose = document.querySelectorAll('.modal_close_icon');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    });
});

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        });
    });
});

// Filter active
document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.portfolio_filters li');
    
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove the filter-active class from all items
            filterItems.forEach(el => el.classList.remove('filter-active'));
            
            // Add the filter-active class to the clicked item
            this.classList.add('filter-active');
        });
    });
});


// Google sheet form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxm_EX09YfE6VTwp_NmKS7BIJSuuPAAHoDWAsFDy_ONSq0IAhhWkMjyi8J8e1PEGcmgtg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

// Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate(
                {
                    left: `${posX}px`,
                    top: `${posY}px`,
                },
                { duration: 500, fill: "forwards" }
            );
        }
    );


// Slider infinity
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider ul');
    const items = slider.children;
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth;
    const totalWidth = itemWidth * totalItems;

    slider.style.width = `${totalWidth}px`;

    // Clone items to create an infinite loop effect
    for (let i = 0; i < totalItems; i++) {
        slider.appendChild(items[i].cloneNode(true));
    }
});

// Loader
setTimeout(function(){
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 2000); 


//   
