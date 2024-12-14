
import { createApp } from "vue";

// import installIcons from "./icon";

import 'virtual:svg-icons-register'

import App from "./App.vue";

const app = createApp(App);
// installIcons(app);
app.mount('#app')
