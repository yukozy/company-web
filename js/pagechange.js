// 登录后用户名字显示

var loginName1=document.getElementById("loginLink");
var loginName2=document.getElementById("loginLink2");
var nowlogin=localStorage.getItem("nowlogin");
var exit=document.getElementById("exit");
if(nowlogin!==null){
	loginName1.innerHTML=nowlogin;
	loginName2.innerHTML="";
	localStorage.removeItem("nowlogin");
	exit.innerHTML="退出";

	
}else{
	loginName1.innerHTML="登录";
	loginName2.innerHTML="注册";
}
