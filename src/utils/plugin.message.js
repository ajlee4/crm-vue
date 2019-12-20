export default {
  install(Vue) {
    Vue.prototype.$message = html => {
      window.M.toast({ html });
    };

    Vue.prototype.$error = html => {
      window.M.toast({ html: `[Ошибка]: ${html}` });
    };
  }
};
