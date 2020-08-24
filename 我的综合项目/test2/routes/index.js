const template = require('express-art-template');

// 这是方法配置模板，还有用属性配置模板的方法：
app.engine('html', template)
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'html');


require('./student')


