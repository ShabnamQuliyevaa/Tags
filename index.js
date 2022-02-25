let inp = document.querySelector('input');
let show = document.createElement('span');
let ekran = '';



inp.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        if (inp.value == '') {
            alert("Please Write Something..")
        } else {
            ekran += ` <p>${inp.value}</p> `
            inp.value = '';

        }

    };

    show.innerHTML = ekran;
    document.getElementById("see").appendChild(show);





});

ğ