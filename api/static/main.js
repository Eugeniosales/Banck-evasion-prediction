/*
class ordenation{
    static quickSort(array, start, end){
        let i = start
        let j = end - 1
        let pivot = (start+end)/2

        while(i < pivot){
            i+=1;
        }
        while(j > pivot){
            j+=1;
        }
        if (i < pivot && j > pivot){
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
        quickSort(array);
        quickSort(array);
        
    }
}


axios.get('https://api.github.com/users/Eugeniosales')
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });
*/


class App{
    constructor(){
        this.clients = [];
        this.listClients =  document.querySelector("#clients-list ul");
    }

    async addClient(){

        const response = await axios.get('http:/localhost:5000/clients');
        const {Surname, CustomerId} = response.data;
        console.log(response.data);
        
        for(let i of response.data){
            this.clients.push({
                RowNumber: '',
                CustomerId,
                Surname: i.Surname,
                CreditScore: '',
                Geography: '',
                Gender: '',
                Age: '',
                Tenure: '',
                Balance: '',
                NumOfProducts: '',
                HasCrCard: '',
                IsActiveMember: '',
                EstimatedSalary: '',
                Exited: '',
            });
        }
    
        console.log(this.clients.Surname);
        this.render();
    }

    render(){
        //this.listClients.innerHTML = '';

        this.clients.forEach( client => {
            let content = document.createTextNode(client.Surname);

            let name = document.createElement('li');
            name.appendChild(content);

            this.listClients.appendChild(name);
        });
    }
    
}

const a = new App();
a.addClient();