const { faker } = require("@faker-js/faker");

class UsuariosServices{
  constructor(){
    this.usuarios=[];
    this.generate();
  }
  generate(){
    const limit=50;
    for(let j=0;j<50;j++){
      this.usuarios.push({
        id:faker.datatype.uuid(),
        name:faker.person.firstName(),
        lastname:faker.person.lastName(),
        foto:faker.image.urlPicsumPhotos()
      })
    }
  };
  create(data){
    const newUsuario={
      id:faker.datatype.uuid(),
      ...data
    };
    this.usuarios.push(newUsuario);
    return newUsuario;
  }

  find(){
    return this.usuarios;
  }
  findOne(id){
    const index=this.usuarios.findIndex(usuario=>usuario.id===id);
    return this.usuarios[index];
  }
  update(id,changes){
    const index=this.usuarios.findIndex(usuario=>usuario.id===id);
    if (index === -1) { //si es -1, no existe el index
      throw new Error('Usuario not found');
    }
    const usuario=this.usuarios[index];
    this.usuarios[index]={
      ...usuario,
      ...changes
    };
    return this.usuarios[index];
  }
  deleted(id){
    const index=this.usuarios.findIndex(usuario=>usuario.id===id);
    if (index === -1) { //si es -1, no existe el index
      throw new Error('Usuario not found');
    }else{
      this.usuarios.splice(index,1);
      return {id};
    }
  }
};

module.exports=UsuariosServices;
