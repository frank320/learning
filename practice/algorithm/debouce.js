function debouce(fn, delay) {
  let timer = null;
  return (...arg) => {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, delay)
  }
}

function throttle(fn, delay) {
  let canRun = true;

  return (...arg) => {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arg);
      canRun = true;
    }, delay)
  }
}