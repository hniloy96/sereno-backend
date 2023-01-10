const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    artist: String,
    release_date: String,
    image: String,
    genre: String
});

const Album = mongoose.model("Album", albumSchema);

const albums = [
    const albums = [
  {
    artist: "Michael Jackson",
    title: "Thriller",
    releaseDate: "1982-11-30",
    image: "https://i.ytimg.com/vi/sOnqjkJTMaA/maxresdefault.jpg",
    genre: "Pop, R&B, Rock"
  },
  {
    artist: "Nirvana",
    title: "Nevermind",
    releaseDate: "1991-09-24",
    image: "https://www.udiscovermusic.com/wp-content/uploads/2018/05/Nirvana-Nevermind-album-cover-web-optimised-820.jpg",
    genre: "Grunge, Alternative rock"
  },
  {
    artist: "Dr. Dre",
    title: "The Chronic",
    releaseDate: "1992-12-15",
    image: "https://images.genius.com/c2f9dcb88d8f5eba6f1b6fdd3629a958.800x800x1.jpg",
    genre: "West Coast Hip Hop, Gangsta rap"
  },
  {
    artist: "Bob Marley and The Wailers",
    title: "Legend",
    releaseDate: "1984-05-08",
    image: "https://images.genius.com/07c3d867c7ad10133e57e95b3c9e8f19.1000x1000x1.jpg",
    genre: "Reggae"
  },
  {
    artist: "Bruce Springsteen",
    title: "Born in the U.S.A.",
    releaseDate: "1984-06-04",
    image: "https://images.genius.com/c7d8e974f9b9c9957d4c7e859f2497a7.1000x1000x1.jpg",
    genre: "Rock, Heartland rock"
  },
{
    artist: "Outkast",
    releaseDate: "2003-09-23",
    image: "https://images.genius.com/c7e1bb9b51f8d9e4b4ba4e1d4aa4e8f4.1000x1000x1.jpg",
    genre: "Hip-Hop"
},
{
    artist: "Beyoncé",
    releaseDate: "2013-12-13",
    image: "https://m.media-amazon.com/images/I/61Ym-bAnJ5L._SS500_.jpg",
    genre: "R&B"
},
{
    artist: "Nas",
    releaseDate: "1994-09-13",
    image: "https://images.genius.com/6b94f6fadd7c1e10f9e8c9d5a0a7c5f5.1000x1000x1.jpg",
    genre: "Hip-Hop"
},
{
    artist: "JAY-Z",
    releaseDate: "2001-11-12",
    image: "https://images.genius.com/f062a3e3a3f8d0a1c56f7f11d8f05ab8.1000x1000x1.jpg",
    genre: "Hip-Hop"
},
{
    artist: "Kendrick Lamar",
    releaseDate: "2012-07-02",
    image: "https://images.genius.com/1f9f8c1b20f1f2d2c46d06e8e7faf73a.1000x1000x1.jpg",
    genre: "Hip-Hop"
}
{
  artist: "Kendrick Lamar",
  title: "good kid, m.A.A.d city",
  releaseDate: "October 22, 2012",
  image: "https://images.genius.com/7e06b44d1e719f9f3aa3a208afd3c85a.1000x1000x1.jpg",
  genre: "Hip-Hop/Rap"
},
{
  artist: "JAY-Z",
  title: "Reasonable Doubt",
  releaseDate: "June 25, 1996",
  image: "https://images.genius.com/8e3f6b0d6ffd9b43e88a5c39a96f1f5b.1000x1000x1.jpg",
  genre: "Hip-Hop/Rap"
},
{
  artist: "Frank Ocean",
  title: "channel ORANGE",
  releaseDate: "July 10, 2012",
  image: "https://images.genius.com/a0b898b26e19e7d1b3e1ad7c3d591140.1000x1000x1.jpg",
  genre: "R&B"
},
{
  artist: "Lauryn Hill",
  title: "The Miseducation of Lauryn Hill",
  releaseDate: "August 25, 1998",
  image: "https://images.genius.com/c8f2689de79d70c1d9c9fdd3c3d16cf7.1000x1000x1.jpg",
  genre: "Hip-Hop/Rap"
},
{
  artist: "Michael Jackson",
  title: "Thriller",
  releaseDate: "November 30, 1982",
  image: "https://images.genius.com/4d9b9c3e1c3b3e8cd0191f24d7a0e07e.1000x1000x1.jpg",
  genre: "Pop"
}
