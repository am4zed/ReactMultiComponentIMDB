import React, {Component} from "react";
import Film from "../components/Film.js"

class FilmList extends Component{
    
    render(){
        const filmNodes = this.props.data.map(film => {
            return (
                <Film url={film.url} id={film.id}>{film.name}</Film>
            )
        });

        return(
            <>
            {filmNodes}
            </>
        )
    }
}

export default FilmList;