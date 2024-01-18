<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="div-main">
    <header id="header">

      <div class="logo">
        <img src="./images/logo2.png" alt="logo">
      </div>

      <div class="menu">
        <nav>
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/creations" class="nav-link">Mes Créations</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </nav>
      </div>

    </header>

    <RouterView />

    <footer>

      <div class="footer-p">
        <p>Dernière mise à jour le 18/01/2024 | Par Safir Lemoudaa</p>
      </div>

      <div class="footer-link">
        <a class="position" href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fmynetwork%2F&trk=login_reg_redirect"><img src="./images/linkedin.png" alt="un logo de linkedin"></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FNew_dev_github"><img src="./images/x.png" alt="un logo de x"></a>
        <a href="https://github.com/safir-github"><img src="./images/github.png" alt="un logo de github"></a>
      </div>

    </footer>
  </div>

</template>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Lora&family=Salsa&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');


template {
  background-color: black;
}

.div-main {
  background-color: black;
}

header {
    background-color: black;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 3.4em;
    padding-top: 2em;
    border-bottom: solid 3px #DBC2A4;
}

.logo {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
}

header img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.menu {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    height: 40px;
    width: 30%;
    background-color: #DBC2A4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 20px;
}

nav span {
    text-decoration: none;
    color: white;
    font-family: 'salsa';
    font-size: 1.2em;
}

nav a {
    text-decoration: none;
    color: white;
    font-family: 'salsa';
    font-size: 1.2em;
}

.nav-link.router-link-active {
  color: black;
  border-top: solid 1px black;
}


.link-site {
    text-decoration: none;
    color: #DBC2A4;
}


footer {
    background-color: black;
    height: 200px;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-evenly;
    border-top: solid 2px #DBC2A4;
    margin-top: 10em;
}

.footer-p {
    width: 25%;
    height: 50%;
    background-color: #DBC2A4;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer p {
    color: white;
    font-family: 'salsa';
    font-size: 1em;
}

.footer-link {
    width: 25%;
    height: 50%;
    background-color: #DBC2A4;
    border-radius: 30px;
    flex-direction: row;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-link img {
    width: 4em;
    margin-left: 3em;
}

.position {
    margin-left: -2em;
}

</style>
