function postTweet() {
    let tweetText = document.querySelector('.tweet-input textarea').value;
    let images = document.getElementById('image-input').files;
    let tweetSection = document.querySelector('.tweets');

    let tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');
    tweetDiv.innerHTML = `<p>${tweetText}</p>`;

    for (let i = 0; i < images.length; i++) {
        let url = URL.createObjectURL(images[i]);
        let img = document.createElement('img');
        img.src = url;
        img.style.objectPosition = 'center'; // Default to center
        img.onclick = () => changeThumbnailFocus(img);
        tweetDiv.appendChild(img);
    }

    tweetSection.appendChild(tweetDiv);
    document.querySelector('.tweet-input textarea').value = '';
    document.getElementById('image-input').value = '';
}

function changeThumbnailFocus(img) {
    // This function could be improved to allow users to select the focus area
    img.style.objectPosition = img.style.objectPosition === 'center' ? 'top' : 'center';
}
