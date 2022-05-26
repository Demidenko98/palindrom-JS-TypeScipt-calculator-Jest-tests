const checkPalindrom = (str) => {

    if (str === null) {
        return false;
    }

    str = str.toLowerCase().split(' ').join('');

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(checkPalindrom('А роза упала на лапу Азора'));