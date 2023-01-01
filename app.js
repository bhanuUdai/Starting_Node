const http=require('http');


// function reqListener(req,res)
// {

// }

// http.createServer(reqListener)

const server=http.createServer(function(req,res)
{
   // console.log(req.url,req.method,req.headers)
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
                <button type='submit' >ABOUT PAGE</button>
            </form>
        </body>
    </html>`)
    return res.end() // res.end() tells the node that our code ends here, below this if we agin write res.write(), it will give error,also here we are using return because here we want to stop the code and it will not execute further below. Otherwise it will also execute content of another url
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