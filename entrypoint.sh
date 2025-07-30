#!/bin/sh
echo "Injecting environment variables into env.json..."

envsubst < /usr/share/nginx/html/assets/env.template.json > /usr/share/nginx/html/assets/env.json

exec "$@"
