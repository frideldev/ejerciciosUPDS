// Promesa Simple
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        //Simular operacion asincronica
        setTimeout(()=>{
            const data={id:1,nombre:"Fridel"}
            resolve(data)
        },2000)
    })
}
fetchData().then(data=>{
    console.log("Data Resuelta",data)
    return data.nombre
})
.then(nombre=>{
    console.log("Nombre",nombre)
})
.catch(error=>{
    console.error("Error",error)
})

//Gestionar multiples promesas
const promesa1=new Promise(resolve=>setTimeout(()=>resolve(1),2000))
const promesa2=new Promise(resolve=>setTimeout(()=>resolve(2),2000))
const promesa3=new Promise(resolve=>setTimeout(()=>resolve(3),2000))
Promise.all([promesa1,promesa2,promesa3])
.then(resolver=>console.log("Todas las promesas resueltas",resolver))
.catch(error=>console.error("Error",error))