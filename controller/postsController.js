const posts = require('../data/posts.js')

// index
function index(req, res){
    const tag = req.query.tag;

    let postsFiltered = posts;

    if(tag){
        postFiltered = posts.filter((post) => {
            return post.tags.includes(tag);
        })
    }

    res.json(postsFiltered);
}

// show
function show(req, res){
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    res.json(post);
}

// store
router.post('/', (req, res) => {
    res.send('Inserimento del nuovo post')
})

// update
router.put('/:id', (req, res) => {
    res.send('Modifica totale del post' + req.params.id)
})

// modify
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`)
})

// destroy
router.delete('/:id', (req, res) => {
    res.send(`Rimozione del post ${req.params.id}`)
})