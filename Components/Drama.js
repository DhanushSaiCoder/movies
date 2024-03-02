import React from 'react';
import MovieCard from './MovieCard.js';
import EndCard from './EndCard.js'

 class Drama extends React.Component {
    render() {
        return (
            <div className="sectionDiv">
                <h2 className='genreName'>
                    {this.props.genreName}
                </h2>
                <div className='sectionCardsDiv'>
                    <MovieCard
                        movieName='Geetha Sak'
                        movieName2='shiga'
                        imgUrl='./images/gSakshiga.jpeg'
                        movieGenre='Drama'
                        rating='6.9'
                        url='https://phd.ibomma.re/te-a1cwn/geetha-saakshiga-2023-rds4i-telugu-movie-watch-online.html'
                        yt='https://youtu.be/OelForjg-lA'
                    />
                    <MovieCard
                        movieName='Ambajipet M'
                        movieName2='arriage Band'
                        imgUrl='./images/amBand.jpg'
                        movieGenre='Drama'
                        rating='6.9'
                        url='https://phd.ibomma.re/te-a1cwn/ambajipeta-marriage-band-2024-bh8gn-telugu-movie-watch-online.html'
                        yt='https://youtu.be/8YE7Vzs1jgk'
                    />
                    <MovieCard
                        movieName='Two Souls'
                        movieName2=''
                        imgUrl='./images/twoSouls.jpeg'
                        movieGenre='Drama / Romance'
                        rating='7.9'
                        url='https://phd.ibomma.re/te-a1cwn/two-souls-2023-yl2cp-telugu-movie-watch-online.html'
                        yt='https://youtu.be/0s9vYHN1yLI'
                    />
                             <EndCard/>
           
                </div>
            </div>
        );
    }
}

export default Drama; 