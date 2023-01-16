#!/bin/bash

# Copy the .tgz file to the server
scp -r -i $AWS_REFILL_PEM_KEY ubuntu@3.8.126.93 ./build/mmcorrelo-api-transactions-$1.tgz ubuntu@3.8.126.93:~/server

# SSH into the server and run the install script, passing in the version number as an argument
ssh -i $AWS_REFILL_PEM_KEY ubuntu@3.8.126.93 "cd ~/server && ./install.sh $1"