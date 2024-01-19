<script>

</script>

<template>

    <header id="header">

        <div class="logo">
            <img src="../images/logo2.png" alt="logo">
        </div>

        <div class="menu">
            <nav>
                <RouterLink to="/" class="nav-link">Accueil</RouterLink>
                <RouterLink to="/creations" class="nav-link">Mes Créations</RouterLink>
                <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
            </nav>
        </div>

    </header>

</template>

<style>

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

</style>