const api = "https://api.giphy.com/v1/gifs/random?api_key=5QNdOzksRykk40QX6U0B3MyOqRLdReUr&tag=cat&rating=G";

async function getData(){
    // fetch api
    const response = await fetch(api);
    console.log('hi');
    const datas = await response.json();
    const urls = datas.data.image_url;
    console.log(urls);
    document.body.style.backgroundImage = 'url('+urls+')';
}

getData();