const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div');
  const dateRecord = document.createElement('span');
  const docTitle = document.createElement('h1');
  const temperature = document.createElement('span');
 
  headerDiv.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');
 
  date.textContent= `date: ${dateRecord}`;
  temp.textContent= `temp: ${temperature}`;
 
  headerDiv.appendChild(dateRecord);
  headerDiv.appendChild(docTitle);
  headerDiv.appendChild(temperature);
 
  return headerDiv

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const headConnector = document.querySelector(selector)
selector.appendChild(Header)
return headConnector

}

export { Header, headerAppender }
