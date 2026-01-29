const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.style.opacity=1;
      el.style.transform='translateY(0)';
    }
  })
});
