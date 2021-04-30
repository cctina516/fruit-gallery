import React from 'react';

const FruitItem = ({ item, image }) => {

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={image} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Genus:</strong>{item.genus}
                        </li>
                        <li>
                            <strong>Family:</strong>{item.family}
                        </li>
                        <li>
                            <strong>Order:</strong>{item.order}
                        </li>
                        <li>       
                            <strong>Nutritions:</strong>
                        </li>
                        <li>
                            <strong>Carbohydrates:</strong>{item.nutritions.carbohydrates}
                        </li>
                        <li>
                            <strong>Protein:</strong>{item.nutritions.protein}
                        </li>
                        <li>
                            <strong>Fat:</strong>{item.nutritions.fat}
                        </li>
                        <li>
                            <strong>Calories:</strong>{item.nutritions.calories}
                        </li>
                        <li>
                            <strong>Sugar:</strong>{item.nutritions.sugar}
                        </li>
                                                
                </ul>
                </div>
            </div>          
        </div>
    )
}

export default FruitItem;
