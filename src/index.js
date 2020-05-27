import './styles/index.scss'

window.Vue = require('vue')

Vue.component('example-component',require('./components/example.vue').default)

const app = new Vue({
    el: '#app'
})


console.log('1111')