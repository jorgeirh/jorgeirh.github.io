class Slider{
  constructor(sliderId){
    this.sliderImages = document.querySelectorAll(`#${sliderId} .slide`);
    this.arrowLeft = document.querySelector(`#${sliderId} .arrow-left`);
    this.arrowRight = document.querySelector(`#${sliderId} .arrow-right`);
    this.current = 0;
    self = this;
    }
  reset(){
    for(let i = 0; i < this.sliderImages.length; i++){
      this.sliderImages[i].style.display = 'none';
    }
  }




  //Inicia slider
  startSlide(){
    this.reset();
    this.sliderImages[0].style.display = 'block';

    this.arrowLeft.addEventListener('click', function(){
      if(self.current === 0){
        self.current = self.sliderImages.length;
      }
      self.slideLeft();
    });

    this.arrowRight.addEventListener('click', function(){
      if(self.current === self.sliderImages.length - 1){
        self.current = -1
      }
      self.slideRight();
    }, false);

    setInterval(() => {
      self.arrowRight.click();
    }, 5000);
  }

  //Muestra anterior
  slideLeft(){
    this.reset();
    this.sliderImages[this.current - 1].style.display = 'block';
    this.current--;
  }

  //Muestra Siguiente
  slideRight() {
    this.reset();
    this.sliderImages[this.current + 1].style.display = 'block';
    this.current++;
  }


}
let sliderPrincipal = new Slider('sliderPrincipal');
  sliderPrincipal.startSlide();
