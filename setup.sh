#!/bin/bash

config=src/app/config.ts

generate() {
	touch $config
	read -p "Access key to API: " ACCESS_KEY
	echo -e "export const apiKey = '$ACCESS_KEY';" > $config
	echo "Done."
}

if [ -f "$config" ]; then
	echo "The config file is existing."
	read -p "Would you like to regenerate? (y/n) " answer
	if [[ "$answer" == "y" || "$answer" == "Y" ]]; then
		generate
	fi
else 
	echo "Config file not found. Generate one."
	generate
fi

echo "Check the $config file if everything right."
