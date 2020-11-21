var person = {
    name : 'duy quang',
    getName : function(){
        console.log('name is: ' + this.name );
    }
}
var name = ' naem';

person.getName();
var quang = person.getName.bind(person);
quang();




var test = (a,b,c) => console.log('ket qua la: ' + a + b + c);

test();

var p = {
    
    a : function(){
        console.log('a :>> 123');
    }
}
p.a();


function newfunc(){
    console.log( this);
}
newfunc();

const newfunc2 = ()=> console.log( this);
newfunc2();