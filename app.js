
const express = require('express');
const app = express();
port = 8888;
//request l� n?i ch?a th�ng tin ng??i d�ng g?i l�n
// get v� post l� c�c request, d�ng ?? ??y d? li?u l�n v� tr? d? li?u v?
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/welcome", function (req, resp) {
    resp.render("register");
})
// Ad lan 2


app.get('/tam-sinh-ly', function (req, resp) { resp.send("Hello tam-sinh-ly")});

app.get('/doi-song', function (req, resp) { resp.send("Hello tam-sinh-ly") });

app.get('/cuoi', function (req, resp) { resp.send("Hello tam-sinh-ly") });

app.listen(port, function () { console.log(`Example app listening on port!`) });