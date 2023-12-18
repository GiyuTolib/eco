<template>
  <div class="wrapper-t" :class="{'darck': isDark}">
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
            <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                    delay: 4500,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                }"
                :navigation="false"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="(item, index) in swiperInfo" :key="index">
                    <div class="text">
                        <h1 class="H_1"> {{ item.title }} </h1>
                        <p class="T_1">{{ item.text }}</p>
                    </div>
                </swiper-slide>
            </swiper>
    </div>
    <div class="link-boxes">
        <div class="wrap">
            <div class="box" :class="{'bgnan': isDark}" @click="openallcardF">
                <i class="fa-light fa-border-all"></i>
                <h3>Все</h3>
            </div>
            <div class="box" :class="{'bgnan': isDark}" v-for="(item, index) in pagesInfo" :key="index" @click="opencardF(index)">
                <i :class="item.icon"></i>
                <h3>{{ item.icontext }}</h3>
            </div>
        </div>
    </div>
    <div class="cards">
        <div class="card" v-for="(item, index) in pagesInfo" :key="index">
            <div class="wrap" v-if="openallcard || opencard == index" :class="{'border2': isDark}">
            <div class="content" v-if="openallcard || opencard == index">
                <div class="top" :style="{'color': item.color}" :class="{'darck2': isDark}">
                    <i :class="item.icon"></i>    
                    <h3 class="B_1" >{{ item.icontext }}</h3>      
                </div>
                <h1 class="H_2">{{ item.title }}</h1>
                <p>{{ item.desc }}</p>
                <div class="info">
                    <div class="info-bloc" :style="{'color': item.color}">
                        <span>{{ item.num1 }}</span><p>курсов</p>
                    </div>
                    <div class="info-bloc" :style="{'color': item.color}">
                        <span>{{ item.num2 }}</span><p>практических заданий</p>
                    </div>
                    <div class="info-bloc" :style="{'color': item.color}">
                        <span>{{ item.num3 }}</span><p>Преподователей</p>
                    </div>
                </div>
                <button :style="{'backgroundColor': item.color}">{{ item.btn }}</button>
            </div>
            <div class="image">
                <img :src="item.img" alt="img">
            </div>
            <button class="btn1" :style="{'backgroundColor': item.color}">{{ item.btn }}</button>
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
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
    data(){
        return{
            isDark: false,
            isOpenMenu: false,
            opencard: 0,
            openallcard: true,
            swiperInfo:[
                {title: `Универсальная платформа Все что нужно, в одном!`, text: 'Платформа которая собрала в себе множество инструментов для профессиональной деятельности, начните прямо сейчас и получите все возможности'},
                {title: 'Универсальная платформа Все что нужно, в одном!', text: 'Платформа которая собрала в себе множество инструментов для профессиональной деятельности, начните прямо сейчас и получите все возможности'},
                {title: 'Универсальная платформа Все что нужно, в одном!', text: 'Платформа которая собрала в себе множество инструментов для профессиональной деятельности, начните прямо сейчас и получите все возможности'},
                {title: 'Универсальная платформа Все что нужно, в одном!', text: 'Платформа которая собрала в себе множество инструментов для профессиональной деятельности, начните прямо сейчас и получите все возможности'},
                {title: 'Универсальная платформа Все что нужно, в одном!', text: 'Платформа которая собрала в себе множество инструментов для профессиональной деятельности, начните прямо сейчас и получите все возможности'},
            ],
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
        }
    },
    methods:{
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
        opencardF(index){
            this.opencard = index
            this.openallcard = false
            console.log('ishaldi', this.openallcard, this.opencard);
        },
        openallcardF(){
            if (!this.openallcard) {
                this.openallcard = true
            }
            console.log('ishaldi', this.openallcard, this.opencard);
        }
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
.black04{
    color: var(--black, #040404);
}
.darck-gray{
    color: var(--dark-grey, #6C6C6C);
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
.wrapper-t{
    padding: 55px 100px;
    border-radius: 20px;
    background-color: var(--white, #FFF);
    position: relative;
    z-index: 0;
}

/*       -----                navbar              -----         */

.wrapper-t nav{
    position: sticky;
    top: 0px;
    z-index: 3;
}
.wrapper-t nav .top{
    background-color: var(--white, #FFF);
    display: flex;
    align-items: center;
    gap: 14px;
    position: relative;
        padding: 25px 0 10px 0;
    z-index: 3;
}
.wrapper-t nav .top .left, .wrapper-t nav .top .right{
    display: flex;
    gap: 10px;
}
.wrapper-t nav .logo{
    width: 160px;
    height: 58px;
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    padding: 20px;
}
.wrapper-t nav .icon{
    border-radius: 15px;
    background: var(--light-grey, #F3F3F3);
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
}
.wrapper-t nav i{
    font-size: 24px;
}
.wrapper-t nav .search{
    flex-grow: 1;
    display: flex;
    position: relative;
    align-self: stretch;
}
.wrapper-t nav .search input{
    flex-grow: 1;
    outline: none;
    border-radius: 15px;
    border: 2px solid var(--light-grey, #F3F3F3);
    padding-left: 20px;
    font-size: 1rem;
    background-color: #F3F3F300;
}
.wrapper-t nav .search .icon{
    position: absolute;
    right: -0.2px;
    top: 0px;
    border: 2.1px solid var(--light-grey, #F3F3F3);
}
.wrapper-t nav .btn{
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
.wrapper-t .b1{
    border: 2px solid var(--dark-grey, #F3F3F3) !important;
    background-color: #ffffff00;
}
.wrapper-t .b2{
    background: var(--light-grey, #F3F3F3);
    border: 2px solid var(--dark-grey, #F3F3F3) !important;
}
.wrapper-t nav .menu{
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
.wrapper-t nav .menu .search{
    display: none;
}
.wrapper-t nav .menu .saw-mode{
    position: relative;
    top: 50px;
    align-self: flex-end;
    display: none;
}
.wrapper-t nav .menu .search input{
    height: 58px;
}
.wrapper-t nav .menu ul{
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
.wrapper-t nav .top70{
    top: 70px;
    z-index: 2;
    background-color: white;
    opacity: 1;
    display: flex;
}
.wrapper-t nav .user{
    display: none;
}

/*       -----                showcase              -----         */
.wrapper-t .showcase{
    margin-top: 26px;
    text-align: center;
    color: white;
}
.wrapper-t .swiper{
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
.wrapper-t .swiper-wrapper .text{
    width: 760px;
    margin-bottom: 147px;
}
.wrapper-t .swiper-wrapper .text p{
    padding: 0 22px;
    margin-top: 20px;
}
.wrapper-t .swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 187px 0 33px 0;
  background-size: cover;
  background-position-y: 65%;
  background-image: linear-gradient(98deg, rgba(30, 117, 248, 0.60) -30.27%, rgba(0, 0, 0, 0.60) 17.14%, rgba(4, 4, 4, 0.60) 71.85%, rgba(30, 117, 248, 0.60) 138.06%), url(@/assets/images/showcase1.jpeg);
}

/*       -----                Page-links              -----         */

.wrapper-t .link-boxes{
    margin: 40px 0 80px 0;
    overflow-x: scroll;
}
.wrapper-t .link-boxes .wrap{
    display: flex;
    gap: 20px;
    padding: 20px 0;
}
.wrapper-t .link-boxes .box{
    display: flex;
    flex-shrink: 0;
    width: 197px;
    padding: 20px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    border-radius: 15px;
    background: var(--light-grey, #FAFAF9);
    color: var(--dark-grey, #6C6C6C);
}
.wrapper-t .link-boxes .box i{
    font-size: 24px;
    border-radius: 50%;
    border: 2px solid var(--dark-grey, #6C6C6C);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.wrapper-t .link-boxes .box:hover{
    background-color: #EDF2F9;
    color: var(--accent, #1E75F8);
}
.wrapper-t .link-boxes .box:hover i{
    border: 2px solid var(--accent, #1E75F8);
}

/*       -----                cards              -----         */

.wrapper-t .cards{
    display: grid;
    grid-template-columns: 1fr;
}
.wrapper-t .cards .wrap{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 150px;
    padding: 40px 30px;
    border-radius: 20px;
    background-color: var(--light-grey, #FAFAF9);
    margin-bottom: 50px;
}
.wrapper-t .card .image img{
    border-radius: 20px;
    object-fit: cover;
}
.wrapper-t .card .content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 27px;
}
.wrapper-t .card .content .top{
    border-radius: 200px;
    background: var(--white, #FFF);
    padding:10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    align-self: flex-start;
}
.wrapper-t .card .content .top i{
    font-size: 22px;
}
.wrapper-t .card .content p{
    color: var(--dark-grey, #6C6C6C) !important;
    font-family: SF Pro Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
}
.wrapper-t .card .info{
    display: flex;
    align-items: center;
    align-content: center;
    gap: 10px 20px;
    align-self: stretch;
    flex-wrap: wrap;
}
.wrapper-t .card .info-bloc{
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 20px;
}
.wrapper-t .card button{
    display: flex;
    height: 55px;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border: none;
    border-radius: 200px;
    color: white;
}
.wrapper-t .card .btn1{
    display: none;
}

/*       -----                footer              -----         */

.wrapper-t footer{
    margin-top: 40px;
    border-radius: 20px;
    background: var(--black, #040404);
    padding: 90px 25px 53px 45px;
    color: white;
}
.wrapper-t footer .top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    gap: 10px;
}
.wrapper-t footer .top .left{
    width: 25%;
}
.wrapper-t footer .top .left .logo{
    width: 136px;
    margin-bottom: 20px;
}
.wrapper-t footer p{
    font-family: SF Pro Display;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.28px;
}
.wrapper-t footer .top .logos{
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
}
.wrapper-t footer .top .logos .image{
    height: 28px;
}
.wrapper-t footer .top .logos .image:nth-of-type(3){
    height: 18px;
}
.wrapper-t footer .top .right{
    display: flex;
    gap: 70px;
}
.wrapper-t footer .top h3{
    color: var(--accent, #1E75F8);
    font-family: SF Pro Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 20px;
}
.wrapper-t footer .top ul{
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.wrapper-t footer .top .links{
    display: flex;
    width: 417px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 10px;
    flex-wrap: wrap;
}
.wrapper-t footer .top .links h3{
    margin-bottom: 30px;
    width: 100%;
}
.wrapper-t footer .top .links .link-box{
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 200px;
    border: 1px solid var(--dark-grey, #292929);
    cursor: pointer;
}
.wrapper-t footer .top .links .link-box h3{
    color: white;
    margin-bottom: 0;
    font-size: 1rem;
}
.wrapper-t footer .top .links .link-box i{
    font-size: 20px;
    color: white;
}
.wrapper-t footer .top .info{
    width: 232px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.wrapper-t footer .top .right .logos{
    display: none;
}
.wrapper-t footer .right>p{
    display: none;
}
.wrapper-t footer .bottom{
    padding-top: 50px;
    border-top: 1px solid var(--dark-grey, #6C6C6C);
    color: var(--dark-grey, #6C6C6C);
    display: flex;
    justify-content: space-between;
}
.wrapper-t footer .bottom .left{
    width: 25%;
}
.wrapper-t footer .bottom .left a{
    font-size: 1rem;
}
.wrapper-t footer .bottom .right{
    display: flex;
    gap: 50px;
    font-size: 0.85rem;
}


/*       -----                classes              -----         */
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


/*       -----                media              -----         */

@media (max-width: 1500px){
    .wrapper-t footer .top .right{
        gap: 30px;
    }

}
@media (max-width: 1400px) {
    .wrapper-t footer .top{
        flex-wrap: wrap;
        gap: 40px;
    }
    .wrapper-t footer .top .left{
        width: 264px;
    }
    .wrapper-t footer .top .right{
        gap: 30px;
        flex-wrap: wrap;
    }
}

@media(max-width: 1000px){
    .wrapper-t{
        padding: 55px;
    }
    .wrapper-t nav .menu .search, .wrapper-t nav .menu .saw-mode{
        display: flex;
    }
    .wrapper-t nav .menu ul{
        margin-top: -20px;
    }
    .wrapper-t nav .top{
        justify-content: space-between;
    }
    .wrapper-t nav .top .search, .wrapper-t nav .top .btn, .wrapper-t nav .top svg{
        display: none;
    }
    .wrapper-t nav .top .tel{
        border-radius: 200px;
        background: var(--accent, #1E75F8) !important;
        color: white;
        padding: 15px 45px;
        border: none !important;
    }
    .wrapper-t nav .user{
        display: flex;
    }
    .wrapper-t .cards .wrap{
        gap: 30px;
        padding: 35px 20px;
        grid-template-columns: 1fr;
    }
    .wrapper-t .cards .wrap .btn1{
        display: block;
    }
    .wrapper-t .cards .wrap .content button{
        display: none;
    }
    .wrapper-t footer .bottom{
        padding-top: 40px;
        flex-direction: column-reverse;
        gap: 40px;
    }
    .wrapper-t footer .bottom .right{
        gap: 20px;
        flex-direction: column;
    }
}
@media (max-width: 600px) {
    .wrapper-t footer .top .right .links{
        width: 100%;
    }
}
@media(max-width: 500px){
    :root{
        font-size: 16px;
    }
    .wrapper-t{
        padding: 55px 0px;
        border-radius: none;
    }
    .wrapper-t nav .top{
        padding: 25px 10px 10px 10px;
    }
    .wrapper-t nav .top .left{
        align-items: center;
    }
    .wrapper-t nav .icon{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    .wrapper-t nav .top .tel{
        padding: 15px;
        border-radius: 50%;
    }
    .wrapper-t nav .top .logo{
        padding: 18px;
    }
    .wrapper-t nav .menu .search .icon{
        background-color: #04040400;
        border: none;
        top: 4px;
    }
    .wrapper-t nav .menu .search .icon .border-gray, .wrapper-t nav .menu .search .darck-gray{
        background: none !important;
        border: none !important;
    }
    .wrapper-t .swiper{
        border-radius: 0;
    }
    .wrapper-t .swiper-slide{
        padding-top: 100px;
    }
    .wrapper-t .swiper-wrapper .text{
        width: 98%;
        margin-bottom: 14px;
    }
    .wrapper-t .swiper-wrapper .text h1{
        font-size: 2.25rem;
    }
    .wrapper-t .link-boxes{
        padding: 0 10px;
    }
    .wrapper-t .link-boxes .wrap{
        gap: 10px;
    }
    .wrapper-t .link-boxes .box{
        flex-direction: row;
        gap: 8px;
        width: auto;
        padding: 10px;
        border-radius: 200px;
    }
    .wrapper-t .cards{
        padding: 0 10px;
    }
    .wrapper-t .cards .wrap .image{
        min-height: 234px;
    }
    .wrapper-t footer{
        padding: 40px 20px;
        border-radius: none;
    }
    .wrapper-t footer .top .left{
        width: 100%;
    }
    .wrapper-t footer .top .left .logos{
        display: none;
    }
    .wrapper-t footer .top .right .logos{
        display: flex;
        width: 100%;
        margin-top: -20px;
        margin-bottom: 40px;
    }
    .wrapper-t footer .top h3{
        margin-bottom: 0;
    }
    .wrapper-t footer .top .right>p{
        width: 100%;
    }
    .wrapper-t .mt3{
        margin-top: 10px;
    }
}
</style>