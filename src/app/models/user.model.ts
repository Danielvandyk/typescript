export class User {

    //atributos y sus tipos
    
    name: string
    edad: number
    apellido: string
    genero: string
    telefono: number
    //keywords: string[] 

    //constructor instanciar o a inicializar los atributos cuando tengan un valor
    constructor( name="", apellido="", genero="", telefono=0, edad=0){
        
        this.name = name
        this.edad = edad
        this.apellido= apellido
        this.genero = genero
        this.telefono = telefono
    }

}