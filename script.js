// 获取按钮元素
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// 按钮1点击事件
button1.addEventListener('click', function() {
    // 添加跳动动画
    button1.classList.add('jump');
    
    // 动画结束后跳转页面
    setTimeout(() => {
	button1.classList.remove('jump');
        window.location.href = "pageA.html"; // 跳转到页面A
    }, 500); // 500ms 是动画的持续时间
});

// 按钮2点击事件
button2.addEventListener('click', function() {
    // 添加跳动动画
    button2.classList.add('jump');
    
    // 动画结束后跳转页面
    setTimeout(() => {
	button2.classList.remove('jump');
        window.location.href = "pageB.html"; // 跳转到页面B
    }, 500); // 500ms 是动画的持续时间
});