import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import './style.css'


const i18n = createI18n({
  locale: 'ru', // Язык по умолчанию
  fallbackLocale: 'en',
  messages: { en, ru },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
