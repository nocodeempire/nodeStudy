/**
 * Created by Administrator on 2018/1/25.
 */
var fs = require("fs");
fs.writeFile("aa.txt","写入文件",function(err){
  if(err){
    console.log('写入失败');
  }
})