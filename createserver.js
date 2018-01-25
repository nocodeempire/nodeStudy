/**
 * Created by Administrator on 2018/1/25.
 */
var http = require("http");
//创建服务
var server = http.createServer();
//开启监听
server.listen(9002,function(){
  console.log("服务开启:http:localhost:9002");
})
//返回响应
server.on("request",function(req,res){
  //不设置会乱码
  res.setHeader("content-type","text/html;charset=utf8");
  res.write("成功");
  res.end();
})