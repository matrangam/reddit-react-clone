const createCORSRequest = (method, url) => {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest !== "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

const getTopPics = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://www.reddit.com/r/pics.json?raw_json=1';
        const xhr = createCORSRequest('GET', url);
        if (!xhr) {
            reject('CORS not supported');
            return;
        }

        xhr.onload = () => {
            let response = JSON.parse(xhr.response);
            console.log(response)
            resolve(response);
        };

        xhr.onerror = () => {
            reject('Woops, there was an error making the request.');
        };

        xhr.send();
    });
}

export { getTopPics }
