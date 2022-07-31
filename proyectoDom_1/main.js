
let categorías = [
    {
        img: "img/limpieza.jpg",
        título: "Productos Limpieza",
        descripción: "Descubre Finish, Air Wick y otros productos para el cuidado del hogar"
    },
    {
        img: "img/braun.jpg",
        título: "Braun",
        descripción: "Ofertas de depilación Braun"
    },
    {
        img: "img/libros.jpg",
        título: "Lectura",
        descripción: "Ofer Kindle Flash del 23 de Júlio"
    },
    {
        img: "img/cascos.jpg",
        título: "Sonido",
        descripción: "Altavoces, auriculares y sonido en oferta"
    },
    {
        img: "img/monitores.jpg",
        título: "MSI",
        descripción: "Descubre las ofertas en monitores MSI"
    },
    {
        img: "img/cafeteras.jpg",
        título: "Cafeteras",
        descripción: "Cafeteras con accesorios para los amantes del café"
    },
    {
        img: "img/electrodomésticos.jpg",
        título: "Electrodomésticos",
        descripción: "Oferta en lavadora Whirlpool"
    },
    {
        img: "img/pc.jpg",
        título: "PC",
        descripción: "Descubre las mejores ofertas de LENOVO"
    }
];

 categorías.forEach(elementos=>{
    let row_cards = document.querySelector('#row_cards');
    let cols=document.createElement('div');
    cols.classList.add("col-12", "col-md-3", "d-flex", "justify-content-center");
    cols.innerHTML=`
    <div class="card border-0 rounded-0 fondo_card  my-3 shadow 15px 15px" style="width: 18rem;">
                
                <div class="card-body text-center">
                <img src=${elementos.img} class="card-img-top" alt="...">
                  <h5 class="card-title my-5">${elementos.título}</h5>
                  <h6 class="card-text">${elementos.descripción}</h6>
                  <p class="card-text">"Descubre las mejores ofertas de LENOVO"</p>
                  <a href="#" class="btn btn-primary my-3">Llevame</a>
                </div>
              </div>
          </div> 
    
    
    
    
    
    `
    row_cards.appendChild(cols);
})
 
