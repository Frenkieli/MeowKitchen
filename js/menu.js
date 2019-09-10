var nav_scroll = new Array;
for (let i = 0; i < 12; i++) {
    nav_scroll[i] = document.getElementById(`nav_scroll${i}`);
}
var nav_buttom = document.querySelectorAll('.body_nav h4');
var body_mainScroll = document.getElementsByClassName('body_main')[0];
var scrollCheck = true;
var scroll = nav_scroll[1].offsetHeight;
// console.log(body_mainScroll.scrollHeight, 'SSS');
var body_navs = document.querySelectorAll('.body_nav h4');
    for(let i=0 ; i<body_navs.length;i++){
        body_navs[i].style.borderBottom = '1px solid transparent' ;
    }
body_mainScroll.onscroll = function () {
    for(let i=0 ; i<body_navs.length;i++){
        body_navs[i].style.borderBottom = '1px solid transparent' ;
    }
    body_navs[Math.floor((body_mainScroll.scrollTop)/scroll)].style.borderBottom = '1px solid #d68a37';
    console.log(body_mainScroll.scrollHeight, 'body_mainScroll.scrollHeight');
    console.log(body_mainScroll.scrollTop, 'body_mainScroll.scrollTop');

}
function addButtomEven() {
    for (let i = 0; i < 12; i++) {

        nav_buttom[i].removeEventListener('click', function () { }, false);
        nav_buttom[i].addEventListener('click', function (e) {
            function moveScrollBottom() {

                if ((body_mainScroll.scrollTop < (scroll) * i + 20) && body_mainScroll.scrollTop + 850 < body_mainScroll.scrollHeight) {
                    setTimeout(moveScrollBottom, 1);
                    // console.log('0');
                } else {
                    scrollCheck = true;
                }
                body_mainScroll.scrollTop += 30;
            }
            function moveScrollTop() {

                if ((body_mainScroll.scrollTop > (scroll + 20) * i + 20)) {
                    setTimeout(moveScrollTop, 1);
                    // console.log('3');
                } else {
                    scrollCheck = true;
                }
                body_mainScroll.scrollTop -= 30;
            }

            if (scrollCheck) {
                scrollCheck = false;
                if (body_mainScroll.scrollTop <= (scroll + 20) * i + 20) {
                    moveScrollBottom();
                } else {
                    moveScrollTop();
                }
            }
            // console.log(scrollCheck);


            // body_mainScroll.scrollTop = (scroll + 20) * i + 20;
        }, false);
    }
}    
