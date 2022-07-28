// IMPORTANTE:
// Ver la consola de JavaScript

interface SuperHeroe{
  nombre: string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion:{
    calle: 'Maint St',
    pais: 'USA',
    ciudad: 'NY'

  },
  mostrarDireccion(){
    return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
  }
}
cost direccion = superHeroe.mostrarDireccion();
console.log( direccion );

