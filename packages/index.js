import DrButton from "./button/src/button";

const components = [DrButton];

const install = (Vue) => {
  // 判断是否已经注册
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否直接引入
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  ...components,
  install,
};
