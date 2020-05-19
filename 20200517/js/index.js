//导航
let headModer = (function () {
    let gamecenter = document.querySelector('.gamecenter'),
        game = document.querySelector('.game'),
        headpic = document.querySelectorAll('.headpic'),
        floatpic = document.querySelectorAll('.floatpic');
    gamecenter.addEventListener('mouseover', function () {
        game.style.display = 'block';
    });
    game.addEventListener('mouseleave', function () {
        game.style.display = 'none';
    });

    for (let i = 0; i < headpic.length; i++) {
        headpic[i].onmouseover = function () {
            floatpic[i].style.display = 'block';
        }
        headpic[i].addEventListener('mouseleave', function (ev) {
            floatpic[i].style.display = 'none';
        });
    }
    //导航直播
    let zhiBoli = document.querySelector('.zhiBoli'),
        zhibo = document.querySelector('.zhibo'),
        zhiboA = document.querySelectorAll('.zhibo .zbDel .zbLeft .onpic'),
        zhiboB = document.querySelectorAll('.underpic'),
        zbxt = document.querySelectorAll('.zbxt'),
        zbxtunder = document.querySelectorAll('.zbxtunder');
    zhiBoli.addEventListener('mouseenter', function (ev) {
        zhibo.style.display = 'block';
    });
    zhibo.addEventListener('mouseleave', function (ev) {
        zhibo.style.display = 'none';
    });
    for (let i = 0; i < 3; i++) {
        zhiboA[i].addEventListener('mouseover', function (ev) {
            zbxt[i].style.cssText = `
            display:block;
            transition: display 2s;`;
        });
        zhiboA[i].addEventListener('mouseleave', function (ev) {
            zbxt[i].style.cssText = `
            display:none;
            transition: display 2s;`;
        });
    }
    for (let i = 0; i < zhiboA.length; i++) {
        zhiboB[i].addEventListener('mouseover', function (ev) {
            zbxtunder[i].style.cssText = `
            display:block;`;
        });
        zhiboB[i].addEventListener('mouseleave', function (ev) {

            zbxtunder[i].style.cssText = `
                display:none;`;
        });
    }
    //漫画
    let cartoon = document.querySelector('.cartoon'),
        cartDel = document.querySelector('.cartDel'),
        cartList = document.querySelectorAll('.cartDel .cartR ul li'),
        cartxt = document.querySelectorAll('.cartxt');
    cartoon.addEventListener('mouseenter', function () {
        cartDel.style.display = 'block';
    });
    cartDel.addEventListener('mouseleave', function () {
        cartDel.style.display = 'none';
    });
    for (let i = 0; i < cartList.length; i++) {
        cartList[i].addEventListener('mouseover', function () {
            cartxt[i].style.display = 'block';
        });
        cartList[i].addEventListener('mouseleave', function () {
            cartxt[i].style.display = 'none';
        });
    }
    // 二维码
    let app = document.querySelector('.app'),
        erweima = document.querySelector('.erweima');
    app.onmouseover = function () {
        erweima.style.display = 'block';
    };
    erweima.onmouseleave = function () {
        erweima.style.display = 'none';
    }
    //导航轮播
    let dengluzhu = document.querySelector('.dengluzhu'),
        signCar = document.querySelector('.signCar'),
        introduction = document.querySelector('.introduction'),
        lunbopic = signCar.querySelector('.lunbopic'),
        pic = lunbopic.querySelectorAll('img'),
        timer = null;
    function move() {
        let picLeft = parseFloat(window.getComputedStyle(lunbopic).left);
        picLeft -= 1;
        if (picLeft <= -320) {
            picLeft = 0;
        }
        lunbopic.style.left = picLeft + 'px';

    }
    dengluzhu.addEventListener('mouseover', function () {
        introduction.style.display = 'block';
        if (timer) return;
        timer = setInterval(move, 30);
    });
    dengluzhu.addEventListener('mouseleave', function () {
        introduction.style.display = 'none';
        clearInterval(timer);
        timer = null;
    });
    //语言选择
    let language = document.querySelector('.language'),
        odllan = document.querySelector('.odllan'),
        twoch = document.querySelector('.twoch'),
        yuyan = twoch.querySelectorAll('p'),
        cur = 0,
        pre = 0;
    for (let i = 0; i < yuyan.length; i++) {
        yuyan[i].onmouseover = function () {
            pre = cur;
            cur = i;
            for (let i = 0; i < yuyan.length; i++) {
                this.classList.add('lanch');
                odllan.innerText = this.innerText;
            }
            yuyan[pre].classList.remove('lanch');
        };
    }
    language.onmouseover = function () {
        twoch.style.display = 'block';
    }
    language.onmouseleave = function () {
        twoch.style.display = 'none';
    }

    //投稿啊
    let tougao = document.querySelector('.contrtg'),
        cont = document.querySelector('.cont');
    tougao.addEventListener('mouseover', function () {
        cont.style.cssText = `
        display:block;`;
    });
    tougao.addEventListener('mouseleave', function () {
        cont.style.cssText = `
        display:none;`;
    });
    //导航搜索
    let headFD = document.querySelector('.head .headFor div'),
        headFS = headFD.querySelector('.mouseOver');
    headFD.addEventListener('mouseenter', function (ev) {
        headFS.style.display = 'block';
    });
    headFD.addEventListener('mouseleave', function (ev) {
        headFS.style.display = 'none';
    });
    return {
        init() {

        }
    }
})();

