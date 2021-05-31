import './style.scss'
var checkbox = document.querySelector('input[name=mode]');
let beerTot =  0;
let queueItemes = [];

checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        document.querySelector("#mode").innerHTML = "Light Mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        document.querySelector("#mode").innerHTML = "Dark Mode";
    }
});

pageLoad();

function pageLoad(){
    loadData(); 
}
function loadData (){
    fetch("https://beer-bar.herokuapp.com/")
    .then(r => r.json())
    .then (jsonData => {
        // loaded --> prepare objects
        console.log(jsonData);
        prepIfos(jsonData);
    });
}


function prepIfos(data) {
    let servedC = [];
    let queue = data.queue ;
    
    
    
    data.bartenders.forEach(element => {
        document.querySelector("#"+element.name+ " .bartendname").innerHTML = element.name;
        document.querySelector("#"+element.name+ " .bartendStat").innerHTML = "status :"+ element.statusDetail;
        document.querySelector("#"+element.name+ " .bartendServd").innerHTML =  element.servingCustomer;
        servedC.push(element.servingCustomer);
    }); 
    if (servedC.length===3){
        servedC.sort();
        console.log(servedC);
        document.querySelector(".served").innerHTML = servedC[0] -1 ;
    }
    document.querySelector(".waiting").innerHTML = queue.length;      
    queue.forEach( element =>{
        if (queueItemes.findIndex((item) => item.id === element.id) === -1){
            beerTot += element.order.length ;
            console.log(beerTot);
            console.log("elements are not here");
        }
    });
    queueItemes = queue ;
    console.log(queueItemes);
    document.querySelector(".sold").innerHTML = beerTot;
    wait();
}

function wait() {
    setTimeout(loadData,5000);
}
// Random Time
const liquid = document.querySelectorAll(".liquid");
liquid.forEach((x) => {
    const time = Math.random() * 1000 + 0.2;
    x.style.setProperty('--animation-time', time +'s');
});
