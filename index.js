const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req,res)=>{
  res.send('server running ');
});

app.get('/nueva-ruta', (req,res)=>{
  res.send('Esta es mi nueva ruta');
});

app.get('/productos', (req,res)=>{
  res.json({
    name: 'product1',
    price:5.20
  });
});

app.listen(port, ()=>{
  console.log('Server on '+ port);
});
