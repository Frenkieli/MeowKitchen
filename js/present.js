var slide_boxs = document.getElementsByClassName('slide_box');
var slide_buttoms = document.getElementsByClassName('slide_buttom');
var slidetime = 30;
var timeStop;
var buttomcheck = true;

function slideright() {
    if (buttomcheck) {
        slide_buttoms[slidetime % 3].style.backgroundColor = 'rgba(255,255,255,0.7)';
        slide_boxs[slidetime % 3].className = 'slide_box slide_rightout';
        slidetime += 1
        slide_buttoms[slidetime % 3].style.backgroundColor = 'rgba(255,166,0,0.7)';
        slide_boxs[slidetime % 3].className = 'slide_box slide_rightin';
        clearTimeout(timeStop);
        timeStop = setTimeout(slideright, 4000);
        buttomcheck = false;
        setTimeout(() => {
            buttomcheck = true;
        }, 1000);
    }
}
function buttomEven(times) {
    console.log('123456456')
    if (buttomcheck) {
        slide_buttoms[slidetime % 3].style.backgroundColor = 'rgba(255,255,255,0.7)';
        slide_boxs[slidetime % 3].className = 'slide_box slide_rightout';
        slidetime = 30 + times;
        slide_buttoms[slidetime % 3].style.backgroundColor = 'rgba(255,166,0,0.7)';
        slide_boxs[slidetime % 3].className = 'slide_box slide_rightin';
        clearTimeout(timeStop);
        timeStop = setTimeout(slideright, 4000);
        buttomcheck = false;
        setTimeout(() => {
            buttomcheck = true;
        }, 1000);
    }
}

// 下方購物籃轉換

function sellitem_food() {
    var events = document.querySelectorAll('.sellitem_food .sellitem_itembox');
    var eventImgs = document.querySelectorAll('.sellitem_food img');
    var eventH4s = document.querySelectorAll('.sellitem_food h4');
    var eventPs = document.querySelectorAll('.sellitem_food p');
    var eventAs = document.querySelectorAll('.sellitem_food a');
    var timeOutStop;
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function food() {
            var imgBox, h4Box, pBox, aBox;
            var opacityAni = 1;
            timeOutStop = setTimeout(flashOut, 5);
            function flashOut() {
                opacityAni -= 1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                console.log(events[0].style.opacity);
                if (opacityAni >= 0) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashOut, 5);
                    console.log('out');
                } else {
                    console.log('成功換圖');
                    imgBox = eventImgs[i].src;
                    eventImgs[i].src = eventImgs[0].src;
                    eventImgs[0].src = imgBox;
                    h4Box = eventH4s[i].innerHTML;
                    eventH4s[i].innerHTML = eventH4s[0].innerHTML;
                    eventH4s[0].innerHTML = h4Box;
                    pBox = eventPs[i].innerHTML;
                    eventPs[i].innerHTML = eventPs[0].innerHTML;
                    eventPs[0].innerHTML = pBox;
                    aBox = eventAs[i].onclick;
                    eventAs[i].onclick = eventAs[0].onclick;
                    eventAs[0].onclick = aBox;
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                }
            }
            function flashIn() {
                opacityAni += 0.1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                if (opacityAni <= 1) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                    console.log('in');
                }
            }
            console.log(eventImgs[i].src, '測試')
        };
    }
}


function sellitem_gift() {
    var events = document.querySelectorAll('.sellitem_gift .sellitem_itembox');
    var eventImgs = document.querySelectorAll('.sellitem_gift img');
    var eventH4s = document.querySelectorAll('.sellitem_gift h4');
    var eventPs = document.querySelectorAll('.sellitem_gift p');
    var eventAs = document.querySelectorAll('.sellitem_gift a');
    var timeOutStop;
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function gift() {
            var imgBox, h4Box, pBox, aBox;
            var opacityAni = 1;
            timeOutStop = setTimeout(flashOut, 5);
            function flashOut() {
                opacityAni -= 1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                console.log(events[0].style.opacity);
                if (opacityAni >= 0) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashOut, 5);
                    console.log('out');
                } else {
                    console.log('成功換圖');
                    imgBox = eventImgs[i].src;
                    eventImgs[i].src = eventImgs[0].src;
                    eventImgs[0].src = imgBox;
                    h4Box = eventH4s[i].innerHTML;
                    eventH4s[i].innerHTML = eventH4s[0].innerHTML;
                    eventH4s[0].innerHTML = h4Box;
                    pBox = eventPs[i].innerHTML;
                    eventPs[i].innerHTML = eventPs[0].innerHTML;
                    eventPs[0].innerHTML = pBox;
                    aBox = eventAs[i].onclick;
                    eventAs[i].onclick = eventAs[0].onclick;
                    eventAs[0].onclick = aBox;
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                }
            }
            function flashIn() {
                opacityAni += 0.1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                if (opacityAni <= 1) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                    console.log('in');
                }
            }
            console.log(eventImgs[i].src, '測試')
        };
    }
}


