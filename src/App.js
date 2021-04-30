import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FruitGrid from './components/fruits/FruitGrid';
import Header from './components/ui/Header';
import './App.css';


const App = () => {

  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchItems = async () => {
      //use cors-anywhere to bypass CORS issue
      const result = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all`);
      const imageResult = await axios.get(`https://cors-anywhere.herokuapp.com/https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json`);

      axios.all([result, imageResult])
      .then(
        axios.spread((...allData) => {
          const allDataItem = allData[0].data;
          const allDataImage = allData[1].data;

          // console.log(allDataItem);
          // console.log(allDataImage);
          setItems(allDataItem);
          setImages(allDataImage);
        })
      )
    }

    fetchItems();
    setIsLoading(false);

  }, [])

  return (
    <div className="container">
      <Header />
      <FruitGrid isLoading = {isLoading} items={items} images={images}/>
      
    </div>
  )
}

export default App;
