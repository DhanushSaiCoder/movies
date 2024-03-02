import React from 'react'
import UCMovieCard from './UCMovieCard.js'
class Upcoming extends React.Component{
    render(){
        
        return(
            <div className='ucDiv'>
            <h1 className='upComingTxt'>Up Coming</h1>
             <p className='movieGenreTxt'>Top Awaited Movies</p>
            
            <div className='ucDivDiv'>
                <UCMovieCard
                    imgUrl='./Upcoming/gaami.jpeg'
                    movieName='Gaami'
                    movieGenre='Drama / Adventure'
                />
                <UCMovieCard
                    imgUrl='./Images/Bhimaa-.jpg'
                    movieName='Bheema'
                    movieGenre='Adventure'
                />      
                <UCMovieCard
                    imgUrl='./Images/dIsmart.jpeg'
                    movieName='Double Ismart'
                    movieGenre='Action / Thriller'
                 />
                <UCMovieCard
                    imgUrl='./Images/tilluSquare.jpeg'
                    movieName='Tillu Square'
                    movieGenre='Comedy / Romance'
                 />    
                <UCMovieCard
                    imgUrl='./Images/familyStar.jpg'
                    movieName='Family Star'
                    movieGenre='Family Entertainer'
                 />    
                <UCMovieCard
                    imgUrl='./Images/devara.jpeg'
                    movieName='Devara'
                    movieGenre='Actiorn / Thriller'
                 />     
                <UCMovieCard
                    imgUrl='./Images/p2.jpeg'
                    movieName='Pushpa 2'
                    movieGenre='Actiorn / Thriller'
                 />                 
            </div>
            </div>
        )
    }
}
export default Upcoming