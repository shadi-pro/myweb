
//  This file inlcude all functions and methods responsible for [Registration process] , with the next properties   :
  // 1- the defined functions here  will require the defined datasource of the  "users.json"  from [model]      :      
  // 2-  all defined functions here will be called by the defined route of registration  {routes/register.js}    
// 

// [Registration] conceptual  steps :
  // -- a- Checking for the existancey of [username] amd  [password] values  
  // -- b- Checking for the duplicated [username] value  
  // -- c- Ecrypting the [password] value  
  // -- d- creating the new user according to upper inserted defined and checked values of [username] & [password]    
// -------------------------------------------------------------------------


//  I] Datasource definition section   :
  // 1- Define {users} DataBase object  datasource as an imported  from the {model/users.json} :
  const  usersDB = {
    users : require('../model/users.json') , 
    setUsers :  function (data) { this.users = data }
  } 
//  --------------------------------------------------

// II] importing section     :
  // 1-  Define the [fs promises]  from the node core module :   
    const fsPromises = require('fs').promises; 

  // 2-  Define the [path]  from the node core  module :   
    const path  = require('path') ; 

  // 3-  Define the [bcrypt] from the installed node custom module library  :   
    const bcrypt = require('bcrypt') ; 
// -------------------------------------------------

//  III]   Handling Regeistration function section  :

  // 1- Define a handling function of handling the requested [user , password] from the user , including   : 
    // [user]  & [pwd] =>  the requested  values  sent by uer in the form       
    // [person.user]  & [person.pwd] =>  the  existed values in the [usersDB]   (as found value wihtin the looped inside DB)    
    const  handleNewUser =  async (req, res) => {
        // 1-  define the [user] and [pwd] [as destructed values] of the retunred requested value from the user from to be checked later  : 
        const  {user, pwd } =  req.body ; 

        // 2- Checking from the returned values username or password   if it is not existed + and send response error code + message  : 
        if ( !user || !pwd ) return res.status(400).json({ 'message' : 'Username or/and password are required !'  })  ;
        
        // 3- Checking of the requested username value is duplicated value with the existed value in the current defined [usersDB]  [by using find() method to figure out if inserted user name by the user is equal to the username existed in usersDB ] : 
        // if there is a value of duplicate varable => [there is a duplicated value of the username]  :
        const  duplicate = usersDB.users.find( person => person.username === user );  

        // 4- Sending the error code of the conflict [duplication error code '409' ] {if theris is a value of duplicate variable } :
        if (duplicate) return res.sendStatus(409);   

        // 5- Starting handling the [registration]  process after previous error handling :
        try  {
          // a) Encrypting the [password] value using the imported library {bcrypt} (with using the await ) , by assigning (2) paramters  :
            // [pwd] paramter          : the requested password value   
            // [salt] rounds paramter  : method used to encrypt the passowrd  - to make much harder to hackers to break - (10 : standerd value)   
            const  hashedPwd = await bcrypt.hash( pwd  , 10 ) ;
                  
          // b) Creating/define the   [newUser] account as an object variable  [according to the upper checked  parameters  of  [user , hashedPwd]  : 
            const newUser = {"username" : user , "password" : hashedPwd };      
          
          // c) Storing a the created {newUser} varaible =>  into the [usersDB]   using the  [destructuring methodology + setter function of the [usersDB]  :
            usersDB.setUsers([...usersDB.users , newUser ])  ;                 

          // d) Writing the new object[users] after storing the {newUser}  in to the {users.json} main datasource  file (using  tbe (fsPromises)  )  : 
            await fsPromises.writeFile(
              path.join(__dirname , '..'  , 'model' , 'users.json'),
              JSON.stringify(usersDB.users)
            ) ;       

          // e) printing the new object of the {users} into the console   :
            console.log(usersDB.users) ;

          // f)  Sending a successful process code [201] into the response  + json message [of newuser account creation confirmation ]  :
            res.status(201).json({"success" :   `The new user ${user} Account has been creeted and  added into the DB`})    ; 

        }  catch(err)  {
            // Catching the server error code  (500) + ( message of the catched  error type  ) : 
            res.status(500).json({'message' : err.message }) ;
        }   
    }
// ------------------------------------------------------

// IV]  Exporting section      :

 // Exporting the defined function of handling hte registration process [handleNewUser] as objet to be able to pull/call the full name of the controller when is being used inside route file :
 module.exports  =  { handleNewUser }  ;




