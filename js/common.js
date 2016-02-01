$(document).ready(function(){
	
	
	// 轮播背景
	$("#teaser").bgswitcher({
		images: ["img/main1.jpg", "img/main2.jpg", "img/main3.jpg"],
		duration: 1000
	});
	
	
	// 倒计时
	//$('#clock').flipcountdown();
	$('#timer').flipcountdown({
		size:'sm',
		beforeDateTime:'2/14/2016 00:00:00'
	});
	
	
	// hover时添加弹跳效果class
	$(".button").hover(function(document){
		$(this).toggleClass("ani");
	});
	
	
	// lightbox
	$(".lbx").fancybox({
		margin: 0,
		padding: 0,
		width: 350,
		height: 270,
		mouseWheel: 'false',
		autoCenter: 'true',
		helpers:{
			overlay:{
				css:{
					"background":"rgba(0,0,0,0.5)"
				}
			}
		},
		afterClose: function(){
			$("#lb").removeClass("face2");
		}
	});
	
	
	// 每次打开lightbox生成随机金额
	$(".lbx").click(function(document){
		var val = Math.round( Math.random()*1000 )/100;
		$(".num").html(val);
	});
	
	
	// 点击发红包按钮显示二维码
	$(".btn span").click(function(document){
		$("#lb").addClass("face2");
	});
	
	
});




