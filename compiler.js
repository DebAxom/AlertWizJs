const rollup = require('rollup');
const sass = require('sass');
const {terser} = require('rollup-plugin-terser');
const {babel} = require('@rollup/plugin-babel');
const fs = require('fs');

const inputOptions = {
    input:'src/js/main.js',
    plugins:[
        // babel({ babelHelpers:'bundled',presets:['@babel/preset-env']}),
        // terser()
    ]
};

const outputOptions = {
    file:'dist/script.js',
    format:'iife',
};

async function build() {
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
    await bundle.close();
}

build();

var result = sass.renderSync({file:"./src/scss/style.scss",outputStyle:'compressed'});
fs.writeFileSync('./dist/style.css',result.css.toString());