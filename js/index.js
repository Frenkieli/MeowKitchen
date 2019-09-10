


// 這裡面是banner用的
let time = 0;
let banner_group = new Array;
let banner_times = document.getElementsByClassName('times_pic');
let section_banner = document.getElementById('section_banner');
let dice = document.getElementById('banner_group');
let clearMoveTime;
let banner_timesNum = 40;
let banner_timesNumCheak = new Array(0, 1, 2, 3);
let bannerWidth = section_banner.offsetWidth;
// 解決商品無法同時左右滑
let slide_rights = document.getElementsByClassName('slide_right');
let slide_lefts = document.getElementsByClassName('slide_left');

// 右邊左滑

function getId() {
    for (let i = 0; i < 4; i++) {
        banner_group[i] = document.getElementById(`banner_group${i}`)
    }
}



function moveBannerTimesRight(e) {
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    banner_timesNum += 1;
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    time += 1;
    dice.style.transform = `translateZ(${- (bannerWidth) / 2}px) rotateY(${time * 90}deg)`;
    dice.style.transition = '1s ease-in-out';
    clearTimeout(clearMoveTime);
    clearMoveTime = setTimeout(moveBannerTimesRight, 5000, false);
}

function moveBannerTimesLeft() {
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    banner_timesNum -= 1;
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    time -= 1;
    dice.style.transform = `translateZ(${- (bannerWidth) / 2}px) rotateY(${time * 90}deg)`;
    dice.style.transition = '1s ease-in-out';
    clearTimeout(clearMoveTime);
    clearMoveTime = setTimeout(moveBannerTimesRight, 5000, false);
}
// 追加貓腳印功能
function moveBanner() {
    dice.style.transform = `translateZ(${- (bannerWidth) / 2}px) rotateY(${time * 90}deg)`;
    clearTimeout(clearMoveTime);
    clearMoveTime = setTimeout(moveBannerTimesRight, 5000, false);
    // console.log(time);
}
var moveBanner1 = function () {
    switch (Math.abs(time % 4)) {
        case 0:
            break;
        case 1:
            time -= 1;
            break;
        case 2:
            time -= 2;
            break;
        case 3:
            time += 1;
            break;
    }
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    banner_timesNum = 400;
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    moveBanner();
}
function moveBanner2() {
    switch (Math.abs(time % 4)) {
        case 0:
            time += 1;
            break;
        case 1:
            break;
        case 2:
            time -= 1;
            break;
        case 3:
            time -= 2;
            break;
    }
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    banner_timesNum = 401;
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    moveBanner();
}
function moveBanner3() {
    switch (Math.abs(time % 4)) {
        case 0:
            time -= 2;
            break;
        case 1:
            time += 1;
            break;
        case 2:
            break;
        case 3:
            time -= 1;
            break;
    }
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    banner_timesNum = 402;
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    moveBanner();
}
function moveBanner4() {
    switch (Math.abs(time % 4)) {
        case 0:
            time -= 1;
            break;
        case 1:
            time -= 2;
            break;
        case 2:
            time += 1;
            break;
        case 3:
            break;
    }
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    banner_timesNum = 403;
    banner_times[banner_timesNumCheak[banner_timesNum % 4]].classList.toggle('choose');
    moveBanner();
}
// 追加貓腳印功能
//  結束

function arrowMove(viewScroll, viewhight) {
    var gallery_arrowleft = document.getElementsByClassName('gallery_arrowleft')[0];
    var section_gallery = document.getElementsByClassName('section_gallery')[0];
    var section_galleryTop = section_gallery.offsetTop;
    viewScroll += viewhight - (section_gallery.scrollHeight / 2);
    if (section_galleryTop < viewScroll) {
        gallery_arrowleft.style.right = '50%';
        gallery_arrowleft.style.transform = 'translate(100%, -50%) scale(1,1)'
        // console.log('啟動');
    }
    // console.log(section_galleryTop, 'arrowleft_scrolltop');
    // console.log(viewhight, 'viewhight');
    // console.log(viewScroll, 'viewScroll');
}


function touchmoveBanner() {
    var touchMove = 0;
    var posCheck =`translateZ(${- (bannerWidth) / 2}px) rotateY(${time * 90}deg)`;
    var touchIn = 0;
    section_banner.addEventListener('touchstart', function (e) {
        var touch = event.targetTouches[0];
        touchIn = touch.pageX;
        console.log(touch.pageX, 'touchIn');
        clearTimeout(clearMoveTime);
    }, false);
    // 判斷手指頭進場
    section_banner.addEventListener('touchmove', function (e) {
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            // 把元素放在手指所在的位置
            touchMove = touchIn - touch.pageX;
            dice.style.transform = `translateZ(${- (bannerWidth) / 2}px) rotateY(${time * 90 - touchMove / 5}deg)`;
            dice.style.transition = '0s';
        }

        console.log(posCheck, 'posCheck');
    }, false);
    // 判斷手指頭移動距離,和移動時回饋
    section_banner.addEventListener('touchend', function (e) {
        if (touchMove > 100) {
            moveBannerTimesLeft();
            // console.log(cat_slide.style.right, 'slidrRight');
        } else if (touchMove < -100) {
            moveBannerTimesRight();
            // console.log(cat_slide.style.right, 'slidrLeft');
        } else {
            dice.style.transition = '1s ease-in-out';
            dice.style.transform = `translateZ(${- (bannerWidth) / 2}px) rotateY(${time * 90}deg)`;
            clearMoveTime = setTimeout(moveBannerTimesRight, 5000, false);
        }
        console.log(time, 'time');
        console.log(touchMove, 'touchMove');
    }, false);
    //判斷要進行的事件
}

