const menuBtn = document.querySelector('.burger-icon');
const menuEl = document.querySelector(".js-menu ul");


menuBtn.addEventListener('click', (menu) => {
        let iconBtn = menu.target;

        iconBtn.classList.toggle('active');

        if (! iconBtn.classList.contains('active')) {
            menuEl.classList.add('hide');
        } else{
            menuEl.classList.remove('hide');
        }
        //
        // console.log(iconBtn);
        // console.log(menuEl);
})



// console.log(menuBtn);
