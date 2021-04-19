var keyList = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
var tmp = "";

function generatepass(plength) {
    tmp = '';
    for (i = 0; i < plength; i++) {
        tmp += keyList.charAt(Math.floor(Math.random() * keyList.length))
    }

    return tmp;
}

function populateform(enterlength) {
    document.passGen.output.value = generatepass(enterlength);
}
