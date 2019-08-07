var io = require('socket.ui')(process.env.PORT || 52300)
const express = require('express');
const app = express(); // express app 객체로 모든 서버의 일을 처리한다.
app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(8080, () => {
    console.log('express App on port 8080!');
}) 