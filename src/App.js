import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FruitGrid from './components/fruits/FruitGrid';
import Header from './components/ui/Header';
import './App.css';



const App = () => {

  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all`);
      const imageResult = await axios.get(`https://cors-anywhere.herokuapp.com/https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json`);

      axios.all([result, imageResult])
      .then(
        axios.spread((...allData) => {
          const allDataItem = allData[0].data;
          const allDataImage = allData[1].data;

          console.log(allDataItem);
          console.log(allDataImage);
          setItems(allDataItem);
          setImages(allDataImage);
        })
      )
      //console.log(result.data);
      // setItems(result.data);
      // setIsLoading(false);
    }
    // const fetchImages = async () => {
    //   const imageResult = await axios.get(`https://cors-anywhere.herokuapp.com/https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json`)
    //   .then((response) => {
    //     response.data.forEach((i) => {
    //       console.log(response.i);
          
    //     });
    //   })
    //   console.log(imageResult.data);
    //   setImages(imageResult.data);
    // }

    fetchItems();
    // fetchImages();
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
