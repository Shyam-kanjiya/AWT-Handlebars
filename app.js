const express = require('express');
const app = express();

const exhbs = require('express-handlebars');

app.engine('hbs', exhbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

// app.set('views', path.join(__dirname,'handlebars'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        footer: [
            {
                name: 'Shyam',
                id: '19CE052',
                topic: 'handlebars toutorial'
            }
        ],
        header: [
            {
                msg: 'Welcome'
            }
        ]
    });
});

app.listen(5500, () => {
    console.log('listening on 5500');
})