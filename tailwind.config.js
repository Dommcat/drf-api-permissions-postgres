// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// # add this template 
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './templates/*.html',
    './node_modules/flowbite/*.js'

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   darkMode: 'class',
//   content: [
//     './templates/*.html',
//     './node_modules/flowbite/*.js'
//   ],