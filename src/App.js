import './App.css';
import homePhoto from './assets/img/home.png';
import aboutPhoto from './assets/img/about.jpg';
import app1Photo from './assets/img/app1.png';
import app2Photo from './assets/img/app2.png';
import metFood from './assets/img/met-food.jpg';
import eggFood from './assets/img/egg-food.jpg';
import foodTruck from './assets/img/food-truck.png';
import mbAppPhoto from './assets/img/movil-app.png';
import ScrollReveal from 'scrollreveal';
import Drug from './Drug';


function App() {
   
    const themeBtn = () => {
        const themeButton = document.getElementById('theme-button')
        const darkTheme = 'dark-theme'
        const iconTheme = 'bx-sun'

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

        if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
        }
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
      
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    }

    function scrollTop(){
        const scrollTop = document.getElementById('scroll-top');
        if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)


    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
      })
    }
    window.addEventListener('scroll', scrollActive)
  
    const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    });

    sr.reveal(`.home__data, .home__img,
                .about__data, .about__img,
                .services__content, .menu__content,
                .app__data, .app__img,
                .contact__data, .contact__button,
                .footer__content`, {
        interval: 200
    })
 
  return (
    <div>
        <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bx-chevron-up scrolltop__icon'></i>
        </a>

        <header class="l-header" id="header">           
            <nav class="nav navbar navbar-expand-lg bd-container">              
                <a href="#" class="nav__logo">Tasty</a>
                <button class="navbar-toggler nav__toggle"  data-bs-toggle="collapse" data-bs-target="#navbarNav">
                   <i class="bx bx-menu"></i>
                </button>  
                <div class="collapse navbar-collapse" id="navbarNav">     
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
                        <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>
                        <li><i class='bx bx-moon change-theme' id="theme-button" onClick={themeBtn}></i></li>
                    </ul>
                </div>         
            </nav>
        </header>


      <main class="l-main">
            <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Tasty food</h1>
                        <h2 class="home__subtitle">Try the best food of <br/> the week.</h2>
                        <a href="#" class="button">View Menu</a>
                    </div>    
                    <img src={homePhoto} alt="no img" class="home__img"/>
                </div>
            </section>

            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <span class="section-subtitle about__initial">About us</span>
                        <h2 class="section-title about__initial">We cook the best <br/> tasty food</h2>
                        <p class="about__description">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                        <a href="#" class="button">Explore history</a>
                    </div>
                    <img src={aboutPhoto} alt="" class="about__img"/>
                </div>
            </section>

            <section class="services section bd-container" id="services">
                <span class="section-subtitle">Offering</span>
                <h2 class="section-title">Our amazing services</h2>

                <div class="services__container  bd-grid">
                    <div class="services__content">
                        <img src={metFood} alt="" class="services__img"/>
                        <h3 class="services__title">Excellent food</h3>
                        <p class="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                    </div>

                    <div class="services__content">
                        <img src={eggFood} alt="" class="services__img"/>
                         <h3 class="services__title">Fast food</h3>
                        <p class="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                    </div>

                    <div class="services__content">
                       <img src={foodTruck} alt="" class="services__img"/>
                       <h3 class="services__title">Delivery</h3>
                        <p class="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                    </div>
                </div>
            </section>
 
          <Drug/>          

            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">App</span>
                        <h2 class="section-title app__initial">App is aviable</h2>
                        <p class="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                        <div class="app__stores">
                            <a href="#"><img src={app1Photo} alt="" class="app__store"/></a>
                            <a href="#"><img src={app2Photo} alt="" class="app__store"/></a>
                        </div>
                    </div>
                    <img src={mbAppPhoto} alt="" class="app__img"/>
                </div>
            </section>

            <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid">
                    <div class="contact__data">
                        <span class="section-subtitle contact__initial">Let's talk</span>
                        <h2 class="section-title contact__initial">Contact us</h2>
                        <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                    </div>

                    <div class="contact__button">
                        <a href="#" class="button">Contact us now</a>
                    </div>
                </div>
            </section>

         <footer class="footer section bd-container">
            <div class="footer__container bd-grid">
                <div class="footer__content">
                    <a href="#" class="footer__logo">Tasty Food</a>
                    <span class="footer__description">Restaurant</span>
                    <div>
                        <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>
                <div class="footer__content">
                    <h3 class="footer__title">Services</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Delivery</a></li>
                        <li><a href="#" class="footer__link">Pricing</a></li>
                        <li><a href="#" class="footer__link">Fast food</a></li>
                        <li><a href="#" class="footer__link">Reserve your spot</a></li>
                    </ul>
                </div>
                <div class="footer__content">
                    <h3 class="footer__title">Information</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Event</a></li>
                        <li><a href="#" class="footer__link">Contact us</a></li>
                        <li><a href="#" class="footer__link">Privacy policy</a></li>
                        <li><a href="#" class="footer__link">Terms of services</a></li>
                    </ul>
                </div>
                <div class="footer__content">
                    <h3 class="footer__title">Address</h3>
                    <ul>
                        <li>Lalbag </li>
                        <li>Dhaka 1000</li>
                        <li>+8801934567892</li>
                        <li>tastyfood@email.com</li>
                    </ul>
                </div>
            </div>
        </footer>
      </main>



    </div>
  );
}

export default App;
