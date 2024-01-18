<script setup>

document.addEventListener("DOMContentLoaded", function () {

// pour récupérer les boutons et modals
let openButtons = document.querySelectorAll(".open-modal");
let closeButtons = document.querySelectorAll(".close-modal");
let modals = document.querySelectorAll(".modal");

// pour faire appaître la modal au clic du bouton open
openButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        modals[index].style.display = "block";
    });
});

// pour faire disparaître la modal au clic du bouton close
closeButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        modals[index].style.display = "none";
    });
});


// pour fermer la modal lorsqu'on clic en dehors d'elle
window.addEventListener("click", function (event) {
modals.forEach(function (modal, index) {
    if (!modal.contains(event.target) && !event.target.classList.contains("open-modal")) {
        modals[index].style.display = "none";
    }
});
});
});

</script>




<template>

  <main>

    <p class="modal-bug">Si les modals ne s'ouvrent pas, pensez à actualiser la page !</p>

    <h1><span>Mes Créations</span></h1>

    <p class="presentation">Bienvenue dans la page de mon Portfolio qui présente <span>les créations</span>, <br> qui m'ont permis de faire mes premiers pas dans l'univers du Développement Web !<br><br></p>

    <!-- pour la présentation des créations -->
    <section class="section-creations">
                <div class="div-creation">
    
                    <h2 class="first-h2"><span>Création 1 - Le CV</span></h2>
    
                    <p> Découvre le premier projet que j'ai réalisé, à l'aide du html et du css ! <br> Ce projet est la première montagne que j'ai dû gravir. <br> À ce moment-là, j'avais commencé à me familiariser avec le langage HTML <br> et je venais tout juste de découvrir le CSS, qui me paraissait plus complexe à aborder que le HTML. <br> En réalisant ce projet de CV avec ces deux langages, cela m'a permis de mieux comprendre la relation entre ces langages <br> et surtout de me familiariser un peu plus avec le CSS.</p>
    
                    <img class="img-flou" src="../images/image-cv-1.png" alt="une image flou">
    
                    <button class="open-modal">Voir Plus !</button>
    
                    <div class="modal">
                        <div class="modal-content">
                            <button class="close-modal">Retour</button>
    
                            <p> CV en HTML et CSS - 26/12/2023 <br> Technologies utilisées - HTML5 / CSS3 <br> <a target="_blank" class="link-site" href="https://safir-github.github.io/cv-html-css/">- Visiter le Site -</a> <br> <a target="_blank" class="link-site" href="https://github.com/safir-github/cv-html-css">- Visiter le Repository -</a></p>
    
                            <img class="img-modal" src="../images/cv-p1-4.png" alt="un morceau du projet">
                            <img class="img-modal" src="../images/cv-p2.png" alt="un morceau du projet">
                            <img class="img-modal" src="../images/cv-p3.png" alt="un morceau du projet">
                            <img class="img-modal" src="../images/cv-p4.png" alt="un morceau du projet">
                        </div>
                    </div>
    
                </div>
    
                <div class="div-creation">
    
                    <h2><span>Création 2 - Le Cahier des Charges</span></h2>
    
                    <p> Découvre le second projet que j'ai réalisé, cette fois au format PDF ! <br> 
Pas de code cette fois-ci. <br> Ce projet était peut-être le moins amusant de ce portfolio, mais il était nécessaire. <br> Il m'a permis de mieux comprendre la façon dont se construit un cahier des charges <br> mais aussi les bonnes questions à se poser. </p>
    
                    <img class="img-flou" src="../images/cdc-flou.png" alt="une image flou">
    
                    <button class="open-modal">Voir Plus !</button>
    
                    <div class="modal">
                        <div class="modal-content">
                            <button class="close-modal">Retour</button>
    
                            <p> Cahier des Charges - 28/12/2023 <br> Technologies utilisées - / Pas de code - Constructeur de PDF / <br> <a target="_blank" class="link-site" href="https://safir-github.github.io/CDC-repository/">- Consulter le PDF -</a></p>
    
                            <img class="img-modal" src="../images/cdc-p1.png" alt="un morceau du projet">
                            <img class="img-modal" src="../images/cdc-p2.png" alt="un morceau du projet">
                            <img class="img-modal" src="../images/cdc-p3.png" alt="un morceau du projet">
                        </div>
                    </div>
    
                </div>
    
                <div class="div-creation">
    
                    <h2><span>Création 3 - Dynamiser un Espace Commentaire</span></h2>
    
                    <p> Découvre le premier projet qui m'a permis de découvrir le language JavaScript ! <br> 
