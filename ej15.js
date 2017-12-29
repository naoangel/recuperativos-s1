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

//solo variables para el ejemplo
var arr = [5,7,10,21,24];
var num = 10;
//creando función
function position(arr,num){
//variable de apoyo para dar el resultado
  var resultado;
//ciclo for para recorrer el arreglo  
	for(var i =0; i<arr.length; i++){
//uso método indexOf para dar la úbicación del número/elemento del arreglo		
		resultado= arr.indexOf(num);
	}
//retorna resultado	 
   return resultado;
}






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
//variables del ejemplo
var list = ['Allison', 'Belén', 'Nadia', 'Marcia', 'Ale', 'Fabián'];
var name = 'Nadia';
//creando función
function sitHere(list,name){
//variable de apoyo para el resultado
	var seat; 
//recorro el arreglo con un for
	for(var i = 0; i < list.length; i++){
/*
* le sumo 1 al indexOf para que pueda darme el número correcto, ya que los asientos
* parten en un y el indexOf en 0.
*/
		var seat = list.indexOf(name)+1;
	}
//Imprimo resultado en consola	
    console.log("El asiento de " + name + " es el número " + seat)

}














/* 
*Problema fácil 11 (20 puntos):
* Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). 
* Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo 
* fue aprobado o no. Las notas van de 1 a 7 y se aprueba con un promedio igual o 
* mayor a 4. 
*/
//variable de ejemplo con valor tipo array.
var grades = [5,7,6,4,5,6,3,5,5,7];

//creando función
function ave(grades){
	var addition = 0;
  var average;
    for(var i=0; i < grades.length; i++){
      addition += grades[i];
    }
    var average = addition/(grades.length-1);

    if(average>=4 && average<7.1){
    	alert("This student is approved with an average of "+average);
    }
    else if (average>=1 || average<4){
    	alert("this student is failing with an average of "+average); 
    }
    else{
    	alert("there must be an error in the grades, check again, they can be only between 1 and 7");
    }
}


 /*if(grades[i]<1 || grades>7){
      	alert("check the grades, there must be an error");
      	break;
  -intento por dar más especificidad, 
  lo había insertado dentro del ciclo for pero no lo consideró-
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
* en nuevas variables las palabras quedan guardadas como array con cada 
* letra como un elemento por separado y ordenado alfabéticamente gracias 
* a los métodos split y sort. 
*/
  var newWord1 = word1.split("").sort();
  var newWord2 = word2.split("").sort();

/*
* Si el largo y  valor de las  nuevas variables  son idénticos, devolver true  
* de lo contrario  false.
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
//variable de ejemplo
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//creando la función
function onlyEven(arr){
//nueva variable para guardar los números pares	
	var evenArr=[];
//ciclo for para recorrer el arreglo	
  for(var i=0; i<arr.length; i++){
//condicional para determinar que es par
  	if(arr[i]%2==0){
//pusheando los elementos pares a un arreglo en la nueva variable  		
  		evenArr.push(arr[i]);
  	}
  }
//devolviendo arreglo con pares  
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
/* 
* La multiplicación de cada elemento por 12 da un nuevo elemento 
* que es "pusheado" en la variable newArr.
*/
     newArr.push(arr[i]*12);  
    }
//mostrar en consola el nuevo arreglo.
    console.log(newArr);
  }

  
 


