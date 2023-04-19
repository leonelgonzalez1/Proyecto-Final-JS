
//buenas, tuve unos inconveniente personal de salud y no llegue a terminar el JS, en estos dias estare finalizando. Disculpen el inconveniente, saludos






var ingredientes_opcion1 = ['Doble Carne', 'Doble Chedar','Lechuga', 'Tomate', 'Salsa Especial', 'Pepinillos', 'Pan Parmesano'];
var ingredientes_opcion2 = ['Doble Carne', 'Doble Chedar','Cebolla', 'Beicon', 'Manteca'];
var ingredientes_opcion3 = ['Doble Carne', 'Doble Chedar','Beicon', 'Jalapeños', 'Huevo'];
var ingredientes_opcion4 = ['Doble Carne', 'Doble Chedar','Beicon', 'Cebolla Confitada', 'Morron',];

function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if(opcion==1){
        nombre.innerHTML = "La Gran Chamaca"
        descripcion.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sunt quas officia sapiente? Velit.";
        fotoPrincipal.src = "img/hamburguesa2.jpg";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion1.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==2){
        nombre.innerHTML = "Doble Cuarto"
        descripcion.innerHTML = "At architecto id, quia, saepe non cum sapiente, est aut aspernatur perferendis dignissimos unde!";
        fotoPrincipal.src = "img/hamburguesa1.jpg";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion2.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Mexicana"
        descripcion.innerHTML = "Inventore magni voluptatum adipisci harum maiores architecto vero! Vel suscipit tempora pariatur ad, vero facilis ex, quibusdam iusto, asperiores eum laboriosam illum?";
        fotoPrincipal.src = "img/hamburguesa2.jpg";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion3.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==4){
        nombre.innerHTML = "Texana"
        descripcion.innerHTML = "Inventore magni voluptatum adipisci harum maiores architecto vero! Vel suscipit tempora";
        fotoPrincipal.src = "img/hamburguesa3.jpg";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion4.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    
}
