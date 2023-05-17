   // responsive navbar
   hamburger = document.querySelector(".hamburger");
   hamburger.onclick = function () {
     navBar = document.querySelector(".nav-bar");
     navBar.classList.toggle("active");
   }

   //Avto

   const card = document.getElementById("card")

   const  objects = [
    {
     image : "landcruzer.jpg",
     model : "Land Cruzer" ,
      about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>250$</span>",
      
    },

    {
     image : "ranc.jpg",
     model : "Range Rover" ,
     about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>150$</span>",
     
   },
   {
     image : "maybach.jpg",
     model : "Mercedes Maybach" ,
     about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>220$</span>",
     
   },

   {
     image : "landcruz.jpg",
     model : "Land Cruzer" ,
     about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>240$</span>",
     
   },
   {
     image : "cruze.jpg",
     model : "Chevralet Cruze" ,
     about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>50$</span>",
     
   },
   {
     image : "landcruzer.jpg",
     model : "Land Cruzer" ,
     about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>150$</span>",
     
   },

   {
    image : "ranc.jpg",
    model : "Range Rover" ,
    about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>250$</span>",
    price : "150 $"
    
  },
  {
    image : "maybach.jpg",
    model : "Mercedes Maybach" ,
    about : "Rahatlığı və ekonomik olmasi ilə göz oxşayır <br/> <span>150$</span>",
    price : "200 $"
    
  } ]

     objects.forEach(obj => {
       card.innerHTML += `   
        <div class="card m-3" style="width: 18rem;">
               <a href="fotorama.htm" target="_blank"><img  class="card-img-top" src="img/${obj.image}" alt="elantra-rentacarbaku"></a>
               <div class="card-body">
                  <h5 class="card-title">${obj.model}</h5>
                  <p class="card-text">${obj.about}</p>
                <a href="https://wa.me/0517711111"  target="_blank" class="btn btn-success ">Whats app</a>

                <a href="tel:+994517711111" class="btn btn-primary">Zəng et</a>
             </div>
      </div>`
     });



    // !!!!!!! !!! !Ehtiyyat Slider !!!!!!!!!!!!!
    
    // const ANIMATING_CLASS = 'slider__item--animating';

    // const Slider = {
    //   init() {
    //     this.sliderEl = document.querySelector('.slider');
    //     this.slideInnerEl = document.querySelector('.slider__inner');
    //     this.sliderItemsEl = document.querySelectorAll('.slider__item');
    //     this.offset = 0;
    //     this.direction = 'left';
    //     this.maxOffset = (this.sliderItemsEl.length - 1) * 100;

    //     this.slideInnerEl.addEventListener('transitionend', this.onSliderTransitionEnd.bind(this));
    //     setInterval(this.slide.bind(this), 3000);
    //   },
    //   slide() {
    //     if (this.isMaxLeft()) {
    //       this.direction = 'right';
    //     } else if (this.isMaxRight()) {
    //       this.direction = 'left';
    //     }

    //     this.moveSlider();
    //   },
    //   isMaxLeft() {
    //     return this.offset <= -this.maxOffset;
    //   },
    //   isMaxRight() {
    //     return this.offset >= 0;
    //   },
    //   getCurrentPage() {
    //     if (this.offset < 0) {
    //       return (this.offset * -1) / 100;
    //     }

    //     return this.offset / 100;
    //   },
    //   getSignal() {
    //     return this.direction === 'left' ? -1 : 1;
    //   },
    //   onSliderTransitionEnd() {
    //     const signal = this.getSignal();
    //     const currentPage = this.getCurrentPage();

    //     this.sliderItemsEl.forEach(element => element.classList.remove(ANIMATING_CLASS));
    //   },
    //   moveSlider() {
    //     const signal = this.getSignal();
    //     const currentPage = this.getCurrentPage();

    //     this.offset = this.offset + (signal * 100);
    //     this.sliderItemsEl[currentPage].classList.add(ANIMATING_CLASS);
    //     this.sliderItemsEl[currentPage + (-1 * signal)].classList.add(ANIMATING_CLASS);
    //     this.slideInnerEl.style.setProperty('--slider-offset', `${this.offset}%`);
    //   }
    // };

    // const slider = Object.create(Slider);
    // slider.init();