import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
// ./server.js
const translate = setCORS("http://localhost:8081/");
/*
// or
import translate, { setCORS } from "google-translate-api-browser";
setCORS("http://cors-anywhere.herokuapp.com/");
*/

window.onDocumentReady = () => {
    const default_language = "fr";

    const languagesList=[{c: "ab", n: "Abkhaz"},{c: "aa", n: "Afar"},{c: "af", n: "Afrikaans"},{c: "ak", n: "Akan"},{c: "sq", n: "Albanian"},{c: "am", n: "Amharic"},{c: "ar", n: "Arabic"},{c: "an", n: "Aragonese"},{c: "hy", n: "Armenian"},{c: "as", n: "Assamese"},{c: "av", n: "Avaric"},{c: "ae", n: "Avestan"},{c: "ay", n: "Aymara"},{c: "az", n: "Azerbaijani"},{c: "bm", n: "Bambara"},{c: "ba", n: "Bashkir"},{c: "eu", n: "Basque"},{c: "be", n: "Belarusian"},{c: "bn", n: "Bengali; Bangla"},{c: "bh", n: "Bihari"},{c: "bi", n: "Bislama"},{c: "bs", n: "Bosnian"},{c: "br", n: "Breton"},{c: "bg", n: "Bulgarian"},{c: "my", n: "Burmese"},{c: "ca", n: "Catalan; Valencian"},{c: "ch", n: "Chamorro"},{c: "ce", n: "Chechen"},{c: "ny", n: "Chichewa; Chewa; Nyanja"},{c: "zh", n: "Chinese"},{c: "cv", n: "Chuvash"},{c: "kw", n: "Cornish"},{c: "co", n: "Corsican"},{c: "cr", n: "Cree"},{c: "hr", n: "Croatian"},{c: "cs", n: "Czech"},{c: "da", n: "Danish"},{c: "dv", n: "Divehi; Dhivehi; Maldivian;"},{c: "nl", n: "Dutch"},{c: "dz", n: "Dzongkha"},{c: "en", n: "English"},{c: "eo", n: "Esperanto"},{c: "et", n: "Estonian"},{c: "ee", n: "Ewe"},{c: "fo", n: "Faroese"},{c: "fj", n: "Fijian"},{c: "fi", n: "Finnish"},{c: "fr", n: "French"},{c: "ff", n: "Fula; Fulah; Pulaar; Pular"},{c: "gl", n: "Galician"},{c: "ka", n: "Georgian"},{c: "de", n: "German"},{c: "el", n: "Greek, Modern"},{c: "gn", n: "GuaranÃ­"},{c: "gu", n: "Gujarati"},{c: "ht", n: "Haitian; Haitian Creole"},{c: "ha", n: "Hausa"},{c: "he", n: "Hebrew (modern)"},{c: "hz", n: "Herero"},{c: "hi", n: "Hindi"},{c: "ho", n: "Hiri Motu"},{c: "hu", n: "Hungarian"},{c: "ia", n: "Interlingua"},{c: "id", n: "Indonesian"},{c: "ie", n: "Interlingue"},{c: "ga", n: "Irish"},{c: "ig", n: "Igbo"},{c: "ik", n: "Inupiaq"},{c: "io", n: "Ido"},{c: "is", n: "Icelandic"},{c: "it", n: "Italian"},{c: "iu", n: "Inuktitut"},{c: "ja", n: "Japanese"},{c: "jv", n: "Javanese"},{c: "kl", n: "Kalaallisut, Greenlandic"},{c: "kn", n: "Kannada"},{c: "kr", n: "Kanuri"},{c: "ks", n: "Kashmiri"},{c: "kk", n: "Kazakh"},{c: "km", n: "Khmer"},{c: "ki", n: "Kikuyu, Gikuyu"},{c: "rw", n: "Kinyarwanda"},{c: "ky", n: "Kyrgyz"},{c: "kv", n: "Komi"},{c: "kg", n: "Kongo"},{c: "ko", n: "Korean"},{c: "ku", n: "Kurdish"},{c: "kj", n: "Kwanyama, Kuanyama"},{c: "la", n: "Latin"},{c: "lb", n: "Luxembourgish, Letzeburgesch"},{c: "lg", n: "Ganda"},{c: "li", n: "Limburgish, Limburgan, Limburger"},{c: "ln", n: "Lingala"},{c: "lo", n: "Lao"},{c: "lt", n: "Lithuanian"},{c: "lu", n: "Luba-Katanga"},{c: "lv", n: "Latvian"},{c: "gv", n: "Manx"},{c: "mk", n: "Macedonian"},{c: "mg", n: "Malagasy"},{c: "ms", n: "Malay"},{c: "ml", n: "Malayalam"},{c: "mt", n: "Maltese"},{c: "mi", n: "MÄori"},{c: "mr", n: "Marathi (MarÄá¹­hÄ«)"},{c: "mh", n: "Marshallese"},{c: "mn", n: "Mongolian"},{c: "na", n: "Nauru"},{c: "nv", n: "Navajo, Navaho"},{c: "nb", n: "Norwegian BokmÃ¥l"},{c: "nd", n: "North Ndebele"},{c: "ne", n: "Nepali"},{c: "ng", n: "Ndonga"},{c: "nn", n: "Norwegian Nynorsk"},{c: "no", n: "Norwegian"},{c: "ii", n: "Nuosu"},{c: "nr", n: "South Ndebele"},{c: "oc", n: "Occitan"},{c: "oj", n: "Ojibwe, Ojibwa"},{c: "cu", n: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{c: "om", n: "Oromo"},{c: "or", n: "Oriya"},{c: "os", n: "Ossetian, Ossetic"},{c: "pa", n: "Panjabi, Punjabi"},{c: "pi", n: "PÄli"},{c: "fa", n: "Persian (Farsi)"},{c: "pl", n: "Polish"},{c: "ps", n: "Pashto, Pushto"},{c: "pt", n: "Portuguese"},{c: "qu", n: "Quechua"},{c: "rm", n: "Romansh"},{c: "rn", n: "Kirundi"},{c: "ro", n: "Romanian, [])"},{c: "ru", n: "Russian"},{c: "sa", n: "Sanskrit (Saá¹ská¹›ta)"},{c: "sc", n: "Sardinian"},{c: "sd", n: "Sindhi"},{c: "se", n: "Northern Sami"},{c: "sm", n: "Samoan"},{c: "sg", n: "Sango"},{c: "sr", n: "Serbian"},{c: "gd", n: "Scottish Gaelic; Gaelic"},{c: "sn", n: "Shona"},{c: "si", n: "Sinhala, Sinhalese"},{c: "sk", n: "Slovak"},{c: "sl", n: "Slovene"},{c: "so", n: "Somali"},{c: "st", n: "Southern Sotho"},{c: "es", n: "Spanish; Castilian"},{c: "su", n: "Sundanese"},{c: "sw", n: "Swahili"},{c: "ss", n: "Swati"},{c: "sv", n: "Swedish"},{c: "ta", n: "Tamil"},{c: "te", n: "Telugu"},{c: "tg", n: "Tajik"},{c: "th", n: "Thai"},{c: "ti", n: "Tigrinya"},{c: "bo", n: "Tibetan Standard, Tibetan, Central"},{c: "tk", n: "Turkmen"},{c: "tl", n: "Tagalog"},{c: "tn", n: "Tswana"},{c: "to", n: "Tonga (Tonga Islands)"},{c: "tr", n: "Turkish"},{c: "ts", n: "Tsonga"},{c: "tt", n: "Tatar"},{c: "tw", n: "Twi"},{c: "ty", n: "Tahitian"},{c: "ug", n: "Uyghur, Uighur"},{c: "uk", n: "Ukrainian"},{c: "ur", n: "Urdu"},{c: "uz", n: "Uzbek"},{c: "ve", n: "Venda"},{c: "vi", n: "Vietnamese"},{c: "vo", n: "VolapÃ¼k"},{c: "wa", n: "Walloon"},{c: "cy", n: "Welsh"},{c: "wo", n: "Wolof"},{c: "fy", n: "Western Frisian"},{c: "xh", n: "Xhosa"},{c: "yi", n: "Yiddish"},{c: "yo", n: "Yoruba"},{c: "za", n: "Zhuang, Chuang"},{c: "zu", n: "Zulu"}]

    const select_lang = document.createElement('select');
    select_lang.id = "language_input";
    languagesList.forEach((lang)=>{
        const option = document.createElement('option');
        option.value = lang.c;
        option.innerText = lang.n;
        select_lang.appendChild(option);
    });

    document.getElementById('language_input_box').appendChild(select_lang);
    select_lang.value = default_language;



    const encryptInput = document.getElementById('input_encrypt');
    const encryptOutput = document.getElementById('output_encrypt');
    const encryptBtn = document.getElementById('encrypt');

    const encryptHandler = async () => {
        encryptOutput.value = await translateText(encryptInput.value, select_lang.value);
        navigator.clipboard.writeText(encryptOutput.value).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

    encryptBtn.addEventListener('click', encryptHandler);
}


window.translateText = (text, language) => {

    const {html, tempObject} = encryptHtml(text);

    return new Promise((resolve, reject)=>{
        translate(html, { to: language })
            .then(res => {
                resolve(decryptHtml(res.text, tempObject));
            })
            .catch(err => {
                reject(err);
            });
    })
}

const encryptHtml = (html = '') => {
    let tempObject = [];
    let regexp = /<[^<>]+>/g;
    let matchArr = html.match(regexp);

    if (matchArr) {
        matchArr.forEach((strPart) => {
            const uniqueIq = guid();
            tempObject.push({ replaced: uniqueIq, original: strPart });
            html = html.replace(strPart, `<${uniqueIq}>`);
        })
    }
    return {html, tempObject};
}

const decryptHtml = (html = '', tempObject) => {
    tempObject.forEach((tempObj) => {
        html = html.replace(`<${tempObj.replaced}>`, tempObj.original);
        html = html.replace(`< ${tempObj.replaced}>`, tempObj.original);
        html = html.replace(`< ${tempObj.replaced} >`, tempObj.original);
        html = html.replace(`<${tempObj.replaced} >`, tempObj.original);
    });
    return html;
}

const guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaa'-'aaaa'
    return s4() + '-' + s4();
}

export default translateText;