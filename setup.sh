#!/bin/bash

# echo -e "export const apiKey = 'SECRET';" > src/app/config.ts

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
	echo "Would you like to generate the config file? (y/n) "
	if [[ "$answer" == "y" || "$answer" == "Y" ]]; then
		generate
	fi
fi
