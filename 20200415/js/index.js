let waterFall = (function () {
    let column = Array.from(document.querySelectorAll('.column')),
        _data = [];
    //获取数据
    let queryData = function queryData() {
        let xhr = new XMLHttpRequest;
        xhr.open('get', './json/data.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                _data = JSON.parse(xhr.responseText);
            }
        }
        xhr.send(null);
    }
    //绑定数据    
    let bindHtml = function bindHtml() {
        _data.map(item => {
            let h = item.height,
                w = item.width;
            h = h / w * 215;
            item.width = 215;
            item.height = h;
            return item;
        });
        for (let i = 0; i < _data.length; i += 3) {
            let group = _data.slice(i, i + 3);
            group.sort((a, b) => {
                return a.height - b.height;
            });
            column.sort((a, b) => {
                return b.offsetHeight - a.offsetHeight;
            });
            group.forEach((item, index) => {
                let { pic, width, height, title, link } = item;
                let lazyBox = document.createElement('div');
                lazyBox.classList.add('lazyBox');
                lazyBox.innerHTML = `<a href="${link}">
                <div class="card" style="height:${height}px">
                    <img src="" data-img="${pic}" alt="">
                </div>
                <p>${title}</p>
            </a>`;
                column[index].appendChild(lazyBox);
            });
        }
    }      
        
    let lazyImg = function lazyImg() {
        let lazypic = document.querySelectorAll('.card');
        [].forEach.call(lazypic, item => {
            let isload = item.getAttribute('isload');
            if (isload) return;
            let boxT = utils.offset(item).top + item.offsetHeight / 2,
                htmlT = document.documentElement.scrollTop + document.documentElement.clientHeight;
            if (boxT <= htmlT) {
                lazyFun(item);
            }
        })
    }
    let lazyFun = function lazyFun(item) {
        let img = item.querySelector('img');
        let trueS = img.getAttribute('data-img'),
            tempImg = new Image;
        tempImg.src = trueS;
        tempImg.onload = function () {
            img.src = trueS;
            img.style.opacity = 1;
        }
        tempImg = null;
        img.removeAttribute('data-img');
        item.setAttribute('isload', 'true')
    }
    let isread;
    let moreData = function moreData() {
        let Html = document.documentElement;
        if (Html.scrollHeight <= Html.clientHeight * 1.5 + Html.scrollTop) {
            if (isread) return;
            isread = true;
            queryData();
            bindHtml();
            lazyImg();
            isread = false;
        }
    }
    return {
        init() {
            queryData();
            bindHtml();
            lazyImg();
            window.onscroll = function () {
                lazyImg();
                moreData();
            }
        }
    }
})();
waterFall.init();