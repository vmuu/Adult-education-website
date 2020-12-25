$(function(){
	// 首页滚动图效果
	var timer;
	var cur=0;
	var len=$("#column li").length;
	console.log(len)
	//定义图片切换函数
	function showImg(){
		timer=setInterval(function(){
			cur++;
			if (cur>=len) {
				cur=0;
			}
			// console.log(cur)
			switch (cur){
				case 0:
					$("#column").css("background","url(img/background_index_1.jpg) no-repeat center").css("background-size","cover");
					$("#column ul li").eq(cur).css("background-color","white").siblings().css("background-color","#00e7ff00");;
					break;
				case 1:
					$("#column").css("background","url(img/background_index_2.jpg) no-repeat center").css("background-size","cover");
					$("#column ul li").eq(cur).css("background-color","white").siblings().css("background-color","#00e7ff00");;
					break;
				default:
					break;
			}
		},2000);
	};
	showImg();
	
	// $("nav_mobile_w").CSS("display","black")
	
	// 特色课程页面切换效果
	var ccfleft = document.getElementsByClassName("ccfleft");
	var ccfright_warp = document.getElementsByClassName("ccfright_warp");
	// 鼠标移入事件
	ccfleft[0].onmouseover = function(){
		$(".ccfleft").siblings("div").css("background-color","#333333")
		ccfleft[0].style.backgroundColor="#FD6C02";
		$(".ccfright_warp").siblings("div").css("display","none")
		ccfright_warp[0].style.display=("flex");
	};
	ccfleft[1].onmouseover = function(){
		$(".ccfleft").siblings("div").css("background-color","#333333")
		ccfleft[1].style.backgroundColor="#FD6C02";
		$(".ccfright_warp").siblings("div").css("display","none")
		ccfright_warp[1].style.display=("flex");
	};
	ccfleft[2].onmouseover = function(){
		$(".ccfleft").siblings("div").css("background-color","#333333")
		ccfleft[2].style.backgroundColor="#FD6C02";
		$(".ccfright_warp").siblings("div").css("display","none")
		ccfright_warp[2].style.display=("flex");
	};
	ccfleft[3].onmouseover = function(){
		$(".ccfleft").siblings("div").css("background-color","#333333")
		ccfleft[3].style.backgroundColor="#FD6C02";
		$(".ccfright_warp").siblings("div").css("display","none")
		ccfright_warp[3].style.display=("flex");
	};
	
	// 教育名师按钮切换效果
	var cw_center = document.getElementsByClassName("cw_center");
	var uicolor=document.getElementsByClassName("uicolor");
	var cw_foot_wrap =document.getElementsByClassName("cw_foot_wrap");
		cw_center[0].style.backgroundColor="#FD6C02";
	cw_center[0].onmouseover = function(){
		$(".cw_center").siblings("div").css("background-color","")
		cw_center[0].style.backgroundColor="#FD6C02";
		// $(".cw_foot_wrap").eq(1).css("display","none")
		$(".cw_foot_wrap:not(0)").css("display","none");
		cw_foot_wrap[0].style.display=("flex");
	};
	cw_center[1].onmouseover = function(){
		$(".cw_center").siblings("div").css("background-color","")
		cw_center[1].style.backgroundColor="#FD6C02";
	
		// $(".cw_foot_wrap").eq(1).css("display","none")
		$(".cw_foot_wrap:not(1)").css("display","none");
		cw_foot_wrap[1].style.display=("flex");
	};
	cw_center[2].onmouseover = function(){
		$(".cw_center").siblings("div").css("background-color","")
		cw_center[2].style.backgroundColor="#FD6C02";
		// $(".cw_foot_wrap").eq(1).css("display","none")
		$(".cw_foot_wrap:not(1)").css("display","none");
		cw_foot_wrap[2].style.display=("flex");
	};
	cw_center[3].onmouseover = function(){
		$(".cw_center").siblings("div").css("background-color","")
		cw_center[3].style.backgroundColor="#FD6C02";
		// $(".cw_foot_wrap").eq(1).css("display","none")
		$(".cw_foot_wrap:not(1)").css("display","none");
		cw_foot_wrap[3].style.display=("flex");
	};
})
