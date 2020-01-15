// https://codepen.io/lehollandaisvolant/pen/ryrrGx
// Deze pen heb ik afgekeken hoe je kan weten of er omhoog of omlaag gescrollt word
// Doorgaans ben ik absoluut geen fan van functies aan de scroll van de browser hangen maar voor deze Medium clone is het wel een beetje nodig
let scrollPos = 0;

window.onscroll = () => {
  if (window.localStorage.getItem('setEmail')) {
    return
  }
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    document.querySelector('body > form').classList.remove('active')

    document.querySelector('body').classList.remove('modal')
  } else {
    if (document.body.scrollTop > 500) {
      document.querySelector('body').classList.add('modal')

      document.querySelector('body > form').classList.add('active')
    }
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
}
