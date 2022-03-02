const obj1 ={
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e"
    }
}

const tringComplex=JSON.stringify(obj1) //JSON.stringify convierte objetos en un string

const obj2=JSON.parse(tringComplex) //transforma un String en un objeto

