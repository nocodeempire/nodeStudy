/**
 * Created by Administrator on 2018/1/25.
 */
var fs=require("fs");
var path=require("path");
fs.readFile("aa.txt","utf8",function(err,data){
  if(err){
    console.log("读取失败");
    return;
  }
  console.log(data);
})
//console.log(__dirname);
//console.log(__filename);
console.log(path.join(__dirname,"aa.txt"));