module.exports = {
    content: [
        "./resources/views/**/*.blade.php",
        './resources/css/**/*.css',
        "./resources/**/*.js",
        "./resources/**/*.vue",
      ],
    theme: {
        fontFamily: {
            'base': 'Inter',
            // 'base-ar': 'Tajawal' // I love this font for arabic
        },
        extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
