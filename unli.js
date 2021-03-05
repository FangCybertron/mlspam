const fetch = require('node-fetch');
const readlineSync = require('readline-sync');

console.log(`
███████╗██████╗  █████╗ ███╗   ███╗    ███╗   ███╗ █████╗ ██╗██╗         ███╗   ███╗██╗     
██╔════╝██╔══██╗██╔══██╗████╗ ████║    ████╗ ████║██╔══██╗██║██║         ████╗ ████║██║     
███████╗██████╔╝███████║██╔████╔██║    ██╔████╔██║███████║██║██║         ██╔████╔██║██║     
╚════██║██╔═══╝ ██╔══██║██║╚██╔╝██║    ██║╚██╔╝██║██╔══██║██║██║         ██║╚██╔╝██║██║     
███████║██║     ██║  ██║██║ ╚═╝ ██║    ██║ ╚═╝ ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║███████╗
╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝
                                  BOT v.2.0            By : Andhika D. Maulana                                              
`);

var idml = readlineSync.question('Game ID ? ');
console.log('');

const spam = () => new Promise((resolve, reject) => {
    fetch(`https://api.mobilelegends.com/mlweb/sendMail?roleId=${idml}&language=en`, {
        method: 'GET',
        headers: {
            'authority': 'api.mobilelegends.com',
            'accept': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.81',
            'origin': 'https://m.mobilelegends.com',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://m.mobilelegends.com/',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': 'PHPSESSID=43a2950bfa7b95fd28d968771a7a9b47'
        }
    })
    .then(res => res.json())
    .then(res => {
        resolve(res)
    })
    .catch(err => {
        reject(err)
    })
});

(async () => {
    while (true) {
        const resultspam = await spam();
        console.log(resultspam)
        idml += " ";
    }
})();