import ToggleSwitch from "./components/ToggleSwitch";

import "./style/main.css";

export default {
  install(Vue) {
    Vue.component("toggle-switch", ToggleSwitch);
  }
};
