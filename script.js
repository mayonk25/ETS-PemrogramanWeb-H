async function getData(){
    const response = await fetch (`http://159.223.51.203/api/bio`)
    const data = await response.json();
    console.log(data);
    renderData(data);
}

function renderData(data){
    for (i = 1; i <= data.length; i++) {
        document.querySelector('#name' + i).innerHTML = data[i-1].name
        document.querySelector('#desc' + i).innerHTML = data[i-1].id
    }
}

window.onload = () =>{
    getData();
}