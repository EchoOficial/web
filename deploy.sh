#!/bin/bash

echo "🔧 Iniciando build..."

npm run build

if [ $? -ne 0 ]; then
  echo "❌ Erro no build. Abortando deploy."
  exit 1
fi

echo "🚀 Deploy no Firebase..."

firebase deploy --only apphosting:echo


echo "✅ Deploy finalizado!"