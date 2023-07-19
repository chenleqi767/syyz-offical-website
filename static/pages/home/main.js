var imgWidth=$('#test1').css('width')

var anitli=document.getElementsByClassName('newHeight');
for(i=0;i<anitli.length;i++){
anitli[i].id='anit'+i;
}
var jsanitli=document.getElementsByClassName('teacherBox');
for(i=0;i<jsanitli.length;i++){
jsanitli[i].id='jsanit'+i;
}
var stanitli=document.getElementsByClassName('scientificBox');
for(i=0;i<stanitli.length;i++){
stanitli[i].id='stanit'+i;
}

var studentli=document.getElementsByClassName('studentbox');
for(i=0;i<studentli.length;i++){
studentli[i].id='studenti'+i;
}
          $("#anit0").attr('class', 'layui-col-sm4 newbox newHeight wow fadeInLeft');
          $("#anit1").attr('class', 'layui-col-sm4 newbox newHeight wow fadeInLeft');
          $("#anit2").attr('class', 'layui-col-sm4 newbox newHeight wow fadeInRight');
          $("#anit3").attr('class', 'layui-col-sm4 newbox newHeight wow fadeInLeft');
          $("#anit4").attr('class', 'layui-col-sm4 newbox newHeight wow fadeInUp');
          $("#anit5").attr('class', 'layui-col-sm4 newbox newHeight wow fadeInRight');
          $("#anit0").attr('data-wow-delay', '0.3s');
          $("#anit1").attr('data-wow-delay', '0.3s');
          $("#anit2").attr('data-wow-delay', '0.3s');
          $("#anit3").attr('data-wow-delay', '0.3s');
          $("#anit4").attr('data-wow-delay', '0.3s');
          $("#anit5").attr('data-wow-delay', '0.3s');

		  $("#jsanit0").attr("class","layui-col-sm3 teacherBox wow fadeInUp");
		  $("#jsanit1").attr("class","layui-col-sm3 teacherBox wow fadeInUp");
		  $("#jsanit2").attr("class","layui-col-sm3 teacherBox wow fadeInUp");
		  $("#jsanit3").attr("class","layui-col-sm3 teacherBox wow fadeInUp");
		  $("#jsanit0").attr('data-wow-delay', '0.5s');
          $("#jsanit1").attr('data-wow-delay', '0.7s');
          $("#jsanit2").attr('data-wow-delay', '0.9s');
         $("#jsanit3").attr('data-wow-delay', '1.1s');

          $("#stanit0").attr('class', 'layui-col-sm6 wow fadeInLeft');
           $("#stanit1").attr('class', 'layui-col-sm6 wow fadeInRight');
          $("#stanit2").attr('class', 'layui-col-sm6 wow fadeInLeft');
           $("#stanit3").attr('class', 'layui-col-sm6 wow fadeInRight');
           $("#stanit0").attr('class', 'layui-col-sm6 scientificBox wow zoomIn');
           $("#stanit1").attr('class', 'layui-col-sm6 scientificBox wow zoomIn');
          $("#stanit2").attr('class', 'layui-col-sm6 scientificBox wow zoomIn');
           $("#stanit3").attr('class', 'layui-col-sm6 scientificBox wow zoomIn');
           $("#stanit0").attr('data-wow-delay', '0.3s');
          $("#stanit1").attr('data-wow-delay', '0.5s');
           $("#stanit4").attr('data-wow-delay', '0.5s');
          $("#stanit3").attr('data-wow-delay', '0.5s');
		
		 $("#studenti0").attr('class', 'layui-col-sm6 wow fadeInLeft');
           $("#studenti1").attr('class', 'layui-col-sm6 wow fadeInRight');
          $("#studenti2").attr('class', 'layui-col-sm6 wow fadeInLeft');
           $("#studenti3").attr('class', 'layui-col-sm6 wow fadeInRight');
           $("#studenti0").attr('class', 'layui-col-sm6 studnetbox wow zoomIn');
           $("#studenti1").attr('class', 'layui-col-sm6 studnetbox wow zoomIn');
          $("#studenti2").attr('class', 'layui-col-sm6 studnetbox wow zoomIn');
           $("#studenti3").attr('class', 'layui-col-sm6 studnetbox wow zoomIn');
           $("#studenti0").attr('data-wow-delay', '0.3s');
          $("#studenti1").attr('data-wow-delay', '0.5s');
           $("#studenti2").attr('data-wow-delay', '0.5s');
          $("#studenti3").attr('data-wow-delay', '0.5s');

        new WOW().init();

        // nav_ul.style.height=200+'PX'
        // hheight=$("#nav_ul").find()
        // nav_ul.style.height= $(".layui-show").height+'px'
        const target = document.getElementsByClassName('layui-nav-child');
        // 创建观察者对象
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                console.log(mutation);
                console.log(11123232);
                nav_ul.addEventListener("mousemover", function (event) {
                    nav_ul.style.height="300px"
                });
                nav_ul.style.height="300px"
                
               

            });
        });


        
        // 传入目标节点和观察选项
        for (let i = 0; i < target.length; i++) {
            observer.observe(target[i], { attributes: true });
        }
        var prev=document.getElementsByClassName('prev');
		var next=document.getElementsByClassName('next');
        var flag; // 鼠标按下
        var downX; // 鼠标点击的x下标
        var scrollLeft; // 当前元素滚动条的偏移量
        nav_ul.addEventListener("mousedown", function (event) {
            flag = true;
            downX = event.clientX; // 获取到点击的x下标
            scrollLeft = this.scrollLeft; // 获取当前元素滚动条的偏移量
        });
        prev[0].onclick=function()
		{
			console.log("111");
			nav_ul.scrollLeft=nav_ul.scrollLeft-110
		}
		next[0].onclick=function()
		{
			console.log(nav_ul.scrollLeft);
			nav_ul.scrollLeft=nav_ul.scrollLeft+110
		}
        nav_ul.addEventListener("mousemove", function (event) {
            if (flag) { // 判断是否是鼠标按下滚动元素区域
                // 获取移动的x轴
                var moveX = event.clientX;
                // 当前移动的x轴下标减去刚点击下去的x轴下标得到鼠标滑动距离
                var scrollX = moveX - downX;
                // 鼠标按下的滚动条偏移量减去当前鼠标的滑动距离
                this.scrollLeft = scrollLeft - scrollX;
                console.log(nav_ul.scrollLeft);
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

        layui.use(['layer', 'element', 'carousel'], function () {
            var layer = layui.layer;
            var carousel = layui.carousel;
            var $ = layui.jquery;
            var element = layui.element;
            let isShow = false
 
            broadcast("xyrxImg")
      $('.menu_close').on('click',function(){
        console.log(this.parentNode.children)
            this.parentNode.children[3].style.display='none'
            this.style.display='none'
            this.parentNode.children[0].style.display='block'
        })
      $('.menu_open').on('click',function(){
            this.parentNode.children[3].style.display='block'
            this.style.display='none'
            this.parentNode.children[1].style.display='block'
        })
	  
            $("body").on("mousedown", "a", function (e) {
            e.preventDefault();
        });
            console.log("1111");
            carousel.render({
                elem: '#test1'
                , width: '100%' //设置容器宽度
                , arrow: 'hover' //始终显示箭头
                , anim: 'fade' //切换动画方式
                , interval: 4000
            });

            $('#moveIcon').on('click', function () {
                isShow = !isShow
                show(isShow)
            });


            function show(value) {
                if (value) {
                    $('#moveMenu').attr('class', 'showMove')
                    $('#moveMenu')[0].style.display = 'block';
                    $('#moveIcon')[0].style.background = 'url(http://www.cfls.net.cn/site/219/news/81621662726c474ba36c87596da5dad1.png) center no-repeat'
                    $('#moveIcon')[0].style.backgroundSize = 'cover'
                    $('#moveIcon')[0].style.backgroundPosition = 'center center'
                    document.body.style.height = '100%'
                    document.body.style.overflow = 'hidden'
                } else {
                    $('#moveMenu')[0].style.display = 'none'
                    $('#moveMenu')[0].style.display = 'none'
                    $('#moveIcon')[0].style.background = 'url(static/image/a867a3784cb249af8cbc47e8cbe194b5.png) center no-repeat'
                    $('#moveIcon')[0].style.backgroundSize = 'cover'
                    $('#moveIcon')[0].style.backgroundPosition = 'center center'
                    document.body.style.height = 'auto'
                    document.body.style.overflow = 'visible'
                }
            }



            if ($(".banner_line").length > 0) {
                $(".banner_line").addClass("on");
            }


            $(".closeBanner").click(function () {
                $(this).toggleClass("on");
                $(".banner_bottom").toggleClass("on");
                $(".banner_right").toggleClass("on");
				$("#test1").toggleClass("on");
				if($('#test1').css('width').slice(0,-2) >imgWidth.slice(0,-2)){
					$('#test1').css("cssText","width:80% !important;height:80% !important");
				}else{
					$('#test1').css("cssText","width:100% !important;height:100% !important");
				}
            })

            $('.z_tspop').click(function () {
                $('body').addClass('Contact');
            });
            
            function broadcast(wrapId) {
                // 获取新闻列表的父级
                var wrap = document.getElementById(wrapId);
                // 获取新闻列表的每个子元素
                var news = wrap.children;
                for (var i = 0; i < news.length; i++) {
                    // 先将所有新闻列表子元素隐藏
                    if(i==0){
                        news[i].style.display = "block";
                    }else{
                        news[i].style.display = "none";
                    }
                }
                // 设置索引
                var index = 0;
                setInterval(function () {
                    // 所以自增
                    index++;
                    // 如果播完最后一条新闻，索引设置为初始值
                    if (index >= news.length) {
                        index = 0
                    }
                    for (var i = 0; i < news.length; i++) {
                        // 先将所有新闻列表子元素隐藏
						news[i].style.display="none"
                    }
                    // 显示某个新闻列表子元素
						news[index].style.display="block"
                }, 5000)
            }

        });