# 1. Order summary component

![](https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ztpxtbfhkp1af0guaylg.jpg)

## Objetivo
- [Challenge Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)
- [https://frontendmentor-newbie01.netlify.app/](https://frontendmentor-newbie01.netlify.app/)
- [Github MHerdez](https://github.com/mherdez/frontendmentor-desafio-01)

## Maquetación
<img :src="$withBase('/assets/img/maquetacion.png')">

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
 
   <title>Newbie 01</title>

   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap">

   <link rel="stylesheet" href="styles.css">

</head>

<body>

   <div class="card">
      <div class="card-head"></div>
      <div class="card-body">
         <div class="card-body-title">
            Order Summary
         </div>
         <div class="card-body-text">
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
         </div>
         <div class="card-body-description">
            <div class="card-body-description-column-left">
               <img src="./images/icon-music.svg" alt="icon-music">
            </div>
            <div class="card-body-description-column-left">
               <h4>
                  Annual Plan
               </h4>
               <p>
                  $59.99/year
               </p>
            </div>
            <div class="card-body-description-column-right">
               <a href="#">
                  Change
               </a>
            </div>
         </div>
         <div class="card-body-buttons">
            <div class="card-body-buttons-proceed">
               Proceed to Payment
            </div>
            <a href="#">
               Cancel Order
            </a>
         </div>
      </div>
   </div>
</body>

</html>
~~~

## Body
Configuración aplicada a todo el cuerpo del documento HTML. 

### body 
~~~css
body {
   background-image: url(./images/pattern-background-desktop.svg);
   background-repeat: no-repeat;
   background-color: hsl(225, 100%, 94%);
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   font-size: 16px;
   font-family: 'Red Hat Display', sans-serif;
}
~~~

## Card
Configuración global del componente

### .card 
~~~css
.card {
   width: 420px;
   background-color: white;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0px 5px 20px rgba(103, 80, 156, 0.3);
}
~~~

## Card Head
Configuración de la primera sección de la Card (superior)

### .card-head 
~~~css
.card-head {
   background-image: url(./images/illustration-hero.svg);
   background-position: center;
   height: 200px;
}
~~~

## Card Body
Configuración de la segunda sección general de la Card (inferior) y sus subsecciones (title, text, description y buttons)

### .card-body 
~~~css
.card-body {
   padding: 45px;
   text-align: center;
}
~~~

## - Title

### .card-body-title 
~~~css
.card-body-title {
   color: hsl(223, 47%, 23%);
   font-size: 25px;
   font-weight: 900;
   margin-bottom: 20px;
}
~~~

## - Text 

### .card-body-text 
~~~css
.card-body-text {
   color: hsl(224, 23%, 55%);
   line-height: 28px;
   margin-bottom: 20px;
}
~~~

## - Description
  
### .card-body-description 
~~~css
.card-body-description {
   background-color: hsl(225, 100%, 98%);
   border-radius: 12px;
   padding: 10px;
   display: flex;
   align-items: center;
   margin-bottom: 20px;
}
~~~

#### .card-body-description img 
~~~css
.card-body-description img {
   width: 40px;
}
~~~

#### .card-body-description-column-left h4, </br>.card-body-description-column-left p 
~~~css
.card-body-description-column-left h4, 
.card-body-description-column-left p 
{
   margin: 0px;
}
~~~

#### .card-body-description-column-left 
~~~css
.card-body-description-column-left {
   margin: 0px 10px;
}
~~~

#### .card-body-description-column-right 
~~~css
.card-body-description-column-right {
   margin-left: auto;
   margin-right: 10px;
}
~~~

#### .card-body-description-column-left h4 
~~~css
.card-body-description-column-left h4 {
   font-size: 15px;
   color: hsl(223, 47%, 23%);
   font-weight: 900;
   margin-bottom: 3px;
}
~~~

#### .card-body-description-column-left p 
~~~css
.card-body-description-column-left p {
   font-size: 14px;
   color: hsl(224, 23%, 55%);
}
~~~

#### .card-body-description-column-right a 
~~~css
.card-body-description-column-right a {
   font-size: 13px;
   color: hsl(245, 75%, 52%);
   font-weight: 900;
}
~~~

## - Buttons

### .card-body-buttons-proceed 
~~~css
.card-body-buttons-proceed {
   background-color: hsl(245, 75%, 52%);
   padding: 15px;
   border-radius: 10px;
   color: hsl(225, 100%, 98%);
   font-weight: 700;
   font-size: 13px;
   margin-bottom: 25px;
   box-shadow: 0px 15px 20px rgba(103, 80, 156, 0.3);
}
~~~

### .card-body-buttons a 
~~~css
.card-body-buttons a {
   color:hsl(224, 23%, 55%);
   font-weight: 900;
   font-size: 13px;
   text-decoration: none;****
}
~~~

## Acciones (2da. parte del desafío)
<img :src="$withBase('/assets/img/active.jpg')">

### .card-body-description-column-right a:hover 
~~~css
.card-body-description-column-right a:hover {
   color: #756BF1;
   text-decoration: none;
}
~~~

### .card-body-buttons-proceed:hover 
~~~css
.card-body-buttons-proceed:hover {
   background-color: #756BF1;
   cursor: pointer;
}
~~~

### .card-body-buttons a:hover 
~~~css
.card-body-buttons a:hover {
   color:hsl(223, 47%, 23%);
}
~~~