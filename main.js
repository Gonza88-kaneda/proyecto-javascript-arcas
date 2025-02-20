const tienda = [ "harina","leche","huevos","azucar"];
const precio_x_ingrediente = 50;
const mi_inventario =[]
let mi_dinero = 300;

function comprar_ingrediente_prompt () {
    const ingrediente_a_comprar = prompt("¿que ingrediente vas a comprar?");
    comprar_ingrediente (ingrediente_a_comprar)
}

function vender_ingrediente_prompt () {
    const ingrediente_a_vender = prompt ("¿que ingrediente vas vender?")
    vender_ingrediente(ingrediente_a_vender)
}

function comprar_ingrediente (ingrediente) {
    if (tienda.includes(ingrediente)) {
        if (mi_dinero >= precio_x_ingrediente) {
            mi_dinero-= precio_x_ingrediente;
            mi_inventario.push (ingrediente);
            console.log ("compraste " + ingrediente)
        }
        else  {
            console.warn ("no tienes suficiente dinero");
        }

    
    }

    else {console.warn("no tengo ese ingrediente a la venta")}

    
}

function vender_ingrediente (ingrediente) {
    if (mi_inventario.includes(ingrediente)) {
        const indice =  mi_inventario.indexOf (ingrediente);
        mi_inventario.splice (indice,1);
        mi_dinero+= precio_x_ingrediente;
        console.log ("vendiste " + ingrediente);
        mostrar_inventario();
        
    }
    else { console.warn ("no tienes " + ingrediente + "para vender")}
};

function mostrar_inventario () {
    console.log ("tu inventario de cocina: ");
    for (let indice=0; indice < mi_inventario.length; indice++) {
        console.log (mi_inventario [indice]);
    }
    console.log ("dinero: ", mi_dinero)
}



