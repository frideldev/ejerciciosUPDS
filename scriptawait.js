const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        //Simular operacion asincronica
        setTimeout(()=>{
            const data={id:1,nombre:"Fridel"}
            resolve(data)
        },2000)
    })
}
const getData= async ()=>{
    try{
      const data=await fetchData();
      console.log("Data Resuelta",data)
    }
    catch{
        console.error("Error",error)
    }
}
getData();