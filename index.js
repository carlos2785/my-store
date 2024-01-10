const express=require('express');
const app=express();
const {Router}=require('express');
const router= Router();
app.use(express.json());
const port = 3005;

app.use('/api/v1',router);// esta linea se agrega en caso de que la aplicación tenga una version 2 0 3 y mientras tanto se necesite seguir usando la version 1
router.use('/productos',require('./routes/productos-router'));
router.use('/categorias',require('./routes/categorias-router'));
router.use('/usuarios',require('./routes/usuarios-router'));

app.listen(port, ()=>{
  console.log('Server on '+ port);
});
