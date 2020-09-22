const carousel = document.getElementById('viewpoints-carousel');
const carousel_indicators = document.getElementById('carousel-indicators');

// function to populate cards with viewpoints
function show_viewpoints() {
    // iterate through objects in viewpoints.js array
    for (let i = 0; i < viewpoints.length; i++) {
        // create all the nested elements bootstrap uses for the carousel
        let carousel_item = document.createElement('div');
        if (i === 0) {
            carousel_item.setAttribute('class', 'carousel-item active');
        } else {
            carousel_item.setAttribute('class', 'carousel-item');
        }
        // add background image
        let background_image = document.createElement('img');
        background_image.setAttribute('src','img/carousel.jpg');
        background_image.setAttribute('class','d-block w-100');
        carousel_item.append(background_image);
        // add div with viewpoint content
        let carousel_caption = document.createElement('div');
        carousel_caption.setAttribute('class', 'carousel-caption d-block');
        let carousel_intro = document.createElement('h5');
        carousel_intro.textContent = "Buffy's views on";
        carousel_caption.appendChild(carousel_intro);
        let carousel_subject = document.createElement('h2');
        carousel_subject.textContent = viewpoints[i].subject+":";
        carousel_caption.appendChild(carousel_subject);
        let carousel_icon = document.createElement('i');
        carousel_icon.setAttribute('class','fa fa-3x '+viewpoints[i].icon);
        carousel_caption.appendChild(carousel_icon);
        let carousel_label = document.createElement('h5');
        carousel_label.textContent = viewpoints[i].blurb;
        carousel_caption.appendChild(carousel_label);
        carousel_item.append(carousel_caption);
        // insert new item into viewpoints carousel
        carousel.appendChild(carousel_item);
        // add list item to ol
        let indicator = document.createElement('li');
        indicator.setAttribute('data-target','#carouselExampleCaptions');
        indicator.setAttribute('data-slide-to',i.toString());
        if (i === 0) {
            indicator.setAttribute('class', 'active');
        }
        console.log(indicator);
        carousel_indicators.appendChild(indicator);
    }
    console.log(carousel)
}

show_viewpoints();