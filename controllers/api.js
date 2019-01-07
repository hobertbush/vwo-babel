// read - https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md

module.exports = app => {
    app.get('/api/test', (req,res) => {
        res.send('asdfasdf')
    })
}