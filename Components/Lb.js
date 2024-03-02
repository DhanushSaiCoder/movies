import React from 'react';
import UCMovieCard from './UCMovieCard.js';
class Lb extends React.Component {
    render() {
        return (
            <div className='lbDiv'>
            
                <div className='leaderBoardDiv'>
                    <h1>LeaderBoard</h1>
                    <div className='firstCardDivContainer'>
                        <h2>#1</h2>
                        <UCMovieCard
                            imgUrl = './Images/eagle.jpeg'
                            movieName = 'Eagle'
                            movieGenre = 'Rating: 8.3 / 10'
                        />
                        
                    </div>
                    <div className='secondCardDivContainer'>
                        <h2>#2</h2>
                        
                        <UCMovieCard
                            imgUrl = './images/gameOn.jpg'
                            movieName = 'Game On'
                            movieGenre = 'Rating: 8.1 / 10'
                        />
                        
                         
                     
                    </div>
                    <div className='thirdCardDivContainer'>
                        <h2>#3</h2>
                        
                    <UCMovieCard
                        imgUrl = './images/twoSouls.jpeg'
                        movieName = 'Two Souls'
                        movieGenre = 'Rating: 7.9 / 10'
                                            />
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Lb;