//ordenation

function quickSort(array, start, end){
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

    var clients = []

    //Adding the clients from the api
    async function addClient(){

        let response = await fetch('http://localhost:5000/clients');
        let data = await response.json();

        for(let i of data){
            const {CustomerId, Surname, CreditScore, Geography, EstimatedSalary, Probability} = i;

            clients.push({
                CustomerId,
                Surname,
                CreditScore,
                Geography,
                EstimatedSalary,
                Probability,
            });
        }
        quickSort(clients, 0, clients.length);

        render();
    }


    function render() {

    var labels = ['Most likely to leave', 'CustomerId', 'Surname', 'CreditScore', 'Geography', 'EstimatedSalary', 'Probability'];

    var body = document.getElementsByTagName('div')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute('class', 'table table-striped table-dark');

    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    for(i of labels){
        var th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.appendChild(document.createTextNode(i));
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    tbl.appendChild(thead);
    body.appendChild(tbl);
    
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < clients.length; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < labels.length; j++) {
            var td = document.createElement('td');
            if(!j){
                td.appendChild(document.createTextNode(i+1+'º'));
            }else{
                td.appendChild(document.createTextNode(clients[i][labels[j]]));
            }
            
            tr.appendChild(td);
        }

        tbdy.appendChild(tr);
    }
        
    
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
    
    }

addClient();