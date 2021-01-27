var MarkdownIt = require('markdown-it')
var mockjsPlugin = require('../index')
var mockjs = require('mockjs')
var fs = require('fs')
var path = require("path");
const md = new MarkdownIt();
const content = fs.readFileSync(path.relative(__dirname,"./readme.md"))

md.use(mockjsPlugin)


var result = md.render(content.toString());

console.log(result)