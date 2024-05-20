var date = document.querySelector(".dateIOTD")
var image = document.querySelector(".imageIOTD")
var explanation = document.querySelector(".explanationIOTD")
var link = document.querySelector(".linkIOTD")
var api_key = "EFS6gsEdXnB3k9itocuD1LgMuVcHVFbwtXcU93K7"
var url = "https://api.nasa.gov/planetary/apod?api_key="+api_key;
fetch(url)
    .then(function(response)
    {
      return response.json();
    })

    .then(function(data) 
    {
        if(data.media_type == "video")
        {
            date.textContent = data.date;
            image.replaceWith("Click the link below to see the full video!!!");
            explanation.textContent = data.explanation;
            link.href = data.url;
            link.textContent = data.title; 
        }
        else
        {
            date.textContent = data.date;
            image.src = data.url;
            explanation.textContent = data.explanation;
            link.href = data.url;
            link.textContent = data.title;
        }
    })

    .catch(function(error)
    {
        console.log(error);
    });