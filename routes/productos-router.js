
const {Router}=require('express');
const router= Router();

const ProductoSerivices=require('../services/productos-service');

const service=new ProductoSerivices();// se crea una nueva instancia de la clase ProductService, para usarla luego de exportarla

//para que este filtro no se confunda por express con el endpoint de busca dinámica('/consultas/:id')
// se debe colocar antes de este y de esta manera se soluciona este problema
router.get('/filter', (req,res)=>{ //http://localhost:3005/productos/filter
  res.send('Soy in filtro');
});

// http://localhost:3005/productos
router.get('', (req,res)=>{
  const productos=service.find();
  res.json(productos);
});

// http://localhost:3005/productos/50
router.get('/:id', (req,res)=>{
  const {id} = req.params;
  const productos=service.findOne(id);// al findOne, le pasamos el id que ya capturamos
  res.status(200).json(productos);
});

////////////////POST///////////////
router.post('', (req,res)=>{
  const body=req.body;
  const newProduct=service.create(body);
  res.status(201).json(newProduct);
});

////////////////PATCH///////////////
router.patch('/:id', (req,res)=>{
  const {id}=req.params;
  const body=req.body;
 const producto=service.update(id,body);
 res.status(200).json(producto);
});
////////////////DELETE///////////////
router.delete('/:id', (req,res)=>{
  const {id}=req.params;
  const respuesta=service.delete(id);
  res.status(200).json(respuesta);
});
module.exports=router;
