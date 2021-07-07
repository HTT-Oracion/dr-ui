import DrButton from "./src/button.vue";

DrButton.install = (Vue) => {
  Vue.component(DrButton.name, DrButton);
};

export default DrButton;
