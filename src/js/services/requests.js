const postData = async (url, data) => {
    // document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
        method: 'POST',
        body: data
    });
    return await res.text();
};

const getResource = async (url) => {
    // document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url);
    if (!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};


export {postData, getResource};