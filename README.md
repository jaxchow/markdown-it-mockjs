# markdown-it-mockjs


# Usage

 - markdown syntax
```markdown

 FORMAT: 1A

# 这里是描述标题

我们都是`@cname`好孩子`@abc()`

```mockjs

    {
        "status":200,
        "message":"@ctitle()",
        "list|10":[{
            "id":"@guid()",
            "name":"@cname()"
        }]
    }

```

 - nodejs use plugins

```javascript

    var MarkdownIt = require('markdown-it')
    var mockjsPlugin = require('markdown-it-mockjs')
    var mockjs = require('mockjs')
    var fs = require('fs')
    var path = require("path");
    const md = new MarkdownIt();
    const content = fs.readFileSync(path.relative(__dirname,"./readme.md"))

    md.use(mockjsPlugin)


    var result = md.render(content.toString());

    console.log(result)
```
 - output
```shell

<p>FORMAT: 1A</p>
<h1>sdfsdfsdf</h1>
<p>我们都是<code>陆静</code>好孩子<code>@abc()</code></p>
<pre><code class="language-mockjs">
{"status":200,"message":"程离强知县度什","list":[{"id":"e25Ea880-482E-A243-F994-9A9457A1b5d9","name":"郭伟"},{"id":"852Ff24e-90C1-3fc9-2E12-C79EF6EAe537","name":"谢杰"},{"id":"e8737fd9-4cF9-37f1-ace6-66DDC1dd3fC3","name":"孙丽"},{"id":"39fD7d64-1d25-BbEd-B623-e4Cad2FEEEeb","name":"阎平"},{"id":"ae9a85CF-e8fE-aFbd-A949-5fACA937ebF9","name":"崔秀英"},{"id":"A9c6dfC9-e9f5-dfFF-9fcE-DF4ebacc07f9","name":"傅霞"},{"id":"bdBA4f7f-Db5E-b1c0-82Cd-8DbcD9e76955","name":"龙芳"},{"id":"3FC74Afd-6FAf-eA2A-7f26-A6f7DCa56A3F","name":"许刚"},{"id":"8cBf1cEF-e7d2-5D5c-DbE2-974FF27f8eCC","name":"金桂英"},{"id":"Ff811bEE-D9FE-e6d6-Bb7c-db1278E3f17E","name":"夏娟"}]}
</code></pre>
<p>go 语言</p>

```


# mockjs syntax 

  [mockjs](http://mockjs.com/)

  [mockjs examples](http://mockjs.com/examples.html)

  - inline code  `@number(3,5)`


  - block code 

  ```mockjs
        {
            "list|1-10":[{
                "name":"@cname"
            }]
        }
  ```