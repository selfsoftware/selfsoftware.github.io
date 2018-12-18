function my$(id) {
	return document.getElementById(id);
}
//元素插入内容
function compatInnerText(element, str) {
	if(element.textContent) {
		element.textContent = str;
	} else {
		element.innerText = str;
	}
}
function stopBubble(e){
	return window.event.cancelBubble=true||e.stopPropagation();
}
//监听事件
function addEventListener(element, type, fn) {
	if(element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else if(element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}
//滚动定位标题栏
function getScroll() {
	return {
		left: window.pageXOffset || document.documentElement.scrollLeft ||
			document.body.scrollLeft,
		top: window.pageYOffset || document.documentElement.scrollTop ||
			document.body.scrollTop
	}
}
//获取任意元素，改变任意多个值
/**
 * 
 * @param {Object} element----操作的元素对象
 * @param {Object} json-------JSON数组--改变的值
 * @param {Object} fn---------传入的函数--需要进一步操作
 */
function cAnimation(element, json, fn) {
	clearInterval(element.timeId);

	element.timeId = setInterval(function() {
		var flag = true;
		for(var key in json) {
			if(key == "zIndex") {
				element.style[key] = json[key];

			} else if(key == "opacity") {
				var currect = parseInt(getStyle(element, key) * 100);
				var target = json[key] * 100;
				var step = (target - currect) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				currect += step;
				element.style[key] = currect / 100;

			} else {
				var currect = parseInt(getStyle(element, key));
				var target = json[key];
				var step = (target - currect) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				currect += step;
				element.style[key] = currect + "px";
			}

			if(currect !== target) {
				flag = false;
			}
		}
		if(flag) {
			clearInterval(element.timeId);
			if(fn) {
				fn();
			}

		}
	}, 20);

}
//匀速动画
/**
 * 终极封装，动画函数与元素样式值的改变函数合并
 * @param {Object} element---操作的元素对象
 * @param {Object} attr----元素样式的属性
 * @param {Object} target----需要改变的值
 */
function uAnimation(element, attr, target) {
	//设置移动动画，使用计时器
	var timeId = setInterval(
		function() {
			//获取当前位置
			var correct = parseInt(getStyle(element, attr));
			//每次移动步数
			var stap = 10;
			stap = target > correct ? stap : -stap;
			correct += stap;
			if(Math.abs(correct - target) > stap) {
				//位置重新赋值
				element.style[attr] = correct + "px";
			} else {
				element.style[attr] = target + "px";
				clearInterval(timeId);
			}

		}, 20
	);
}
//获取任意一个元素的任意一个值
/**
 * 
 * @param {Object} element---操作的元素对象
 * @param {Object} attr----元素样式的属性
 */
function getStyle(element, attr) {
	//兼容性判断window.getComputedStyle(element, [pseudoElt])
	//element--必需，要获取样式值的元素对象。[pseudoElt]--可选，表示指定节点的伪元素
	if(window.getComputedStyle) {
		//[attr]---需要获取的属性，火狐，谷歌
		return window.getComputedStyle(element, null)[attr];
	} else {
		//IE8
		return element.currentStyle[attr];
	}
}