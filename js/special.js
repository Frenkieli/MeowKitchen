var slide_points = document.getElementsByClassName('slide_point');
var cat_slide = document.getElementById('cat_slide');
var points = 0;

function slidrRight() {
    if (points < 8) {
        slide_points[points].style.backgroundColor = '#aaa';
        points += 1;
        slide_points[points].style.backgroundColor = '#fa0';
    }
    cat_slide.style.right = `${points * 62.5}%`
    // console.log('1');
}

function slidrLeft() {
    if (points > 0) {
        slide_points[points].style.backgroundColor = '#aaa';
        points -= 1;
        slide_points[points].style.backgroundColor = '#fa0';
    }
    cat_slide.style.right = `${points * 62.5}%`
    // console.log('2');
}



function touchmoveCat() {
    var touchMove = 0;
    var posCheck = '0%';
    var touchIn = 0;
    cat_slide.addEventListener('touchstart', function (e) {
        var touch = event.targetTouches[0];
        touchIn = touch.pageX;
        console.log(touch.pageX, 'touchIn');
    }, false);
    // 偵測手指頭進場位置
    cat_slide.addEventListener('touchmove', function (e) {
        
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            touchMove = touchIn - touch.pageX;
        }
        console.log(posCheck, 'posCheck');
        cat_slide.style.transition = '0s';
        cat_slide.style.right = `calc(${posCheck} + ${touchMove / 3}px)`;

    }, false);
    // 手指頭滑動回饋
    cat_slide.addEventListener('touchend', function (e) {
        if (touchMove > 70) {
            cat_slide.style.transition = '1s';
            slidrRight();
            posCheck = cat_slide.style.right;
            console.log(cat_slide.style.right, 'slidrRight');
        } else if (touchMove < -70) {
            cat_slide.style.transition = '1s';
            slidrLeft();
            posCheck = cat_slide.style.right;
            console.log(cat_slide.style.right, 'slidrLeft');
        } else {
            cat_slide.style.transition = `1s`;
            cat_slide.style.right = posCheck;
        }
        console.log(points, 'points');
        console.log(touchMove, 'touchMove');
    }, false);
    // 手指頭出場判斷
}