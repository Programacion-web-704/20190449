//comentario de una linea
/* 
Comentario de varias lineas
*/
/* Caso 1:  Obtener la cabecera del documento */
let cabecera = document.head;
console.log( cabecera )

/* Caso 2:  Obtener el body del documento */
let cuerpo = document.body;
console.log( cuerpo )

/* Caso 3: Recuperar un nodo y ver sus propiedades */
let lpAntiguos = document.getElementById("antiguo") //nodo ul
console.log( lpAntiguos ) 

let arr_antiguos = []
let nodos = lpAntiguos.childNodes
for(i=0; i < nodos.length; i++){
    console.log( nodos[i] )

    if ( nodos[i].nodeType == document.ELEMENT_NODE){
        arr_antiguos.push(nodos[i].textContent)
    }
}

document.getElementById("rpta1").innerHTML = arr_antiguos

/* Caso 4: Recuperar un nodo y ver sus propiedades */
let lpModernos = document.getElementById("moderno")
console.log( lpModernos ) 

let arr_modernos = []
nodos = lpModernos.childNodes //sin let
for(i=0; i < nodos.length; i++){
    console.log( nodos[i] )

    if ( nodos[i].nodeType == document.ELEMENT_NODE){
        arr_modernos.push(nodos[i].textContent)
    }
}

document.getElementById("rpta2").innerHTML = arr_antiguos

/* Caso 5:  *COnectar arreglos */
document.getElementById("rpta3").innerHTML = arr_antiguos.concat(arr_modernos)

/*Caso 6: Concatenar los elementos de un arreglo para que sea un STRING */
document.getElementById("rpta3").innerHTML = arr_antiguos.join("*")

/* Caso 7: Ubicar la posición de un elemento de un arreglo */
let pos = arr_modernos.indexOf('Koltin')
document.getElementById('rpta3').innerHTML = pos

/* Caso 8: Insertar un elemento */
arr_modernos.splice(1,0,'Unlmada', 'Malbolge')
document.getElementById("rpta3").innerHTML = arr_modernos

/* Caso 9: Insertar y Busca un elemento */
arr_modernos.splice(3, 1, 'Intercal', 'ooAK!')
document.getElementById("rpta4").innerHTML = arr_modernos

/* Caso 10: Borrar un elemento */
arr_modernos.splice(3, 1)
document.getElementById("rpta5").innerHTML = arr_modernos

/* Caso 11: Obtner un elemento */
var elemento = arr_modernos.pop()
document.getElementById("rpta1").innerHTML = elemento

/* Caso 12: Obtener primer elemento del arrgelo */
var elemento = arr_modernos.shift()
document.getElementById("rpta1").innerHTML = elemento

/* Caso 13: Colocar elemento al final del arreglo */
arr_modernos.push("Dart")
document.getElementById("rpta1").innerHTML = arr_modernos

/* Caso 14: Otra forma de colocar elemento al final del arreglo */
arr_modernos[ arr_modernos.length = 'Opa']
document.getElementById("rpta1").innerHTML = arr_modernos

/* Caso 15: Colocar elemento al inicio del arreglo */
arr_modernos.unshift("SQL")
document.getElementById("rpta1").innerHTML = arr_modernos

/* Caso 16: oredenar el arreglo */
arr_modernos.sort() //ordenado por defecto de manera ascendente
document.getElementById("rpta1").innerHTML = arr_modernos

/* Caso 16: oredenar el arreglo */
arr_modernos.reverse() //ordenado por defecto de manera descendente
document.getElementById("rpta1").innerHTML = arr_modernos

/* Caso 17: generar html */
var rpta = []

rpta.push("<ol>")
rpta.push("<li> Peru - 0 </li>")
rpta.push("<li> Brasil - 3 </li>")
rpta.push("<li> Chile - 1 </li>")
rpta.push("</ol>")

