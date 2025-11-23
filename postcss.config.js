module.exports = {
    plugins: [
        require('react-strict-dom/postcss-plugin')({
            include: [
                'app/**/*.{js,jsx,mjs,ts,tsx}',
                'src/**/*.{js,jsx,mjs,ts,tsx}',
                '../../node_modules/example-ui/**/*.js'
            ]
        }),
        require('autoprefixer')
    ]
};