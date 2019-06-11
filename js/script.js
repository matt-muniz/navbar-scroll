const sidebar_fixed = document.querySelector('.sidebar_fixed');
const sfO = sidebar_fixed.offsetHeight;
let wI = window.innerHeight;
let scrollable = sfO - wI;
let start = 0;

window.addEventListener('scroll', e => {
  sidebar_fixed.style.position = 'fixed';
  var st = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(Math.floor(st));

  if (wI <= sfO) {
    if (st > start) {
      start = Math.floor(st);
      sidebar_fixed.style.top = -start + 'px';
      if (start > scrollable) {
        start = scrollable;
        sidebar_fixed.style.top = -start + 'px';
      }
    } else {
      start = Math.floor(st);
      sidebar_fixed.style.top = -start + 'px';
    }
  }
});
window.addEventListener('resize', e => {
  wI = window.innerHeight;
  scrollable = sfO - wI;
  if (start >= 0) {
    start = scrollable;
    sidebar_fixed.style.top = -start + 'px';
    console.log(start);
  }
});
