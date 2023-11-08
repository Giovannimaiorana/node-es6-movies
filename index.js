/*Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv) */
const movie = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        type: "film",
        price: 3.99,
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Crime, Drama, Thriller",
        rating: 9.5,
        type: "Serietv",
        seasons: 5,
        price: 3.99,
    },
    {
        title: "Inception",
        year: 2010,
        genre: "Action, Adventure, Sci-Fi",
        rating: 8.8,
        type: "film",
        price: 3.99,
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Drama, Fantasy, Horror",
        rating: 8.7,
        type: "Serietv",
        seasons: 4,
        price: 3.99,
    },
];

/*Creare una classe Movie che contenga le informazioni sopra indicate. */

class Movie {
    title;
    year;
    genre;
    rating;
    type;
    price;

    /*constructor*/
    constructor(title, year, genre, rating, type, price) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
        this.price = price;
    }

    /*Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film */
    toString() {
        return `${this.title} è un ${this.type} di genere ${this.genre}.E' stato rilasciato nel ${this.year} ha un voto di ${this.rating} e il prezzo del noleggio è di ${this.price}`
    }
}
/* Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.*/

class TvSeries extends Movie {
    seasons;

    /*Constructor con super per prendere dati da padre  */
    constructor(title, year, genre, rating, type, price, seasons) {
        super(title, year, genre, rating, type, price);
        this.seasons = seasons;
    }
    /*Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film */
    toString() {
        console.log(`${this.title} è un ${this.type} di genere ${this.genre}.E' stato rilasciato nel ${this.year} ha un voto di ${this.rating} e il prezzo del noleggio è di ${this.price}`);
    }
};

/*istanza */
const film = new Movie("The Shawshank Redemption", 2010, "horror", 8.8, "film", 3.99)
//console.log(film.toString());
const serieTv = new TvSeries("Stranger Things", 2018, "horror", 8.8, "serieTv", 3.99)
//console.log(serieTv.toString());

/* Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.*/

const mappedArray = movie.map(item => {
    if (item.type.toLowerCase() === 'film') {
        return new Movie(item.title, item.year, item.genre, item.rating, item.type, item.price);
    } else if (item.type.toLowerCase() === 'serietv') {
        return new TvSeries(item.title, item.year, item.genre, item.rating, item.type, item.price, item.seasons);
    }
});

//console.log(mappedArray);

/*Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere. */

function mediaRaiting(listaFilm) {
    // Calcola la somma dei voti di tutti i film
    const sommaVoti = listaFilm.reduce((acc, film) => acc + film.rating, 0);

    // Calcola la media dei voti di tutti i film
    const mediaVoti = sommaVoti / listaFilm.length;

    return mediaVoti;
}

const mediaVotiDiTuttiIFilm = mediaRaiting(mappedArray);

console.log(`La media dei voti di tutti i film è: ${mediaVotiDiTuttiIFilm}`);
