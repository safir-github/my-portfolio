<script>

</script>

<template>

    <footer>

        <div class="footer-p">
            <p>Dernière mise à jour le 19/01/2024 | Par Safir Lemoudaa</p>
        </div>

        <div class="footer-link">
            <a class="position" href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fmynetwork%2F&trk=login_reg_redirect"><img src="../images/linkedin.png" alt="un logo de linkedin"></a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FNew_dev_github"><img src="../images/x.png" alt="un logo de x"></a>
            <a href="https://github.com/safir-github"><img src="../images/github.png" alt="un logo de github"></a>
        </div>

    </footer>

</template>

<style>

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