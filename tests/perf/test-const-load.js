/*
 *  Loading constant to register.
 */

function test() {
    var i;
    var t;

    for (i = 0; i < 1e7; i++) {
        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;

        t = 123.0;
        t = 123.1;
        t = 123.2;
        t = 123.3;
        t = 123.4;
        t = 123.5;
        t = 123.6;
        t = 123.7;
        t = 123.8;
        t = 123.9;
    }
}

try {
    test();
} catch (e) {
    print(e.stack || e);
    throw e;
}
