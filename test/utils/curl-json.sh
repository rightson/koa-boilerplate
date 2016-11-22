#!/bin/bash

pushd `dirname $0` > /dev/null;
export CWD=`pwd -P`;
popd > /dev/null

if [ -z $1 ]; then
    echo "Usage: $0 METHOD API_ENTRY JSON_PATH [HOST=localhost] [PORT=3000]"
    exit 0
fi

host=${HOST:-localhost}
port=${PORT:-3000}
api=$host:$port
cmd="curl -H 'Content-Type: application/json' -X $1 -d@$3 $api$2"
echo $cmd
eval $cmd

