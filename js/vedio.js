const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then(data => displayCatagories(data.categories))

        .catch((error) => console.log(error))
}

const loadVedio = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then(data => loadVideo(data.videos))

        .catch((error) => console.log(error))
}

const loadVideo = (video) => {
    const vedioContainer = document.getElementById('vedio');
    video.forEach((vide) => {
        const card = document.createElement('div');
        card.classList = "card card-compact";
        card.innerHTML = `
      
  <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${vide.thumbnail}
      alt="Shoes" />
      ${vide.others.posted_date?.length==0?"": `<span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white">${vide.others.posted_date}</span>`}
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
        <div>
            <img class="w-10 h-10 rounded-full" src=${vide.authors[0].profile_picture}>
        </div>
        <div>
            <h2 class="font-bold">${vide.title}</h2>
            <div class="flex items-center gap-2">
                <h2>${vide.authors[0].profile_name}</h2>
                ${vide.authors[0].verified==true? `<img class="w-5" src='https://img.icons8.com/?size=100&id=63760&format=png&color=000000'/> `: ""}
                
            
            </div>
        </div>
    


  </div>

       
       `

        vedioContainer.append(card)

    })
}

const displayCatagories = (categories) => {
    const catagoryContianer = document.getElementById('catagoryContianer')
    categories.forEach((item) => {
        console.log(item)
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        catagoryContianer.append(button)
    })
}

loadCatagories()
loadVedio()