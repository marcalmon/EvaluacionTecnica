
~~~
mariana@MAR MINGW64 ~/desktop/EvaluacionTecnica
$ node consignas-2.js
outer func: this.foo = bar
outer func: self.foo = bar
inner func: this.foo = undefined
inner func: self.foo = bar
~~~

1. Para ser sincera no escuche mucho sobre las promise, se que es una clase de objeto que te permite solucionar el tema de los callbacks. No los vi nunca en funcionamiento ni mucho menos los probe.

2. ECMAScript es el nuevo estándar de Javascript que permite evitar imcompatibilidad entre los navegadores.
3. NaN (Not a Number) es la respuesta a una operación que no es posible realizarse. Me parece que no pertenece a ningún tipo de dato. 

~~~
var precio='100';
var cantidad = 2;
var total = Number.precio*cantidad;
console.log(total);

var x = -2;
var y = Math.sqrt(x);
console.log(y);
~~~
* En los ejemplos vemos una situación de querer multiplicar una cadena de caracteres con un numero. Al utilizar el método Number este reconoce a la cadena e inmediatamente retorna el valor NaN.
Y para el segundo ejemplo no es posible realizar la raíz cuadrada de un número negativo lo que también me retorna el valor NaN.

4. En los ejemplos se ven dos tipos de comparaciones:
	* En la primera: console.log(false=="0") el valor que retorna es true, porque esta haciendo una comparación simple donde se pregunta si son iguales.
	* Y en la segunda console.log(false==="0") el valor de retorno es false porque esta preguntando si son idénticos, o sea, que deben ser del mismo tipo tambien.

####Node
Un modelo de E / S sin bloqueo controlado por eventos significa que podemos ejecutar varias operaciones a la vez y si alguna de ellas se tarda mas de lo esperado no se para la ejecución y sigue con la operación o instrucción siguiente.