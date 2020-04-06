let shopModle = (function () {
    let navList = document.querySelectorAll('.navList ul li'),
        productBox = document.querySelector('.product'),
        data = '';
    let queryData = function queryData() {
        let xhr = new XMLHttpRequest;
        xhr.open('get', './json/product.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) data = JSON.parse(xhr.responseText);
            console.log(data)
        };
        xhr.send();
    };
    let render = function render() {
        let htmlStr = ``;
        data.forEach(element => {
            let { img, title, time, hot, price } = element;
            htmlStr += `<div class="card">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">名称：${title}</p>
                <p class="card-text">销量：${hot}</p>
                <p class="card-text">时间：${time}</p>
                <p class="card-text">价格：${price}</p>
            </div>
        </div>`;
        });
        productBox.innerHTML = htmlStr;
    }
    let clear=function clear(){
        navList.forEach(item=>{
            if(this!=item) item.flag=-1;
        })
    }
    let shopSort = function shopSort() {
        navList.forEach(item=>{
            item.flag=-1;
            item.onclick=function(){
                clear.call(this);
                this.flag*=-1;
                let paixu=this.getAttribute('data-sort');
                data.sort((a,b)=>{
                    a=String(a[paixu]).replace(/-/g,'');
                    b=String(b[paixu]).replace(/-/g,'');
                    return (a-b)*this.flag;
                })
                render();
            }
        })
    }
    return {
        init() {
            queryData();
            render();
            shopSort();
        }
    }
})();
shopModle.init();