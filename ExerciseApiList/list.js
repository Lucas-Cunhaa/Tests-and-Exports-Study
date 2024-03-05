class Car {
    Brand
    Model 
    Year 
    Km 
    Value 
    constructor(brand,model,year,km,value){
        this.Brand = brand 
        this.Model = model 
        this.Year = year 
        this.Km = km 
        this.Value = value 

    }
}
function Get() {

    return fetch("https://apigenerator.dronahq.com/api/TXnUU6cY/CarModel")
    
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  } 
  async function postData(url, data) {

    const response = await fetch(url, {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
 
  } 
  let car = new Car('Merces','gti', 2010, 20000)
  
  
  postData('https://apigenerator.dronahq.com/api/TXnUU6cY/CarModel', car
)
.then((data) => {
    console.log(data);  
});
async function deleteData(url, id) {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    if (response.ok) {
        return { success: true };
    } else {
        throw new Error('Erro ao excluir dados');
    }
}
async function deleteData(url, id) {
    const response = await fetch(`${url}${id}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    if (response.ok) {
        return { success: true };
    } else {
        throw new Error('Erro ao excluir dados');
    }
}
    deleteData("https://apigenerator.dronahq.com/api/TXnUU6cY/CarModel/", 2)

