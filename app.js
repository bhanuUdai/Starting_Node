const http=require('http');
const fs=require('fs');


// function reqListener(req,res)
// {

// }

// http.createServer(reqListener)

const server=http.createServer(function(req,res)
{
   // console.log(req.url,req.method,req.headers)
   const method=req.method
    res.setHeader('Content-Type','text/html');
    if(req.url==='/')
    {
        res.write(`<html>    
        <head>
            <title>
                My First Page
            </title>
        </head>
        <body>
            <h1>Hello Bhanu</h1>
            <form action='/about' method='POST' >
            <input type='text' name='message'></input>
                <button type='submit' >ABOUT PAGE</button>
            </form>
        </body>
    </html>`)
    return res.end() // res.end() tells the node that our code ends here, below this if we agin write res.write(), it will give error,also here we are using return because here we want to stop the code and it will not execute further below. Otherwise it will also execute content of another url
    }
    
    if(req.url=='/about' && method=='POST')
    {
        const body=[]
        req.on('data',(chunk)=>    // res.on( ) is an event listener, data is an event which is used to get data of request
        {
            console.log(chunk)
            body.push(chunk)
        })      

        req.on('end',()=>           // this 'end' event will be fired when node will parsed each request data
        {
            const parsedBody=Buffer.concat(body).toString();  //Here buffer comes in action, it collect each chunks, i.r concat it and also we are converting it into strings
            console.log(parsedBody)
            const message=parsedBody.split('=')[1]   // name="text" will stote in buffer and split it by "=" and store value i.e text in message
            let msg=message.replace(/[^0-9a-z]/gi,' ')
            fs.writeFileSync('file.text' ,msg);  // here we put it inside this callback because it should be executed after parsing message only
        })              


        
        res.statusCode='302';
        res.setHeader('Location','/');
        return res.end()
    }
    if(req.url==='/about')
    {
       // res.setHeader('Content-Type','text/html');
        res.write(`<html>
            <head>
                <title>
                    My First Page
                </title>
            </head>
            <body>
                <h1>Hello Bhanu</h1>
                <p> Welcome to about page</p>
                <form action='/node' method='POST' >
                    <button type='submit' >NODE PAGE</button>
                </form>
            </body>
        </html>`)
        return res.end()
    }
    
       
        res.write(`<html>
        <head>
            <title>
                My First Page
            </title>
        </head>
        <body>
            <h1>Hello Bhanu</h1>
            <p>Welcome to Node Page</p>
        </body>
    </html>`)
     res.end()
})

server.listen(3000)  