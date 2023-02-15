const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelectorAll(element);

        node.forEach(item => {
            item.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                item.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            item.addEventListener('animationend', handleAnimationEnd, {once: true});
        })

    });

let myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
    navigation: true,// 开启右侧 小圆点
    loopHorizontal: false,
    // licenseKey: 'YOUR_KEY_HERE', // 商业产品密钥
    // anchors: ['info', 'skill', 'project'], // 菜单对应的锚链接
    // menu: '#menu', // 开启菜单
    afterLoad: function (anchorLink, index) {
        console.log(111, index.index);
        switch (index.index) {
            case 0:
                animateCSS('.info-content-portrait', 'bounce');
                animateCSS('.info-content-title', 'wobble');
                animateCSS('.usernmaeLeft', 'backInLeft');
                animateCSS('.positionLeft', 'backInLeft');
                animateCSS('.webRight', 'backInRight');
                animateCSS('.wxRight', 'backInRight');
                break;
            case 1:
                animateCSS('.skill-content-item', 'heartBeat');
                break;
            case 2:
                animateCSS('.project-content-item', 'bounce');
                break;
            default:
                break;
        }
    },
});