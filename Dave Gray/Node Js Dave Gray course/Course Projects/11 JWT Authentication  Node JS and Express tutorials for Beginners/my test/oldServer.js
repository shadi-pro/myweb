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

  // 2] Importings required for  [Node Event : logEvents}  :   
    // a- Importing the defined and exported {logEvents} function from the [logEvents.js] file [to be ready to use inside the main event ] :
      const logEvents =  require('./logEvents') ;

    // b- Importing the main class of Events from {events : Common Core Module class } that will be  used to extend  another
    //  custom class from it that will be used it in extracting define of new object of event emitter :
      const EventEmitter =  require('events') ;
    
    
  //  -------------------------------------------------------------
  //  -------------------------------------------------------------

// B] [Node Event]  [definition steps and procedures] Defining and configurations   section :  
 
  // 1] Extract a new class [Emitter]  extended from the main class [EventEmitter] that imported variable from the [Events] the node core module  :
  class Emitter extends  EventEmitter {} ;

  // 2] Initializing/ Extracting a new object from the new extracted Class [Emitter] :
  const myEmitter  = new Emitter() ;  

  // 3] Main define/create the Node Event  with including the imported custom method {logEvents} as its callback function syntax =>  {myEmitter.on('eventNameVar' , callbackfunc(par1 , par2) )}  :
  myEmitter.on('log' ,  (msg , fileName) =>  logEvents(msg , fileName) );      
// ------------------------------------


//  C] [Server configuration processes steps] section :
  
  // 1] Define the { Port(s) } to be used for connecting with the [localhost] OR with other custom node server {3500} :
   const PORT = process.env.PORT || 3500 ;

  
  // 2] Define the  {public server } asynchrounous method  of [serveFile] according that receving the detected all served file as parameters :
    // [filePath] ,  [contentType] ,  [response] that will be recived when this mehod is being used inside the main  {server} variable   :  
    const serveFile = async( filePath ,  contentType ,   response ) => {
      try {


        // a- Define a [rawData] as raw data readed content from [the file with detected path [filePath]]  : 
        const rawData =  await fsPromises.readFile( 
          filePath , 
          !contentType.includes('image') ? 'utf8' : ''   //  => [conditional assignment  of scripting code value  accroding to the {contentType} value ] 
        );

        // b- Parsing the value of [rawData] into a json format if the [contentType] ===  Application/json (json format ) :
        const data  =  contentType === 'Application/json' ? JSON.parse(rawData) : rawData  ;  

        // c- (after reading  the content type) : assgin/write the response's Head by the code of the {200: of the success connection }    [content-Type] of the response's head  with the parameter value  of {contentType} :
        response.writeHead( 
          filePath.includes('404.html') ?  404  :  200  ,       // => [Assign a conditional value of the code according to if the file path includes error type]
          {'Content-Type' : contentType }                       // => [ Assign the {Content-Type}  with the value of the pamrater of the (contentType) of  the  main {serveFile} fucniuon        ]
        ) ; 
        
         
        // d- Ending the response by using the [end()] method + assigning the obtained data as [conditional value] into the end process :  
        response.end( 
          contentType === 'Application/json' ? JSON.stringify(data) : data  // =>  [settting the json stringify data incase of json type , or the data as it is defined    ] 
        )  
      
      }  catch(err)  {
        
        // a- testing the printing error  : 
         console.error(err) ;
        
        // b- [ write the error log ] ->   by Calling/Operating/Emitting the defined [log] event + assign an emitting message parameter  + assign the file to be written in {errLog.txt}  : 
        myEmitter.emit(     // Calling event customized for log error :    
          'log' ,    // assign the value of first parameter of the event name assgined inisde the event object on() process  [myEmitter.on()]  
          `${err.name} :  ${err.message}` ,   // assign the value the second parameter of (message) parameter value 
          'errLog.txt'   // assign the value  the third parameter of the (fileName)    
        ); 

        // c- Setting the of status code of [response] by the code of server error code value [500]  :
        response.statusCode =  500 ;       // => [Error responding code ]
  
        // d- Ending  the response by using the [end()] method   :   
        response.end();
      }   
    }
