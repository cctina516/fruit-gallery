import React from 'react';
import FruitItem from './FruitItem';
import Spinner from '../ui/Spinner';


const FruitGrid = ({ items, images, isLoading }) => { 
    //if loading show spinner, otherwise map the data 
    return isLoading ? (
        <Spinner />
    ) : (
        //map and combine data from two data sources together
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
