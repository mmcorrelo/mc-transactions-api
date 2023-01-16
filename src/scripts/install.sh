#!/bin/bash

#remove package directory if it exists
rm -rf package

# extract the package version passed by parameter
tar -xvzf mmcorrelo-api-transactions-$1.tgz

# remove the original package
rm mmcorrelo-api-transactions-$1.tgz

# move into the package directory
cd package

# install dependencies
npm i

# start the application
node package/index.js


