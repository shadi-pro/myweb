
// this file is a middleware method responsbile for verifying the  requested  [user roles] by comparing with [allowed roles]        :  

// Define the verify role method => using the [ {Rest operator} :  to pass as many parameters as desired] : 
const verifyRoles = (...allowedRoles) => {
  // a- passing through a middeleware  function , as return of this method :
  return (req, res, next) => {

    // 1- Check for the availability of [req] & [roles] using  the chainning conditional status =>   and send an error of not Valid [if the req ||  roles value is null ]  :
    if (!req?.roles) return res.sendStatus(401);

    // 2- Define an array of [allowed roles]  :
    const rolesArray = [...allowedRoles];

    // 3- Testing print of our defined [rolesArray] {allowed roles} : 
    console.log(rolesArray);

    // 4- testing print requested array of [roles] {requested roles }  : 
    console.log(req.roles);

    // 5- using (2) higehwr order functions the {map} to loop inside the [requested array] and check  if the requested role inside in the allowed roles  array       :
    // [ this will resulting an array of boolean values for each roles , according to  the result varialbe] & [using chaining (.find()) to (.filter()) true values ]  
    const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);

    // 6-  return an error of [not valid] if the no true value returned :
    if (!result) return res.sendStatus(401);

    next();

  }

}

// --------------------------------------------------- 




// exporting  the upper defind middleware method  [ verfiyRoles ]

module.exports = verifyRoles;



