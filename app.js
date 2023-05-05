console.log("Let's get this party started!");
document.addEventListener('DOMContentLoaded',function(){
  let form = document.querySelector('form');
  let input = document.getElementById('input');
  let remove = document.getElementById('remove');
  let results = document.getElementById('results');

  remove.addEventListener('click',function(e){
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }
  });
  form.addEventListener("submit",async function(e){
    e.preventDefault();
    let url = `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=kPFWE25SibiNT2U54mE1FtKEVI18IdDW`
    let response = await axios.get(url);
    let res = response.data;
    let numResults = res.data.length;

    let randomIdx;
    if (numResults) {
      randomIdx = Math.floor(Math.random() * numResults);

    }
    let image = document.createElement('img');
    image.setAttribute("src", res.data[randomIdx].images.original.url);
    results.appendChild(image);
    e.target.reset();
  });
})