// read - https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md
const cmd = require('node-cmd')
const fs = require('fs')
var compiled // = require('./../compiled.js')

// fs.writeFileSync('babel.js','const t = () => console.log("this is a test")')
cmd.run('babel babel.js -o compiled.js')
cmd.get('ls',(err,data,stderr) => console.log(data))
const getCompiled = (i=1) => {
    if(i>3){ return }
    try{ compiled = require('./../compiled.js') }
    catch(err){ console.log(err); i++; setTimeout(getCompiled.bind(this,i),1000) }
    console.log(compiled)
}
setTimeout(getCompiled,5000)
// const compiled = require('compiled')

module.exports = app => {
    app.get('/api/test', (req,res) => {
        res.send('asdfasdf')
    })
}