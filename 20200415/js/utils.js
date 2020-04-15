let utils = (function () {
    //获取父元素
    function offset(element) {
        let parent=element.offsetParent,
        top=element.offsetTop,
        left=element.offsetLeft;
        while(parent){
            top+=parent.offsetTop;
            left+=parent.offsetLeft;
            parent=parent.offsetParent;
        }
        return{
            top,
            left
        }
    };
    return{
        offset
    };
})();

