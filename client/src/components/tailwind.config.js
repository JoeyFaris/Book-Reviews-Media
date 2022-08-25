const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function ({ addUtilities }) {
    addUtilities({
        ".my-rotate-y-180": {
            transform: "rotateY(180deg)",
        },
    });
});

module.exports = {
    mode: "jit",
    content: ["./src/*.html"],
    theme: {
        extend: {},
    },
    plugins: [Myclass]
}