/**
 * Created by Administrator on 2018/1/25.
 */
/**
 * Created by Administrator on 2018/1/25.
 */
var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
//创建服务
var server = http.createServer();
//开启监听
server.listen(9004,function(){
  console.log("服务开启:http:localhost:9004/public");
})
//返回响应
server.on("request",function(req,res){
  //获取地址
  var reqpath=req.url;
  var mimeType="text/html";
  if(reqpath.indexOf("?")>-1){
    mimeType=mime.getType(reqpath.slice(0,reqpath.indexOf("?")));
  } else {
    mimeType=mime.getType(reqpath);
  }



  //不设置会乱码
  res.setHeader("content-type",mimeType);

  console.log(path.join(__dirname,reqpath));
  fs.readFile(path.join(__dirname,reqpath),function(err,data){
    if(err){
      res.end("读取失败"+err);
    }
    res.write(data);
    res.end();
  })
})