// ---------------------------
    
  // 3] Create/define the main server method  [minimal server] by Define the {server} as extracted [createServer] from the imported [http] 
  // , and assign both of the [req: request && res: response ] as callback function's parameter that it's return will represent the server actions procedures    :
   const server  = http.createServer((req, res)  => {

    // a- Testing  Print the value of {request url} & {request method} of the sent request :
    console.log(req.url , req.method ) ;

    // b- [write the default log] ->       
      //  by Calling/Operating/Emitting the defined [log] event object + assign an emitting message parameter  + assign the file to be written in {reqLog.txt} : 
    myEmitter.emit(   
      'log' ,     // assign the value of first parameter : the event name assgined inisde the event object on() process  [myEmitter.on()]  
      `${req.url}\t${req.method}` ,  // assign the value the second parameter :  (message) parameter value by adding both values of [request url +  request method ]   
      'reqLog.txt'    // assign the value of third parameter :  (file final name)    
    ); 


    // c- Define the [extension] of the returned [url]'s extension of request(req) , to figure out the type of the page requested using the switch :
    const extension  = path.extname(req.url) ;

    // d- [contentType] Define a variable that will be assinged one of  the any  prohibited retunred  cases of values from the current page's file extension  => 
        //  [contentType] will be used as the value of (contentType) parameter value inside  the {serverfile} method  ]  :   
    let contentType ; 
  
    // e- Setting the  {contentType} value according to the returned extension value -> to be set inside the another method [serveFile() ]  : 
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
        
      // the default case of having '/'  only OR 'html' extension :
      default :  
        contentType =  'text/html' ;  
   }

 
    // f- Setting the {file path  : to be used in the {servefile} method as the value of (filePath) parameter} 
      // {filePath} 's value will be assigned through conditional chained method statement according to the returned value of the previous [contentType] value    : 
    let filePath  = 
    contentType === 'text/html' && req.url === '/' 
      ? path.join(__dirname , 'views', 'index.html') 
      : contentType === 'text/html' && req.url.slice(-1) === '/' 
        ? path.join(__dirname , 'views', req.url ,  'index.html') 
        : contentType === 'text/html' 
          ? path.join(__dirname , 'views', req.url  ) 
          : path.join(__dirname , req.url ) ;   // [ set the path with returned specified file  ]


    // g- Adding [extenion of '.html' ] to the previous [filepath] variable => 
      // in case a of {inner page path} [incase there no extension returned with the request url ,   and last charchter is Not equal '/' ] :
      // this condition  will make (adding the .html  extension to the last of the request url) is not required  :
    if (!extension && req.url.slice(-1) !==  '/') filePath += '.html' ;


    // h- [ Checking if the returned file path is existed or NOT ] :
      // by Define a variable of the existaned file imported from the file system form the 'fs' and assigning the [filePath] at its parameter 
      //  this variable value will be used as the conditional   statementin the serving file procuedures   :  
    const fileExists =  fs.existsSync(filePath) ;   // =>   [this will return a boolean value ]


    // i- According to the upper Checked value of the [fileExists] => 
        /// => [true : the file is existened ] =>  implement the Serving file procedures 
        /// => [false : the file is NOT existened ] => Or implement Error handling procedures    :
    if  (fileExists)  {
      // i/1  Serving the file procedures =>  by calling the defined public method of [servefile()] and assign all it's parameters :
      serveFile( filePath , contentType  , res ); 

    }  else { 
      // i/2 Serving the returned error >   Error page handling procedures  of one of the next error type  :
        // [404] =>  Serving the [404] error page  
        // [301] =>  Serving the Redirecting  


      // i/2/a :  testing printing of the obtained error :
      console.log( path.parse(filePath) ) ; 
        
      // i/2/b :  switch the path value and assign [filePath] as the parameter  => [to detect which page error type to be represented ]  :
      switch ( path.parse(filePath).base ) {
        //  i/2/b/1 ->  handling the assumed error of returned of a certain page  {old-page.html} :
        case 'old-page.html' :         
          // redirect into  [new-page.html] page when node url is  'old-page.html' => by  Assign the [res] with  301 redirection code & assign specific header value of  '/new-page.html'    : 
          res.writeHead( 301,  {'Location' :  '/new-page.html' }); 
            
          // ending the {res} :
          res.end() ; 
          break;

        // i/2/b/2 ->   :  
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

  // 4] Launching the [Listen] process  of server [to be able to listen  its  request] :
   server.listen(PORT , () => console.log(`Server running on port : ${PORT} `)  )


 // -------------------------------------------------------------------------
 // -------------------------------------------------------------------------
 