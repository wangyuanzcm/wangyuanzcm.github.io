
第三方登录授权流程
起这个标题是为了更好理解，具体来说，整个流程实际上是指OAuth2中Authorization Code模式的授权流程。为了便于理解，这里按照实际操作顺序列出了整个授权流程的实现步骤：

在GitHub为我们的程序注册OAuth程序，获得Client ID（客户端ID）和Client Secret（客户端密钥）。
我们在登录页面添加“使用GitHub登录”按钮，按钮的URL指向GitHub提供的授权URL，即https://github.com/login/oauth/authorize。
用户点击登录按钮，程序访问GitHub的授权URL，我们在授权URL后附加查询参数Client ID以及可选的Scope等。GitHub会根据授权URL中的Client ID识别出我们的程序信息，根据scope获取请求的权限范围，最后把这些信息显示在授权页面上。
用户输入GitHub的账户及密码，同意授权
用户同意授权后GitHub会将用户重定向到我们注册OAuth程序时提供的回调URL。如果用户同意授权，回调URL中会附加一个code（即Authorization Code，通常称为授权码），用来交换access令牌（即访问令牌，也被称为登录令牌、存取令牌等）。
我们在程序中接受到这个回调请求，获取code，发送一个POST请求到用于获取access令牌的URL，并附加Client ID、Client Secret和code值以及其他可选的值。
GitHub接收到请求后，验证code值，成功后会再次向回调URL发起请求，同时在URL的查询字符串中或请求主体中加入access令牌的值、过期时间、token类型等信息。
我们的程序获取access令牌，可以用于后续发起API资源调用，或保存到数据库备用
如果用户是第一次登入，就创建用户对象并保存到数据库，最后登入用户
这里可选的步骤是让用户设置密码或资料



参考文档：
- [使用GitHub-Flask实现GitHub登录和API交互](https://zhuanlan.zhihu.com/p/39026635)