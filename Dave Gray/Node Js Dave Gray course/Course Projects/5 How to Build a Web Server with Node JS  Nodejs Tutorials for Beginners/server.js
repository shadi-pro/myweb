// lesson 4 :  Building  a [Mode server]  +  [ Node events ] of [write logs] process in acertain  file   :

// This is the main initialized file using the [node server] , and lncluding using  the main definition of the node events :

 // A] Importing Section  :
  // 1] Importings required for creating  [Node Web Server] + other inner methods  :   
    // a-  importing the {http} class from the [node core common module] {the main  claas rewuried for defining the server }     :    
    const http = require('http') ;
    
    // b-  importing the {path} class from the  [node core common module]     :    
    const path = require('path') ;
    
    // c-  importing the {fs} class from the  [node core common module]     :    
    const fs = require('fs') ;
    
    // d-  importing the {fs Promises} class from the  [node core common module]     :    
    const fsPromises  = require('fs').promises ;
  // ---------------------------------------------------------------- 

  // 2] Importings required for  [Node Event : logEvents}     :   
    // a- Importing the defined and exported {logEvents} function from the [logEvents.js] file [to be ready to use inside the main event ] :
      const logEvents =  require('./logEvents') ;

    // b- Importing the main class of Events from {events : Common Core Module class } that will be  used to extend  another
    //  custom class from it that will be  used it in extracting define of new object of event emiiter :
      const EventEmitter =  require('events') ;
    
    
  //  -------------------------------------------------------------
  //  -------------------------------------------------------------
// B] [Node Event]  [defenition steps and procedures]  section :  
 
  // 1] Extract a new class [EventEmitter] extended from the main imported variable from the [Events] the node core module  :
  class Emitter extends  EventEmitter {} ;

  // 2] Initializing/ Extracting a new object from the new extracted Class [Emitter] :
  const myEmitter  = new Emitter() ;  

  // 3] Main define/create the Node Event syntax =>  {myEmitter.on('eventNameVar' , callbackfunc(pars) )}  :
  myEmitter.on('log' ,  (msg , fileName) =>  logEvents(msg , fileName) );      
// ------------------------------------


