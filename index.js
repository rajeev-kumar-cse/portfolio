
function contact(event){
   event.preventDefault();
   const loading = document.querySelector('.modal__overlay--loading');
   const success= document.querySelector('.modal__overlay--success');
   loading.classList +=" modal__overlay--visible";
   emailjs
   .sendForm(
      'service_w2998i5',
      'template_zrjb2jq',
      event.target,
      '_OZ8MoGRPpeTpC8tC'
   ).then(() =>{
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
   }).catch(() =>{
      loading.classList.remove("modal__overlay--visible");
      alert(
         "The email service is temporarily down. Please contact directly on rajrausani@gmail.com"
      );
   })
}

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

let contrastToggle = false;
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList+=" dark-theme";
    }else{
        document.body.classList.remove("dark-theme");
    }
}
const scaleFactor = 1 / 20;
function moveBackground(event){
    const shape = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i<shape.length; i++){
        const isOdd = i %2 !== 0;
        const boolInteger = isOdd ? -1 : 1;
        shape[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`;
    }
}