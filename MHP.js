window.onload = function () {
    var bt1 = document.getElementById("one");
    var bt2 = document.getElementById("two");
    var bt3 = document.getElementById("three");
    var rs = document.getElementById("result")
    var imgarr = ["goat.jpg", "car.jpg"];

    function getRandom(x) {
        return Math.floor(Math.random() * x);
    }

    index = getRandom(3);
    flag = getRandom(2);
    if (index == 0) {
        bt1.onclick = function () {
            if (flag == 0) {
                bt2.src = imgarr[0];
                bt1.onclick = function () {
                    bt1.src = imgarr[1];
                    bt3.src = imgarr[0];
                    rs.innerHTML = "猜對拉!!"
                    rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt3.onclick = function () {
                    bt1.src = imgarr[1];
                    bt3.src = imgarr[0];
                    rs.innerHTML = "猜錯拉!!"
                    rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt2.onclick = function () {
                    alert("不能重複點選");
                }
            }
            else {
                bt3.src = imgarr[0];
                bt1.onclick = function () {
                    bt1.src = imgarr[1];
                    bt2.src = imgarr[0];
                    rs.innerHTML = "猜對拉!!"
                    rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt2.onclick = function () {
                    bt1.src = imgarr[1];
                    bt2.src = imgarr[0];
                    rs.innerHTML = "猜錯拉!!"
                    rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt3.onclick = function () {
                    alert("不能重複點選");
                }
            }
        }
        bt2.onclick = function () {
            bt3.src = imgarr[0];
            bt1.onclick = function () {
                bt1.src = imgarr[1];
                bt2.src = imgarr[0];
                rs.innerHTML = "猜對拉!!"
                rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt2.onclick = function () {
                bt1.src = imgarr[1];
                bt2.src = imgarr[0];
                rs.innerHTML = "猜錯拉!!"
                rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt3.onclick = function () {
                alert("不能重複點選");
            }
        }
        bt3.onclick = function () {
            bt2.src = imgarr[0];
            bt1.onclick = function () {
                bt1.src = imgarr[1];
                bt3.src = imgarr[0];
                rs.innerHTML = "猜對拉!!"
                rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt3.onclick = function () {
                bt1.src = imgarr[1];
                bt3.src = imgarr[0];
                rs.innerHTML = "猜錯拉!!"
                rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt2.onclick = function () {
                alert("不能重複點選");
            }
        }
    }



    if (index == 1) {
        bt1.onclick = function () {
            bt3.src = imgarr[0];
            bt1.onclick = function () {
                bt1.src = imgarr[0];
                bt2.src = imgarr[1];
                rs.textContent = "猜錯拉!!"
                rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt2.onclick = function () {
                bt1.src = imgarr[0];
                bt2.src = imgarr[1];
                rs.textContent = "猜對拉!!"
                rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt3.onclick = function () {
                alert("不能重複點選");
            }
        }
        bt2.onclick = function () {
            if (flag == 0) {
                bt1.src = imgarr[0];
                bt2.onclick = function () {
                    bt2.src = imgarr[1];
                    bt3.src = imgarr[0];
                    rs.innerHTML = "猜對拉!!"
                    rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt3.onclick = function () {
                    bt2.src = imgarr[1];
                    bt3.src = imgarr[0];
                    rs.innerHTML = "猜錯拉!!"
                    rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt1.onclick = function () {
                    alert("不能重複點選");
                }
            }
            else {
                bt3.src = imgarr[0];
                bt1.onclick = function () {
                    bt1.src = imgarr[0];
                    bt2.src = imgarr[1];
                    rs.innerHTML = "猜錯拉!!"
                    rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt2.onclick = function () {
                    bt1.src = imgarr[0];
                    bt2.src = imgarr[1];
                    rs.innerHTML = "猜對拉!!"
                    rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt3.onclick = function () {
                    alert("不能重複點選");
                }
            }
        }
        bt3.onclick = function () {
            bt1.src = imgarr[0];
            bt2.onclick = function () {
                bt2.src = imgarr[1];
                bt3.src = imgarr[0];
                rs.innerHTML = "猜對拉!!"
                rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt3.onclick = function () {
                bt2.src = imgarr[1];
                bt3.src = imgarr[0];
                rs.innerHTML = "猜錯拉!!"
                rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt1.onclick = function () {
                alert("不能重複點選");
            }
        }
    }

    if (index == 2) {
        bt1.onclick = function () {
            bt2.src = imgarr[0];
            bt1.onclick = function () {
                bt1.src = imgarr[0];
                bt3.src = imgarr[1];
                rs.textContent = "猜錯拉!!"
                rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt3.onclick = function () {
                bt1.src = imgarr[0];
                bt3.src = imgarr[1];
                rs.textContent = "猜對拉!!"
                rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt2.onclick = function () {
                alert("不能重複點選");
            }
        }
        bt2.onclick = function () {
            bt1.src = imgarr[0];
            bt2.onclick = function () {
                bt3.src = imgarr[1];
                bt2.src = imgarr[0];
                rs.innerHTML = "猜錯拉!!"
                rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt3.onclick = function () {
                bt3.src = imgarr[1];
                bt2.src = imgarr[0];
                rs.innerHTML = "猜對拉!!"
                rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
            }
            bt1.onclick = function () {
                alert("不能重複點選");
            }
        }
        bt3.onclick = function () {
            if (flag == 0) {
                bt1.src = imgarr[0];
                bt2.onclick = function () {
                    bt2.src = imgarr[0];
                    bt3.src = imgarr[1];
                    rs.innerHTML = "猜錯拉!!"
                    rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt3.onclick = function () {
                    bt2.src = imgarr[0];
                    bt3.src = imgarr[1];
                    rs.innerHTML = "猜對拉!!"
                    rs.style.cssText = 'font-size: 30px; color:blue; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt1.onclick = function () {
                    alert("不能重複點選");
                }
            }
            else {
                bt2.src = imgarr[0];
                bt1.onclick = function () {
                    bt1.src = imgarr[0];
                    bt3.src = imgarr[1];
                    rs.innerHTML = "猜錯拉!!"
                    rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt3.onclick = function () {
                    bt1.src = imgarr[0];
                    bt3.src = imgarr[1];
                    rs.innerHTML = "猜對拉!!"
                    rs.style.cssText = 'font-size: 30px; background-color: pink; font-weight: bold;font-style: italic;';
                }
                bt2.onclick = function () {
                    alert("不能重複點選");
                }
            }
        }
    }
}