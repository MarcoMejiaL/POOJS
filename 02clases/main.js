class Student{

    constructor({name,age,cursos=[]}){
        this.name = name;
        this.age = age;
        this.cursosAprobador = cursos;

    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobador.push(nuevoCurso);
    }
}
const elys = new Student({edad:4,name:'elis',});