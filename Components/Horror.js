import React from 'react';
import MovieCard from './MovieCard.js';
import EndCard from './EndCard.js'

class Horror extends React.Component {
    render() {
        return (
            <div className="sectionDiv">
                <h2 className='genreName'>{this.props.genreName}</h2>
                <div className='sectionCardsDiv'>
                    <MovieCard 
                        movieName='Pindam'
                        imgUrl='./images/pindam.jpeg'
                        movieGenre='Horror / Thriller'
                        rating='6.9'
                        url='https://phd.ibomma.re/te-a1cwn/pindam-2023-hrv2s-telugu-movie-watch-online.html'
                        yt='https://youtu.be/z6kDXxDyrqA'
                    />

                </div>
            </div>
        );
    }
}

export default Horror;