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