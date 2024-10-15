const HTTP = require('http');

const createServer = HTTP.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('welcome to home page')
    }
    if (req.url === '/about'){
        res.end('This is the about page')
    }
    res.end(
       `<h1>OOPS!</h1>
        <p>Page not found</p>
        <a href='/'>back home</a>` 
    )
    
});
createServer.listen(3000);