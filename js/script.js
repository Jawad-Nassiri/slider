// let $ = document;
// let img = $.querySelector('img');
// let nextBtn = $.querySelector('#next');
// let preBtn = $.querySelector('#pre');
// let imgSrc = [
//     'images/f1.jpg',
//     'images/f2.jpg',
//     'images/f3.jpg',
//     'images/f4.jpg',
//     'images/f5.jpg',
//     'images/f6.jpg',
//     'images/f7.jpg',
//     'images/f8.jpg',
//     'images/f9.jpg',
//     'images/f10.jpg',
//     'images/f11.jpg',
//     'images/f12.jpg',
//     'images/f13.jpg',
//     'images/f14.jpg',
//     'images/f15.jpg',
//     'images/f16.jpg',
//     'images/f17.jpg'
// ];


// let imgIndex = 0;

// function next(){
//     imgIndex++;
//     if(imgIndex >= imgSrc.length){
//         imgIndex = 0;
//     }
//     img.src = imgSrc[imgIndex];
// }



// function pre(){
//     imgIndex--;
//     if(imgIndex < 0){
//         imgIndex = imgSrc.length - 1;
//     }
//     img.src = imgSrc[imgIndex];
// }




// nextBtn.addEventListener('click', next);
// preBtn.addEventListener('click', pre);



/////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    let img = document.querySelector('img');
    let nextBtn = document.querySelector('#next');
    let preBtn = document.querySelector('#pre');
    let imgSrc = [
        'images/f1.jpg',
        'images/f2.jpg',
        'images/f3.jpg',
        'images/f4.jpg',
        'images/f5.jpg',
        'images/f6.jpg',
        'images/f7.jpg',
        'images/f8.jpg',
        'images/f9.jpg',
        'images/f10.jpg',
        'images/f11.jpg',
        'images/f12.jpg',
        'images/f13.jpg',
        'images/f14.jpg',
        'images/f15.jpg',
        'images/f16.jpg',
        'images/f17.jpg'
    ];
    let imgIndex = 0;

    function next() {
        imgIndex = (imgIndex + 1) % imgSrc.length;
        img.src = imgSrc[imgIndex];
    }

    function pre() {
        imgIndex = (imgIndex - 1 + imgSrc.length) % imgSrc.length;
        img.src = imgSrc[imgIndex];
    }

    nextBtn.addEventListener('click', next);
    preBtn.addEventListener('click', pre);
});
