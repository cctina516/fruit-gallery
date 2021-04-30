import React from 'react';
import FruitItem from './FruitItem';
import Spinner from '../ui/Spinner';


const FruitGrid = ({ items, images, isLoading }) => { 

    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
        <React.Fragment>
        {items.map((item, key) => {
            return <FruitItem key={item.id} item={item} image={images[key]}></FruitItem>

        })}

        </React.Fragment>
        </section>
    )   

}

export default FruitGrid;
