class App{
    constructor(){
        this.clients = [];
        this.listClients =  document.querySelector("#clients-list ul");
    }

    async addClient(){

        let response = await fetch('http://localhost:5000/clients');
        let data = await response.json();
        
        for(let i of data){
            const {CustomerId, Surname, CreditScore, Geography, Gender, Age, Balance, NumOfProducts, EstimatedSalary, Probability} = i;

            this.clients.push({
                CustomerId,
                Surname,
                CreditScore,
                Geography,
                Gender,
                Age,
                Balance,
                NumOfProducts,
                EstimatedSalary,
                Probability,
            });
        }
        this.quickSort(this.clients, 0, this.clients.length);
    
        //console.log(this.clients[mid].Probability);
        this.render();
    }

    render(){

        this.clients.forEach( client => {
            let Surname = document.createTextNode(client.Surname);
            let CustomerId = document.createTextNode(client.CustomerId);
            let CreditScore = document.createTextNode(client.CreditScore);
            let Geography = document.createTextNode(client.Geography);
            let Probability = document.createTextNode(client.Probability);

            let name = document.createElement('li');
            //name.appendChild(Surname);
            //name.appendChild(CustomerId);
            //name.appendChild(CreditScore);
            //name.appendChild(Geography);
            name.appendChild(Probability);

            this.listClients.appendChild(name);
        });
    }

    quickSort(array, start, end){
        let i = start;
        let j = end-1;
        let mid = Math.floor((start+end)/2);
        let pivot = array[mid].Probability;

        while(array[i].Probability > pivot && i < end){
            i++;
        }
        while(array[j].Probability < pivot && j > start){
            j--;
        }
        if (i <= j){
            let aux = array[i].Probability;
            array[i].Probability = array[j].Probability;
            array[j].Probability = aux;
            i++;
            j--;
        }
        if(j > start){
            this.quickSort(array, start, j+1);
        }
        if(i < end){
            this.quickSort(array, i, end);
        }
    }
    
}

const a = new App();
a.addClient();