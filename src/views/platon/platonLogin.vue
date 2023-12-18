<template>
  <div class="t-wrapper">
    <div class="login-page">
        <div class="login">
            <h2>Tizimga kirish</h2>
            <div class="login-input">
                <span>Login</span>
                <div class="login-inputinner">
                    <img src="https://api.cabinet.nntt.uz/web/v1/store/file/login/svg-user.svg" alt="login" />
                    <input type="text" placeholder="Kiritish" v-model="username" v-on:keyup.enter="tryToLogin"/>
                </div>
            </div>
            <div class="login-input">
                <span>Parol</span>
                <div class="login-inputinner">
                    <img src="https://api.cabinet.nntt.uz/web/v1/store/file/login/svg-password.svg" alt="login" />
                    <input :type="isPassword" placeholder="Parol" v-model="password" v-on:keyup.enter="tryToLogin"/>
                    <span class="eye" @click="togglePassword()">
                    <img :src="'https://api.cabinet.nntt.uz/web/v1/store/file/login/' + isPasswordImg" alt="eye" />
                    </span>
                </div>
            </div>
        </div>
        <div class="image">
            <img src="../assets/images/login.png" alt="img">
        </div>
    </div>

    <video src="../assets/images/bggss1.mp4" autoplay loop muted></video>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.t-wrapper{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
}
.t-wrapper video{
    width: 100%;
    height:100%;
    object-fit: cover;
    background-size: cover;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    filter: brightness(95%)
}
.t-wrapper .image{
    width: 400px;
}
.t-wrapper .image img{
    width: 100%;
}
.login-page{
    display: flex;
    width: 850px;
    padding: 20px;
    background-color: white;
}

.login {
  background: #ffffff;
  border-radius: 10px;
  padding: 25px 35px;
  width: 450px;
  position: relative;
  user-select: none;
  z-index: 1;  
  -webkit-box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.15);
          box-shadow: 0px 20px 100px rgba(0, 0, 0, 0.15);
}
.login-input {
  margin-bottom: 25px;
  position: relative;
}
.login-inputinner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 50px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e6eaed;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 5px;
}

.login-inputinner img {
  margin: 15px;
}
.login-input span {
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #000000;
  margin-bottom: 5px;
  -ms-flex-negative: 0;
      flex-shrink: 0;
}
.login-input input {
  width: 100%;
  height: 100%;
  border: 0;
  background: none;
  border-left: 1px solid #e6eaed;
  padding: 0 20px;
}
.login-input input::-webkit-input-placeholder {
  font-size: 15px;
  line-height: 20px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  color: #5d6677;
}

.login-input input:-ms-input-placeholder {
  font-size: 15px;
  line-height: 20px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
  color: #5d6677;
}

.login-input input::-ms-input-placeholder {
  font-size: 15px;
  line-height: 20px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
  color: #5d6677;
}

.login-input input::placeholder {
  font-size: 15px;
  line-height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #5d6677;
}
.login-input .eye {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 0;
  cursor: pointer;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.login-input .eye:hover {
  opacity: 0.7;
}

@media (max-width: 920px){
    
}
</style>