function sellitem_dess() {
    var events = document.querySelectorAll('.sellitem_dess .sellitem_itembox');
    var eventImgs = document.querySelectorAll('.sellitem_dess img');
    var eventH4s = document.querySelectorAll('.sellitem_dess h4');
    var eventPs = document.querySelectorAll('.sellitem_dess p');
    var eventAs = document.querySelectorAll('.sellitem_dess a');
    var timeOutStop;
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function dess() {
            var imgBox, h4Box, pBox, aBox;
            var opacityAni = 1;
            timeOutStop = setTimeout(flashOut, 5);
            function flashOut() {
                opacityAni -= 1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                console.log(events[0].style.opacity);
                if (opacityAni >= 0) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashOut, 5);
                    console.log('out');
                } else {
                    console.log('成功換圖');
                    imgBox = eventImgs[i].src;
                    eventImgs[i].src = eventImgs[0].src;
                    eventImgs[0].src = imgBox;
                    h4Box = eventH4s[i].innerHTML;
                    eventH4s[i].innerHTML = eventH4s[0].innerHTML;
                    eventH4s[0].innerHTML = h4Box;
                    pBox = eventPs[i].innerHTML;
                    eventPs[i].innerHTML = eventPs[0].innerHTML;
                    eventPs[0].innerHTML = pBox;
                    aBox = eventAs[i].onclick;
                    // eventAs[i].onclick = eventAs[0].onclick;
                    eventAs[0].onclick = aBox;
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                }
            }
            function flashIn() {
                opacityAni += 0.1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                if (opacityAni <= 1) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                    console.log('in');
                }
            }
            console.log(eventImgs[i].src, '測試')
        };
    }
}


function sellitem_pack() {
    var events = document.querySelectorAll('.sellitem_pack .sellitem_itembox');
    var eventImgs = document.querySelectorAll('.sellitem_pack img');
    var eventH4s = document.querySelectorAll('.sellitem_pack h4');
    var eventPs = document.querySelectorAll('.sellitem_pack p');
    var eventAs = document.querySelectorAll('.sellitem_pack a');
    var timeOutStop;
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function pack() {
            var imgBox, h4Box, pBox, aBox;
            var opacityAni = 1;
            timeOutStop = setTimeout(flashOut, 5);
            function flashOut() {
                opacityAni -= 1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                // console.log(events[0].style.opacity);
                if (opacityAni >= 0) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashOut, 5);
                    // console.log('out');
                } else {
                    // console.log('成功換圖');
                    imgBox = eventImgs[i].src;
                    eventImgs[i].src = eventImgs[0].src;
                    eventImgs[0].src = imgBox;
                    h4Box = eventH4s[i].innerHTML;
                    eventH4s[i].innerHTML = eventH4s[0].innerHTML;
                    eventH4s[0].innerHTML = h4Box;
                    pBox = eventPs[i].innerHTML;
                    eventPs[i].innerHTML = eventPs[0].innerHTML;
                    eventPs[0].innerHTML = pBox;
                    aBox = eventAs[i].onclick;
                    // eventAs[i].onclick = eventAs[0].onclick;
                    eventAs[0].onclick = aBox;
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                }
            }
            function flashIn() {
                opacityAni += 0.1;
                events[i].style.opacity = opacityAni;
                events[0].style.opacity = opacityAni;
                if (opacityAni <= 1) {
                    clearTimeout(timeOutStop);
                    timeOutStop = setTimeout(flashIn, 5);
                    // console.log('in');
                }
            }
            // console.log(eventImgs[i].src, '測試')
        };
    }
}

function remove_sellitem_food() {
    var events = document.querySelectorAll('.sellitem_food .sellitem_itembox');
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function () { };
    }
}
function remove_sellitem_gift() {
    var events = document.querySelectorAll('.sellitem_gift .sellitem_itembox');
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function () { };
    }
}
function remove_sellitem_dess() {
    var events = document.querySelectorAll('.sellitem_dess .sellitem_itembox');
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function () { };
    }
}
function remove_sellitem_pack() {
    var events = document.querySelectorAll('.sellitem_pack .sellitem_itembox');
    for (let i = 1; i < events.length; i++) {
        events[i].onclick = function () { };
    }
}


// 進購物車
var img_inshopcar = document.getElementsByClassName('img_inshopcar')[0];
let timecheckclech;
var shopcarnum = document.getElementsByClassName('shopcarnum')[0];
function inShopButtom1() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(1) img').src;
    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}


function inShopButtom2() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(2) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom3() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(3) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom4() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(4) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom5() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(5) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom6() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_item .sellitem_itembox:nth-child(6) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom7() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(1) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom8() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(2) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom9() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(3) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom10() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(4) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom11() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(5) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom12() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_gift .sellitem_itembox:nth-child(6) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom13() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(1) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom14() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(2) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom15() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(3) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom16() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(4) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom17() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(5) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom18() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_dess .sellitem_itembox:nth-child(6) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}


function inShopButtom19() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(1) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom20() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(2) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom21() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(3) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom22() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(4) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}

function inShopButtom23() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(5) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}


function inShopButtom24() {
    shopcarnum.innerHTML = shopcarnum.innerHTML * 1 + 1;
    if (document.documentElement.clientWidth >= 768) {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(1) img').src;
    } else {
        img_inshopcar.src = document.querySelector('.sellitem_pack .sellitem_itembox:nth-child(6) img').src;
    }

    var img_inop = 0.5;
    var img_into = 300;
    var img_inwi = 300;
    var img_intr = 50;
    clearInterval(timecheckclech);
    function img_Inop() {
        if (img_inop > 0) {
            img_inshopcar.style.opacity = img_inop;
            img_inshopcar.style.top = -img_into + '%'
            img_inshopcar.style.width = img_inwi + '%'
            img_inshopcar.style.transform = `translate(${-img_intr}% , 0)`;
            img_inop -= 0.01;
            img_into -= 6;
            img_inwi -= 4;
            img_intr -= 1;
        }
    }
    timecheckclech = setInterval(img_Inop, 20);
}










// img_inshopcar.addEventListener('click', function () {
//     // img_inshopcar.classList.toggle('img_in');



// }, false);

