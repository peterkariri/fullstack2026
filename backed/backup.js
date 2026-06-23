/* node js >>this refers to a runtime environment built on chrome v8 engine 
where it executes javascript code on the server 

how does it work under the hood {
    v8 engine>>it compiles and executes js 
    libuv>>this is a C library that gives node js access to the operating asystem 
    ,file system(fs) ,networking,timers and event loop.
}
to run node js e use the node script name 
and to initialise a node js flder structure we use the npm init -y to initialize 
the package.Json 

the blocking loop era{
    most other programs always wait for sequential execution of code {
        task A must complete before task B starts >>blocking execution 
         with node js we can implement non-blocking execution 
    }
} to use node js modules we have to require them 
to use th efolder strucuture we have to require it 
 */
//traditional callback
//let fs=require("fs") //i have access to mmy file 

//modern way using promises

//let fs=require("fs").promises


//reading files 
/* when reading files the we use the readFile (read only )it takes various 
parameters {
    the name of the file ,the encoding character (utf-8),function(err ,data)

    the encoding character should always be there to make sure that it 
    does not return a buffer (empty)
} */

/* let fs=require("fs").promises

fs.readFile("/Users/nova/Desktop/fullstack2026/index.txt","utf8",function(err,data){
    if(err){
        console.log("could not read file",err.message);
            return
    }
    console.log('filecontent:');
    console.log(data);
    
    
}) */

//let fs=require('fs').promises

async function readContent(){
    let content=await fs.readFile('/Users/nova/Desktop/fullstack2026/index.txt','utf8')
    let config=JSON.parse(content);
    console.log(config);
    
}

/* to write we use the writeFile {
    we use the write File s we dud with callbacks and async 

} */
let fs=require("fs").promises
let message="hello Remi this is node js \n This is wonderful "
fs.writeFile("/Users/nova/Desktop/fullstack2026/index.txt",message,"utf8",function(err){
    if(err){
        console.log("could not write file",err.message);
            return
    }
    console.log('file written')
})

//set up a server using node js 

//install a running server and listen to the server at a port ,3000(localhost)

const http=require('http')

let port=3002;

const server=http.createServer((req,res)=>{
    res.end("hello Remi and Aila ")
})

server.listen(`${port}`,()=>{
    console.log(`server is listening at ${port}`);
    
})
//create routes in express {
/* a route refers to an endpoint that once a user url is clicked the Route accepts the request 
and gives a response {
    comes from the logic it contain >>database info fetch 
    there are two types of routes methods  that are mostly used {
        post and get 
    }
}


for routes we take in three paramenters{
route ,then the call back function iwth the req and res params 
the thir is a middleware 
}

to send data to user we use the res.send witht he info body tailored 
 data from user to backed 
the request bosy(object )contains the 
req.params>>entities involved from the backed 
req.body(fullname,emai )
req.query>>the overall request json parsed 

the respond(res)>data from backed to user 
contain this bodies 
{
res.json()
res.status()>>errors ,messages 
res.send()>>sends files and dynamic content
}
} */