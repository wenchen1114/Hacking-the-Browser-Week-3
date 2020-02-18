const api = "https://api.giphy.com/v1/gifs/random?api_key=5QNdOzksRykk40QX6U0B3MyOqRLdReUr&tag=cat&rating=G";

async function getData(){
    // fetch api
    const response = await fetch(api);
    console.log('hi');
    const datas = await response.json();
    const urls = datas.data.image_url;
    console.log(urls);
    const catimg = document.createElement("IMG");
    catimg.setAttribute("src", urls);
    catimg.setAttribute("width", "300px");
    catimg.setAttribute("height", "300px");
    catimg.setAttribute("overflow", "hidden");
    document.body.appendChild(catimg);;
}

getData();