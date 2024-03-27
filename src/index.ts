const fs = require("fs");
import { exec, execSync ,spawn} from 'child_process'
exec('http://baidu.com')
import testaa from './test'


const aa: number[] = [1, 2, 3, 4, 5];
// console.log("9ooddd777d89")
// console.log(fs);

exec('node -v',(err,stdout,stderr)=>{
    if(err){
        return  err
    }
    console.log(stdout.toString())
 })

 const nodeVersion  = execSync('node -v')
console.log(nodeVersion.toString("utf-8"))

// execSync("start chrome http://www.baidu.com --incognito")

//                       命令      参数  options配置
const {stdout} = spawn('netstat',['-an'],{})

//返回的数据用data事件接受
// stdout.on('data',(steram)=>{
//     console.log(steram.toString())
// })

console.log("this==>",this)
console.log("aa==>",testaa)
