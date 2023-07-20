layui.use(['laypage', 'layer', 'element'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            var $ = layui.jquery;
            var element = layui.element;

            $("body").on("mousedown", "a", function (e) {
            e.preventDefault();
        });

      $('.menu_close').on('click',function(){
            this.parentNode.children[3].style.display='none'
            this.style.display='none'
            this.parentNode.children[0].style.display='block'
        })
      $('.menu_open').on('click',function(){
            this.parentNode.children[3].style.display='block'
            this.style.display='none'
            this.parentNode.children[1].style.display='block'
        })

        });


        var left = document.getElementById("mainleft");
        var mainlt = document.getElementsByClassName("mainlt");
        var mainlll = document.getElementsByClassName("mainlll");



        if (document.documentElement.clientWidth < 1300) {

            left.style.height = mainlt[0].scrollHeight + mainlll[0].scrollHeight + 'px'
        }


        var mnavh = document.getElementsByClassName('mnavh')
        var mnavh_close = document.getElementsByClassName('mnavh_close')
        var navopen = document.getElementById('nav')

        mnavh[0].onclick = function () {
            navopen.style.display = 'block'
            mnavh_close[0].style.display = "block"
            mnavh[0].style.display = "none"
        }
        mnavh_close[0].onclick = function () {
            navopen.style.display = 'none'

            mnavh[0].style.display = "block"
            mnavh_close[0].style.display = "none"
        }




        // 导航拖动
        var prev=document.getElementsByClassName('prev');
		var next=document.getElementsByClassName('next');

        prev[0].onclick=function()
		{
			console.log("111");
			nav_ul.scrollLeft=nav_ul.scrollLeft-100
		}
		next[0].onclick=function()
		{
			console.log(nav_ul.scrollLeft);
			nav_ul.scrollLeft=nav_ul.scrollLeft+100
		}
        var flag; // 鼠标按下
        var downX; // 鼠标点击的x下标
        var scrollLeft; // 当前元素滚动条的偏移量
        nav_ul.addEventListener("mousedown", function (event) {
            flag = true;
            downX = event.clientX; // 获取到点击的x下标
            scrollLeft = this.scrollLeft; // 获取当前元素滚动条的偏移量
        });
        nav_ul.addEventListener("mousemove", function (event) {
            if (flag) { // 判断是否是鼠标按下滚动元素区域
                // 获取移动的x轴
                var moveX = event.clientX;
                // 当前移动的x轴下标减去刚点击下去的x轴下标得到鼠标滑动距离
                var scrollX = moveX - downX;
                // 鼠标按下的滚动条偏移量减去当前鼠标的滑动距离
                this.scrollLeft = scrollLeft - scrollX;
                console.log(scrollX)
            }
        });
        // 鼠标抬起停止拖动
        nav_ul.addEventListener("mouseup", function () {
            flag = false;
        });
        // 鼠标离开元素停止拖动
        nav_ul.addEventListener("mouseleave", function (event) {
            flag = false;
        });
		if(upPage.innerHTML=='上一条：<a href="xyrx.html" target="_black">返回列表</a>' && nextPage.innerHTML=='下一条：<a href="2525.html" target="_black">6人进省队！成外信竞问鼎四川！</a>'){
			pageBtn.style.display="none"
		}
		if(nextPage.innerHTML=='下一条：<a href="2525.html" target="_black">6人进省队！成外信竞问鼎四川！</a>'){
			pageBtn.style.display="none"
		}
console.log(upPage)