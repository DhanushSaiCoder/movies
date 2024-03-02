import React from 'react';
class MovieCard extends React.Component{
    redirectIbomma = () => {
        const { url } = this.props;
    
        window.location.href = url;
    }
    redirectYoutube = () => {
        const { yt } = this.props;
    
        window.location.href = yt;
    }
    render(){
        return(
            <div className='movieCardDiv'>
                {/*<img className= 'MovieImg' src={this.props.imgUrl}/>*/}
                <div className='movieImgDiv' style={{backgroundImage: `url(${this.props.imgUrl})`}}></div>
                
                
                <div className='movieInfoDiv'>
                    <div className='nameDiv'>
                    <h4 className='movieNameTxt'>{this.props.movieName}</h4>
                    <h4 className='movieNameTxt'>{this.props.movieName2}</h4>
                    </div>
                    <h5 className='movieGenreTxt'>{this.props.movieGenre}</h5>
                    <p className='rating'><span className='star'>★ </span>{this.props.rating}/<span className='ten'>10</span></p>
                    <button onClick={this.redirectYoutube} className='trailerBtn' ><img src='yt.png' className='ytImg'/>Trailer</button>
                    <button onClick={this.redirectIbomma} className='watchBtn'>Watch Now</button>
                </div>
            </div>
        )
    }
}
export default MovieCard