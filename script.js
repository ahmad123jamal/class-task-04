 
    const body = document.body;
    const button = document.getElementById('toglemode');



    let color = 'white';


    button.addEventListener('click', () => {
        if (color === 'white') {
            document.body.style.backgroundColor = 'black'
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            color = 'black';
        }
        else {
            document.body.style.backgroundColor = 'white'
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
            color = 'white';
        }
    })