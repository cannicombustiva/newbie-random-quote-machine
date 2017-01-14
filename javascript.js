var quotes = [
  "Ormai è ufficiale, Segni è un coglione (5/1/1994)",
  "Io non farò il politico come gli altri (28/1/1994)",
  "Rinuncerei allo scudetto pur di vincere le elezioni (24/3/1994)",
  "In una certa fase Mussolini fece cose buone, un fatto confermato dalla storia (28/5/1994)",
  "Non perdo tempo a smentire sciocchezze. Anzi, proporrò una tassa sulle chiacchiere (13/8/1994)"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));

    /* document.getElementById(): we can pass in any string and
      javascript will look through our HTML document and retrieve
      it for use to do whatever we want with it. We will pass
      in 'quoteDisplay' as a parameter to retrieve the HTML
      element with the id of "quoteDisplay"

      .innerHTML: pass a randomly retrieved quote from
       our array as the value that will be added into our HTML
      quoteDisplay element. */
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
