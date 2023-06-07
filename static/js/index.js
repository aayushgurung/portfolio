window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


gsap.from('.animate-introduction', {
  opacity: 0, 
  y: -50, 
  duration: 1, 
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-skills, .animate-education', {
  opacity: 0,
  y: -10,
  
  duration: 1,
  scrollTrigger: {
    trigger: '.animate-skills',
    start: 'top center+=25%',
    toggleActions: 'restart pause pause none',
  },
});
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_bzybheg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      document.querySelector('.message').textContent="Sent Successfully";
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

gsap.set('.message', { display: 'block' });

    gsap.fromTo(
      '.message',
      { y: 0},
      {
        y: 2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      }
    );
