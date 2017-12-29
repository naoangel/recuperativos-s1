/*
* Problema difícil 1 (50 puntos):
* Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
* Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
*             n = 3
*             retorna [5, 6, 7, 1, 2, 3, 4]
*/

/*
* Problema difícil 2 (50 puntos):
* Dado un arreglo de números positivos, retornar true si este se encuentra 
* ordenado de menor a mayor, en caso contrario false. 
* No puede usar el método sort() de javascript.
*/

//crear un ciclo for para recorrer el arreglo
for(i=0; <= length(arr); i++ ){

//crear condicional para determinar si es true or false.
	if(arr[i] = arr[i++]){  /*esta está mal*/
		returns true;
	}
	else{
		returns false;
	}
	}	   
	
}
/*
* Problema difícil 3 (50 puntos):
* Dado un arreglo de números positivos, encontrar los elementos adyacentes cuya suma sea la mayor, retornar el resultado de la suma.
*
* Ejemplo:    arr = [4, 5, 1, 2, 3, 4]  → 4 + 5
*            retorna 9
*
*    arr = [1, 2, 3]  → 2 + 3
*            retorna 5
*/


/*
* Problema difícil 4 (50 puntos):
* Dado un arreglo de números positivos, encontrar el elemento más pequeño y 
* retornar su índice.
*
* Ejemplo:    arr = [1, 2, 3]
*            retorna 0
*
*            arr = [3, 2, 1]
*            retorna 2
*/            

/*
* Problema difícil 5 (50 puntos):
* Dado un arreglo de números positivos, encontrar el elemento más pequeño e 
* intercambiarlo por el primer elemento del arreglo.
*
* Ejemplo:    arr = [3, 2, 1]
*            retorna [1, 2, 3]
*
*            arr = [4, 3, 1, 2]
*            retorna [1, 3, 4, 2]
*/

/* 
* Problema medio 6 (30 puntos):
* Dado un arreglo de números enteros positivos, se necesita detectar si están 
* en orden ascendente (menor a mayor). Si es así, nuestra función debe retornar 
* true, en caso contrario false. (Puede usar método sort())
*/



/*
* Problema medio 7 (30 puntos):
* Dado un arreglo y un número, verificar si el número se encuentra en el arreglo. 
* En caso de ya existir deberá retornar el arreglo sin cambios, en caso contrario 
* retornar el arreglo nuevo con el número ingresado.
* Ejemplos:   arr = [1, 2, 3, 4]                    arr = [1, 2, 3, 4]
*      number = 4                        number = 8
*      retorna [1, 2, 3, 4]                retorna [1, 2, 3, 4, 8]
*/




/*
* Problema medio 8 (30 puntos):
* Dado un arreglo y un número, retornar el índice (posición) del número. 
* Ejemplo: arr = [1, 5, 8, 19]
*          number = 8
*          retorna 2
*/



/*
* Problema medio 9 (30 puntos):
* Dados dos arreglos, devolver un nuevo arreglo que contenga la suma de los índices
* de cada array, arr1[índice 0] + arr2[índice 0] = nuevoArr[indice 0]
* Ejemplo:   arr1 = [1, 2, 3, 4]
*             arr2 = [5, 6, 7, 8]
*             retorna nuevoArr = [6, 8, 10, 12]
*/


/*
* Problema medio 10 (30 puntos):
* Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo. 
* Escribir una función donde dado el nombre de la persona puedas retornar el asiento 
* que le toca. La numeración comienza en 1, si la persona no tiene asiento retornar 0.
* Ejemplo:  lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
*            nombre = “Nadia”
*            retorna 3
*/


/* 
*Problema fácil 11 (20 puntos):
* Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). 
* Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo 
* fue aprobado o no. Las notas van de 1 a 7 y se aprueba con un promedio igual o 
* mayor a 4. 
*/





/*
* Problema fácil 12 (20 puntos):
* Realizar un programa que permita analizar si una palabra que el usuario introduce 
* por teclado es palíndroma o no.
* Si es palíndroma debe retornar true, en caso contrario false.
* Palíndroma: palabra que se lee igual de adelante hacia atrás como de atrás hacia
* adelante. Ejemplo: Amalama
*/







/* Problema fácil 13 (20 puntos):
* Dado dos string (palabra1 y palabra2) escribir una función para determinar 
* si palabra1 es anagrama de palabra2.
* Si es anagrama debe retornar true, en caso contrario false.
* Una palabra es anagrama de otra cuando contiene las mismas letras en un orden distinto.
* Ejemplo: la palabra anagrama es un anagrama de la palabra anmgraaa
*/

//variables de ejemplo
var word1= "roma";
var word2= "amor";
//se crea función 
function anagram(word1,word2){
/*
*  en nuevas variables las palabras quedan guardadas como array con cada 
* letra como elementro y ordenado alfabéticamente gracias a los métodos split y sort 
*/
  var newWord1 = word1.split("").sort();
  var newWord2 = word2.split("").sort();

/*
*si el largo y  valor de las  nuevas variables  son idénticos, devolver true  
*de lo contrario  false.
*/

 if(newWord1.length === newWord2.length &&  newWord1.value === newWord2.value ){
 	 return true;
 }
 else{
 	 return false;
 }
       
}
		








/*Problema fácil 14 (20 puntos):
* Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números 
pares.
* Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*   output nuevoArr = [2, 4, 6, 8, 10]
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function onlyEven(arr){
	var evenArr=[];
  for(var i=0; i<arr.length; i++){
  	if(arr[i]%2==0){
  		evenArr.push(arr[i]);
  	}
  }
  console.log(evenArr)
}






/*
* Problema fácil 15 (20 puntos):
* Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
* Ejemplo: input arr = [1, 2, 3, 4]
*          output nuevoArr = [12, 24, 36, 48]
*/

// Arreglo de ejemplo, puede ser cualquiera.
var arr = [1,2,3,4];
//creando función multi
function multi(arr){
// variable newArr es donde se guardarán los nuevos elementos	
 	var newArr = [];
//ciclo for para iterar el arreglo original
 	for(i=0; i<=arr.length-1; i++){
//variable para apartar la multiplicación al elemento altiguo     
     var multip = arr[i]*12;
//el nuevo elemento es "pusheado" en la variable newArr
     newArr.push(multip);  
    }
//mostrar en consola el nuevo arreglo.
    console.log(newArr);
  }

  
 

