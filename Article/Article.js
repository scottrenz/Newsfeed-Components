// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"


class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())

  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
// console.log(this.domElement)
  }
}

/* START HERE: 
 
- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place,
 now chain .forEach() on to the articles variable to iterate over the articles NodeList
 and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let artString  = ' ';
artString = ' </div>'
artString = artString  +  '       <div class="article">'
artString = artString  +  '       <h2>My test article</h2>'
artString = artString  +  '       <p class="date">Nov 5th, 2017</p>'

artString = artString  +  '       <p>Lucas ipsum dolor sit amet ben twi'+'lek padmé darth darth darth moff hutt organa twi'+'lek. Ben amidala secura skywalker lando'
artString = artString  +  '       moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker'
artString = artString  +  '       watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.'
artString = artString  +  '       Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn'
artString = artString  +  '       jar twi'+'lek jinn leia jango skywalker mon. </p>'

artString = artString  +  '       <p>Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2'
artString = artString  +  '       windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine'
artString = artString  +  '       mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff'
artString = artString  +  '       k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff'
artString = artString  +  '       solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba'
artString = artString  +  '       owen jinn tatooine sith organa.</p>'

artString = artString  +  '       <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious'
artString = artString  +  '       naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket'
artString = artString  +  '       han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'+'lek padmé wookiee. Leia'
artString = artString  +  '       moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>'
artString = artString  +  '       <span class='+'expandButton'+'></span>'

let artString2 = artString.replace('My test','Next test')

var d1 = document.querySelector('.articles');

// d1.insertAdjacentHTML('beforeend', artString);
d1.insertAdjacentHTML('afterbegin', artString);

var d1 = document.querySelector('.articles');

d1.insertAdjacentHTML('beforeend', artString2);
// d1.insertAdjacentHTML('afterbegin', artString);

let articles = document.querySelectorAll('.article');

articles.forEach(article => {
  new Article(article)

// console.log(article.textContent)
}
  )


