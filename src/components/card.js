import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imageDiv = document.createElement('div');
  const image = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imageDiv.classList.add('img-container');

  headlineDiv.textContent= `${article.headline}`;
  image.src = `${article.authorPhoto}`;
  authorSpan.textContent = `${article.authorName}`;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageDiv);
  authorDiv.appendChild(authorSpan);
  imageDiv.appendChild(image);

  return cardDiv
}

const cardConnector= document.querySelector('.cards-container')
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
axios.get('http://localhost:5000/api/articles')
.then( resp=> {
  // console.log(resp.data.articles)

  // THIS SHOULD WORK. IT'S THE ONLY WAY I CAN THINK OF TO GET PAST THE OBJECT LAYER BETWEEN ARTICLES AND WHAT I NEED...
  const cardReturn = resp.data.articles
  // console.log(cardReturn)
  for( let key in cardReturn) {
    cardReturn[key].forEach((article) => {
        document.querySelector(selector).appendChild(Card(article))
    })
  }
})
.catch(err => {
  console.error(err)
})
.finally(() => console.log('done'))
return cardConnector
}

export { Card, cardAppender }
