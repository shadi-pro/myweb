// [TS] lesson =>  34 Generics Introduction :
        
 /* This lesson including following methods  :  
    1- Define function of returning value of single Datatype using default method
    2- Define function of returning value of mulitiple Datatype using default method
    3- Define function of returning value of Generic Datatype using [Generic Function] by using [default Generic Name]
    4- Define function of returning value of Generic Datatype using [Generic Function] by using [Aliase Generic Name]
     
*/

console.log(`welcome to Test Define function of returning value of single Datatype using default method `);

        // A] Define a main Function of Returning value of certain single datatype [string] :
        function funcStr(val:string) : string {
            return val;
        }
        
        // A] Define a main Function of Returning value of certain single datatype [number] :
        function funcNum(val:number) : number {
            return val;
        }
        
        // B] Define a main Function of Returning value of certain single datatype [boolean] :
        function funcBol(val:boolean) : boolean {
            return val;
        }
        
        // C] Define a main Function of Returning value of certain single datatype [string array] :
        function funcStrArr(val:string[]) : string[] {
            return val;
        }
        
        // D] Define a main Function of Returning value of certain single datatype [number array] :
        function funcNumArr(val:number[]) : number[] {
            return val;
        }
        
        // E] Define a main Function of Returning value of certain single datatype [boolean array] :
        function funcBolArr(val:boolean[]) : boolean[] {
            return val;
        }
        
        // F] Executing and printing function of getting value of different single datatypes :
        console.log((`
        The return of default function of single string datatype :  ${funcStr('shadi')}
        The return of default function  of single number datatype : ${funcNum(100)}
        The return of default function  of single boolean datatype : ${funcBol(true)}         
        `));

        // G] Executing and printing function of getting value of different array datatypes :
        console.log((`
        The return of default function of array string datatype :  ${funcStrArr(['shadi' , 'saeyd' , 'mohammed'])}
        The return of default function of array number datatype : ${funcNumArr([100 , 200 , 300 ])}
        The return of default function of array boolean datatype : ${funcBolArr([true ,false , true ])}         
        `));
 
        console.log('#'.repeat(15));
        // ----------------------------------------------
        // ----------------------------------------------
      

        console.log(`welcome to Test Define function of returning value of multiple Datatypes using default method `);
        
        
        // A] Define a main Function of Returning value of certain multiple datatypes [string | number |  boolean] :
         function funcMult(val:string | number| boolean) : string | number| boolean {
            return val;
        }
         
         
        // B] Define a main Function of Returning value of certain multiple datatypes [string | number |  boolean] :
         function funcMultArr(val:string[] | number[]| boolean[] ) : string[] | number[] | boolean[] {
            return val;
        }
                  
         
        // D] Executing and printing function of getting value of different multiple single datatypes :
        console.log((`
        The return of default same function of multiple Array string datatype :  ${funcMult('shadi')}
        The return of default same function of multiple Array number datatype :  ${funcMult(100 )}
        The return of default same function of multiple Array boolean datatype :  ${funcMult(true )}
        `));
 
        // ----------------------------------------------
 
        // D] Executing and printing function of getting value of different multiple array datatypes :
        console.log((`
        The return of default same function of multiple Array string datatype :  ${funcMultArr(['shadi' , ' Sagdu' , 'aliu'])}
        The return of default same function of multiple Array number datatype :  ${funcMultArr([ 100 , 200 ,  10000])}
        The return of default same function of multiple Array boolean datatype :  ${funcMultArr([true,  false , true ])}
        `));
 
        console.log('#'.repeat(15));
        // ----------------------------------------------
        // ----------------------------------------------
    
        console.log(`welcome to Test Define function of returning value of Generic Datatype using [Generic Function] by using [default Generic Name]`);
        
        
        // A] Define a main Generic Type Function of Returning value of certain flexible datatypes using [default name of the Genenric ] :
         function funcGen<GenericType> (val:GenericType) : GenericType {
            return val;
        }
         
           
        // B] Executing and printing Generic Type function of getting value with flexible datatypes :
        console.log((`
        The return of Generic Type function of single string datatype :  ${funcGen<string>('shadi')}
        The return of Generic Type function of single number datatype :  ${funcGen<number>(1000)}
        The return of Generic Type function of single boolean datatype  :  ${funcGen<boolean>(true)}
        The return of Generic Type function of array string datatype :  ${funcGen<string[]>(['Shadi' , 'Sayed' , 'Ali'])}
        The return of Generic Type function of array number datatype :  ${funcGen<number[]>([ 100 , 200 , 300])}
        The return of Generic Type function of array boolean datatype :  ${funcGen<boolean[]>([ true ,false , true])}
        `));
 
        
        console.log('#'.repeat(15));
        // ----------------------------------------------
        // ----------------------------------------------
    
        console.log(`welcome to Test Define function of returning value of Generic Datatype using [Generic Function] by using [Aliase Generic Name] `);
        
        
        // A] Define a main Generic Type Function of Returning value of certain flexible datatypes using [Aliase name of the Genenric ] :
         function funcG<g> (val:g) : g {
            return val;
        }
         
           
        // B] Executing and printing Generic Type function of getting value with flexible datatypes :
        console.log((`
        The return of Generic Type function of single string datatype :  ${funcG<string>('shadi')}
        The return of Generic Type function of single number datatype :  ${funcG<number>(1000)}
        The return of Generic Type function of single boolean datatype  :  ${funcG<boolean>(true)}
        The return of Generic Type function of array string datatype :  ${funcG<string[]>(['Shadi' , 'Sayed' , 'Ali'])}
        The return of Generic Type function of array number datatype :  ${funcG<number[]>([ 100 , 200 , 300])}
        The return of Generic Type function of array boolean datatype :  ${funcG<boolean[]>([ true ,false , true])}
        `));
 
        
        console.log('#'.repeat(15));
        // ----------------------------------------------
        // ----------------------------------------------


