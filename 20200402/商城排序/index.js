let shop = (function () {
    //获取需要操作的元素
    let nav = document.querySelectorAll(".header a"),
        cardBox = document.querySelector('.cardBox'),
        data = null;
    //获取数据
    let queryData = function queryData() {
        let xhr = new XMLHttpRequest;
        xhr.open("get", './json/product.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                data = JSON.parse(xhr.responseText);
            }
        }
        xhr.send(null);
    }
    //渲染页面
    let render = function render() {
        let htmlStr = ``;
        data.forEach(item => {
            let {
                img,
                title,
                price,
                time,
                hot
            } = item;
            htmlStr += `<li>
            <img src="${img}" alt="">
            <span>${title}</span>
            <span>${time}</span>
            <span>热度：${hot}</span>
            <span>价格：${price}</span>
        </li>`;
        });
        cardBox.innerHTML = htmlStr;
    };
    //循环绑定事件
    let handle = function handle()  {
        Array.from(nav).forEach(item => {
            item.flag = -1;
            item.onclick = function () {
                this.flag *= -1;
                let numSort = this.getAttribute("dataS");
                data.sort((a, b) => {
                    console.log(a,b)
                    a = String(a[numSort]).replace(/-/g, '');
                    b = String(b[numSort]).replace(/-/g, '');
                    console.log(a,b)
                    return (a - b) * this.flag;
                });
                console.log(data)
                render();
            };
        });
    };
    return {
        init() {
            queryData();
            render();
            handle();
        }
    };
})();
shop.init();
