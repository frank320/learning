function compose(middleware) {
  return function (context, next) {
    let index = -1; //防止多次调用
    return dispatch(0)
    function dispatch(i) {
      if(i <= index) return Promise.reject("call mutiple times")
      index = i;
      const fn = middleware[i];
      if (!fn) return Promise.resolve();
      return Promise.resolve(fn(context, function next() {
        return dispatch(i + 1);
      }))
    }
  }
}