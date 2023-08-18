const express = require('express');

const app = express();


app.use('/users',(req, res, next)=>{
    console.log('In another middleware!');
    res.send('<h1>Add Product!!</h1>');
});

app.use('/',(req, res, next)=>{
    console.log('In another middleware!');
    res.send('<p>Hello express!!</p>');
});

app.listen(3000);