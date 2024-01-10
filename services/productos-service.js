const { faker } = require("@faker-js/faker");

class ProductoSerivices{// se crea la instancia de la clase
constructor(){ // el constructor se encarga de asignar valores iniciales a los atributos de una instacia de la clase
  this.productos=[];//para el manejo de datos, que deberia ir conectado a una base de datos
  this.generate();
}
generate(){ // se generan los datos en el array, para trabajar con ellos
  const limit=100; // aquí lo que se hace es definir 100 productos
  for (let i = 0; i < limit; i++) {
    this.productos.push({
      id:faker.datatype.uuid(),//aquí se está generando un id
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(),10),
      image:faker.image.imageUrl()
    });

  }
}
create(data){//recibe como parámetro la data del body, del producto que estoy creando
  const newProduct={
    id:faker.datatype.uuid(),//aquí se está generando un id
    ...data // aqui lo que se hace es pasarle elementos al array data, como argumentos individuales: name, price, image
  };
  this.productos.push(newProduct);//al arreglo de productos, le agregagmos el nuevo producto
  return newProduct; // devuelve el nuevo producto creado
}
find(){
  return this.productos;//servicio que devuelve todos los productos
}
findOne(id){
  return this.productos.find(item=>item.id===id);
}
update(id, changes) {
  const index = this.productos.findIndex(item => item.id === id);// buscar solo la posicion con findIndex
  if (index === -1) { //si es -1, no existe el index
    throw new Error('product not found');
  }
  const producto = this.productos[index];
  this.productos[index] = {
    ...producto,//tiene el indice, posicion
    ...changes//aplica solo los cambios que se colocaron en el body, los demás atributos se dejan igual
  };
  return this.productos[index];
}
delete(id){
  const index=this.productos.findIndex(item=>item.id===id);//index retorna la posición del producto a actualizar
  if(index === -1){
    throw new Error('product not found');
  }else{
    this.productos.splice(index,1);//splice borra a patir de la posición index, 1 solo elemento
    return {id}
  }
}
}

module.exports=ProductoSerivices;
