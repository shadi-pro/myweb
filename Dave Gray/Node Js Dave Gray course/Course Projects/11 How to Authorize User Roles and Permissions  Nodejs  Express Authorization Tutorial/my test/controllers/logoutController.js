

// This file  will handling the logout process , through the defiend method   :     
  //  --      


// -------------------------

//  I]   Define the main datasource  section    :  
 const usersDB = {
  users : require('../model/users.json')  , 
  setUsers : function(data)  {this.users =  data  }
}
// ----------------------------------------------------

 //  II] Imporings Section :  
  const fsPromises  = require('fs').promises;
  const path   = require('path') ;
  
// -----------------------------


//  III] Main [logout handling method] section  :  
  
//  This method => on client side => also delete the [access Token]       :  
  const handleLogout  = async (req, res)   =>    {
  
    // 1- Define the requested cookies :
    const cookies  = req.cookies ;

    
    //  2- Handling response of null value of [cookies jwt] => [we have a cookies and success request ,bUT  NO Conent to be sent ] :
    if (!cookies?.jwt) return res.sendStatus(204);
    

    //  3- Define a [Refresh Token] as extreacted form the obtained jwt   :
    const  refreshToken  = cookies.jwt ;      
    

    //  4- Check if the  obtained requested  [ Refresh Token ] is existed in our database :
    // finding if it is matched ?   
    const foundUser =  usersDB.users.find ( person => person.refreshToken === refreshToken) ; 
      

    // 5- Clear the [refresh token]  & sending the respond ( (if the obtained requested [ Refresh Token ] is NOT in the DB) ) : 
    if (!foundUser) { 
      // a) send clear of the defined Cookie [with a certain properties]  to  the response  :
      res.clearCookie(  'jwt' , { httpOnly : true , maxAge: 24 * 60 * 60 * 1000 }  )

      // b) Send an error of  [204] {no content} :  
      return res.sendStatus(204)  ;
    }    

    // 6- Deleting the [Refresh token] procedures =>
    //   ( (that is found in the Database - due to we have a value of the {foundUser}  )  ) => [by using the (fs promises) insteed of using the (MongoDB)] :   
      
      // a) finding the all other users that is NOT  logged in :      
      const otherUsers  = usersDB.users.filter( person => person.refreshToken !==  foundUser.refreshToken ) ;

      // b)  Re-define the [currentUser] with emptying it's  [RefreshToken] property  value : 
      const currentUser  = {...foundUser , refreshToken : '' } 

      // c)  Updating the [UsersDB] datasource  with the [currentUser (after deleting it's  [refresh token]  )]  - using  the  {setUsers()}   - :    
      usersDB.setUsers([...otherUsers , currentUser]);  
  
      // d)  Writing the new Datasource of the {usersDB}  after the upper modifications :
      await  fsPromises.writeFile(   
        join( __dirname , '..' ,  'model' , 'users.json' ) , 
        JSON.stringify(usersDB)
      )
  
    //  e) Deleting the defined upper cookie + [securing  in the production stage] :
      res.clearCookies('jwt' , { httpOnly : true  } )  ;      // [ secure : true => will be added in the  production stage to serve http only ]  
       
    // f) Send the response of the statue {204}     :    
     res.sendStatus(204) ;
     
}    

// ----------------------------------------------------

//  IV] Exporting the defined handling method  section    :  
module.exports = {handleLogout}  ;  

// ----------------------------------------------------



