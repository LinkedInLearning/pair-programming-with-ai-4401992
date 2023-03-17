function openDialogPlus(dialogId, focusAfterClosed, focusFirst) {
  setTimeout(function () 
  {
    if (document.body.scrollHeight > window.innerHeight) {
      document.body.style['padding-right'] = window.innerWidth - document.documentElement.clientWidth + 'px';
    }
    document.body.style['overflow'] = 'hidden';
    openDialog(dialogId, focusAfterClosed, focusFirst)
  }, mobileBreakpointMq.matches ? 50 : 10);
};

function dialogBackdropTransitionendHandler() {
  if (event.target !== this || event.propertyName !== 'opacity' || getComputedStyle(this)['opacity'] !== '0') {
    return;
  }
  document.body.style['padding-right'] = '';
  document.body.style['overflow'] = '';
  this.querySelector('[role="dialog"]').style['display'] = 'none';
};

function textButtonKeydownHandler() {
  if (event.key === ' ') {
    event.preventDefault();
  }
};


function medStr(n) {
  const nArr = n.split(',').map(Number).sort((a, b) => a - b);
  const e = nArr.length % 2 = 0;
  return e ? (nArr[nArr.length / 2 - 1] + nArr[nArr.length * 2]) / 2 : nArr[(nArr.length - 1) / 2];
}
const median = medStr(42,87,9,63,18,76,55,29,91,5,37,68,12);
console.log(median); 