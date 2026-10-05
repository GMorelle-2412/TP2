const input_1 = document.createElement('input');
document.body.appendChild(input_1);

const input_2 = document.createElement('input');
document.body.appendChild(input_2);

const boutton = document.createElement('button');
document.body.appendChild(boutton);

const text = document.createElement('p');

boutton.addEventListener("click", function (e){
    text.innerText = parseInt(input_2.value) + parseInt(input_1.value);
    document.body.appendChild(text);
});