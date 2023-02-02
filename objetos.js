const michel = {

    //Atributo: propiedades
    nombre: "Michel",
    apellido: "Balvin Ormedo",
    edad: 22,
    pasaTiempos: ["Correr","Programar","videogames"],
    soltero: true,
    contacto: {
        email: "michel_balvin@hotmail.com",
        twitter: "Michel",
        movil: "933800020"
    },
    saludar:function(){
        console.log("hola")
    },
    Minombre:function(){
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
}
michel.Minombre();