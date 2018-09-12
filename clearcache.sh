#!/bin/bash

POSITIONAL=()
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -e|--email)
    AUTH_EMAIL="$2"
    shift # past argument
    shift # past value
    ;;
    -k|--authkey)
    AUTH_KEY="$2"
    shift # past argument
    shift # past value
    ;;
    -z|--zone)
    ZONE="$2"
    shift # past argument
    shift # past value
    ;;
    *)    # unknown option
    POSITIONAL+=("$1") # save it in an array for later
    shift # past argument
    ;;
esac
done
set -- "${POSITIONAL[@]}" # restore positional parameters

# delete cloudflare cache
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$ZONE/purge_cache" \
     -H "X-Auth-Email: $AUTH_EMAIL" \
     -H "X-Auth-Key: $AUTH_KEY" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'
