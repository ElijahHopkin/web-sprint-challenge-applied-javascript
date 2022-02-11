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
  dateRecord.classList.add('date');
  temperature.classList.add('temp');
 
  docTitle.textContent = title;
  dateRecord.textContent= date;
  temperature.textContent= temp;

 
  headerDiv.appendChild(dateRecord);
  headerDiv.appendChild(docTitle);
  headerDiv.appendChild(temperature);
 
  return headerDiv

}
const selector= '.header-container'
const headerEntry=document.querySelector(selector);

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headCreator = Header('FDR runs for fifth term!', 'November 5, 1946', '49°');
  headerEntry.appendChild(headCreator);
// selector.appendChild(Header)
return headerEntry

}
// WOULD THIS WORK TO APPEND HEADER TO THE DOM?
// const headerMaker = headerAppender('.header-container')
// selector.appendChild(headerMaker)
//  
console.log('why will you not log anything?')
console.log('anything?')
export { Header, headerAppender }
