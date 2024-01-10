const { Router } = require('express');
const router=Router();
const UsuariosServices=require('../services/usuarios-service');

const service=new UsuariosServices();
//// http://localhost:3005/users?limit=10&offset=200
router.get('', (req,res)=>{
  const usuarios=service.find();
  res.status(200).json(usuarios);
});

router.get('/:id', (req,res)=>{
  const {id}=req.params;//se debe usar {}, para extraer especídicamente el parámetro id, que es lo único que necesitamos
  const usuarios=service.findOne(id);// le paso el id, para que lo pueda buscar
  res.status(200).json(usuarios);
});

/////////////////POST//////////////////////
router.post('',(req,res)=>{
const data=req.body;
const newUsuario=service.create(data);
res.status(201).json(newUsuario);
});

//////////////PATCH/////////
router.patch('/:id',(req,res)=>{
  const data=req.body;
  const {id}=req.params;
  const updateUsuario=service.update(id,data);
  res.status(200).json(updateUsuario);
});

router.delete('/:id',(req,res)=>{
  const {id}=req.params;
  const deleteUsuario=service.deleted(id);
  res.status(200).json(deleteUsuario);
});
module.exports=router;
