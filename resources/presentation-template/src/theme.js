import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./overrides.css');
require('prismjs/themes/prism-coy.css');

export default createTheme(
    {
        primary: '#f0f0f0',
        secondary: 'black',
        tertiary: 'black',
        quaternary: 'black',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);