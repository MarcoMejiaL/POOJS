
const numeros=[0,1,2,3,4,5,6,7,8,9]
/* let numero =0
for(let i =0; i<numeros.length; i++ ){
    numero = numeros[i]
    console.log({i, numero});
} */
function recursiva(param){
    if( param.length !=0){
        const firstNumbre = param[0];
        console.log(firstNumbre);
        param.shift();
        return recursiva(param)
    }
}