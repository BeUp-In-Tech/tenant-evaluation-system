#!/bin/bash
# Fix permissions for vite executable
chmod +x node_modules/.bin/vite
chmod +x node_modules/vite/bin/vite.js
# Run build
npm run build
