// 随机生成花瓣
const createPetals = () => {
    for(let i = 0; i < 50; i++) {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
      petal.style.background = `hsl(${Math.random() * 360}, 100%, 75%)`;
      document.body.appendChild(petal);
    }
  }
  createPetals();
  
  // 随机生成星星
  const createStars = () => {
    for(let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDelay = Math.random() * 2 + 's';
      star.style.width = Math.random() * 3 + 'px';
      star.style.height = star.style.width;
      document.body.appendChild(star);
    }
  }
  createStars();
  
  // 动漫角色添加
  const animeCharacters = [
    'images/1.jpg', // 替换为你的动漫角色图片路径
    'images/anime2.png',
    'images/anime3.png'
    // 添加更多图片链接
  ];
  
  const createAnimeCharacters = () => {
    animeCharacters.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('anime-character');
      img.style.left = Math.random() * 100 + 'vw';
      img.style.animationDuration = (Math.random() * 20 + 10) + 's';
      document.body.appendChild(img);
    });
  }
  createAnimeCharacters();
  
  // 点击/触摸生成特效的小脚本
  document.addEventListener('click', function(e) {
    // 创建一个圆圈元素
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
    document.body.appendChild(circle);
  
    // 动画结束后移除该元素
    setTimeout(() => {
      circle.remove();
    }, 600);
  });
  
  // 新年倒计时脚本
  const countdown = () => {
    // 设置你的跨年日期和时间
    const countDate = new Date('January 1, 2025 00:00:00').getTime(); // 修改为你的跨年日期
    const now = new Date().getTime();
    const gap = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  
    if (gap < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerText = '新年快乐！';
      // 显示新年祝福弹窗
      document.getElementById('newYearMessage').classList.add('show');
    }
  }
  
  const timer = setInterval(countdown, 1000);
  