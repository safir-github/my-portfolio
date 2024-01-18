<template>

  <!DOCTYPE html>
  <html lang="fr">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contactez Safir Lemoudaa, développeur web et mobile passionné par l'innovation et la création. Utilisez le formulaire de contact pour poser des questions, discuter de projets ou simplement dire bonjour.">
    <meta name="keywords" content="développeur web, développeur web mobile, contact, formulaire, HTML, CSS, JavaScript, portfolio">
    <meta name="author" content="Safir Lemoudaa">
    <meta name="robots" content="index, follow"> 
    <title>Mon Portfolio - Contact</title>
</head>

  <body>

    <main>
      <div class="div-form">
        <h1 class="last-h2"><span>Contactez-Moi</span></h1>
    
        <form action="https://formspree.io/f/mqkrayok" method="post">
          <label for="nom">Nom :</label>
          <input type="text" id="nom" name="nom" required>
        
          <label for="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom" required>
        
          <label for="objet">Objet :</label>
          <input type="text" id="objet" name="objet" required>
        
          <label for="message">Message :</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        
          <button type="submit">Envoyer</button>
        </form>
    
      </div>

      <div class="div-top-of-page">
        <a href="#header"><img class="top-of-page" src="../images/logo2.png" alt="logo"></a>
      </div>
    </main>
    
  </body>
  </html>

  
    
</template>
  
<style>

h1 {
  text-align: center;
  color: white;
  font-family: 'Dancing Script', cursive;
  font-size: 3em;
  padding-top: 0.5em;
  padding-bottom: 2em;
}

h1 span {
  background-color: #DBC2A4;
  padding: 0.2em;
  border-radius: 10px;
}

.div-form {
  border-top: solid 3px #DBC2A4;
  padding-top: 3em;
}

form {
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
display: block;
margin-bottom: 8px;
color: #DBC2A4;
font-family: 'salsa';
width: 20%;
}

input,
textarea {
width: 20%;
padding: 8px;
margin-bottom: 16px;
box-sizing: border-box;
}

button {
  background-color: #DBC2A4;
color: white;
padding: 10px 15px;
border: none;
border-radius: 20px;
cursor: pointer;
font-family: 'salsa';
font-size: 1em;
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
  


  h1 {
  color: white;
}
  </style>
  