import './style.scss'
var checkbox = document.querySelector('input[name=mode]');

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
    data.bartenders.forEach(element => {
        document.querySelector("#"+element.name+ " .bartendname").innerHTML = element.name;
        document.querySelector("#"+element.name+ " .bartendStat").innerHTML = "status :"+ element.statusDetail;
        document.querySelector("#"+element.name+ " .bartendServd").innerHTML =  element.servingCustomer;
        
    }); 
}

// Random Time
const liquid = document.querySelectorAll(".liquid");
liquid.forEach((x) => {
    const time = Math.random() * 100 + 0.2;
    x.style.setProperty('--animation-time', time +'s');
});
