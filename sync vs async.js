const {readFileSync, writeFileSync} = require('fs');
console.log('start');

readFileSync('contents/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);



writeFileSync('contents/first.txt',result.toUpperCase(),(err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File has been modified successfully!');
 });
});

console.log('end');

