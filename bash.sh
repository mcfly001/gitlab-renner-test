#!/usr/bin/expect -f
set user root
set pass Zhe123456
set dir /usr/local/tomcat/webapps/
set ip 43.142.11.109
set filen [lrange $argv 0 0]

spawn scp -r build ${user}@${ip}:${dir}
expect "${user}@${ip}'s password:"
send "${pass}\r"
interact #交互模式,用户会停留在远程服务器上面
