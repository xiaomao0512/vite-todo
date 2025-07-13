#!/bin/bash

# 建置專案
npm run build

# 部署到 GitHub Pages
npx gh-pages -d dist 