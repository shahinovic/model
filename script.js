'use strict';
const q = q => document.querySelector(q);
const qA = q => document.querySelectorAll(q);
const showBtns = qA('.show-modal');
const hideBtn = q('.close-modal');
const modal = q('.modal');
const overlay = q('.overlay');
const showFun = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideFun = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
showBtns.forEach(showBtn => {
  showBtn.addEventListener('click', showFun);
});
hideBtn.addEventListener('click', hideFun);
overlay.addEventListener('click', hideFun);
