/**
 * Created by Administrator on 2018/1/25.
 */
var http = require("http");
var server = http.createServer();
server.listen(9003,function(){
  console.log("服务开启");
})
server.on("request",function(req,res){
  res.setHeader('Content-Type',"text/html;charset=utf-8");
  if(req.url.indexOf("/home")==0){
    res.write("HOME页面");
  }else if(req.url.indexOf("/register")==0){
    res.write("REGISTER页面");
  }else{
    res.write("默认页面");
  }
  res.end();
})