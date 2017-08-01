// 首页动画效果
$(function(){
	var mySwiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		direction:"vertical",
		mousewheelControl:true,	
		onInit: function(swiper){ 
			swiperAnimateCache(swiper); 
			swiperAnimate(swiper); 
			
		}, 

		// 翻页标题栏动画
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper);
			switch(mySwiper.activeIndex){
				case 0:
				$(".title").css({
					"background":"#d7dade",
					"color":"black",
				});
				$(".title").hide();
				$(".title").slideDown(500);
				break;
				case 1:
				$(".title").hide();
				$(".title").css({
					"background":"rgba(0, 0, 0, 0.5)",
					"color":"white",
				});
				$(".title").slideDown(500);
				break;
				case 2:
				$(".title").hide();
				$(".title").slideDown(500);
				break;
				case 3:
				$(".title").hide();
				$(".title").slideDown(500);
				break;
				case 4:
				$(".title").hide();
				$(".title").slideDown(500);
				break;
			}
		} 		
	});

});



// 点击获取验证码
function getCode(){
	var state=0;
	var timer;
	var i=60;
	fn();
	createCode();
	function fn(){
		$("#clickCode1").val("剩余"+i+"秒重新获取");
		$("#clickCode1").css("opacity","0.6");
		i--;
		if(i==-1){
			clearInterval(timer);
			state=1;
		}
		if(state==0){
			$("#clickCode1").attr("disabled",true);
			$("#codeRan").css("display","block");
		}else{
			$("#clickCode1").attr("disabled",false);
			$("#codeRan").css("display","none");
			$("#clickCode1").css("opacity","1");
			$("#clickCode1").val("获取验证码");
		}


	}

	timer=setInterval(fn,1000)
	
}

//随机取4位数
function createCode(){
	//首先默认code为空字符串
    code = '';
    //设置长度
    var codeLength = 4;
    //设置随机字符
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
    //循环codeLength 我设置的4就是循环4次
    for(var i = 0; i < codeLength; i++){
        //设置随机数范围,这设置为0 ~ 36
        var index = Math.floor(Math.random()*36);
        //字符串拼接 将每次随机的字符 进行拼接
        code += random[index]; 
    }
    //将拼接好的字符串赋值给展示的Value
    $("#codeRan").html(code);
}























// 注册页面
// 表单验证

// 全部为true时点击submit切换页面
function checkInput(){
		if(checkTel()&&checkCode()&&checkPassword()&&checkRepassword()){
			localStorage.setItem($("#telephone").val(),$("#password1").val());
			return true;
		}else{
			return false;
		}
		
	}


// 判断手机号码是否合法 同时判断是否被注册
function checkTel(){
	regTel=/^1[\d]{10}$/;
	if(!regTel.test($("#telephone").val())){
		$("#telephone1").html("手机号码不合法");
		$("#telephone").css("border","1px solid #a94442");
		$(".li_tel").css({
			"border":"1px solid #a94442",
			"background":"#f2dede",
			"border-right":"none"
		});
		$("#telephone1").css("color","#a94442")
		$(".icon-tel").css("color","#a94442")

		return false;
	}else{
		var registername = $("#telephone").val();
		var registerpwd = $("#password1").val();
		if(localStorage.getItem(registername)){
			$("#telephone1").html("用户名已经被注册");
			$("#telephone").css("border","1px solid #a94442");
			$(".li_tel").css({
				"border":"1px solid #a94442",
				"background":"#f2dede",
				"border-right":"none"
			});
			$("#telephone1").css("color","#a94442")
			$(".icon-tel").css("color","#a94442");
			return false;
		}else{
			$("#telephone1").html("输入正确");
			$("#telephone1").css("color","#3c763d")
			$("#telephone").css("border","1px solid #3c763d");
			$(".li_tel").css({
				"border":"1px solid #3c763d",
				"background":"#dff0d8",
				"border-right":"none"
			});
			$(".icon-tel").css("color","#3c763d")
			return true;
		}	
	}
}


// 判断密码格式
function checkPassword(){
	regpassword=/^[\da-z]{6,12}$/i;
	if(!regpassword.test($("#password1").val())){
		$("#password2").html("密码不符合要求");
		$("#password1").css("border","1px solid #a94442");
		$(".li_psw").css({
			"border":"1px solid #a94442",
			"background":"#f2dede",
			"border-right":"none"
		});
		$("#password2").css("color","#a94442")
		$(".icon-mima").css("color","#a94442")

		return false;
	}else{
		$("#password2").html("输入正确");
		$("#password2").css("color","#3c763d")
		$("#password1").css("border","1px solid #3c763d");
		$(".li_psw").css({
			"border":"1px solid #3c763d",
			"background":"#dff0d8",
			"border-right":"none"
		});
		$(".icon-psw1").css("color","#3c763d")
		return true;
	}
}


