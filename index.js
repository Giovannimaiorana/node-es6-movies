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
        return `${this.title} è un ${this.type} di genere ${this.genre}.E' stato rilasciato nel${this.year} ha un voto di ${this.rating} e il prezzo del noleggio è di ${this.price}`
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
        return `${this.title} è un ${this.type} di genere ${this.genre}.E' stato rilasciato nel${this.year} ha un voto di ${this.rating} e il prezzo del noleggio è di ${this.price}`
    }
}

/*Stampo in console */

console.log(toString());