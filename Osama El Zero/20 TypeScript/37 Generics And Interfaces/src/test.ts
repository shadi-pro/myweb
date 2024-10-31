/* [TS] lesson =>  37 Generics And Interfaces :

/* This lesson including following methods  :  
    1- Define a class with {Generic Types} & extracting objects using Interface with datatype , which including the following function :
    --- Define a class of Genenric Type with NO Constructor Function , but public property only  
    --- The Defined public property will be with array Generic type     
    --- Define public Method with parameter of Geneirc Datatype => to add the parameter into the defined Class public Array property
    --- Define (2) Interfaces objects to use it's datatypes properties to define (2) extracted Objects's Generic datatype , as object's array Elements datatypes  
*/

console.log(`welcome to Test Define a class with {Generic Types} & extracting objects using Interface with datatype  `);


// A] Defining (2) Interfaces to be used with in defining by used Generic Type operator : 
// Define the First Interface :
interface Book {
    title: string,
    head: string,
    id: number
}

// Define the Second Interface :
interface Games {
    title: string,
    head: string,
    style: string,
    id: number
}


// B] Define a main {Class} with {Generic Type} with using {Aliase Name}  :
class Collection<T> {
    // Define an empty array with[defind generic Array type ]  datatype  : 
    public data: T[] = [];

    // Define a method with {void} datatype [to add new element into the defined  array] each time it is being exectued :
    add(item: T) {
        // Adding the parameter as an Element into the defined array :
        this.data.push(item);
    }
}

// C1] Extract several objects from defined class{of no constructor parameters} with using {First interface [Book] as datatype} of [defined Generic Type]  :
let item11 = new Collection<Book>();
let item12 = new Collection<Book>();
let item13 = new Collection<Book>();

// C2] Extract several objects from defined class{of no constructor parameters} with using {Second interface [Games] as datatype} of [defined Generic Type]  :
let item21 = new Collection<Games>();
let item22 = new Collection<Games>();
let item23 = new Collection<Games>();


// D1] Executing the defined object's methods [with using the used interface {[Book]} properties] of the same class   :
item11.add({ title: 'Book', head: 'atomic Habites', id: 100 });
item12.add({ title: 'Book', head: 'for you', id: 200 });
item13.add({ title: 'Book', head: 'love', id: 300 });

// D2] Executing the defined object's methods [with using the used interface {[Games]} properties] of the same class   :
item21.add({ title: 'Games', head: 'Anno1900', style: 'strategic ', id: 1200 });
item22.add({ title: 'Games', head: 'Anno2070', style: 'strategic ', id: 2200 });
item23.add({ title: 'Games', head: 'Anno2270', style: 'strategic ', id: 3200 });



// E] Using extracted objects to Access and Print the array property after being adding elements by using object's defined method 'add()'  :

console.log(`The array property of first object's extracted {from Class with first interface}  after adding elements by using [add()] method is :  `);
console.log(item11);

console.log(`The array property of second object's extracted {from Class with first interface} after adding elements by using [add()] method is :  `);
console.log(item12);

console.log(`The array property of third object's extracted {from Class with first interface} after adding elements by using [add()] method is :  `);
console.log(item13);

console.log(`The array property of first object's extracted {from Class with second interface} after adding elements by using [add()] method is :  `);
console.log(item21);

console.log(`The array property of seocond object's extracted {from Class with second interface} after adding elements by using [add()] method is :  `);
console.log(item22);

console.log(`The array property of third object's extracted {from Class with second interface} after adding elements by using [add()] method is :  `);
console.log(item23);


console.log('#'.repeat(15));
// ----------------------------------------------

