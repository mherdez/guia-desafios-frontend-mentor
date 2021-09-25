# 1. Order summary component

![](https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ztpxtbfhkp1af0guaylg.jpg)

## Objetivo
- [Challenge Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)
- [https://frontendmentor-newbie01.netlify.app/](https://frontendmentor-newbie01.netlify.app/)
- [Github MHerdez](https://github.com/mherdez/frontendmentor-desafio-01)

## Maquetación
<img :src="$withBase('/img/maquetacion.png')">

## Estructura de archivos
- images/
- index.html
- style.css

## HTML
~~~html
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frontend Mentor. Newbie 1</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap">

  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="card">
    <div class="card-head"></div>
    <div class="card-body">
      <div class="card-body-title">
        Order Summary
      </div>
      <div class="card-body-text">
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
      </div>
      <div class="card-body-description">
        <div class="card-body-description-column">
          <img src="./images/icon-music.svg" alt="Musica">
        </div>
        <div class="card-body-description-column">
          <h3>
            Annual Plan
          </h3>
          <p>
            $59.99/year
          </p>
        </div>
        <div class="card-body-description-column-right">
          <a href="#">Change</a>
        </div>
      </div>
      <div class="card-body-buttons">
        <h3>
          Proceed to Payment
        </h3>
        <a href="#">Cancel Order</a>
      </div>
    </div>
  </div>

</body>

</html>
~~~

## Body
~~~css
body {
   font-family: 'Red Hat Display', sans-serif;
   font-size: 16px;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: hsl(225, 100%, 94%);
   background-image: url(./images/pattern-background-desktop.svg);
   background-repeat: no-repeat;
}
~~~

## Card
~~~css
.card {
   background-color: white;
   width: 400px;
   border-radius: 20px;
   box-shadow: 0px 10px 15px rgba(167, 168, 253, 0.3);
   overflow: hidden;
}
~~~

## Card-head 
~~~css
.card-head {
   background-image: url('./images/illustration-hero.svg');
   background-position: center;
   background-size: cover;
   min-height: 200px;
   width: 100%;
}
~~~