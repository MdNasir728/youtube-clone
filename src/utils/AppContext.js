import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const context = createContext();
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [data, setData] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  const [id, setId] = useState("");

  const fetchSelectedCategoryData = async (url) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${BASE_URL}/search/?part=snippet&q=${url}`,
        options
      );
      setSearchResults(response.data.contents);
    } catch (error) {
      if (error.response) {
        console.log(
          "Server responded with status code:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error creating request:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const fetchVideoDetail = async (url) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${BASE_URL}/video/details/?id=${url}`,
        options
      );
      setData(response.data);
    } catch (error) {
      if (error.response) {
        console.log(
          "Server responded with status code:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error creating request:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const fetchRelatedVideo = async (url) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${BASE_URL}/video/related-contents/?id=${url}`,
        options
      );
      setRelatedData(response.data.contents);
    } catch (error) {
      if (error.response) {
        console.log(
          "Server responded with status code:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error creating request:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);
  useEffect(() => {
    fetchSelectedCategoryData(searchKey);
  }, [searchKey]);

  useEffect(() => {
    fetchVideoDetail();
    fetchRelatedVideo();
  }, [id]);

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
