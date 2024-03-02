import React from 'react';
import MovieCard from './MovieCard.js';
import EndCard from './EndCard.js'
class ActionThriller extends React.Component {
    render() {
        return (
            <div className="sectionDiv">
                <h2 className='genreName'>{this.props.genreName}</h2>
                <div className='sectionCardsDiv'>

                    <MovieCard 
                        yt='https://youtu.be/2sX0lElZKQE'
                        url='https://phd.ibomma.re/te-a1cwn/eagle-2024-wtc2h-telugu-movie-watch-online.html'
                        movieName='EAGLE'
                        imgUrl='./Images/eagle.jpeg'
                        movieGenre='Action / Thriller'
                        rating='8.3'
                    />
                    <MovieCard 
                        yt='https://youtu.be/6UVXGcjYY4k?si=GqO812WZsX4vokB6'
                        url='https://phd.ibomma.re/te-a1cwn/devil-2023-u3tdr-telugu-movie-watch-online.html'
                        movieName='Devil'
                        imgUrl='./images/devil.jpeg'
                        movieGenre='Action / Thriller'
                        rating='6.6'
                    />

                    <MovieCard 
                        yt='https://youtu.be/Eqzk-fjinmw'
                        url='https://phd.ibomma.re/te-a1cwn/captain-miller-2024-jny2o-telugu-movie-watch-online.html'
                        movieName='Captain'
                        movieName2='Miller'
                        imgUrl='/Images/captain-miller-et00333139-1688130090.jpg'
                        movieGenre='Action / Crime'
                        rating='6.7'
                    />

                    <MovieCard 
                        yt = 'https://youtu.be/CdwIA8ZBksQ'
                        url = 'https://phd.ibomma.re/te-a1cwn/tiger-nageswara-rao-2023-brf3s-telugu-movie-watch-online.html'
                        movieName='Tiger Nag'
                        movieName2='eshwar rao'
                        imgUrl='./images/tNag.jpg'
                        movieGenre='Action / Thriller'
                        rating='6.1'
                    />

                    <MovieCard 
                        yt = 'https://youtu.be/DYLG65xz55U.'
                        url = 'https://phd.ibomma.re/te-a1cwn/guntur-kaaram-2024-uav2q-telugu-movie-watch-online.html'
                        movieName='Guntur Ka'
                        movieName2='aram'
                        imgUrl='./images/gunturKaram.jpeg'
                        movieGenre='Action / Thriller'
                        rating='5.4'
                    />

                    <MovieCard
                        yt = 'https://youtu.be/z2POY4PBR9s'
                        url = 'https://phd.ibomma.re/te-a1cwn/saindhav-2024-mst3g-telugu-movie-watch-online.html'
                        movieName='Saindhav'
                        imgUrl='./images/saindhav.jpeg'
                        movieGenre='Action / Thriller'
                        rating='5.0'
                    />

                    

                    <MovieCard 
                        yt = 'https://youtu.be/vnjZY-Ib9Z0'
                        url = 'https://phd.ibomma.re/te-a1cwn/antony-2023-qrs2d-telugu-movie-watch-online.html'
                        movieName='Antony'
                        imgUrl='./images/antony.jpeg'
                        movieGenre='Action / Thriller'
                        rating='6.7'
                    />

                    

                    <MovieCard 
                        yt = 'https://youtu.be/MbcPCSkIEb4?si=c_MxMplk6Hhnu2Ix'
                        url = 'https://phd.ibomma.re/te-a1cwn/naa-saami-ranga-2024-gyn5a-telugu-movie-watch-online.html'
                        movieName='Naa Saami'
                        movieName2='Ranga'
                        imgUrl='./images/nsranga.jpg'
                        movieGenre='Action / Drama'
                        rating='4.5'
                    />

                    <MovieCard 
                        yt = 'https://youtu.be/9mMXvF38Qn4'
                        url = 'https://phd.ibomma.re/te-a1cwn/valentines-night-2023-gsy8t-telugu-movie-watch-online.html'
                        movieName='Valentine'
                        movieName2='Night'
                        imgUrl='./images/vNight.jpg'
                        movieGenre='Thriller / Romance'
                        rating='7.8'
                    />

                    <MovieCard 
                        yt = 'https://youtu.be/76lOQYi2nTs'
                        url = 'https://phd.ibomma.re/te-a1cwn/bhamakalapam-2-2024-msk2c-telugu-movie-watch-online.html'
                        movieName='Bhama'
                        movieName2='kalapam 2'
                        imgUrl='./images/bk2.jpeg'
                        movieGenre='Thriller / Comedy'
                        rating='6.1'
                    />
                    <EndCard/>

                </div>
                
            </div>
        );
    }
}

export default ActionThriller;