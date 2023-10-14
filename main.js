// WRITE SOLUTION HERE

let stars = document.querySelectorAll(".star");
let container = document.getElementById('star-container');
let count = 0;

container.addEventListener('click', (e) => {
    let currClicked = e.target.dataset.index;

    for (let i = 0; i < 5; i++) {
        stars[i].classList.remove('star-filled');
    }

    for (let i = 0; i < currClicked; i++) {
        stars[i].classList.add('star-filled');
    }

    document.getElementById("count").innerText = currClicked;
    count = currClicked;
});



container.addEventListener('mouseover', (e) => {
    let currHover = e.target.dataset.index;

    for (let i = 0; i < 5; i++) {
        stars[i].classList.remove('star-filled');
    }

    for (let i = 0; i < currHover; i++) {
        stars[i].classList.add('star-filled');
    }
});

// Main Point is to remove highlighted star after hover
// second point is to make highlighted till clicked star

container.addEventListener('mouseleave', (e) => {


    for (let i = 0; i < 5; i++) {
        stars[i].classList.remove('star-filled');
    }

   for (let i = 0; i < count; i++) {
        stars[i].classList.add('star-filled');
    } 
});


