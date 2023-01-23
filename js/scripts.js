const { createApp } = Vue;

createApp({
    data() {
      return {
        message: "Hello Vue!",
        imgSrc: "img/HelloVue.jpg"
      }
    }
  }).mount('#app')