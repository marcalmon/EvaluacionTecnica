~~~ 
	var Foo = function( a ) {
      var baz = function() {
        return a;
      };
      this.baz = function() {
        return a;
      };
    };

    Foo.prototype.bar = function() {
        return this.baz(); 
    }

    Foo.prototype.biz = function() {
        return this.baz(); 
    }

    var f = new Foo( 7 );
    console.log(f.bar()); 
    console.log(f.baz()); 
    console.log(f.biz());
~~~


1. En las ultimas 3 lineas el primer respuesta es que f.bar no es un función porque no esta definida.

2. el sgte. error era que no esta declarada la variable a.
3. No funcionaba la función f.biz
4. Y hice cambios en la creación de biz y bar, y asi no necesite de la variable a asi que la elimine.

