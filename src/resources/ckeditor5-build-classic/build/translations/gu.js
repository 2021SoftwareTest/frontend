(function (d) {
    const l = d['gu'] = d['gu'] || {};
    l.dictionary = Object.assign(l.dictionary || {}, {
        "Block quote": " વિચાર ટાંકો",
        Bold: "ઘાટુ - બોલ્ડ્",
        Italic: "ત્રાંસુ - ઇટલિક્"
    });
    l.getPluralForm = function (n) {
        return (n != 1);
        ;
    };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