// bodyhead
let broadCastModer = (function () {
    let bodyHyinT = document.querySelector('.bodyHyinT'),
        bodyHyin = document.querySelector('.bodyHyin');
    bodyHyin.addEventListener('mouseover', function () {
        bodyHyinT.style.cssText = `
         opacity:1;
         transition:all linear .3s;`;
    });
    bodyHyin.addEventListener('mouseleave', function () {
        bodyHyinT.style.display = 'none';
    });
    // 第一部分轮播
    let bodyHeadLBL = document.querySelector('.bodyHeadLBL'),//最外层div
        bodyHealul = bodyHeadLBL.querySelector('ul'),//轮播的ul
        bodyHealulist = bodyHealul.querySelectorAll('li'),
        paginationullist = document.querySelectorAll('.pagination .paginationul li'),
        bhmore = document.querySelector('.bhmore'),
        bodyHeadLBR = document.querySelector('.bodyHeadLBR')
        ;
    let step = 0,
        interval = 2000,
        autoTimer = null,
        len = bodyHealulist.length;
    //自动轮播方法
    function autoMove() {
        if (step === len - 1) {
            step = 0;
            bodyHealul.style.transitionDuration = '0s';
            bodyHealul.style.left = '0px';
            bodyHealul.offsetHeight;
        }
        step++;
        bodyHealul.style.transitionDuration = '.3s';
        bodyHealul.style.left = -step * 550 + 'px';
        paginationFocus();
    }
    //焦点对齐
    function paginationFocus() {
        let tempstep = step;
        tempstep === (len - 1) ? tempstep = 0 : null;
        [].forEach.call(paginationullist, (item, index) => {
            if (index === tempstep) {
                item.classList.add('on');
                return;
            }
            item.className = '';
        });
    }
    [].forEach.call(paginationullist, (item, index) => {
        item.onclick = function () {
            if (index === step || (index === 0 && step === paginationullist - 1)) return;
            step = index;
            bodyHealul.style.transitionDuration = '.3s';
            bodyHealul.style.left = -step * 550 + 'px';
            paginationFocus();
        }
    });
    autoTimer = setInterval(autoMove, interval);

    //右侧轮播遮罩文字
    //文字处理
    let tweleveImg = document.querySelectorAll('.tweleveImg'),
        hiddleWorld = document.querySelectorAll('.hiddleWorld'),
        hidplayImg = document.querySelectorAll('.hidplay img'),
        hidplayWorld = document.querySelectorAll('.hidplay p');
    for (let i = 0; i < hidplayImg.length; i++) {

        tweleveImg[i].onmouseover = function () {
            hiddleWorld[i].style.cssText = `
     background:rgba(0, 0, 0, .5);
     top:-118px`;
        }
        tweleveImg[i].onmouseleave = function () {
            hiddleWorld[i].style.cssText = `
     background:'';
     top:-50px`;
        }
        hidplayImg[i].onmouseover = function () {
            hidplayWorld[i].style.cssText = `
     opacity:1`;
        }
        hidplayImg[i].onmouseleave = function () {
            hidplayWorld[i].style.cssText = `
     opacity:0`;
        }
    }
    // 点击左右按钮处理
    let tweleve = document.querySelector('.tweleve'),
        changeLeft = document.querySelector('.changeLeft'),
        changeRight = document.querySelector('.changeRight');
    let ste = 0;
    changeLeft.addEventListener('click', function (ev) {
        ste++;
        if (ste === 1) {
            tweleve.style.left = -ste * 215 + 'px';
            ste = -3;
        }

        tweleve.style.left = ste * 215 + 'px';
    });
    changeRight.addEventListener('click', function (ev) {
        ste--;
        if (ste === -4) {
            tweleve.style.left = '0px';
            ste = 0;
        }
        tweleve.style.left = ste * 215 + 'px';
    });
    bodyHeadLBR.addEventListener('mouseover', function () {
        changeLeft.style.opacity = 1;
        changeRight.style.opacity = 1;
    });
    bodyHeadLBR.addEventListener('mouseleave', function () {
        changeLeft.style.opacity = 0;
        changeRight.style.opacity = 0;
    });
    // 更多小按钮
    bodyHeadLBL.addEventListener('mouseover', function () {
        bhmore.style.opacity = 1;
    });
    bodyHeadLBL.addEventListener('mouseleave', function () {
        bhmore.style.opacity = 0;
    });
    // 推广
    let card = document.querySelector('.card'),
        card2 = document.querySelector('.card2'),
        jindutiao = document.querySelector('.jindutiao'),
        cardOff = card.offsetWidth,
        jindutiaoStep = 180 / cardOff,
        cardLfet = offset(card).left,
        guofeng = document.querySelector('.guofeng'),
        guofengP = document.querySelector('.guofeng p');
    card.addEventListener('mouseover', function (ev) {
        card2.style.opacity = 1;
        guofeng.style.display = 'block';
    });
    card.addEventListener('mouseleave', function (ev) {
        card2.style.opacity = 0;
        guofeng.style.display = 'none';
    });
    guofeng.onmouseover = function () {
        guofengP.style.opacity = 1;
    }
    guofeng.onmouseleave = function () {
        guofengP.style.opacity = 0;
    }
    card2.addEventListener('mousemove', function (ev) {
        jindutiao.style.left = 8 + 'px';
        let movejuli = ev.clientX - cardLfet,
            juli = cardLfet + cardOff - ev.clientX < 0 ? jindutiao.style.left = 0 : (cardLfet + cardOff - ev.clientX > cardOff ? jindutiao.style.left = 180 : jindutiao.style.left = jindutiaoStep * movejuli);
        jindutiao.style.width = juli + 'px';
        card2.style.backgroundPositionX = movejuli / 160 * 1600 + 'px';
    });

    let cardthree = document.querySelector('.cardthree'),
        guofeng3 = document.querySelector('.guofeng3'),
        guofeng3P = guofeng3.querySelector('p'),
        card3 = document.querySelector('.card3'),
        cardOff3 = card3.offsetWidth,
        cardLfet3 = offset(card3).left,
        jindutiaoStep3 = 180 / cardOff3,
        jindutiao3 = card3.querySelector('.jindutiao3');
    cardthree.onmouseover = function () {
        card3.style.opacity = 1;
        guofeng3.style.display = 'block';
    }
    cardthree.onmouseleave = function () {
        card3.style.opacity = 0;
        guofeng3.style.display = 'none';
    }
    guofeng3.onmouseover = function () {
        guofeng3P.style.opacity = 1;
    }
    guofeng3.onmouseleave = function () {
        guofeng3P.style.opacity = 0;
    }
    card3.addEventListener('mousemove', function (ev) {
        jindutiao3.style.left = 8 + 'px';
        let movejuli3 = ev.clientX - cardLfet3,
            juli3 = cardLfet3 + cardOff3 - ev.clientX < 0 ? jindutiao3.style.left = 0 : (cardLfet3 + cardOff - ev.clientX > cardOff3 ? jindutiao3.style.left = 180 : jindutiao3.style.left = jindutiaoStep3 * movejuli3);
        jindutiao3.style.width = juli3 + 'px';
        card3.style.backgroundPositionX = movejuli3 / 160 * 1600 + 'px';
    });
    let extethi = document.querySelectorAll('.extethi'),
        extop = document.querySelectorAll('.extop');
    [].forEach.call(extop, (item, index) => {
        item.onmouseover = function () {
            extethi[index].style.opacity = '1';
        }
        item.onmouseleave = function () {
            extethi[index].style.opacity = 0;
        }
    });
    let broadRight = document.querySelector('.broadLeft'),
        bRnav = broadRight.querySelector('.bRnav'),
        broadNavList = document.querySelectorAll('.bRnav li'),
        broadch = document.querySelectorAll('.broadch'),
        broadRul = document.querySelector('.broadFtabtautoM ul'),
        broadRImg = broadRul.querySelectorAll('li'),
        broadPage = document.querySelectorAll('.broadPage'),
        pre = 2,
        cur = 2,
        broadLen = broadRImg.length,
        broadInterval = 2000,
        broadStep = 0,
        broadTimer = null;
    for (let i = 0; i < broadNavList.length; i++) {
        broadNavList[i].onclick = function () {
            pre = cur;
            cur = i;
            for (let i = 0; i < broadNavList.length; i++) {
                broadNavList[pre].classList.remove('active');
                broadch[pre].classList.remove('activet');
            }
            broadNavList[cur].classList.add('active');
            broadch[cur].classList.add('activet');
        }
    }
    function broadAutoMove() {
        if (broadStep === (broadLen - 1)) {
            broadStep = 0;
            broadRul.style.transitionDuration = '0s';
            broadRul.style.left = '0px';
            broadRul.offsetHeight;
        }
        broadStep++;
        broadRul.style.transitionDuration = '.3s';
        broadRul.style.left = -broadStep * 320 + 'px';
    }
    broadTimer = setInterval(broadAutoMove, broadInterval);
    function offset(element) {
        let parent = element.offsetParent,
            top = element.offsetTop,
            left = element.offsetLeft;
        while (parent) {
            if (!/MSIE 8/.test(navigator.userAgent)) {
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            top,
            left
        }
    }
    return {
        init() {
        }
    }
})();
broadCastModer.init();
// 动画
let animationModer = (function () {
    let animLi = document.querySelector('.animLi'),
        list = animLi.querySelectorAll('li'),
        animHid = document.querySelectorAll('.animHid');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('mouseenter', function (ev) {
            list[i].style.color = '#00a1d6';
            animHid[i].style.display = 'block';

        });
        list[i].addEventListener('mouseleave', function (ev) {
            list[i].style.color = '#000000';
            animHid[i].style.display = 'none';
        });

    }

    return {
        init() {

        }
    }
})();
animationModer.init();
// 番剧
let fanjuModer = (function () {
    let fanjuNav = document.querySelectorAll('.fanjuNav li'),
        fanjuTab = document.querySelectorAll('.fanjuOut'),
        pre = 0,
        cur = 0;
    for (let i = 0; i < fanjuNav.length; i++) {

        fanjuNav[i].addEventListener('click', function (ev) {
            pre = cur;
            cur = i;
            if (pre == cur) return;
            for (let i = 0; i < fanjuNav.length; i++) {
                fanjuNav[cur].classList.add('active');
                fanjuTab[cur].classList.add('activeDiv');
            }
            fanjuNav[pre].classList.remove('active');
            fanjuTab[pre].classList.remove('activeDiv');
        });

    }

})();
// 番剧动态
let fanjuDongtaiModer = (function () {
    // 定义公共数据
    // step:步长，控制当前展示的是一个SLIDER（索引）
    // interval:间隔时间因子，控制多久切换一次
    // autoTimer:存储自动轮播的定时器
    // len:存储的是SLIDER的个数（包含克隆的那一个）
    let fanjudongtaiRight = document.querySelector('.fanjudongtaiRight'),
        ul = fanjudongtaiRight.querySelector('ul'),
        sliderList = fanjudongtaiRight.querySelectorAll('ul li');
    let step = 0,
        interval = 2000,
        autoTimer = null,
        len = sliderList.length;
    function autoMove() {
        if (step === len - 1) {
            step = 0;
            ul.style.transitionDuration = '0s';
            ul.style.left = '0px';
            ul.offsetHeight;
        }
        step++;
        ul.style.transitionDuration = '.3s';
        ul.style.left = -step * 320 + 'px';
    };
    autoTimer = setInterval(autoMove, interval);



    function offset(element) {
        let parent = element.offsetParent,
            top = element.offsetTop,
            left = element.offsetLeft;
        while (parent) {
            if (!/MSIE 8/.test(navigator.userAgent)) {
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            top,
            left
        }
    }
    return {
        init() {

        }
    }
})();
fanjuDongtaiModer.init();
// 国创
let guochuangModer = (function () {
    let nav = document.querySelectorAll('.guochuang li'),
        guochuangneiP = document.querySelectorAll('.guochuangneiP'),
        cur = 0,
        pre = 0;
    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', function () {
            pre = cur;
            cur = i;
            if (pre == cur) return;
            for (let i = 0; i < nav.length; i++) {
                nav[cur].classList.add('cur');
                guochuangneiP[cur].classList.add('nowPag');
            }
            nav[pre].classList.remove('cur');
            guochuangneiP[pre].classList.remove('nowPag');

        });

    }

    return {
        init() {

        }
    }
})();
guochuangModer.init();
// 特别推荐
let specialRec = (function () {
    let showBox = document.querySelectorAll('.showBox'),
        hidBox = document.querySelectorAll('.hidBox'),
        outer = document.querySelectorAll('.outer'),
        inner = document.querySelectorAll('.inner'),
        laterLook = document.querySelectorAll('.laterLook'),
        laterP = document.querySelectorAll('.lateragainlook'),
        barrage = document.querySelectorAll('.barrage'),
        timer = null;

    for (let i = 0; i < showBox.length; i++) {
        showBox[i].addEventListener('mousemove', function (ev) {
            let L = ev.pageX,
                boxL = offset(showBox[i]).left,
                distance = L - boxL,
                step = (L - boxL) / 20 - 1;
            if (step <= 0) step = 0;
            if (distance >= 190) distance = 190;
            hidBox[i].style.cssText = `
            opacity:1;
            transation:all linear .3s;`;
            laterLook[i].style.opacity = 1;
            inner[i].style.width = distance + 'px';
            if (distance >= 0 && distance <= 26) hidBox[i].style.backgroundPositionX = -206 + 'px';
            if (distance >= 26 && distance <= 46) hidBox[i].style.backgroundPositionX = -412 + 'px';
            if (distance >= 46 && distance <= 72) hidBox[i].style.backgroundPositionX = -620 + 'px';
            if (distance >= 72 && distance <= 98) hidBox[i].style.backgroundPositionX = -826 + 'px';
            if (distance >= 98 && distance <= 120) hidBox[i].style.backgroundPositionX = -1026 + 'px';
            if (distance >= 120 && distance <= 140) hidBox[i].style.backgroundPositionX = -1226 + 'px';
            if (distance >= 140 && distance <= 168) hidBox[i].style.backgroundPositionX = -1442 + 'px';
            if (distance >= 168 && distance <= 188) hidBox[i].style.backgroundPositionX = -1648 + 'px';
            if (distance >= 188 && distance <= 206) hidBox[i].style.backgroundPositionX = -1854 + 'px';
        });
        showBox[i].addEventListener('mouseleave', function (ev) {
            hidBox[i].style.cssText = `
            opacity:0;
            transation:all linear .3s;
        `;
            laterLook[i].style.opacity = 0;
        });
        showBox[i].addEventListener('mouseover', function (ev) {
            let barrageLeft = parseFloat(window.getComputedStyle(barrage[i]).left);
            barrage[i].style.left = barrageLeft;
            timer = setInterval(function () {
                barrageLeft -= 4;
                if (barrageLeft <= -56) barrageLeft = 216;
                barrage[i].style.left = barrageLeft + 'px';
            }, 50);
        });
        showBox[i].addEventListener('mouseout', function (ev) {
            clearInterval(timer);
        });
        laterLook[i].addEventListener('mouseover', function () {
            laterP[i].style.cssText = `opacity:1;`;
        });
        laterLook[i].addEventListener('mouseout', function () {
            laterP[i].style.cssText = `opacity:0;`;
        });

    }
    function offset(element) {
        let parent = element.offsetParent,
            top = element.offsetTop,
            left = element.offsetLeft;
        while (parent) {
            if (!/MSIE 8/.test(navigator.userAgent)) {
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            top,
            left
        }
    }
    return {
        init() {

        }
    }
})();
specialRec.init();
// 底部
let footModer = (function () {
    let footB = document.querySelectorAll('.footB'),
        timer = null,
        step = 0,
        cur = 0,
        star = 0,
        len = footB.length;
    setInterval(function () {
        step = cur;
        cur++;
        if (cur >= len) {
            cur = star;
            footB[cur].style.cssText = `
                opacity:1;
                z-index:1;
                transition:all linear .3s;
            `;
            footB[step].style.cssText = `
                opacity:0;
                z-index:0;
                transition:all linear .3s;
            `;
        }

        footB[cur].style.cssText = `
            opacity:1;
            z-index:1;
            transition:all linear .3s;
        `;
        footB[step].style.cssText = `
            opacity:0;
            z-index:0;
            transition:all linear .3s;
        `;
    }, 1000);
    return {
        init() {

        }
    }
})();
footModer.init();

let floorNav = (function () {
    let floorNav = document.querySelector('.floorNav'),
        floorA = document.querySelectorAll('.floorA a'),
        callback = document.querySelector('.callback'),
        zhibo = document.querySelector('#zhibo'),
        donghua = document.querySelector('#donghua'),
        fanju = document.querySelector('#fanju'),
        guochuang = document.querySelector('#guochuang'),
        manhua = document.querySelector('#manhua'),
        tuijian = document.querySelector('#tuijian'),
        fanjuRec = document.querySelector('.specialRec'),
        zhiboTop = offset(zhibo).top,
        donghuaTop = offset(donghua).top,
        fanjuTop = offset(fanju).top,
        fanjuRecTop = offset(fanjuRec).top,
        guochuangTop = offset(guochuang).top,
        manhuaTop = offset(manhua).top,
        tuijianTop = offset(tuijian).top;
    callback.onclick = function () {
        if (window.isload) return;
        window.isload = true;
        let HTML = document.documentElement,
            duration = 1000;
        let step = (HTML.scrollTop / duration * 17);
        let timer = setInterval(() => {
            HTML.scrollTop -= step;
            if (HTML.scrollTop <= 0) {
                clearInterval(timer);
                timer = null;
                window.isload = false;
                return;
            }
        }, 17);
    }
    function offset(element) {
        let parent = element.offsetParent,
            top = element.offsetTop,
            left = element.offsetLeft;
        while (parent) {
            if (!/MSIE 8/.test(navigator.userAgent)) {
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            top,
            left
        }
    }
    return {
        init() {
            window.onscroll = function () {
                let htmlC = document.documentElement.clientHeight,
                    htmlTop = document.documentElement.scrollTop;
                floorNav.style.top = htmlC / 3.2 + 'px';
                if (zhiboTop <= htmlTop) floorA[0].classList.add('floorbg');
                if (zhiboTop + zhibo.offsetHeight >= htmlTop + htmlC || zhiboTop + zhibo.offsetHeight < htmlTop) floorA[0].classList.remove('floorbg');

                if (donghuaTop <= htmlTop) floorA[1].classList.add('floorbg');
                if (donghuaTop + donghua.offsetHeight >= htmlTop + htmlC || donghuaTop + donghua.offsetHeight < htmlTop) floorA[1].classList.remove('floorbg');

                if (fanjuTop <= htmlTop) floorA[2].classList.add('floorbg');
                if (fanjuTop + fanju.offsetHeight >= htmlTop + htmlC) floorA[2].classList.remove('floorbg');
                if (fanjuRecTop + fanjuRec.offsetHeight < htmlTop) floorA[2].classList.remove('floorbg');

                if (guochuangTop <= htmlTop) floorA[3].classList.add('floorbg');
                if (guochuangTop + guochuang.offsetHeight <= htmlTop || guochuangTop + guochuang.offsetHeight >= htmlTop + htmlC) floorA[3].classList.remove('floorbg');

                if (manhuaTop <= htmlTop) floorA[4].classList.add('floorbg');
                if (manhuaTop + manhua.offsetHeight <= htmlTop || manhuaTop + manhua.offsetHeight >= htmlTop + htmlC) floorA[4].classList.remove('floorbg');

                if (tuijianTop <= htmlTop) floorA[5].classList.add('floorbg');
                if (tuijianTop + tuijian.offsetHeight <= htmlTop || tuijianTop + tuijian.offsetHeight >= htmlTop + htmlC) floorA[5].classList.remove('floorbg');

            }
        }
    }
})();
floorNav.init();