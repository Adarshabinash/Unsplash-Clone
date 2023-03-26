import React, { useState } from "react";

const Unsplash_clone = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const fetchTheImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=jvNZUAdCWbCTg4yrc5DMpUDG9O0TU73o13ahJwi5Ivw&query=${value}&orientaion=squarish`
    )
      .then((res) => res.json())
      .then((data) => setResult(data.results)); //This is to update our result
  };

  return (
    <div className="unsplash">
      <span>Search</span>
      <input
        type="text"
        placeholder="search image"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={fetchTheImages}>Go</button>
      <div className="myImages">
        {result.map((item) => (
          <img className="items" key={item.id} src={item.urls.regular} />
        ))}
      </div>
    </div>
  );
};

export default Unsplash_clone;

//Summary of the above code-

/**
 * First, we have to create a new application in the unsplash developer api and retrieve the secret key.
 * We then have to retrieve the client_id and query so that our passed in parameter can get a result.
 * we have to create a function that will fetch the api given our secret key and the client_id.
 * We have to create an useState with array so that the result we will get can be stored in it. After fetching we update this array with the fetched data's results.
 * Finally using the map function on this array, we can display our images in an img tag with src as our result's urls(I prefer regular)
 */
