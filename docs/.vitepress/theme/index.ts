// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Confetti from '../components/Confetti.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Confetti', Confetti)
  }
}