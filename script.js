const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const bgs = document.querySelectorAll('.bg');

let index = 0;
const totalItems = bgs.length;

nextBtn.addEventListener('click', () => {
    bgs[index].classList.remove('active');
    index = (index + 1) % totalItems;
    bgs[index].classList.add('active');
    if (index > 0 && index < 11){
        
        listInfo.style.transform = `translateY(${index * -9}%)`;

    }
    else{

        listInfo.style.transform = `translateY(${index * -10}%)`;
    }
    listImg.style.transform = `translateY(${index * -100}%)`;
    
});

prevBtn.addEventListener('click', () => {
    bgs[index].classList.remove('active');
    index = (index - 1 + totalItems) % totalItems;
    bgs[index].classList.add('active');
    if (index > 0 && index < 11){
        listInfo.style.transform = `translateY(${index * -9}%)`;
    }
    else{
        listInfo.style.transform = `translateY(${index * -10}%)`;
    }
    listImg.style.transform = `translateY(${index * -100}%)`;
});
