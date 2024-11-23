// This the main file will Import the defiend  function from the [logEvents.js]  , and define the event using it :

// The main steps of  using the defiend events from other file  :   

// 1- Importing the defined and exported {logEvents} :
  const logEvents =  require('./logEvents') ;

// 2- Importing the  [Events Common Core Module class] that required for dealing with the [events] in nodejs  :
  const EventEmitter =  require('events') ;
 
// 3- Extract a new class [EventEmitter] extended from the main imported variable from the [Events] the node core module      :
  class MyEmitter extends  EventEmitter {}  ;

// 4- Initializing/ Extracting a object from the new  extracted Class [MyEmitter] :
 const myEmitter  = new MyEmitter() ;  


// 5- Adding a [listner event of the  defined varaible  and its event function] to the new defined extracted object [myEmitter] to be able to deal wiht  the events :
  //public syntax =>  myEmitter.on('eventNameVar' , callbackfunc(par) )   ; 
   myEmitter.on('log' ,  (msg) =>  logEvents(msg)   );     
   
   // a- Defind event inside the [timeout()] event  :
   setTimeout( () => {     

    // b- Calling and Operating/Emitting the defined [log] event + assign an emitting message parameter : 
    myEmitter.emit('log' , 'log Event emittied !' );     
  }, 2000 ) ;
 


