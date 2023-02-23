# TODOLIST

## 📌 How to start

Client

```
npm start
```

Server

```
cd server
yarn add
```

```
E-mail : 1234@gmail.com
PW : 123412345
```

## 📌 Stacks

<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">

<img src="https://img.shields.io/badge/-reactQuery-FF4154?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/-Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/recoil-4B32C3?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/axios-F5D7AF?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React_live_clock-FAD223?style=for-the-badge&logo=react&logoColor=white">
</div>
<br/>

## 📌 Folder Tree

I tried to consider a principal of locality

```tsx
├─assets
│  ├─fonts
│  ├─img
│  └─svg
├─atoms
├─Auth
│  ├─components
│  │  ├─Signin
│  │  └─Signup
│  └─hooks
├─components  //common components
├─constants
├─pages
│  ├─auth
│  └─todo
├─router
├─styles
├─Todo
│  ├─atoms
│  ├─TodoDetail
│  │  └─components
│  ├─TodoList
│  │  ├─components
│  │  └─hooks
│  │      ├─queries
│  │      └─recoils
│  ├─TodoModal
│  │  ├─components
│  │  │  ├─common
│  │  │  ├─todoAdd
│  │  │  └─todoUpdate
│  │  └─hooks
│  └─types
└─utils //axios, localstorage
```

## 📌 Features

### Sign in & Sign out page

- [x] E-mail & Password validation
  - [x] Email must contain (`@`,`.`)
  - [x] Password must be at least 8 characters
- [x] when Sign in is success, user's email is saved as USERNAME in localstorage and it shows at the top of the app

### To do list page

- [x] to-do, to-do list CRUD
- [x] For delete, update, add a to-do, use optimistic update by react-query
- [x] When delete or log-out button is clicked, confrimed box for double check shows
- [x] If a to-do in to-do list is clicked, the detail components for the clicked to-do is rendering
- [x] If user click the log out button, the authenticated token is deleted and also username is deleted, then navigate to sign in page

### Token check

- [x] At the first time, app checks which available token is in localstorage or not, if there is the token, it moves to a main page but if not, it leads to sign in page
- [x] When sign in works, a token is saved
- [x] By axios intercepters, when CRUD happens, there is a token check and if there isn't valid token, redirect to sign in page

<br/>

## 📌 Simulation

### Sign up page

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/48678872/220900560-5ca926c2-8e99-4739-a40e-d8fb598f7413.gif)

### Sign in page

![ezgif com-optimize](https://user-images.githubusercontent.com/48678872/220900083-38590164-a0ea-46fe-a02f-0e18a9e5cb65.gif)

### Add to-do

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/48678872/220900821-d06bd29a-4d00-4908-bef4-50921943a501.gif)

### Update to-do

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/48678872/220901084-17c69932-1c8c-4582-b864-4ddf8ede7186.gif)
