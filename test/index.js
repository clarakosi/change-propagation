'use strict';

// Run jscs as part of normal testing
require('mocha-eslint')([
    'lib',
    'sys'
], {
    timeout: 10000
});
