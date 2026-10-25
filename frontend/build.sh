#!/bin/sh
rm -rf dist
esbuild                                          \
    --bundle src/main.tsx                        \
    --outdir=dist                                \
    --loader:.png=file                           \
    --loader:.jpg=file                           \
    --loader:.woff=file                          \
    --loader:.woff2=file                         \
    --external:/images/*                         \
    --target=es6                                 \
    --minify                                     \
    "--define:process.env.NODE_ENV='production'" \
    --pure:console.log
# pdf.js worker, served from our origin (nginx has no MIME type for .mjs)
pdfjs=$(dirname "$(node -p "require.resolve('pdfjs-dist/package.json', {paths: ['node_modules/react-pdf']})")")
cp "$pdfjs/build/pdf.worker.min.mjs" "dist/pdf.worker-$(node -p "require('$pdfjs/package.json').version").min.js"
cd dist || exit 1
js_hash="main.$(md5sum main.js | head -c 10).js"
mv main.js "$js_hash"
css_hash="main.$(md5sum main.css | head -c 10).css"
mv main.css "$css_hash"

sed -e 's,.*main.js.*,<script src="'"/$js_hash"'"></script>,' \
    -e 's,<head>,&<link href="'"/$css_hash"'" rel="stylesheet">,' \
    ../public/index.html > index.html

