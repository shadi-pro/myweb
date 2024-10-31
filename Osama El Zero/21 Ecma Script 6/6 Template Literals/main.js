//  6 Template Literals :
/* Main lessons functions :
    1- {Simple String [single line + Multiple lines] } Syntax in the old default JS + new ES6  
    2- {Strings & Embeded Variables } Syntax in the old default JS + new ES6 
    3- {Strings & Embeded Variables & Embeded Conditional if} Syntax in the old default JS + new ES6
    4- Advanced appliation about using Templates literals in the Recent Frameworks as innner Html codes of certain element
*/
// ---------------------------------------------------------------------

// 6 Template Literals :

function myTest() {
    'use strict' ;
    alert('Welcome to 6 Template Literals ') ;
    
    var dis = document.getElementById('note');
     
    //   var x = prompt(' Please choose one of functions from below options : \n  1] [This] Reference value in the Regular function \n  2] {This} Reference value in the Arrow function  \n  3] {This} attidute value in the both {Arrow function} & {Regular Function }  ');    
      
      
      var x = prompt(
        ` Please choose one of functions from below options :
        1- {Simple String [single line + Multiple lines] } Syntax in the old default JS + new ES6  
        2- {Strings & Embeded Variables } Syntax in the old default JS + new ES6 
        3- {Strings & Embeded Variables & Embeded Conditional if} Syntax in the old default JS + new ES6
        4- Advanced appliation about using Templates literals in the Recent Frameworks as innner Html codes of certain element
        `
        );    

    if (x == 1 ) {
        
        singleStr();

    } else if (x == 2) {
    
        strVar();
        
    } else if (x == 3) {
    
        strVarCond();       
    
    } else if (x == 4) {
    
        advLitApp();       
    
    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] {Simple String [single line + Multiple lines] } Syntax in the old default JS + new ES6   :
    function singleStr() {
        alert('Welcome to {Simple String [single line + Multiple lines] } Syntax in the old default JS + new ES6  ');

        dis.innerHTML = '';
        
        let defSingleStr = "This is a single one line of string by using the default old Js " ,
            
            defMultStr = "This is a the first line of multiple string by using the default old Js \n This is a the Second line of multiple string by using the default old Js \n This is a the third line of multiple string by using the default old Js" ,
            
            esSingleStr = `This is a single one line of string by using the NEW ES6 Js `,
            
            esMultStr = `This is a the first line of multiple string by using the NEW ES6 Js
                This is a the Second line of multiple string by using the NEW ES6 Js 
                This is a the third line of multiple string by using the NEW ES6 Js`  ;         
        // ---------------------------------------
 
        // Printing the values of single , multiple string varaibles by usiong both default JS & ES6 :   
        console.log(defSingleStr) ;
        console.log(defMultStr) ;
        console.log(esSingleStr) ;
        console.log(esMultStr) ;
        
        // Inserting the values of single , multiple string varaibles by [using default JS]  :   
        dis.innerHTML += 'The single one line of string by old JS as following : ' + '<br>' +
         defSingleStr + '<br>' + '=====================================' + '<br>' ; 

        dis.innerHTML += 'The Multiple lines of string by old JS as following : ' + '<br>' +
         defMultStr + '<br>'  + '=====================================' + '<br>' ;

        // Inserting the values of single , multiple string varaibles by [using  ES6] :   
        dis.innerHTML += `The single one line of string by NEW ES6 JS as following : 
            ${esSingleStr}  
            ==================================
            ` ;
        
        dis.innerHTML += `The Multiple lines of string by NEW ES6 JS as following : 
            ${esMultStr}  
            ======================================
            ` ;
        // ------------------------

    }
    // =============================================================

    // 2]  {Strings & Embeded Variables } Syntax in the old default JS + new ES6 :
    function strVar() {
        alert('Welcome to Test {Strings & Embeded Variables } Syntax in the old default JS + new ES6  ');

        dis.innerHTML = '';

        // Defining variables :
        let userName = 'Shadi',
            age = 30, 
            str1 = 'Hello my name is ' , 
            str2 = 'my Age is ' ;            

            // Printing the string with embeded variables [by using old Js] : 
            console.log( 'String with embeded variables by old JS as following : \n ' + str1 + ' : ' + userName + '\n' +
             str2 + ' : ' + age +  '\n') ;
            
            // Inserting the value of embeded string with variables into element [by using old JS] :    
            dis.innerHTML += 'String with embeded variables by old JS as following : \n ' + str1 + ' : ' + userName + '\n' +
             str2 + ' : ' + age +  '\n' ;
        
            
            // Printing the string with embeded variables [by using ES6 Js]  : 
            console.log( `String with embeded variables by using [new ES6] as following :
                ${str1}  : ${userName} 
                ${str2} : ${age} 
                ` );
            
            // Inserting the value of embeded string with variables into element [by using ES6 JS] :    
            dis.innerHTML += `String with embeded variables by using [new ES6] as following :
            ${str1} : ${userName} 
            ${str2}  :  ${age}
            `;
            
    }
    // =========================================================
    
    // 3] {Strings & Embeded Variables & Embeded Conditional if} Syntax in the old default JS + new ES6 : 
    function strVarCond() {
        alert('Welcome to Test  {Strings & Embeded Variables & Embeded Conditional if} Syntax in the old default JS + new ES6  ');

        dis.innerHTML = '';

        // Defining variables :
        let userName = 'Shadi',
            age = 30, 
            kind = 'Male', 
            str1 = 'Hello my name is ' , 
            str2 = 'my Age is ' ;            

            // Printing the string with embeded variables & Embeded Conditional if [by using old Js] : 
            console.log( 'String with embeded variables & Embeded Conditional if  by old JS as following : \n ' + str1 + ' : ' + (kind === "Male" ? "Mr " : "Mrs " ) + userName + '\n' +
             str2 + ' : ' + age +  '\n') ;
            
            // Inserting the value of embeded string with variables & Embeded Conditional if into element [by using old JS] :    
            dis.innerHTML += 'String with embeded variables & Embeded Conditional if  by old JS as following : \n ' + str1 + ' : ' + (kind === "Male" ? "Mr " : "Mrs " ) +  userName + '\n' +
             str2 + ' : ' + age +  '\n' ;
        
            
            // Printing the string with embeded variables [by using ES6 Js]  : 
            console.log( `String with embeded variables & Embeded Conditional if by old JS as following :
            ${str1} : ${kind === "Male" ? "Mr" : "Mrs" }  ${userName} 
            ${str2} : ${age} ` );
            
            // Inserting the value of embeded string with variables & Embeded Conditional if  into element [by using ES6 JS] :    
            dis.innerHTML += `String with embeded variables & Embeded Conditional if  by old JS as following :
                ${str1} : ${kind === "Male" ? "Mr " : "Mrs "}  ${userName} 
                ${str2} :  ${age} ` ;
        
    }
    // =========================================================

    // 4] Advanced appliation about using Templates literals in the Recent Frameworks as innner Html codes of certain element :
    function advLitApp() {
        alert('Welcome to Test  Advanced appliation about using Templates literals in the Recent Frameworks as innner Html codes of certain element ');

        dis.innerHTML = '';

        // Executing the current fuction by Extracting new object form the constrcutor function : 
        let userName = "Shadi" , 
            age = 30 , 
            htmlElem = `  
            <div class="card" style="border: 2px solid red">
                <h2 class="username" > ${userName} </h2> 
                <p class="age"> ${age}  </p>
            </div>  `;
            
        // Printing the element of the Html syntax :
        console.log(htmlElem);
        dis.innerHTML += htmlElem ;
        
        // Embeding the variable of Html syntax into the whole document of HTML :
        document.body.innerHTML += htmlElem ;        
    }
    // =========================================================

   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}