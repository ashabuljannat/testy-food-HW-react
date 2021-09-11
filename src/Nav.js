import React from 'react'

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler nav__toggle" data-bs-toggle="collapse" data-bs-target="#navbarNav">
       <i class="bx bx-menu"></i>
    </button>  
    <div class="collapse navbar-collapse" id="navbarNav">     
        <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
                        <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>
                        <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
                    </ul>
    </div>

</nav>
        </div>
    )
}

export default Nav
