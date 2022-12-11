const nombre= prompt ("Hola, ingresa tu nombre")
alert ("Bienvenid@" + " " + nombre)

const email= prompt ("Ingresa tu e-mail")
const tel= prompt ("Ingresa tu número de teléfono")

alert (`Tu correo electrónico ${email} y tu número de contacto ${tel} fueron registrados. Te enviamos tu código de descuento en tu primera sesión.`);

class Usuario {
    constructor(nombre, acceso, email) {
      this.nombre = nombre;
      this.acceso = acceso;
      this.email = email;
    }
    mostrarInfoAcceso() {
      return `Usuario: ${this.nombre}, tu acceso es ${this.acceso}, te enviamos notificaciones a ${this.email}`;
    }
  }
  const cliente = new Usuario("Melisa", "Aceptado", "me@me.com",);
  console.log(cliente.mostrarInfoAcceso());

  const productos = [
    {nombre: "Fase I", precio: 2000, modalidad: "presencial"},
    {nombre: "Fase II", precio: 2000,  modalidad: "presencial" },
    {nombre: "Fase III" , precio : 2000,  modalidad: "presencial"},
    {nombre: "Fase IV" , precio: 2000,  modalidad: "presencial"},
    {nombre: "Fase I y II" , precio: 2500, modalidad: "virtual"},
    {nombre: "Fase III y IV" , precio: 2500, modalidad: "virtual"},
    {nombre: "Fase I y IV" , precio: 2500, modalidad: "virtual"},
    ]
    
    productos.forEach((producto) => {
    console.log (producto.nombre);
    console.log (producto.precio);
    console.log (producto.modalidad);
    })

    //Sesiones disponibles en modalidad presencial//
    const personal= productos.filter((productos) => productos.modalidad.includes ("presencial")) ;
    console.log(personal);

    //Sesiones disponibles en modalidad virtual//
    const online = productos.filter((productos) => productos.modalidad.includes ("virtual")) ;
    console.log(online);

    // Suma de las sesiones//
    const totalCarrito = productos.reduce((acumulador,producto) => acumulador + producto.precio, 0)
    console.log(totalCarrito);
    
   




