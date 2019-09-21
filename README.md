# vue-intermediate

[![Greenkeeper badge](https://badges.greenkeeper.io/seongjoojin/vue-intermediate.svg)](https://greenkeeper.io/)

Vue.js 중급 강좌 – 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex

# ES6

```js
let arr = [1, 2, 3]

arr.forEach(value => {
  console.log(arr)
})

let sum = () => {
  return 1 + 2
}
```

# Flux

- MVC 패턴의 복잡한 데이터 흐름을 해결하는 패턴

##### MVC 패  턴의 문제점

- 기능 추가 및 변경에 따라 생기는 문제점을 예측할 수 없음
- 앱이 복잡해지면 생기는 업데이트 루프

##### Flux 패턴의 단방향 데이터 흐름

- 데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리

# Vuex 기술 요소

- state: 여러 컴포넌트에 공유되는 데이터 data
- getters: 연산된 state 값을 접근하는 속성 computed
- mutations: state 값을 변경하는 이벤트 로직, 메서드 method
- action: 비동기 처리 로직을 선언하는 메서드 aysnc method
