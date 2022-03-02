



function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject)
}


function copy(subject){
    let copySubject

    const subjectIsArray = isArray(subject)
    const subjectIsObject = isObject(subject)

    if(subjectIsArray){
        copySubject = [];
    }else if(subjectIsObject){
        copySubject ={};
    }else{
     return subject   
    }


    for(key in subject){
        const keyIsObject = isObject(subject[key])
        if(keyIsObject){
             copySubject[key] = copy(subject[key]) 
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key] = subject[key]
            }

        }
    }



    return copySubject
}

/* const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approveCourses: undefined,
    learningpaths:undefined,
    socialMedia:{
        twitter:undefined,
        instagram:undefined,
        gitHub:undefined
    }

}
const marco = copy(studentBase) */
/* Object.defineProperty(marco,"name",{
    value:'marco',
    configurable:false,
}) */


function createStudent({
    name ,
    email,
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } ) {
    return {
      name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    };
}
const yadi = createStudent({name:'yadira',age:32})


