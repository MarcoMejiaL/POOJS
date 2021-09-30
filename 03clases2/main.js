class Student {
    constructor({
        name,
        email,
        useName,
        instragram =undefined,
        twitter = undefined,
        facebook= undefined,
        approvedCourser = [],
        learningPaths = [],

    })
    {
        this.name = name;
        this.email=email;
        this.useName=useName;
        this.socialMedia= {
        instragram,
       twitter,
       facebook
     };
        this.approvedCourser = approvedCourser;
        this.learningPaths =learningPaths;
    }
}

class LearningPath{
    constructor({
        name,
        route,
        teacher,
        hours,        
        description,
        content=[]

    })
    {
        this.name=name;
        this.route=route;
        this.teacher=teacher;
        this.hours=hours;     
        this.description=description;
        this.content=content;
    }
}
const WebDevelopment = new LearningPath({
    name: 'Escuela de desarrollo web',
    route: 'Desarrollo web',
    teacher: 'marco',
    hours: 25,
    description: 'loremklsdjsalkjdlksajdsakljdksajd',
    content:['one','two','tree']


});
const marco = new Student({
    name: 'marco',
    email:'tomatin77',
    useName:'sheeva',
    twitter: 'ripperip'

});