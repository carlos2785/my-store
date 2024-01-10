const {Router}=require('express');
const router=Router();
const { faker } = require("@faker-js/faker");

// http://localhost:3005/categorias
router.get('',(req,res)=>{
  res.json({
    category1: 'Camisas',
    category2: 'Pantalones',
    category3: 'Zapatos'
  });
});

// http://localhost:3005/categorias/5/productos/12
router.get('/:categoria_id/productos/:producto_id', (req,res)=>{
  const {categoria_id,producto_id}=req.params;
  res.json({
    categoria_id,
    producto_id
  });
});

module.exports=router;
