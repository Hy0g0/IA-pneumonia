import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageDataURL = e.target.result;
      setSelectedImage(imageDataURL);
    };

    reader.readAsDataURL(file);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const handleButtonClick2 = () => {
    setIsLoading(false);

  }
  const handleButtonClick = () => {
    if (selectedImage) {
      setIsLoading(true);
      setResponse(null);

      // Create a FormData object to send the image file
      const formData = new FormData();
      formData.append('image', selectedImage);

      // Make the API request
      fetch('http://localhost:5000/api/engine', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          // Handle the API response here
          let resp = JSON.parse(data.response);
          console.log(resp);
          console.log(resp.message + " " + resp.confidence);
          setResponse(resp);
        })
        .catch(error => {
          // Handle any errors that occur during the API request
          console.error(error);
        })
    } else {
      // Show an error message to the user
      console.error('No image selected');
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Pneumonia Detector</h1>
        <p>
          Find if an image contains pneumonia or not
        </p>
        {(
          <input type="file" hidden={isLoading} accept="image/*" onChange={handleImageUpload} />
        )}
        {selectedImage && (
          <img src={selectedImage} hidden={isLoading} alt="Selected" className="selected-image" />
        )}
        {!isLoading && (
          <button hidden={isLoading} onClick={handleButtonClick}>Submit</button>
        )}
        {isLoading && (response === null) && <p>Loading...</p>}
        {response && <p hidden={!isLoading}>Pneumonia : {response.answer}</p>}
        {response && <p hidden={!isLoading}>Diagnosis: {response.message}</p>}
        {response && <p hidden={!isLoading}>Confidence : {response.confidence}</p>}

        {(
          <button hidden={!isLoading} onClick={handleButtonClick2}>reset</button>
        )}
      </header>
    </div>
  );
};
export default App;
