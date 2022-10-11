const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'
    return s4() + s4() + '-' + s4();
}

let tempObject = [];

//let str = '<> <a href="/"> <input type="radio" checked> <b> <p class="textsize19"> Hello this is the text </p>';

const encryptHtml = (html) => {
    let regexp = /<[^<>]+>/g;
    let matchArr = html.match(regexp);

    if (matchArr) {
        matchArr.forEach((strPart) => {
            const uniqueIq = guid();
            tempObject.push({ replaced: uniqueIq, original: strPart });
            html = html.replace(strPart, `<${uniqueIq}>`);
        })
    }
    return html;
}

const decryptHtml = (html) => {
    tempObject.forEach((tempObj) => {
        html = html.replace(`<${tempObj.replaced}>`, tempObj.original);
        html = html.replace(`< ${tempObj.replaced}>`, tempObj.original);
        html = html.replace(`< ${tempObj.replaced} >`, tempObj.original);
        html = html.replace(`<${tempObj.replaced} >`, tempObj.original);
    });
    return html;
}

const encryptBtn = document.getElementById('encrypt');
const decryptBtn = document.getElementById('decrypt');

const encryptInput = document.getElementById('input_encrypt');
const encryptOutput = document.getElementById('output_encrypt');


const encryptHandler = () => {
    tempObject = [];
    encryptOutput.value = encryptHtml(encryptInput.value);
    navigator.clipboard.writeText(encryptOutput.value).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

const decryptHandler = () => {
    encryptInput.value = decryptHtml(encryptOutput.value);
    navigator.clipboard.writeText(encryptInput.value).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

encryptBtn.addEventListener('click', encryptHandler);
decryptBtn.addEventListener('click', decryptHandler);

