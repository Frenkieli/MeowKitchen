function tdResize() {
    // console.log('有啟動');
    var tds = document.getElementsByTagName('td');
    for (i = 0; i < tds.length; i++) {
        let hight = tds[i].offsetWidth + 'px'
        tds[i].style.height = hight;
        tds[i].style.lineHeight = hight;
        // console.log(i, hight);
    }
}
function tableDate() {
    var tds = document.querySelectorAll('td:not(:empty)');
    var datetime = document.getElementById('booking_time');
    // var clearbgi;
    for (i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', function () {
            var clearbgi = document.querySelectorAll('[style *= "b"]');
            for (j = 0; j < clearbgi.length; j++) {
                clearbgi[j].style.backgroundImage = '';
                clearbgi[j].style.color = '#000';
                clearbgi[j].style.borderColor = 'transparent';
                clearbgi[j].style.cursor = 'pointer';
            }
            this.style.backgroundImage = `url(pic/reserve/${Math.floor(Math.random() * 6)}.gif)`;
            this.style.color = 'transparent';
            this.style.borderColor = 'rgba(0,0,0 ,0.3)';
            this.style.cursor = 'default';
            datetime.value = this.className.replace('=', '日').replace('-', '月').replace('+', '年');
            let weday = this.className.substr(0, 1);
            datetime.value = datetime.value.replace(weday, '星期' + week[weday] + "，");
            // document.documentElement.scrollTop = datetime.offsetTop - 100;
        }, false);
        clearbgi = tds[0];
    }
}

function choosestore() {
    document.getElementsByClassName('label_storeboss1')[0].addEventListener('click', function () {
        document.getElementById('choosestore').innerText = document.querySelector('.label_storeboss1 h2').innerText;
    }, false);
    document.getElementsByClassName('label_storeboss2')[0].addEventListener('click', function () {
        document.getElementById('choosestore').innerText = document.querySelector('.label_storeboss2 h2').innerText;
    }, false);
    document.getElementById('restore').addEventListener('click', function () {
        document.getElementById('choosestore').innerText = '選擇店面';
    }, false);
}
