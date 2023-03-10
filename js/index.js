import { initSlider } from './modules/initSlider.js';
import { initService } from './modules/initService.js';
import { initReserve } from './modules/initReserve.js';

const init = () => {
    initSlider();
    initService();
    initReserve();
};

window.addEventListener('DOMContentLoaded', init);

/*
GET /api - получить список услуг
GET /api?service={n} - получить список барберов
GET /api?spec={n} - получить список месяца работы барбера
GET /api?spec={n}&month={n} - получить список дней работы барбера
GET /api?spec={n}&month={n}&day={n} - получить список свободных часов барбера
POST /api/order - оформить заказ
*/
