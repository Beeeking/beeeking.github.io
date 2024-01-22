let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem("name", myName);
    myHeading.textContent = "你知道吗" + myName + ",宇宙酷毙啦！";
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    if(!storedName){
        setUserName();
    }else{
    myHeading.textContent = "你知道吗" + storedName + ",宇宙酷毙啦！";
    }
}

myButton.onclick = function () {
    setUserName();
};
  