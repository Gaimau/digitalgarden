#!/bin/sh
# Build Eleventy site and copy to docs/ for GitHub Pages
set -e

echo "Building site with Eleventy..."
npx @11ty/eleventy

echo "Copying _site/ to docs/ ..."
rm -rf docs
cp -R _site docs

echo "Done! Commit and push docs/ to deploy."
