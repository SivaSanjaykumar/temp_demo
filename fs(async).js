const { readFile , writeFile } = require('fs');

readFile('contents/first.txt','utf-8',(err,result) => {
    if(err) {
        console.log(err);
        return;
        
    }
    console.log(result);
    
    writeFile('contents/modified-first.txt',result.toUpperCase(),(err,result) =>{
        if(err) {
            console.log(err);
            return;
        }
        console.log('File has been modified successfully!');
        console.log(result);
        
    })
})
