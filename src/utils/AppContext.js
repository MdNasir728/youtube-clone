import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "./Api";
export const context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [data, setData] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);
  useEffect(() => {
    fetchSelectedCategoryData(searchKey);
  }, [searchKey]);

  useEffect(() => {
    fetchVideoDetail(id);
    fetchRelatedVideo(id);
  }, [id]);
  

  const fetchVideoDetail = (id) => {
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      setData(res);
    });
  };

  const fetchRelatedVideo = (id) => {
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedData(res.contents);
    });
  };

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?part=snippet&q=${query}`)
      .then((res) => {
        setSearchResults(res.contents);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          console.log('Server responded with status code:', error.response.status);
          console.log('Response data:', error.response.data);
        } else if (error.request) {
          console.log('No response received:', error.request);
        } else {
          console.log('Error creating request:', error.message);
        }
      });
  };

  return (
    <context.Provider
      value={{
        loading,
        setLoading,
        searchKey,
        setSearchKey,
        searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
        data,
        setData,
        relatedData,
        setRelatedData,
        id,
        setId,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