// 判断密码是否符合
function checkRepassword(){
	if($("#password1").val().trim()==""){
		$("#repassword2").html("密码为必填项");
	}else{
		if($("#password1").val()!= $("#repassword1").val()){
			$("#repassword2").html("两次密码不一致");
			$("#repassword1").css("border","1px solid #a94442");
			$(".li_repsw").css({
				"border":"1px solid #a94442",
				"background":"#f2dede",
				"border-right":"none"

			});
			$("#repassword2").css("color","#a94442")
			$(".icon-psw2").css("color","#a94442")
			return false;
		}else{
			$("#repassword2").html("输入正确");
			$("#repassword2").css("color","#3c763d")
			$("#repassword1").css("border","1px solid #3c763d");
			$(".li_repsw").css({
				"border":"1px solid #3c763d",
				"background":"#dff0d8",
				"border-right":"none"
			});
			$(".icon-psw2").css("color","#3c763d")
			return true;
		}
	}
	
}


// 判断二维码是否正确
function checkCode(){
	if($("#code_val").val().trim()==""){
		$(".checkC").html("验证码为必填项");
	}else{
		if($("#code_val").val()!= $("#codeRan").html()){
			$(".checkC").html("验证码不一致");
			$("#code_val").css("border","1px solid #a94442");
			$(".icon_c").css({
				"border":"1px solid #a94442",
				"background":"#f2dede",
				"border-right":"none"
			});
			$(".checkC").css("color","#a94442");
			$(".icon-erweima").css("color","#a94442")
			return false;
		}else{
			$(".checkC").html("输入正确");
			$(".checkC").css("color","#3c763d")
			$("#code_val").css("border","1px solid #3c763d");
			$(".icon_c").css({
				"border":"1px solid #3c763d",
				"background":"#dff0d8",
				"border-right":"none"
			});
			$(".icon-erweima").css("color","#3c763d")
			return true;
		}
	}

}
























// 用户登录界面判断
function checkloginInput(){
		var loginname = $("#loginname").val();
		if (judegLogin()&& judegLoginpwd() && checkCode()){
			localStorage.setItem("nowlogin",loginname);
			return true;
		}else{
			return false;
		}
	}

// 判断用户登录名是否被注册过
function judegLogin(){
	var loginname = $("#loginname").val();
	var loginpwd = $("#loginpwd").val();
	if($("#loginname").val().trim()==""){
		$("#loginname2").html("用户名不能为空");
	}else{
		if(localStorage.getItem(loginname)==null){
			$("#loginname2").html("该号码没有被注册");
			$("#loginname").css("border","1px solid #a94442");
			$(".li_tel").css({
				"border":"1px solid #a94442",
				"background":"#f2dede",
				"border-right":"none"
			});
			$("#loginname2").css("color","#a94442")
			$(".icon-tel").css("color","#a94442");
			return false;
		}else{
			$("#loginname2").html("用户名正确");
			$("#loginname").css("border","1px solid #3c763d");
			$(".li_tel").css({
				"border":"1px solid #3c763d",
				"background":"#dff0d8",
				"border-right":"none"
			});
			$("#loginname2").css("color","#3c763d")
			$(".icon-tel").css("color","#3c763d");
			
			return true;
		}
	}
	
}

// 判断密码是否与注册时一致
function judegLoginpwd(){
	var loginname = $("#loginname").val();
	var loginpwd = $("#loginpwd").val();
	if(localStorage.getItem(loginname)!=loginpwd){
		$("#loginpwd2").html("密码不正确");
		$("#loginpwd").css("border","1px solid #a94442");
		$(".li_psw").css({
			"border":"1px solid #a94442",
			"background":"#f2dede",
		});
		$("#loginpwd2").css("color","#a94442")
		$(".icon-mima").css("color","#a94442")
		return false;
	}else{
		$("#loginpwd2").html("密码正确");
		$("#loginpwd2").css("color","#3c763d")
		$("#loginpwd").css("border","1px solid #3c763d");
		$(".li_psw").css({
			"border":"1px solid #3c763d",
			"background":"#dff0d8",
			"border-right":"none"
		});
		$(".icon-mima").css("color","#3c763d")
		return true;
	}

}


