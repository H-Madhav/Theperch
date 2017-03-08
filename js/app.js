'use strict';

var index = 1;

function plusIndex(n) {
    index = index + n;
    showImg(index);
};

showImg(1);

function showImg(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {
        index = 1;
    };

    if (n < 1) {
        index = x.length;
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };

    x[index - 1].style.display = "block";

};

autoSlide();
function autoSlide() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };

    if (index > x.length) {
        index = 1;
    };
    x[index - 1].style.display = "block";
    index++;
    setTimeout(autoSlide, 5000);
};

fadeIn();
function fadeIn() {
    var i;
    var x = document.getElementsByClassName("view1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };

    if (index > x.length) {
        index = 1;
    };
    x[index - 1].style.display = "block";
    index++;
    setTimeout(fadeIn, 4000);
};
