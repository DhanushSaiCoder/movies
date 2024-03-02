import React from 'react';
import MovieCard from './MovieCard.js';
import EndCard from './EndCard.js'

class Romance extends React.Component {
    render() {
        return (
            <div className="sectionDiv">
                <h2 className='genreName'>{this.props.genreName}</h2>
                <div className='sectionCardsDiv'>
                    <MovieCard 
                        movieName='Game On' 
                        imgUrl='./images/gameOn.jpg' 
                        movieGenre='Romance / Drama' 
                        rating='8.1'
                        url='https://phd.ibomma.re/te-a1cwn/game-on-2024-p2ubl-telugu-movie-watch-online.html'
                        yt='https://youtu.be/RA3Z5lrPags'
                    />
                    <MovieCard 
                        movieName='Bubble' 
                        movieName2='Gum' 
                        imgUrl='./images/bGum.jpeg' 
                        movieGenre='Romance / Drama' 
                        rating='6.5'
                        url='https://phd.ibomma.re/te-a1cwn/bubblegum-2023-vg5ta-telugu-movie-watch-online.html'
                        yt='https://youtu.be/zbZgcA75lh8'
                    />
                    <MovieCard 
                        movieName='Raa Raa' 
                        movieName2='Penimiti' 
                        imgUrl='./images/rrPenimiti.jpeg' 
                        movieGenre='Romance / Mystery' 
                        rating='6.8'
                        url='https://phd.ibomma.re/te-a1cwn/raa-raa-penimiti-2023-jhg4d-telugu-movie-watch-online.html'
                        yt='https://youtu.be/O6KYBc5VyI4'
                    />
                    <EndCard/>
                    
                </div>
            </div>
        );
    }
}

export default Romance;