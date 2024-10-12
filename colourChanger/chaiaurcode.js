const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function (button){
    console.log(button);
    button.addEventListener('mouseover', function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';

        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'red';
        }
        else if(e.target.id === 'default'){
            body.style.backgroundColor = 'white';
            body.style.color = 'black';

        }
    })
} )