// read - https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md
const cmd = require('node-cmd')
const fs = require('fs')
var compiled // = require('./../compiled.js')

const getCompiled = (i=1,file) => {
    fs.writeFileSync('babel.js',file)

    // cmd.run('babel babel.js -o compiled.js')
    cmd.get('babel babel.js -o compiled.js',(err,data,stderr) => console.log(data))

    if(i>3){ return }
    try{ compiled = require('./../compiled.js') }
    catch(err){ console.log(err); i++; setTimeout(getCompiled.bind(this,i),1000) }
    return compiled
}
setTimeout(getCompiled,5000)
// const compiled = require('compiled')

module.exports = app => {
    app.get('/api/test', (req,res) => {
        res.send(getCompiled(0,'const t = () => console.log("this is a test")'))
    })
}