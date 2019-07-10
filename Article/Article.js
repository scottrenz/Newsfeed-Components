// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

let article = document.querySelectorAll('.articles');

  article[0].appendChild(
  newArticle(2,'New Article', 'Jul 10th, 2019',['line 1','line 2'])
  )
 
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
this.expandButton.innerHTML = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
this.expandButton.addEventListener('click', () => this.expandArticle());
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
this.domElement.classList.toggle('article-open')
   }
  }

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place,
 now chain .forEach() on to the articles variable
  to iterate over the articles NodeList and create a new instance
   of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => {
  new Article(article)
}
)

function newArticle(numofParagraphs,title,date,text) {
  const divArticles = document.createElement('div');
  const divArticle = document.createElement('div');
  const h2 = document.createElement('h2');
  const pDate = document.createElement('p');
  const p = [];
  for (i=0; i<numofParagraphs; i++)
{ p[i] = document.createElement('p')
p[i].innerHTML = text[i]
}
  const expandButton = document.createElement('span')
  divArticles.classList.add('articles')
  divArticle.classList.add('article')
  pDate.classList.add('date')
  expandButton.classList.add('expandButton')
h2.innerHTML = title;
pDate.innerHTML = date;
divArticles.appendChild(divArticle)
divArticle.appendChild(h2)
divArticle.appendChild(pDate)
for (i=0; i<numofParagraphs; i++)
{
  divArticle.appendChild(p[i])
}
divArticle.appendChild(expandButton)
// document.body.appendChild(divArticles);


return divArticle
}

