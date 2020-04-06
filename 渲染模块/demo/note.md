1. template(filename, data);
    > 基于模板名渲染模板
1. template.render(source, data, options);
    > template.render(data,callback),常使用的是这个方法。
    > data 应该是string类型
    > callback 为回调
    > 参看案例 ：art-template 使用1
1. 







// 将模板源代码编译成函数
template.compile(source, options);



语法：
1. 输出
    1. 标准语法：
        - {{value}}
        - {{data.key}}
        - {{data['key']}}
        - {{a ? b : c}}
        - {{a || b}}
        - {{a + b}}
    1. 原始语法
        - <%= value %>
        - <%= data.key %>
        - <%= data['key'] %>
        - <%= a ? b : c %>
        - <%= a || b %>
        - <%= a + b %>
1. 条件
    1. 标准语法
        - {{if value}} ... {{/if}}
        - {{if v1}} ... {{else if v2}} ... {{/if}}
    1. 原始语法
        - <% if (value) { %> ... <% } %>
        - <% if (v1) { %> ... <% } else if (v2) { %> ... <% } %>
1. 循环
    1. 标准语法
        - {{each target}}
        -     {{$index}} {{$value}}
        - {{/each}}
    1. 原始语法
        - <% for(var i = 0; i < target.length; i++){ %>
        -     <%= i %> <%= target[i] %>
        - <% } %>
        > target 支持 array 与 object 的迭代，其默认值为 $data。
        > $value 与 $index 可以自定义：{{each target val key}}。
    1. 变量
    1. 标准语法
        - {{set temp = data.sub.content}}
    1. 原始语法
        - <% var temp = data.sub.content; %>
1. 模板继承
    1. 标准语法
        - {{extend './layout.art'}}
        - {{block 'head'}} ... {{/block}}
    1. 原始语法
        - <% extend('./layout.art') %>
        - <% block('head', function(){ %> ... <% }) %>
        > 模板继承允许你构建一个包含你站点共同元素的基本模板“骨架”。范例：
        ```html
        <!--layout.art-->
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>{{block 'title'}}My Site{{/block}}</title>

            {{block 'head'}}
            <link rel="stylesheet" href="main.css">
            {{/block}}
        </head>
        <body>
            {{block 'content'}}{{/block}}
        </body>
        </html>
        ```
        ```html
        <!--index.art-->
        {{extend './layout.art'}}

        {{block 'title'}}{{title}}{{/block}}

        {{block 'head'}}
            <link rel="stylesheet" href="custom.css">
        {{/block}}

        {{block 'content'}}
        <p>This is just an awesome page.</p>
        {{/block}}
        ```
        > 渲染 index.art 后，将自动应用布局骨架。
1. 子模板
    1. 标准语法

        - {{include './header.art'}}
        - {{include './header.art' data}}
    1. 原始语法

        - <% include('./header.art') %>
        - <% include('./header.art', data) %>
        > data 数默认值为 $data；标准语法不支持声明 object 与 array，只支持引用变量，而原始语法不受限制。
        > art-template 内建 HTML 压缩器，请避免书写 HTML 非正常闭合的子模板，否则开启压缩后标签可能会被意外“优化。

1. 过滤器
    1. 注册过滤器
        - template.defaults.imports.dateFormat = function(date, format){/*[code..]*/};
        - template.defaults.imports.timestamp = function(value){return value * 1000};
        过滤器函数第一个参数接受目标值。
        
        示例：
        html中：
        {{date|过滤器名称}}
        js中：
        template.defaults.imports.过滤器名称 = function(date){
            处理内容
            return 处理结果
        };
    1. 标准语法

        - {{date | timestamp | dateFormat 'yyyy-MM-dd hh:mm:ss'}}
        - {{value | filter}} 过滤器语法类似管道操作符，它的上一个输出作为下一个输入。

    1. 原始语法
        - <%= $imports.dateFormat($imports.timestamp(date), 'yyyy-MM-dd hh:mm:ss') %>
        > 如果想修改 {{ }} 与 <% %>，请参考 解析规则。
