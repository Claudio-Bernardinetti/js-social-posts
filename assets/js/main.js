/* Descrizione

Ricreiamo un feed social aggiungendo al layout dello starter kit di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.

Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),

testo del post,

immagine (non tutti i post devono avere una immagine),

numero di likes.

Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).

Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

Consigli del giorno:
Ragioniamo come sempre a step. Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Nota (bonus extra) - super opzionale:
Poiché é la parte logica ad interessarci in questa fase del corso, nello starter kit c'é il marup che potete usare per volgere l'esercizio.
Se finite la parte logica ed i vari bonus e vi avanza tempo per giocare un pó, pensate pure ad un layout differente e lavorateci su come bonus extra. */


// Creiamo il nostro array di oggetti che rappresentano ciascun post.
const posts = [
    {
        id: 1,
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: "https://unsplash.it/300/300?image=26"
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

// const per collegamento alla dom.
const sliderPostsEl = document.querySelector('.posts-list')


// ciclo e funzione per scomporre l'array 
function postsSlides() {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        // Markup di riferimento per la dom
        const postsMarkup = `<div class="post">
                        <div class="post__header">
                            <div class="post-meta">
                                <div class="post-meta__icon">
                                <img class="profile-pic"
                                        src="${post.author.image}"
                                        alt="Phil Mangione">
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${post.author.name}</div>
                                    <div class="post-meta__time">${post.created}</div>
                                </div>
                            </div>
                        </div>
                        <div class="post__text">${post.content}</div>
                        <div class="post__image">
                            <img src="${post.media}" alt>
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#"
                                        data-postid="${post.id}">
                                        <i class="like-button__icon fas fa-thumbs-up"
                                            aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-${post.id}"
                                        class="js-likes-counter">${post.likes}</b> persone
                                </div>
                            </div>
                        </div>
                    </div>`
        // Stampa del degli ogetti nell'ordine di markup
        sliderPostsEl.insertAdjacentHTML('beforebegin', postsMarkup)
    }
};
postsSlides()

// Seleziona tutti i pulsanti "Mi Piace"
const likeButtons = document.querySelectorAll('.like-button');

// Crea un array per memorizzare gli ID dei post ai quali l'utente ha messo il like
const likedPosts = [];
console.log(likedPosts);
// Aggiungi un event listener a ciascun pulsante "Mi Piace"
likeButtons.forEach(button => {
    button.addEventListener('click', event => {
        // Impedisci il comportamento predefinito del pulsante
        event.preventDefault();

        // Ottieni l'ID del post dal data attribute del pulsante
        const postId = button.dataset.postid;

        // Trova il post corrispondente nell'array dei post
        const post = posts.find(post => post.id === parseInt(postId));

        // Incrementa il contatore dei likes del post
        post.likes++;

        // Aggiungi l'ID del post all'array dei post ai quali l'utente ha messo il like
        likedPosts.push(post.id);

        // Aggiorna il contatore dei likes nella pagina
        const likesCounter = document.querySelector(`#like-counter-${postId}`);
        likesCounter.textContent = post.likes;

        // Cambia il colore del testo del pulsante "Mi Piace"
        button.classList.add('liked');
    });
});