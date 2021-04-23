# hiker-blog
记录一下问题，总结在学习过程中的一些知识

将dist作为项目页面进行提交
    `git subtree push --prefix dist origin gh-pages`
这里的pracel有个问题，导出资源路径是绝对路径，要想页面显示需要使用相对路径，即`./`

使用purgecss对css进行去重

根据gittalk的方法，使用github登录