const plugin = require('tailwindcss/plugin');

const colors = require('./style-guide/colors.json');

module.exports = plugin(function () {}, {
  theme: {
    extend: {
      colors: { ...colors.colors }
    }
  }
});
