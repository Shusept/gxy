$(document).ready(function(){
	
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
		}
	});
	
	
	// 每次打开lightbox生成随机金额
	$(".lbx").click(function(document){
		var val = Math.round( Math.random()*1000 )/100;
		$(".num").html(val);
	});
	
	
});




