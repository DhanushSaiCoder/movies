import React from 'react'

class UCMovieCard extends React.Component{
    render(){
        return(
            <div className='ucmc'>
                <img className='ucmImgs'src={this.props.imgUrl}/>
                <div className='overlay'>
                <h2 className='movieNameTxtUC'>{this.props.movieName}</h2>
                <p className='movieGenreTxt'>{this.props.movieGenre}</p>
                </div>
            </div>
        )
    }
}
export default UCMovieCard