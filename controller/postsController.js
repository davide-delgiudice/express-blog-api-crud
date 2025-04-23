// importo il mio array di oggetti
const posts = require('../data/posts.js')

// definizione della funzione index
function index(req, res){
    // uso della query string per il campo che vogliamo filtrare
    const tag = req.query.tag;

    // definizione della variabile che contiene l'array che verrà filtrato
    let postsFiltered = posts;

    // controllo per il filtro
    if(tag){
        postsFiltered = posts.filter((post) => {
            return post.tags.includes(tag);
        })
    }

    // restituisco in formato json
    res.json(postsFiltered);
}

// definizione della funzione show
function show(req, res){
    // recupero il valore del parametro dinamico in una variabile
    const id = parseInt(req.params.id);

    // assegno ad una nuova variabile il valore dell'id precedentemente dichiarato per recuperare lo specifico post
    const post = posts.find(post => post.id === id);

    // const post = posts.find((post) => {
    //     return post.id == id;
    // })

    // controllo che la variabile post contenga qualcosa
    if(!post){
        // restituiamo uno stato corretto
        res.status(404);

        // restituiamo un messaggio di errore in forma di oggetto in formato json
        res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    }

    // restituisco in formato json
    res.json(post);
}

// definizione della funzione store
function store(req, res){
    res.send('Inserimento del nuovo post');
}

// definizione della funzione update
function update(req, res){
    res.send(`Modifica totale del post ${req.params.id}`);
}

// definizione della funzione modify
function modify(req, res){
    res.send(`Modifica parziale del post ${req.params.id}`);
}

// definizione della funzione destroy
function destroy(req, res){
    // recupero il valore del parametro dinamico in una variabile 
    const id = parseInt(req.params.id);

    // assegno ad una nuova variabile il valore dell'id precedentemente dichiarato per recuperare lo specifico post
    const post = posts.find(post => post.id === id);

    // controllo che la variabile post contenga qualcosa
    if(!post){
        // restituiamo uno stato corretto
        res.status(404);

        // restituiamo un messaggio di errore in forma di oggetto in formato json
        res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    }


    // rimuovo un singolo elemento nell'array tramite splice
    posts.splice(posts.indexOf(post), 1);

    // invio lo status come risposta
    res.sendStatus(204);

    // effettuo il console log nel terminale avente l'array modificato
    console.log(posts);
}

// esporto i metodi come proprietà di un oggetto
module.exports = { index, show, store, update, modify, destroy };