Alors pour le coup, je l'ai pensé au début et je le pense toujours, <br> JavaScript est vraiment plus complexe que les précédents langages que j'ai étudiés ! <br> Mais ce projet m'a beaucoup aidé à y voir un peu plus clair dans la logique de JavaScript.</p>
    
                    <img class="img-flou" src="../images/comment-section-flou.png" alt="une image flou">
    
                    <button class="open-modal">Voir Plus !</button>
    
                    <div class="modal">
                        <div class="modal-content">
                            <button class="close-modal">Retour</button>
    
                            <p> Dynamiser un Espace Commentaire - 04/01/2024 <br> Technologies utilisées - HTML5 / JS <br> <a target="_blank" class="link-site" href="https://safir-github.github.io/comment-section/">- Visiter le Site -</a> <br> <a target="_blank" class="link-site" href="https://github.com/safir-github/comment-section">- Visiter le Repository -</a></p>
    
                            <img class="img-modal" src="../images/comment-p3.png" alt="un morceau du projet">
                            <img class="img-modal" src="../images/comment-p1.png" alt="un morceau du projet">
                            <img class="img-modal" src="../images/comment-p2.png" alt="un morceau du projet">
                            
                        </div>
                    </div>
    
                </div>
    
            </section>

            <div class="div-top-of-page">
                <a href="#header"><img class="top-of-page" src="../images/logo2.png" alt="logo"></a>
            </div>

  </main>
  
</template>

<style scoped>

.modal-bug {
  color: #DBC2A4;
  font-size: 1em;
}

h1 {
  text-align: center;
  color: white;
  font-family: 'Dancing Script', cursive;
  font-size: 3em;
  padding-top: 0.5em;
}

h1 span {
  background-color: #DBC2A4;
  padding: 0.2em;
  border-radius: 10px;
}

.first-h2 {
  padding-top: 1.8em;
}

h2 {
  text-align: center;
  color: white;
  font-family: 'Dancing Script', cursive;
  font-size: 2em;
}

h2 span {
  background-color: #DBC2A4;
  padding: 0.2em;
  border-radius: 10px;
}

p {
  color: white;
  text-align: center;
  padding-top: 3em;
  padding-bottom: 3em;
  font-family: 'salsa';
  line-height: 2em;
  margin-top: 0;
  font-size: 1.5em;
}

.presentation {
  text-align: center;
  padding-top: 3em;
  padding-bottom: 3em;
  font-family: 'salsa';
  line-height: 2em;
  margin-bottom: 0;
  border-bottom: solid 3px #DBC2A4;
}

.presentation span {
  border-top: solid 1px #DBC2A4;
  color: #DBC2A4;
  font-family: 'Dancing Script', cursive;
  font-size: 1.5em;
}


.div-creation {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3em;
  margin-top: 0em;
  margin-bottom: 3em;
  padding-top: 0em;
}

.img-flou {
  width: 20em;
  filter: blur(5px);
}

.open-modal {
  margin-top: 2em;
  font-size: 1.5em;
  border-radius: 30px;
  color: white;
  background-color: #DBC2A4;
  padding: 0.4em;
  font-family: 'salsa';
}


.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; 
  display: none; 
  background-color: gray;
  width: 50%;
  height: 70%;
  border-radius: 50px;
} 

.modal-content p {
  font-size: 1em;
}

.modal-content a {
  text-decoration: none;
  color: #DBC2A4;
}

.img-modal {
  margin-left: 1em;
  width: 13em;
  border-radius: 10px;
}

.close-modal {
  margin-top: 2em;
  font-size: 1.5em;
  border-radius: 30px;
  color: white;
  background-color: #DBC2A4;
  padding: 0.4em;
  font-family: 'salsa';
}

.div-top-of-page {
  padding-bottom: 2em;
  display: flex;
  justify-content: end;
  position: fixed;
  bottom: 0; 
  right: 2em;
}

.top-of-page {
  width: 5em;
  border-radius: 50%;
}

</style>
