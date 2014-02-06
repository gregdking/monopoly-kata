var require = {
    waitTime: 30,
    paths: {
        'jquery': '../lib/jquery-2.1.0',
        'underscore': '../lib/underscore'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
};