describe('Movie Model',function(){

    it ('Model should exist',function(){
        expect(app.Models.Movie).toBeDefined();
    })


    it('Movies names',function(){
        var movie1 = new app.Models.Movie(FIXTURES.movies.movie1);
        var movie2 = new app.Models.Movie(FIXTURES.movies.movie2);
        var movie3 = new app.Models.Movie(FIXTURES.movies.movie3);
        var movie4 = new app.Models.Movie(FIXTURES.movies.movie4);
        console.log(`Name of the 1st movie is ${movie1.names()}`)
        console.log(`Name of the 2nd movie is ${movie2.names()}`)
        console.log(`Name of the 3rd movie is ${movie3.names()}`)
        console.log(`Name of the 4th movie is ${movie4.names()}`)

        expect(movie1.names()).toEqual('Avatar')
        expect(movie2.names()).toEqual('KGF');
        expect(movie3.names()).toEqual('Pushpa');
        expect(movie4.names()).toEqual('Titanic');

    }),

    it('checking the movie gentre',function(){
        var movie1 = new app.Models.Movie(FIXTURES.movies.movie1);
        var movie2 = new app.Models.Movie(FIXTURES.movies.movie2);
        var movie3 = new app.Models.Movie(FIXTURES.movies.movie3);
        var movie4 = new app.Models.Movie(FIXTURES.movies.movie4);

        expect(movie1.ishorrormovie()).toBe(false)
        expect(movie1.iscomedymovie()).toBe(true)

        expect(movie2.iscomedymovie()).toBe(false)
        expect(movie2.isadventuremovie()).toBe(true)

        expect(movie3.ishorrormovie()).toBe(false)
        expect(movie3.isactionmovie()).toBe(true)

        expect(movie4.isadventuremovie()).toBe(false)
        expect(movie4.ishorrormovie()).toBe(true)
    }),
    it('checking the movies rating',function(){
        var movie1 = new app.Models.Movie(FIXTURES.movies.movie1);
        var movie2 = new app.Models.Movie(FIXTURES.movies.movie2);
        var movie3 = new app.Models.Movie(FIXTURES.movies.movie3);
        var movie4 = new app.Models.Movie(FIXTURES.movies.movie4);

        expect(movie1.rating()).toEqual('4.5')
        expect(movie2.rating()).toEqual('4.8')
        expect(movie3.rating()).toEqual('4.3')
        expect(movie4.rating()).toEqual('4.5')
        
    })
})