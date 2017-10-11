ip=`ifconfig | grep 'inet ' | tail -n 1 | awk '{print $2}'`
echo $ip

sed -i'' -e "s/ip: .*/ip: '"$ip"',/" config.js
