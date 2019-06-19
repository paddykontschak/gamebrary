/* eslint-disable */

const fs = require('fs');
const translate = require('translate-json-object')();
const baseJson = require('./en.json');

translate.init({ googleApiKey: 'AIzaSyCknvhooDrmNf9SJ5hdZKPkqR0pntXJ6cU' });

const supportedLanguages = ['es', 'pl', 'de', 'ar', 'fr', 'it', 'eu', 'cs', 'ja'];

for (let i = 0, promise = Promise.resolve(); i < supportedLanguages.length; i++) {
    promise = promise.then(() => new Promise(resolve => {
        const language = supportedLanguages[i];

        translate.translate(baseJson, language)
            .then((data) => {
                fs.writeFile(`${language}.json`, JSON.stringify(data, null, 4), () => {
                    console.log(`Translation to ${language} completed`);
                    resolve();
                });
            }).catch((err) => {
                console.log('error ', err)
            });
    }));
}
