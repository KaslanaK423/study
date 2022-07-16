//设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){   //这里应该是原图片路径
        myImage.setAttribute('src','images/v2v-test.png');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
};

//设置个性化欢迎信息
//获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }


if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

myButton.onclick = function(){
    setUserName();
};

