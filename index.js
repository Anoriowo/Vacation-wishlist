(function(){
'use strict'

const theForm = document.getElementById('vacation_form');

theForm.addEventListener('submit', formSubmit);
function formSubmit(e) {
    e.preventDefault();

    const destinationName = e.target.elements['name'].value;
    const destinationPhoto = e.target.elements['photo'].value;
    const destinationLocation = e.target.elements['location'].value;
    const destinationDescription = e.target.elements['description'].value;

    for (let i = 0; i < theForm.length; i++) {
        theForm.elements[i].value = '';    
    }

   //create card here
var destinationCard = createDestinationCard(destinationName, destinationLocation, destinationPhoto, destinationDescription)

    const wishListContainer = document.getElementById('destination_container');
    if(wishListContainer.children,length === 0){
        document.getElementById('title').innerHTML = 'My Wish List'
    }

    document.querySelector('#destination_container').appendChild(destinationCard)
    //add the card
}
 //creating new card
function createDestinationCard(name, location, photoURL, description) {
    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.setAttribute('alt', name) //this means that whatever it is that is written in the name becomes the alt
    
    let constantPhotoUrl = 'images/signpost.jpg';

    //using the default image or the newly inputed one
    if(photoURL.length === 0){
        img.setAttribute('src', constantPhotoUrl)
    }else{
        img.setAttribute('src', photoURL)
    }

    card.appendChild(img)

    const cardBody = document.createElement('div')
    cardBody.className = "card_body"

    const cardTitle = document.createElement('h3')
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle)

    const cardSubTitle = document.createElement('h4')
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle)

    if(description.length !== 0) {
        var cardText = document.createElement('p')
        cardText.className = 'card_text'
        cardText.innerText = description
        cardBody.appendChild(cardText)
    }

    const cardDeleteBtn = document.createElement('button')
    cardDeleteBtn.innerText = 'Remove'
    cardDeleteBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(cardDeleteBtn)


card.appendChild(cardBody)

return card


}

function removeDestination(e) {
    const card = e.target.parentElement.parentElement;
    card.remove( )
    
}
})()