//  C] [Server configuration processes steps] section :
  // 1] Define the {port(s)} to be used for connecting with the [localhost] OR with other custom node server {3500} :
   const PORT = process.env.PORT || 3500 ;

  
  // 2] Define the {public server} method of [serveFile] accroding to the detected [filePath] ,  [contentType] ,  [response] :  
    const serveFile = async( filePath ,  contentType ,   response ) => {
      try {

        // a- Define a [rawData] as raw data readed content from [the file with detected path [filePath]]  : 
        const rawData =  await fsPromises.readFile( 
          filePath , 
          !contentType.includes('image') ? 'utf8' : ''   //  => [conditanional assignment  of scripting code value  accroding to the {contentType} value ] 
        );

        // b- Parsing the value of [rawData] into a json format if the [contentType] ===  Application/json (json format ) :
        const data  =  contentType === 'Application/json' ? JSON.parse(rawData) : rawData  ;  

        // c- (after reading  the content type) : assgin/write the response's Head by the code of the {200: of the success connection }    [content-Type] of the response's head  with the parameter value  of {contentType} :
        response.writeHead( 
          filePath.includes('404.html') ?  404  :  200  ,                  // => [Assign a conditional value of the code according to if the file path includes error type]
          {'Content-Type' : contentType }                                  // => [ Assign the {Content-Type}  with the value of the pamrater of the (contentType) of  the  main {serveFile} fucniuon        ]
        ) ; 
        
        // d- assign the obtained data [conditional value] into the end process   :
        response.end( 
          contentType === 'Application/json' ? JSON.stringify(data) : data  // =>  [settting the json stringify data incase of json type , or the data as it is defined    ] 
        )  
      
      }  catch(err)  {
        console.error(err) ;
        
        // Calling/Operating/Emitting the defined [log] event + assign an emitting message parameter  + assign the file to be written in {errLog.txt}  : 
        myEmitter.emit(     // Calling event customized for log error :    
          'log' ,    // the event name assgined inisde the event object on() process  [myEmitter.on()]  
          `${err.name} :  ${err.message}` ,   //  the (message) parameter value 
          'errLog.txt'   //  the (fileName) parameter   
        ); 


        //  Setting the of status code of [response] to the server error code value [500]  :
        response.statusCode =  500 ;       // => [Error responding code ]  ]
  
        response.end();
      }   
    }

    
  // 3] Create the [minimal server] by  Define the {server} as extracted [createServer] from the imported [http] 
  // , and assign both of the [req: request && res: response ] as callback function's  parameter  :
   const server  = http.createServer((req, res )  => {

    // a-  Print the value of {request url} & {request method} of the sent request :
    console.log(req.url , req.method ) ;

    // Calling/Operating/Emitting the defined [log] event + assign an emitting message parameter  + assign the file to be written in {reqLog.txt}      : 
    myEmitter.emit(     // Calling event for main log  :
      'log' ,     // the event name
      `${req.url}\t${req.method}` ,  // the (message) parameter value 
      'reqLog.txt'   // the (fileName) parameter value   
    ); 



    // b- using the extension of the returned [url] of request(req) ,  to figure out the type of the page requested using the switch  :
    const extension  = path.extname(req.url) ;

    // c- Define a variable to prohibited cases retunred from the current page's file extension :   
    let contentType ; 
  
    // d- Setting the  {contentType} value according to the returned extension value -> to be set inside the another method  : 
   switch (extension)  {
      case '.css' : 
         contentType =  'text/css' ;  
         break ;
      
      case '.js' : 
         contentType =  'text/javascript' ;  
         break ;
      
      case '.json' : 
         contentType =  'application/json' ;  
         break ;
      
      case '.jpg' : 
         contentType =  'image/jpeg' ;  
         break ;
      
      case '.png' : 
         contentType =  'image/png' ;  
         break ;
      
      case '.txt' : 
        contentType =  'text/plain' ;  
        break ;
        
      //  the default case  of having '/'  only OR 'html' extension :
      default :  
        contentType =  'text/html' ;  
   }

 
    // e- Setting the file path according to the returned value of the [contentType] using the (chained conditional method statement)  : 
    let filePath  = 
    contentType === 'text/html' && req.url === '/' 
      ? path.join(__dirname , 'views', 'index.html') 
      : contentType === 'text/html' && req.url.slice(-1) === '/' 
        ? path.join(__dirname , 'views', req.url ,  'index.html') 
        : contentType === 'text/html' 
          ? path.join(__dirname , 'views', req.url  ) 
          : path.join(__dirname , req.url ) ;   // [ set the path with returned specified file  ]

    // f- Adding [extenion of '.html' ] to the filepath in case a of  {inner page path} [incase there no extension returned and last charchter is Not equal '/' ] :
      // this will make (adding the .html  extension to the last of the requesst url) is not required  :
    if (!extension && req.url.slice(-1) !==  '/') filePath += '.html' ;

    // g- Define a variable of the  existaned file imported from the file system form the 'fs' and assing the [filePath] at its paramnter     :  
    const fileExists =  fs.existsSync(filePath) ;   // =>   [this will return a boolean value ]

    // h- According to the Checked value of the [fileExists] => 
        /// => implement the Serving file procedures 
        /// => Or implement Error handling procedures    :
    if  (fileExists)  {
      // i/1  Serving the file procedures =>  by calling the defined public method of [servefile()]   and assign all pamrameters :
      serveFile( filePath , contentType  , res ); 

    }  else { 
      // i/2 Error page handling procedures  of one of the next type  :
        // [404] =>  Serving the [404] error page  
        // [301] =>  Serving the Redirecting  


      // testing printing of the obtained error :
      console.log( path.parse(filePath) ) ; 
        
      // switch the path value and assign [filePath] as the parameter  => [to detect which page error type to be represented ]  :
      switch ( path.parse(filePath).base ) {
        case 'old-page.html' :         
          //  redirect into  [new-page.html] page when node url is  'old-page.html' => by  Assign the [res] with  301 redirection code & assign specific header value of  '/new-page.html'    : 
          res.writeHead( 301,  {'Location' :  '/new-page.html' }); 
            
          // ending the {res} :
          res.end() ; 
          break;

        case 'www-page.html' :
          //  redirect into  [index.html] home page when node url is  'www-page.html' => by  Assign the [res] with  301 redirection code & assign specific header value of  '/'    : 
          res.writeHead( 301, {'Location' :  '/' } ) ; 
          
          // ending  the  {res} :
          res.end() ; 
          break;

        default  : 
          //serving the public error [404 page] , when the NON of the upper url path  cases is NOT existed ,  by calling the upper defined public method of the  serveFile    : 
          serveFile( path.join(__dirname , 'views' , '404.html' ) , 'text/html' , res  );       
      }
    }  
  });

  // 3] Launching the [Listen] process  of server [to be able to listen  its  request] :
   server.listen(PORT , () => console.log(`Server running on port : ${PORT} `)  )


 // -------------------------------------------------------------------------
 // -------------------------------------------------------------------------
    

 // b] Using the defined object to [Define + Execute/Operate/Implement/Emit] with [node event] =>
  // by Adding a [listner event of the  defined varaible  and its event function] to the new defined extracted object [myEmitter] to be able to deal with the events :
    



 //  define an empty custom path to test the respond of te server [not best approach to be used (NOT dynmaic) ] :
    // let filePath;;

    // if  ( req.url === '/' || req.url === 'index.html' )   {

    //   // setting the [respnose] status code with '200' : the successful "responding"  :
    //   res.statusCode   = 200 ;
        
    //   // Setting the header with 'text/html' [because we servering a html page]   : 
    //   res.setHeader('Content-Type' , 'text/html') ; 

    //   //  Reset the upper defined custom path with the desired path of the index.html file   :
    //   filePath = path.join(__dirname , 'views' ,  'index.html' ) ; 

    //   //  Reading the  file with  upper defined path : 
    //   fs.readFile(path , 'utf8', (err, data) => {
    //     // assign the requred data on to the response parameter :
    //     res.end(data) ; 
    //   });  
    // } 


