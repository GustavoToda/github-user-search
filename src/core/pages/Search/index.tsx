import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import './styles.scss';

const Search = () => {
        return (
            <>
                <Navbar />
                <div className="search-bar">
                    <div>
                        <h1 className="search-title">
                            Encontre um perfil Github
                        </h1>
                    </div>
                    <input className="search-tool"/>
                    <Link to="/search/user">
                    <div className="btn-search" >
                       <Button text="Encontrar" />
                    </div>  
                    </Link>
                </div>
            </>
        );
    }

    export default Search;