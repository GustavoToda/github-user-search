import React from 'react';
import Search from '..';
import Navbar from '../../../components/Navbar';
import ImageLoader from '../../components/Loaders/ImageLoader';
import InfoLoader from '../../components/Loaders/InfoLoader';
import './styles.scss';

const User = () => {
    return (
        <>
            <Navbar />
            <div className="row">
                <Search />
                <ImageLoader />
                <div>

                </div>
                <InfoLoader />
                <div>

                </div>
            </div>
        </>
    );
}

export default User;