const plugin = require('tailwindcss/plugin');

const colors = require('./style-guide/colors.json');

module.exports = plugin(function () {}, {
  theme: {
    extends: {
      colors: { ...colors.colors }
    }
  }
});
