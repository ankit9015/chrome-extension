import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Quotes.css";

const Quotes = () => {
  const [quoteDisplayed, updateQuoteDisplayed] = useState<string>("");
  const getQuotes = async () => {
    const { data: quotesList } = await axios.get(`https://type.fit/api/quotes`);
    const randomNum = Math.floor(Math.random() * 200 - 1);
    const newQuote = `${quotesList[randomNum].text} - ${quotesList[randomNum].author}`;
    updateQuoteDisplayed(newQuote);
  };
  useEffect(() => {
    getQuotes();
  }, []);
  return <div className="quote_text">{quoteDisplayed}</div>;
};

export default Quotes;
