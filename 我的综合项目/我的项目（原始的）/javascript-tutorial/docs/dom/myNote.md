节点的类型：

- `Document`：整个文档树的顶层节点
- `DocumentType`：`doctype`标签（比如`<!DOCTYPE html>`）
- `Element`：网页的各种HTML标签（比如`<body>`、`<a>`等）
- `Attribute`：网页元素的属性（比如`class="right"`）
- `Text`：标签之间或标签包含的文本
- `Comment`：注释
- `DocumentFragment`：文档的片段


继承 ParentNode 接口 的节点有三个：Document、DocumentFragment和Element。这三个接口就是父节点。

一、刚开始应该把 general node modelist parentnode text 几个部分看熟。看熟这几个部分之后，才能继续看下面的部分。

