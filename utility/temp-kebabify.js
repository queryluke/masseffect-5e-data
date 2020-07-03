const fs = require('fs')
const path = `../data`
const _ = require('lodash')
const dirs = fs.readdirSync(path)
for (const dir of dirs) {
    const files = fs.readdirSync(`${path}/${dir}`)
    for (const file of files) {
        const fn = file.replace(/\.(md|json)$/gm, '')
        const kebabed = _.kebabCase(fn)
        if (kebabed !== fn) {
            const data = fs.readFileSync(`${path}/${dir}/${file}`)
            const md = /\.md$/gm.test(file)
            const ext = md ? '.md' : '.json'
            fs.writeFileSync(`${path}/${dir}/${kebabed}${ext}`, data)
            fs.unlinkSync(`${path}/${dir}/${file}`)
        }
    }
}
