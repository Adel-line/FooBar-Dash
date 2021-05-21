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
})