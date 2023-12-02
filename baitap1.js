let ApiKey = 'C0aLU0BqyTkaJ1dN4rsrhBhkkx0fueg7'
document.querySelector("#myform").addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    //TODO: Code implementation
    let input = document.getElementById("input").value
    ///
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${ApiKey}`)
        .then(res => res.json())
        .then(data => {
            //Data / meta / pagination
            const items = data.data;
            const listItems = items.map(item => {
                const imageUrl = item.images.original.url
                return `<li><img src='${imageUrl}' /></li>`
            })
            document.getElementById('ulItem').innerHTML = listItems.join('')
        })
        .catch(err => console.error(err))
})
