// 封装运动函数 start
	//说明 obj是运动的对象 dir是方向 target是到达的目标距离,attr 是要改变属性
;function doMove(obj,attr,dir,target){
	// alert( parseInt(getStyle(oDiv1,'width')) );  //换成证书

	clearInterval(obj.timer);  //先reset 防止多次点击hold不住  oDiv1.timer 定义在div上的定时器更好
	
	obj.timer = setInterval(function(){
		var speed = parseInt(getStyle(obj,attr)) + dir;

		if(speed > target && dir > 0 || speed < target && dir < 0){
			speed = target ;
		}
		// 注意这个判断的作用~~~

		obj.style[attr] = speed +'px' ;  //这部分原来是 obj.style.left = speed +'px' ; 想想为啥

		if(speed == target){
			clearInterval(obj.timer);
			// alert(speed);
			// alert("done !")
		}
	},50);				
};
// 封装运动函数 end

// 封装一个getStyle()函数 start
;function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr] ;
};
// 封装一个getStyle()函数 end
