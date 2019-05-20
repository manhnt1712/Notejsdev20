
const express = require('express');
const app = express();
port = 8888;
//request là n?i ch?a thông tin ng??i dùng g?i lên
// get và post là các request, dùng ?? ??y d? li?u lên và tr? d? li?u v?
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/welcome", function (req, resp) {
    resp.render("register");
})


app.get('/tam-sinh-ly', function (req, resp) { resp.send("Hello tam-sinh-ly")});

app.get('/doi-song', function (req, resp) { resp.send("Hello tam-sinh-ly") });

app.get('/cuoi', function (req, resp) { resp.send("Hello tam-sinh-ly") });

app.listen(port, function () { console.log(`Example app listening on port!`) });