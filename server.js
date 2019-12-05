const express = require('express');
const app = express();
const request = require('request');
const path = require('path');

app.get('/sanity', (req, res) => {
    res.send("OK");
})

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/recipes/:ingredient', (request1, response) => {
    let wantedIngredient = request1.params.ingredient;
    
    request(`https://recipes-goodness.herokuapp.com/recipes/${wantedIngredient}`, (err, res, body) => {
        if(err) {
            console.log('ERROR');
        } else {
            let data = JSON.parse(body).results.map(d => ({ title: d.title, thumbnail: d.thumbnail, ingredients: d.ingredients, href: d.href}));            
            response.send(data);
        }
    })
})

const port = 8080;
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
});