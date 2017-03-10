function Tabs(id){

    //获取id函数
    function $id(id){
        return document.getElementById(id);
    };

    var tab = $id(id);

    //获取按钮
    var Btn = tab.getElementsByClassName("btn")[0].getElementsByTagName("li");
    //获取图片
    var Pic = tab.getElementsByClassName("pic")[0].getElementsByTagName("div");

    for( var i = 0; i < Btn.length; i++ ){
        //存储索引
        Btn[i].index = i;

        //按钮绑定事件
        Btn[i].onmouseover = function (){

            //初始化设置 清空元素原有类名
            for( var j = 0; j < Btn.length; j++ ){

                Btn[j].className = "";
                Pic[j].className = "";
            };

            //保留鼠标划过元素的类名
            this.className = "active";
            Pic[this.index].className = "show";
        };

    };

};