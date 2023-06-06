"use strict";
const button = document.querySelector('button');
// ! -> 기본적으로 버튼이 존재하니 그 값이 반환될거라고 타입스크립트에 알려주는 것
button.addEventListener('click', () => {
    console.log('Clicked!');
});
