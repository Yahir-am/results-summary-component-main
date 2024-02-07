const list = document.querySelector('ul');
const loader = document.getElementById('loader');

fetch('./data.json')
.then(response => response.json())
.then(data => {
    for(let i = 0; i < data.length; i++){
        list.innerHTML += 
        `<li class = "${data[i].category} ${data[i].category}--${i+1}">
        <p><img src = "${data[i].icon}">${data[i].category}</p>
        <p><span>${data[i].score} </span>/ 100</p>
        </li>`
    }  
})
.catch(error => {
    console.error('Error: ', error);
});
