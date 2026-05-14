//fechar e abrir sessão
//como fazer?
//deixar o botão artistas aberto em display, ao clicar no jogos, a lista deve trocar 
//criar seção para cada categoria, e esconder as outras quando clicar em uma delas
//
const sectionArtists = document.querySelector('#artists');
const sectionGames = document.querySelector('#games');
const sectionMovies = document.querySelector('#movies');

const btnArtists = document.querySelector('#btn-artists');
const btnGames = document.querySelector('#btn-games');
const btnMovies = document.querySelector('#btn-movies');


let activeSection = 'artists';

btnArtists.addEventListener('click', () => {
    if (activeSection === 'artists') {
        sectionArtists.style.display = 'none';
        activeSection = null;
    } else {
        sectionArtists.style.display = 'block';
        sectionGames.style.display = 'none';
        sectionMovies.style.display = 'none';
        activeSection = 'artists';
    }
});

btnGames.addEventListener('click', () => {
    if (activeSection === 'games') {
        sectionGames.style.display = 'none';
        activeSection = null;
    } else {
        sectionArtists.style.display = 'none';
        sectionGames.style.display = 'block';
        sectionMovies.style.display = 'none';
        activeSection = 'games';
    }
});

btnMovies.addEventListener('click', () => {
    if (activeSection === 'movies') {
        sectionMovies.style.display = 'none';
        activeSection = null;
    } else {
        sectionArtists.style.display = 'none';
        sectionGames.style.display = 'none';
        sectionMovies.style.display = 'block';
        activeSection = 'movies';
    }
});

