const marco ={
    name: 'marco',
    age: 31,
    approvedCourser: ['uno','dos'],

    addCouree(newCoutse){
        this.approvedCourser.push(newCoutse)
    }
};






/* 
console.log(Object.keys(marco));
console.log(Object.getOwnPropertyNames(marco));
console.log(Object.entries(marco)); */

Object.defineProperty(marco,"prueba1",{
    value: "",
    writable: true,
    enumerable: true,
    configurable: true,

})

Object.defineProperty(marco,"prueba2",{
    value: "",
    writable: false,
    enumerable: false,
    configurable: false,
    
})