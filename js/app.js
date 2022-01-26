const selectLoginText = document.querySelector('#loginText');
const selectLoginBtn = document.querySelector('#loginBtn');
const selectLoginForm = document.querySelector('#loginForm');
const greeting = document.querySelector('#greeting');
const SELECT_HIDDEN = 'hidden';
const USERNAME_KEY = 'username';
const selectTodolist = document.querySelector('.wrapper');

function onSubmit(event) {
  event.preventDefault();
  selectLoginForm.classList.add(SELECT_HIDDEN);
  const username = selectLoginText.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(USERNAME_KEY) {
  function getGreeing() {
    const greetinglist = [
      {
        greet: `${USERNAME_KEY},How do you feel today?`,
      },
      {
        greet: `What a beautiful day, isn't it? `,
      },
      {
        greet: `${USERNAME_KEY}, you can do everything !`,
      },
      {
        greet: `평범한 하루가 쌓여서, 비범한 내일을 만든다.`,
      },
      {
        greet: `it's gonna be okay, take it easy `,
      },
      {
        greet: `네가 항상 행복했으면 좋겠어,${USERNAME_KEY}`,
      },
      {
        greet: `I think you're in luck today`,
      },
      {
        greet: `little by little, slowly, gradually, but don't stop`,
      },
      {
        greet: `지치면 잠시 쉬었다 가면 되는거야.`,
      },
      {
        greet: `${USERNAME_KEY}, 실현 가능한 목표를 적는거야 !`,
      },
    ];
    const todaysGreeting =
      greetinglist[Math.floor(Math.random() * greetinglist.length)];
    greeting.innerText = todaysGreeting.greet;
  }
  getGreeing();
  setInterval(getGreeing, 30000);
  greeting.classList.remove(SELECT_HIDDEN);
  selectTodolist.classList.remove(SELECT_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  selectLoginForm.classList.remove(SELECT_HIDDEN);
  selectLoginForm.addEventListener('submit', onSubmit);
} else {
  paintGreetings(savedUsername);
}

//object.value (객체에 입력된 값이 무엇인지 알게 해준다)
//object.length ( 객체에 입력된 값의 길이를 알게 해준다)
//HTML input 내 메서드를 통해, 필수로 입력하라 할 수 있고, 최대 길이를 정할 수 있다
//required , maxlength
//form 안에 있는 input은 자동으로 submit한다.
//Eventlistener의 첫번째 argument는 실행되는 event object의 정보를 가르쳐준다.
//preventDefault = HTML에 있는 기본 기능의 실행을 막아준다.
//localstorage. setItem , getItem, removeItem
