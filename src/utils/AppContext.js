
import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "./Api";
export const context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
    useEffect(() => {
        fetchSelectedCategoryData( selectedCategory);
    }, [ selectedCategory]);
    useEffect(() => {
        fetchSelectedCategoryData( searchKey);
    }, [ searchKey]);


    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(( contents) => {
            console.log(contents)
            setSearchResults(contents.contents);
            setLoading(false);
        }).catch((err)=> console.log(err));
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
            }}
        >
            {props.children}
        </context.Provider>
    );
};