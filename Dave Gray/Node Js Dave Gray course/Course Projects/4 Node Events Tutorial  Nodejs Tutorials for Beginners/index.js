// This the main file of [index.js] , and will include the following  :

   // 1- Import the defined function from the [logEvents.js] file   , and using it as the defiend [node event]'s method
   // 2- Define the [node event]  from extracted object [myEmitter] from the extended new class [MyEmitter]    
   // 3- Notes =>  To create a new node event , and deal with, we must implement the next proceudres  : 
      // a- Define [EventEmitter] as imported variable from the {events} of [core node module] 
      // b- Define a Custom class {MyEmitter} extended from the main imported [EventEmitter]  
      // c- Define an extracted object {myEmitter} from the extended Custom class {MyEmitter} => this object will be about control the event by using the certain methods : 
        // 1 -- {Main define/create  the Node Event} ->  {   myEmitter.on('eventName' , (par) => callbackfunc(par): [imported method to be implemented within this event par ] )    }
        // 2 -- {Main execute the defined Node Event} -> {   myEmitter.emit('eventName' , 'paramter value of the event's method'    }      => [usually sued to be called insdie a builtin event - such as: {setTimeout}         -  ]

// -------------------------------------------------------------------


// 1- Importing the defined and exported {logEvents} function from the [logEvents.js] file :
  const logEvents =  require('./logEvents') ;

// 2- Importing the main class of Events from {events : Common Core Module class } that will be  used to exrtact another custom class from it :
  const EventEmitter =  require('events') ;
 
// 3- Extract a new class [EventEmitter] extended from the main imported variable from the [Events] the node core module  :
  class MyEmitter extends  EventEmitter {} ;

// 4- Initializing/ Extracting a new object from the new extracted Class [MyEmitter] :
  const myEmitter  = new MyEmitter() ;  

// 5- Using the defined object to [Define + Execute/Operate/Implement/Emit] with [node event] =>
  // by Adding a [listner event of the  defined varaible  and its event function] to the new defined extracted object [myEmitter] to be able to deal with the events :

  // a- Main define/create  the Node Event syntax =>  myEmitter.on('eventNameVar' , callbackfunc(par) )   ; 
  myEmitter.on('log' ,  (msg) =>  logEvents(msg)   );     
   
   // b- Define [node event] inside a built-in [setTimeout()] event :
  setTimeout( () => {     
      // c- Calling/Operating/Emitting the defined [log] event + assign an emitting message parameter : 
      myEmitter.emit('log' , 'log Event emittied !' );     
  }, 1000 ) ;
 


