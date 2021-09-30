const marco ={
    name: "marco",
    age: 31,
    cursosAprobadis: [
        "de comer naranja",
        "bailar ",
        "comer"
    ],
    /* aprobarCursos: function(){

    } */
    aprobarCurso(nuevoCurso){
        this.cursosAprobadis.push(nuevoCurso);
    },
};

function estudiante(name,age,cursosAprobadis){
this.name =name;
this.age = age;
this.cursosAprobadis=cursosAprobadis
}

estudiante.prototype.aprobarCurso=function(nuevoCurso){
    this.cursosAprobadis.push(nuevoCurso)
}

const barbara = new estudiante(
    'barbara', 11, ['comer naraja', 'programacion basica'] 
);