window.onload = (event) => {
	 // 滚动图部分动画
	const Animation1= document.getElementById('column_move1')
	const Animation100= document.getElementById('boo')
	const Animation2= document.getElementById('column_move2')
	const Animation3= document.getElementById('advantage_move')
	const Animation4= document.getElementById('course')
	const Animation5= document.getElementById('teacher_move')
	const Animation6= document.getElementById('education_move')
	const Animation7= document.getElementById('college_move')
	const Animation8= document.getElementById('entrance_move')
	
	
	const animationClass='move'
	// 创建监听
	const intersectionObserver = new IntersectionObserver((donghua) => {
		for (entry of donghua) {
			if (entry.intersectionRatio > 0) {
				addAnimationClass(entry.target, animationClass);
			} else {
				console.log(animationClass);
				removeAnimationClass(entry.target, animationClass);
			}
		}
	});
	// 添加动画class的操作
	function addAnimationClass(elem, animationClass) {
		elem.className.includes(animationClass) ? 1 : elem.className = elem.className + ' ' + animationClass;
	}
	// 移除动画class的操作
	function removeAnimationClass(elem, animationClass) {
		elem.className.includes(animationClass) ? elem.className = elem.className.replace(animationClass, '') : 1;
		console.log(elem.className);
	}
	// 开启监听
	 intersectionObserver.observe(Animation1);
	 intersectionObserver.observe(Animation100);
	 intersectionObserver.observe(Animation2);
	 intersectionObserver.observe(Animation3);
	 intersectionObserver.observe(Animation4);
	 intersectionObserver.observe(Animation5);
	 intersectionObserver.observe(Animation6);
	 intersectionObserver.observe(Animation7);
	 intersectionObserver.observe(Animation8);
}