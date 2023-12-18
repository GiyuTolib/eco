<template>
  <div class="wrapper-c"  :class="{'darck': isDark}">
    <nav>
        <div class="top" :class="{'darck': isDark}">
            <div class="left">
            <div class="logo" :class="{'darck-gray': isDark}">
                <img v-if="!isDark" src="@/assets/images/expertLogo.png" alt="logo">
                <img v-if="isDark" src="@/assets/images/expertdarclogo.png" alt="logo">
            </div>
            <div class="icon" :class="{'darck-gray border-gray': isDark}" @click="openTopMenu">
                <i :class="menuIcon"></i>
            </div>
            </div>
            <svg v-if="!isDark" @click="darckMode" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <rect x="1" y="1" width="52" height="52" rx="14" fill="white"/>
                    <rect x="1" y="1" width="52" height="52" rx="14" stroke="#F3F3F3" stroke-width="2"/>
                    <path d="M18.9 35.1C21.8823 35.1 24.3 32.6824 24.3 29.7C24.3 26.7177 21.8823 24.3 18.9 24.3C15.9177 24.3 13.5 26.7177 13.5 29.7C13.5 32.6824 15.9177 35.1 18.9 35.1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.1 35.1C38.0823 35.1 40.5 32.6824 40.5 29.7C40.5 26.7177 38.0823 24.3 35.1 24.3C32.1177 24.3 29.7 26.7177 29.7 29.7C29.7 32.6824 32.1177 35.1 35.1 35.1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.3 29.6999L24.5849 29.5568C25.3347 29.1818 26.1616 28.9866 27 28.9866C27.8384 28.9866 28.6653 29.1818 29.4151 29.5568L29.7 29.6999M36.45 18.8999L40.2813 27.841C40.4255 28.1771 40.4999 28.539 40.5 28.9048V29.6999M17.55 18.8999L13.7187 27.841C13.5747 28.1767 13.5003 28.5381 13.5 28.9034V29.6999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="isDark" @click="darckMode" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                <rect x="1" y="1" width="52" height="52" rx="14" fill="#040404"/>
                <rect x="1" y="1" width="52" height="52" rx="14" stroke="#292929" stroke-width="2"/>
                <path d="M18.9 35.1C21.8823 35.1 24.3 32.6824 24.3 29.7C24.3 26.7177 21.8823 24.3 18.9 24.3C15.9177 24.3 13.5 26.7177 13.5 29.7C13.5 32.6824 15.9177 35.1 18.9 35.1Z" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35.1 35.1C38.0823 35.1 40.5 32.6824 40.5 29.7C40.5 26.7177 38.0823 24.3 35.1 24.3C32.1176 24.3 29.7 26.7177 29.7 29.7C29.7 32.6824 32.1176 35.1 35.1 35.1Z" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.3 29.6999L24.5849 29.5568C25.3347 29.1818 26.1616 28.9866 27 28.9866C27.8384 28.9866 28.6653 29.1818 29.4151 29.5568L29.7 29.6999M36.45 18.8999L40.2813 27.841C40.4255 28.1771 40.4999 28.539 40.5 28.9048V29.6999M17.55 18.8999L13.7187 27.841C13.5747 28.1767 13.5003 28.5381 13.5 28.9034V29.6999" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="search">
                <input type="search"  :class="{'border-gray': isDark}" placeholder="Поиск по названию" name="search" id="search">
                <div class="icon" :class="{'darck-gray border-gray': isDark}">
                    <i class="fa-regular fa-magnifying-glass"></i>
                </div>
            </div>
            <div class="right">
            <div class="icon tel" :class="{'darck-gray': isDark, 'blue-c': isDark}">
                <i class="fa-light fa-phone"></i>
            </div>
            <div class="icon user" :class="{'darck-gray border-gray': isDark}">
                <i class="fa-regular fa-user"></i>
            </div>
            </div>
            <button class="btn" :class="{'blue-c': isDark, 'b1': !isDark}">Регистрация</button>
            <button class="btn b2" :class="{'bg-white': isDark}">Вход</button>
        </div>
        <div :class="{ 'darck': isDark ,'top70': isOpenMenu}" class="menu">
                <div class="saw-mode">
                    <svg v-if="!isDark" @click="darckMode" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <rect x="1" y="1" width="52" height="52" rx="14" fill="white"/>
                    <rect x="1" y="1" width="52" height="52" rx="14" stroke="#F3F3F3" stroke-width="2"/>
                    <path d="M18.9 35.1C21.8823 35.1 24.3 32.6824 24.3 29.7C24.3 26.7177 21.8823 24.3 18.9 24.3C15.9177 24.3 13.5 26.7177 13.5 29.7C13.5 32.6824 15.9177 35.1 18.9 35.1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.1 35.1C38.0823 35.1 40.5 32.6824 40.5 29.7C40.5 26.7177 38.0823 24.3 35.1 24.3C32.1177 24.3 29.7 26.7177 29.7 29.7C29.7 32.6824 32.1177 35.1 35.1 35.1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.3 29.6999L24.5849 29.5568C25.3347 29.1818 26.1616 28.9866 27 28.9866C27.8384 28.9866 28.6653 29.1818 29.4151 29.5568L29.7 29.6999M36.45 18.8999L40.2813 27.841C40.4255 28.1771 40.4999 28.539 40.5 28.9048V29.6999M17.55 18.8999L13.7187 27.841C13.5747 28.1767 13.5003 28.5381 13.5 28.9034V29.6999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg v-if="isDark" @click="darckMode" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <rect x="1" y="1" width="52" height="52" rx="14" fill="#040404"/>
                        <rect x="1" y="1" width="52" height="52" rx="14" stroke="#292929" stroke-width="2"/>
                        <path d="M18.9 35.1C21.8823 35.1 24.3 32.6824 24.3 29.7C24.3 26.7177 21.8823 24.3 18.9 24.3C15.9177 24.3 13.5 26.7177 13.5 29.7C13.5 32.6824 15.9177 35.1 18.9 35.1Z" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M35.1 35.1C38.0823 35.1 40.5 32.6824 40.5 29.7C40.5 26.7177 38.0823 24.3 35.1 24.3C32.1176 24.3 29.7 26.7177 29.7 29.7C29.7 32.6824 32.1176 35.1 35.1 35.1Z" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.3 29.6999L24.5849 29.5568C25.3347 29.1818 26.1616 28.9866 27 28.9866C27.8384 28.9866 28.6653 29.1818 29.4151 29.5568L29.7 29.6999M36.45 18.8999L40.2813 27.841C40.4255 28.1771 40.4999 28.539 40.5 28.9048V29.6999M17.55 18.8999L13.7187 27.841C13.5747 28.1767 13.5003 28.5381 13.5 28.9034V29.6999" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </div>
                <ul :class="{'darck': isDark}">
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Модули</a></li>
                    <li><a href="#">Компаниям</a></li>
                    <li><a href="#">Медиа</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <div class="search">
                    <input type="search"  :class="{'border-gray': isDark}" placeholder="Поиск по названию" name="search" id="search">
                    <div class="icon" :class="{'darck-gray border-gray': isDark}">
                        <i class="fa-regular fa-magnifying-glass"></i>
                    </div>
                </div>
        </div>
    </nav>
    <div class="showcase">
        <div class="content">
            <h1>Обучающие курсы по разным направлениям</h1>
            <div class="btns">
                <button class="btn btn1">Найти курс</button>
                <button class="btn btn2">Добавить свой курс</button>
            </div>
        </div>
    </div>
    <div class="rec-courses">
        <h2 class="H_2">Рекомендуемые курсы</h2>
        <p class="T_1">Изходя из востребованности и рейтинга курсов</p>
        <div class="btns">
            <button class="prev"><i class="fa-light fa-angle-left"></i></button>
            <button class="next"><i class="fa-light fa-angle-right"></i></button>
        </div>
        <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            :cssMode="true"
            :modules="modules"
            class="mySwiper"
            :breakpoints="{
                1540:{ slidesPerView:3 },
                1100:{ slidesPerView:2 }, 
            }"
            :navigation="{enabled: true, prevEl: '.prev', nextEl: '.next'}"
        >
        <swiper-slide v-for="item in resCoursesInfo" :key="item"> 
            <div class="course-box">
                <div class="image">
                    <img :src="item.img" alt="img">
                    <div class="rate">
                        <h3 class="B_2">{{ item.rate }}</h3>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="like">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
                <div class="content">
                    <h2 class="H_3 black04">{{ item.title }}</h2>
                    <div class="comp">
                        <div class="icon"><i :class="item.icon"></i></div>
                        <div class="comp-desc">
                            <h4 class="T_1 black04">Meta inc.</h4>
                            <p class="T_2 darck-gray-c">{{ item.name }}</p>
                        </div>
                    </div>
                    <h3 class="T_2 black04">Курс включает:</h3>
                    <ul class="darck-gray-c T_2">
                        <li class="" v-for="i in item.info" :key="i">
                            {{ i }}
                        </li>
                    </ul>
                    <div class="sum">
                        <h3 class="T_1 black04">{{ item.newsum }}</h3>
                        <p class="T_2 darck-gray-c del-text">{{ item.oldsum }}</p>
                        <p class="T_2 darck-gray-c">{{ item.monthPlan }}</p>
                    </div>
                    <button>Подробнее</button>
                </div>
            </div>
        </swiper-slide>
        </swiper>
    </div>
    <div class="catalog-courses">
        <h2>Каталог курсов</h2>
        <div class="poisk-wrap">
            <button>Сортировать</button>
            <div class="poisk">
                <input type="text" name="poisk" id="poisk1" placeholder="Поиск по названию">
                <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
        </div>
        <div class="course-names">
            <div class="cours" v-for="(item, index) in typeCourses" :key=" index">
                <i class="fa-light fa-function"></i>
                <p>{{ item }}</p>
            </div>
        </div>
        <div class="course-boxes" :class="{'h780': !isOpenCourse}">
            <div class="course-box" v-for="item in courses" :key="item">
                <div class="image">
                    <img :src="item.img" alt="img">
                    <div class="rate">
                        <h3 class="B_2">{{ item.rate }}</h3>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="like">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
                <div class="content">
                    <h2 class="H_3 black04">{{ item.title }}</h2>
                    <div class="comp">
                        <div class="icon"><i :class="item.icon"></i></div>
                        <div class="comp-desc">
                            <h4 class="T_1 black04">Meta inc.</h4>
                            <p class="T_2 darck-gray-c">{{ item.name }}</p>
                        </div>
                    </div>
                    <h3 class="T_2 black04">Курс включает:</h3>
                    <ul class="darck-gray-c T_2">
                        <li class="" v-for="i in item.info" :key="i">
                            {{ i }}
                        </li>
                    </ul>
                    <div class="sum">
                        <h3 class="T_1 black04">{{ item.newsum }}</h3>
                        <p class="T_2 darck-gray-c del-text">{{ item.oldsum }}</p>
                        <p class="T_2 darck-gray-c">{{ item.monthPlan }}</p>
                    </div>
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
        <button @click="OpenCourse">Больще курсов</button>
    </div>
    <div class="choose-course">
        <div class="image"><img src="../../assets/images/fourman.png" alt="img"></div>
        <div class="content">
            <div class="left">
                <h2>Нужна помощь в выборе курса  ?</h2>
                <p>Админы всегда на старте чтобы поговорить с вами!</p>
                <div class="icons">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-light fa-phone"></i>
                </div>
            </div>
            <div class="right">
                <input type="text" name="name" id="name1" placeholder="Имя">
                <input type="tel" name="tel1" id="tel1" placeholder="Номер телефона">
                <button>Отправить</button>
            </div>
        </div>
    </div>
    <footer :class="{'darck-gray': isDark}">
        <div class="top">
            <div class="left">
                <div class="logo"><img src="@/assets/images/expertRealLogo.png" alt="img"></div>
                <p>Все содержимое, размещенное
                на нашем сайте, защищено авторскими правами. Мы являемся владельцами исключительных прав на тексты, изображения, видео, аудио и другие материалы, размещенные на сайте,
                если не указано иное.
                </p>
                <p class="mt3">Денежные переводы через:</p>
                <div class="logos">
                    <div class="image"><img src="../../assets/images/paypal.png" alt="img"></div>
                    <div class="image"><img src="../../assets/images/mastercard.png" alt="img"></div>
                    <div class="image"><img src="../../assets/images/realpay.png" alt="img"></div>
                </div>
            </div>
            <div class="right">
                <ul>
                    <h3>Навигация</h3>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Модули</a></li>
                    <li><a href="#">Компаниям</a></li>
                    <li><a href="#">Новости</a></li>
                </ul>
                <div class="links">
                    <h3>Направлении</h3>
                    <div class="link-box" :class="{'bgnan': isDark}" v-for="(item, index) in pagesInfo" :key="index" @click="opencardF(index)">
                        <i :class="item.icon"></i>
                        <h3>{{ item.icontext }}</h3>
                    </div>
                </div>
                <div class="info">
                    <h3>Контакты</h3>
                    <p>100084, Узбекистан, г. Ташкент, Малая кольцевая дорога, 35</p>
                    <a href="https://realsoft.uz/home">info@realsoft.uz</a>
                    <a href="tel: +998 71 205 84 84">+998 71 205 84 84</a>
                </div>
                <p class="mt3">Денежные переводы через:</p>
                <div class="logos">
                    <div class="image"><img src="../../assets/images/paypal.png" alt="img"></div>
                    <div class="image"><img src="../../assets/images/mastercard.png" alt="img"></div>
                    <div class="image"><img src="../../assets/images/realpay.png" alt="img"></div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <a href="https://realsoft.uz/home">2023 Realsoft</a>
            </div>
            <div class="right">
                <a href="#">Офферта</a>
                <a href="#">Платежная информация</a>
                <a href="#">Публичный договор</a>
                <a href="#">Политика конфедициальности</a>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import { Navigation, Pagination, Mousewheel, Keyboard , FreeMode} from 'swiper/modules';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [FreeMode, Navigation, Pagination, Mousewheel, Keyboard],
      };
    },
    data(){
        return{
            isOpenCourse: true,
            isDark: false,
            isOpenMenu: false,
            resCourses: [1,2,3],
            courses:[
                {id: 1, rate: 4.1, title: 'Графический дизайн для новичков', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course1.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
                {id: 2, rate: 4.1, title: 'Дизайнер иллюстрации для новичков', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course2.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
                {id: 3, rate: 4.1, title: 'Веб-дизайн для начинающих', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course3.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
                {id: 4, rate: 4.1, title: 'Графический дизайн для новичков', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course1.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
                {id: 5, rate: 4.1, title: 'Графический дизайн для новичков', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course1.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
                {id: 6, rate: 4.1, title: 'Графический дизайн для новичков', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course1.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
                {id: 7, rate: 4.1, title: 'Графический дизайн для новичков', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course1.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
                {id: 8, rate: 4.1, title: 'Графический дизайн для новичков', name: 'ИТ компания,',
                icon: 'fa-brands fa-gitlab', oldsum: '1 999 000 сум' ,newsum: '999 000 сум', monthPlan: '330 000 сум/мес рассрочка', img: './src/assets/images/course1.png',
                info: ['120 видео уроков', '90 практических заданий ', '24/7 онлайн чат'],},
            ],
            typeCourses: ['Программирование', 'Дизайн', 'Маркетинг', 'Менеджмент', 'Продовольство', 'Финансы', 'Математика', 'Языковые курсы', 'Академические науки'],
            pagesInfo:[
                {icontext: 'Обучение', icon: 'fa-solid fa-file-user', color: '#2F80F8', title: 'Обучающие курсы по разным направлениям', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card1.png'},
                {icontext: 'Вакансии', icon: 'fa-regular fa-watch', color: '#872FF8', title: 'Находите вакансии и резюме на разные позиции', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card2.png'},
                {icontext: 'Резюме', icon: 'fa-solid fa-wreath', color: '#2F4FF8', title: 'Находите вакансии и резюме на разные позиции', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card3.png'},
                {icontext: 'Стартапы', icon: 'fa-solid fa-whale', color: '#FBB732', title: 'Инвестируйте в стартапы и создавайте свои', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card4.png'},
                {icontext: 'Сертификаты', icon: 'fa-solid fa-watermelon-slice', color: '#00B06C', title: 'Получайте сертификацию подтверждающий вашу Экспертность', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card5.png'},
                {icontext: 'Тесты', icon: 'fa-solid fa-truck-monster', color: '#5115B8', title: 'Психологические тесты и диагностика', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card6.png'},
                {icontext: 'Фрилансер', icon: 'fa-brands fa-twitch', color: '#FF2A54', title: 'Находите заказы для фриланса', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card7.png'},
                {icontext: 'Фриланс подрядчики', icon: 'fa-solid fa-turkey', color: '#FF2A54', title: 'Находите заказы и подрядчиков для фриланс заказов', desc: 'Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend.', num1: '100+', num2: '123+', num3: '20+', btn: 'Курсы', img: '/src/assets/images/card8.png'},
            ],
        }
    },
    computed:{
        menuIcon(){
            if (this.isOpenMenu) {
                return "fa-regular fa-x"
            }else{
                return "fa-regular fa-bars"
            }
        },
        resCoursesInfo(){
            const res = [];
            for (let i = 0; i < this.courses.length; i++) {
                if (this.resCourses.includes(this.courses[i].id)) {
                    res.push(this.courses[i])
                }
            }
            return res
        }
    },
    methods:{
        OpenCourse(){
            if (this.isOpenCourse) {
                this.isOpenCourse = false
            } else{
                this.isOpenCourse = true          
            }
        },
        darckMode(){
            if (this.isDark) {
                this.isDark = false;
            }else{
                this.isDark = true;
            }
        },
        openTopMenu(){
            if (this.isOpenMenu) {
                this.isOpenMenu = false;
            }else{
                this.isOpenMenu = true;
            }
        },
    },
}
</script>

<style>
svg:hover{
    cursor: pointer;
}
.mt3{
    margin-top: 30px;
}
.del-text{
    text-decoration: line-through;
}
.black04{
    color: var(--black, #040404);
}
.darck-gray-c{
    color: var(--dark-grey, #6C6C6C);
}
.bold{
    font-weight: 900;
}
.H_1{
    font-family: SF Pro Display;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1.2px;
}
.H_2{
    font-family: SF Pro Display;
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.84px;
}
.H_3{
    font-family: SF Pro Display;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -0.6px;
    color: var(--black, #040404);
}
.T_1{
    font-family: SF Pro Display;
    font-size: 1.12rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
}
.T_2{
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
}
.B_1{
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.32px;
}
.B_2{
    font-family: SF Pro Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.14px;
}
.wrapper-c{
    padding: 55px 100px;
    border-radius: 20px;
    background-color: var(--white, #FFF);
    position: relative;
    z-index: 0;
}

/*       -----                navbar              -----         */

.wrapper-c nav{
    position: sticky;
    top: 0px;
    z-index: 3;
}
.wrapper-c nav .top{
    background-color: var(--white, #FFF);
    display: flex;
    align-items: center;
    gap: 14px;
    position: relative;
        padding: 25px 0 10px 0;
    z-index: 3;
}
.wrapper-c nav .top .left, .wrapper-c nav .top .right{
    display: flex;
    gap: 10px;
}
.wrapper-c nav .logo{
    width: 160px;
    height: 58px;
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    padding: 20px;
}
.wrapper-c nav .icon{
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
}
.wrapper-c nav i{
    font-size: 24px;
}
.wrapper-c nav .search{
    flex-grow: 1;
    display: flex;
    position: relative;
    align-self: stretch;
}
.wrapper-c nav .search input{
    flex-grow: 1;
    outline: none;
    border-radius: 15px;
    border: 2px solid var(--light-grey, #F3F3F3);
    padding-left: 20px;
    font-size: 1rem;
    background-color: #F3F3F300;
}
.wrapper-c nav .search .icon{
    position: absolute;
    right: -0.2px;
    top: 0px;
    border: 2.1px solid var(--light-grey, #F3F3F3);
}
.wrapper-c nav .btn{
    display: flex;
    padding: 16px 14px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: var(--accent, #1E75F8);
    text-align: center;
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.16px;
    border: none;
}
.wrapper-c .b1{
    border: 2px solid var(--dark-grey, #F3F3F3) !important;
    background-color: #ffffff00;
}
.wrapper-c .b2{
    background: var(--light-grey, #F3F3F3);
    border: 2px solid var(--dark-grey, #F3F3F3) !important;
}
.wrapper-c nav .menu{
    position: absolute;
    width: 100%;
    height: calc(100vh);
    background-color: #ffffff00;
    opacity: 0;
    top: -270px;
    left: 0px;
    display: none;
    padding: 0 10px;
    flex-direction: column;
    align-items: flex-start;
    z-index: -1;
    transition: 0.6s all ease-in-out;
}
.wrapper-c nav .menu .search{
    display: none;
}
.wrapper-c nav .menu .saw-mode{
    position: relative;
    top: 50px;
    align-self: flex-end;
    display: none;
}
.wrapper-c nav .menu .search input{
    height: 58px;
}
.wrapper-c nav .menu ul{
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: SF Pro Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c nav .top70{
    top: 70px;
    z-index: 2;
    background-color: white;
    opacity: 1;
    display: flex;
}
.wrapper-c nav .user{
    display: none;
}

/*       -----                showcase              -----         */
.wrapper-c .showcase{
    padding: 180px 0;
    background-image: url(../../assets/images/exCoursesShowcase.jpeg);
    background-size: cover;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    background-image: linear-gradient(98deg, rgba(30, 117, 248, 0.60) -30.27%, rgba(0, 0, 0, 0.60) 17.14%, rgba(4, 4, 4, 0.60) 71.85%, rgba(30, 117, 248, 0.60) 138.06%), url(../../assets/images/exCoursesShowcase.jpeg);
    background-position-y: 50%;
    margin-top: 50px;
}
.wrapper-c .showcase .content{
    width: 717px;
    text-align: center;
}
.wrapper-c .showcase .content h1{
    color: var(--light-grey, #FAFAF9);
    font-family: SF Pro Display;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -1.2px;
}
.wrapper-c .showcase .content .btns{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
}
.wrapper-c .showcase .btn{
    padding: 15px;
    width: 192px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SF Pro Display;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.16px;
    color: var(--light-grey, #F3F3F3);
    border-radius: 200px;
}
.wrapper-c .showcase .btn1{
    border: 2px solid var(--light-grey, #F3F3F3);
    background-color: #04040400;
}
.wrapper-c .showcase .btn2{
    background-color: var(--accent, #1E75F8);
    border: none;
}

/*       -----                res-courses              -----         */

.wrapper-c .rec-courses{
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: var(--light-grey, #F3F3F3);
    margin: 150px 0;
}
.wrapper-c .rec-courses>h2{
    text-align: center;
}
.wrapper-c .rec-courses>p{
    margin-bottom: 80px;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c .rec-courses .boxes{
    display: flex;
    gap: 20px;
    justify-content: center;
}
.wrapper-c .course-box{
    border-radius: 15px;
    background-color: white;
    width: 400px;
    border: 2px solid var(--light-grey, #F3F3F3);
}
.wrapper-c .course-box .image{
    width: 396px;
    position: relative;
}
.wrapper-c .course-box .image img{
    border-radius: 15px 15px 0px 0;
}
.wrapper-c .course-box .image .rate{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 8px;
    background: var(--light-grey, #F3F3F3);
    position: absolute;
    top: 36px;
    left: 30px;
}
.wrapper-c .course-box .image .rate i{
    font-size: 14px;
    color: #FBB732;
}
.wrapper-c .course-box .image .like{
    display: flex;
    width: 50px;
    height: 50px;
    padding: 16px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    position: absolute;
    right: 23px;
    bottom: -23px;
}
.wrapper-c .course-box .image .like i{
    font-size: 18px;
}
.wrapper-c .course-box .content{
    padding: 30px;
    text-align: left;
}
.wrapper-c .course-box .content .comp{
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
    align-items: center;
}
.wrapper-c .course-box .content .comp i{
    font-size: 30px;
}
.wrapper-c .course-box .content>h3{
    font-weight: 700;
}
.wrapper-c .course-box .content ul{
    list-style-type: disc;
    position: relative;
    left: 16px;
    margin-bottom: 30px;
}
.wrapper-c .course-box .content .sum{
    display: flex;
    flex-wrap: wrap;
    gap: 1px 15px;
    margin-bottom: 30px;
}
.wrapper-c .course-box .content .sum h3{
    font-weight: 700;
    font-size: 1.25rem;
}
.wrapper-c .course-box .content button{
    width: 100%;
    padding: 15px;
    border-radius: 200px;
    background: var(--accent, #1E75F8);
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 700;
}
.wrapper-c .rec-courses .btns{
    margin: 27px 0;
    display: none;
    justify-content: center;
    gap: 6px;
}
.wrapper-c .rec-courses .btns button{
    display: flex;
    width: 40px;
    height: 40px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    border: 1px solid var(--dark-grey, #6C6C6C);
}
.wrapper-c .rec-courses .btns i{
    color: var(--dark-grey, #6C6C6C);
    font-size: 20px;
}
.wrapper-c .mySwiper{
    width: 1240px;
}


/*       -----                catalog-courses              -----         */

.wrapper-c .catalog-courses .course-boxes{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 40px 20px;
}
.wrapper-c .catalog-courses>button{
    border-radius: 200px;
    background: var(--accent, #1E75F8);
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    border: none;
    display: flex;
    margin: 110px auto 150px auto;
}
.wrapper-c .catalog-courses> h2{
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--2, #181818);
    text-align: center;
    margin-bottom: 74px;
}
.wrapper-c .catalog-courses .poisk-wrap{
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
}
.wrapper-c .catalog-courses .poisk-wrap>button{
    color: var(--dark-grey, #6C6C6C);
    font-size: 1rem;
    border-radius: 16px;
    background: var(--light-grey, #F3F3F3);
    padding: 10px;
    border: none;
}
.wrapper-c .catalog-courses .poisk{
    display: flex;
    border-radius: 15px;
    border: 2px solid var(--light-grey, #F3F3F3);
    width: 707px;
    justify-content: space-between;
    align-items: center;
}
.wrapper-c .catalog-courses .poisk input{
    padding-left: 20px;
    border: none;
    align-self: stretch;
    outline: none;
    border-radius: 15px;
    color: var(--dark-grey, #6C6C6C);
    font-size: 1rem;
}
.wrapper-c .catalog-courses .poisk .icon{
    border-radius: 10px;
    background: var(--light-grey, #F3F3F3);
    width: 34.5px;
    height: 34.5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper-c .catalog-courses .poisk .icon i{
    font-size: 18px;
}
.wrapper-c .catalog-courses .course-names{
    display: flex;
    gap: 45px;
    overflow: scroll;
    border-radius: 20px;
    border: 2px solid var(--light-grey, #F3F3F3);
    padding: 10px;
    margin-bottom: 40px;
}
.wrapper-c .catalog-courses .course-names .cours{
    flex-shrink: 0;
    display: flex;
    gap: 3px;
    align-items: center;
    border-radius: 10px;
    background: var(--light-grey, #F3F3F3);
    padding: 10px;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c .catalog-courses .course-names .cours p{
    font-size: 1rem;
}
.wrapper-c .catalog-courses .course-names .cours i{
    font-size: 1.2rem;
}

/*       -----                choose-course              -----         */

.wrapper-c .choose-course{
    display: flex;
    gap: 20px;
}
.wrapper-c .choose-course .image{
    flex-grow: 1;
}
.wrapper-c .choose-course .content{
    padding: 50px 45px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    border: 2px solid var(--light-grey, #F3F3F3);
    background: var(--white, #FFF);
    flex-grow: 1;
}
.wrapper-c .choose-course .content .left{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 340px;
    flex-shrink: 1;
}
.wrapper-c .choose-course .content .left h2{
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1;
}
.wrapper-c .choose-course .content .left p{
    color: var(--black, #040404);
    width: 240px;
}
.wrapper-c .choose-course .content .left .icons{
    display: flex;
    gap: 10px;
}
.wrapper-c .choose-course .content .left .icons i{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    border: 1.3px solid var(--dark-grey, #6C6C6C);
    padding: 10px;
    font-size: 20px;
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-c .choose-course .content .right{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 340px;
}
.wrapper-c .choose-course .right input{
    border-radius: 15px;
    border: 1.5px solid var(--light-grey, #F3F3F3);
    background: var(--light-grey, #F3F3F3);
    padding: 16px 20px;
}
.wrapper-c .choose-course .content .right button{
    margin-top: 15px;
    border-radius: 200px;
    background: var(--unnamed, #2F80F8);
    padding: 16px;
    border: none;
    color: white;
}


/*       -----                footer              -----         */

.wrapper-c footer{
    margin-top: 40px;
    border-radius: 20px;
    background: var(--black, #040404);
    padding: 90px 25px 53px 45px;
    color: white;
}
.wrapper-c footer .top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    gap: 10px;
}
.wrapper-c footer .top .left{
    width: 25%;
}
.wrapper-c footer .top .left .logo{
    width: 136px;
    margin-bottom: 20px;
}
.wrapper-c footer p{
    font-family: SF Pro Display;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.28px;
}
.wrapper-c footer .top .logos{
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
}
.wrapper-c footer .top .logos .image{
    height: 28px;
}
.wrapper-c footer .top .logos .image:nth-of-type(3){
    height: 18px;
}
.wrapper-c footer .top .right{
    display: flex;
    gap: 70px;
}
.wrapper-c footer .top h3{
    color: var(--accent, #1E75F8);
    font-family: SF Pro Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 20px;
}
.wrapper-c footer .top ul{
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.wrapper-c footer .top .links{
    display: flex;
    width: 417px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 10px;
    flex-wrap: wrap;
}
.wrapper-c footer .top .links h3{
    margin-bottom: 30px;
    width: 100%;
}
.wrapper-c footer .top .links .link-box{
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 200px;
    border: 1px solid var(--dark-grey, #292929);
    cursor: pointer;
}
.wrapper-c footer .top .links .link-box h3{
    color: white;
    margin-bottom: 0;
    font-size: 1rem;
}
.wrapper-c footer .top .links .link-box i{
    font-size: 20px;
    color: white;
}
.wrapper-c footer .top .info{
    width: 232px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.wrapper-c footer .top .right .logos{
    display: none;
}
.wrapper-c footer .right>p{
    display: none;
}
.wrapper-c footer .bottom{
    padding-top: 50px;
    border-top: 1px solid var(--dark-grey, #6C6C6C);
    color: var(--dark-grey, #6C6C6C);
    display: flex;
    justify-content: space-between;
}
.wrapper-c footer .bottom .left{
    width: 25%;
}
.wrapper-c footer .bottom .left a{
    font-size: 1rem;
}
.wrapper-c footer .bottom .right{
    display: flex;
    gap: 50px;
    font-size: 0.85rem;
}

/*       -----                classes              -----         */

.h780{
    height: 780px;
}
.bg-white{
    background-color: var(--white, #FFF) !important;
}
.darck-gray{
    background-color: var(--dark-grey, #292929) !important;
}
.blue-c{
    color: var(--accent, #1E75F8);
    border: 2px solid var(--dark-grey, #292929) !important;
    background-color: #F3F3F300 !important;
}
.border-gray{
    border: 2.1px solid var(--dark-grey, #292929) !important;
}
.bgnan{
    background-color: var(--black, #04040400) !important;
    border: 2px solid #161616;
}
.border2{
    background-color: var(--black, #04040400) !important;
    border: 2px solid #161616;
}
.bgnan:hover{
    background-color: #161616 !important; 
    color: white !important;
}

.darck{
    background-color: var(--black, #040404) !important;
    color: var(--white, #FFF) !important;
}
.darck2{
    color: white !important;
    background: var(--dark-grey, #292929) !important;
}

@media(max-width: 1540px){
    .wrapper-c .rec-courses .mySwiper{
        width: 820px;
    }
}
@media (max-width: 1500px){
    .wrapper-c footer .top .right{
        gap: 30px;
    }
    .wrapper-c .choose-course .content{
        padding-right: 20px;
        gap: 10px;
    }
    .wrapper-c .choose-course .content .left, .wrapper-c .choose-course .content .right{
        width: 312px;
    }
}
@media (max-width: 1400px) {
    .wrapper-c footer .top{
        flex-wrap: wrap;
        gap: 40px;
    }
    .wrapper-c footer .top .left{
        width: 264px;
    }
    .wrapper-c footer .top .right{
        gap: 30px;
        flex-wrap: wrap;
    }
    .wrapper-c .choose-course{
        flex-wrap: wrap;
    }
}
@media(max-width: 1100px){
    .wrapper-c .rec-courses .mySwiper{
        width: 400px;
    }
}
@media(max-width: 1000px){
    .wrapper-c{
        padding: 55px;
    }
    .wrapper-c nav .menu .search, .wrapper-c nav .menu .saw-mode{
        display: flex;
    }
    .wrapper-c nav .menu ul{
        margin-top: -20px;
    }
    .wrapper-c nav .top{
        justify-content: space-between;
    }
    .wrapper-c nav .top .search, .wrapper-c nav .top .btn, .wrapper-c nav .top svg{
        display: none;
    }
    .wrapper-c nav .top .tel{
        border-radius: 200px;
        background: var(--accent, #1E75F8) !important;
        color: white;
        padding: 15px 45px;
        border: none !important;
    }
    .wrapper-c nav .user{
        display: flex;
    }
    .wrapper-c .showcase{
        padding: 78px 10px;
    }
    .wrapper-c .showcase .content{
        width: 100%;
    }
    .wrapper-c .showcase .content h1{
        font-size: 2.75rem;
    }
    .wrapper-c .rec-courses{
        padding: 20px 5px;
    }
    .wrapper-c footer .bottom{
        padding-top: 40px;
        flex-direction: column-reverse;
        gap: 40px;
    }
    .wrapper-c footer .bottom .right{
        gap: 20px;
        flex-direction: column;
    }
}
@media(max-width: 800px){
    .wrapper-c .choose-course{
        border-radius: 20px;
        border: 2px solid var(--light-grey, #F3F3F3);
        background: var(--white, #FFF);
        padding: 30px 20px;
        gap: 30px;
        margin: 0 15px;
    }
    .wrapper-c .choose-course .content{
        border: none;
        padding: 0;
        flex-wrap: wrap;
        gap: 30px;
    }
    .wrapper-c .choose-course .content .right, .wrapper-c .choose-course .content .left{
        width: 100%;
    }
    .wrapper-c .catalog-courses>button{
        margin: 100px auto;
    }
}
@media (max-width: 600px) {
    .wrapper-c footer .top .right .links{
        width: 100%;
    }
}

@media(max-width: 500px){
    :root{
        font-size: 16px;
    }
    .wrapper-c{
        padding: 55px 0 0 0;
        border-radius: none;
    }
    .wrapper-c nav .top{
        padding: 25px 10px 10px 10px;
    }
    .wrapper-c nav .top .left{
        align-items: center;
    }
    .wrapper-c nav .icon{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    .wrapper-c nav .top .tel{
        padding: 15px;
        border-radius: 50%;
    }
    .wrapper-c nav .top .logo{
        padding: 18px;
    }
    .wrapper-c nav .menu .search .icon{
        background-color: #04040400;
        border: none;
        top: 4px;
    }
    .wrapper-c nav .menu .search .icon .border-gray, .wrapper-c nav .menu .search .darck-gray{
        background: none !important;
        border: none !important;
    }
    .wrapper-c .showcase .btns{
        flex-wrap: wrap;
    }
    .wrapper-c .showcase{
       border-radius: 0;
       margin-top: 25px;
    }
    .wrapper-c .course-box .content {
        padding: 30px 10px;
    }
    .wrapper-c .course-box, .wrapper-c .course-box .image {
        width: 356px;
    }
    .wrapper-c .rec-courses .mySwiper{
        width: 360px;
    }
    .wrapper-c .rec-courses .btns{
        display: flex;
    }
    .wrapper-c .rec-courses>p{
        margin-bottom: 0px;
    }
    .wrapper-c .catalog-courses .poisk-wrap{
        padding: 0 10px;
        gap: 5px;
    }
    .wrapper-c .catalog-courses .course-names{
        border-radius: 0;
    }
    .wrapper-c footer{
        padding: 40px 20px;
        border-radius: 0;
    }
    .wrapper-c footer .top .left{
        width: 100%;
    }
    .wrapper-c footer .top .left .logos{
        display: none;
    }
    .wrapper-c footer .top .right .logos{
        display: flex;
        width: 100%;
        margin-top: -20px;
        margin-bottom: 40px;
    }
    .wrapper-c footer .top h3{
        margin-bottom: 0;
    }
    .wrapper-c footer .top .right>p{
        width: 100%;
    }
    .wrapper-c .mt3{
        margin-top: 10px;
    }
}
</style>