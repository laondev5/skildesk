"use client";

import React, { useState, useEffect } from "react";

const CurrencySymbol = ({ amount }) => {
  const [pay, setPay] = useState("");
  function formatCurrency(number, currency = "NGN") {
    //   // Use Intl.NumberFormat for locale-aware formatting
    const formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency,
    });
    setPay(formatter.format(number));
    // Format the number and return the result
    return formatter.format(number);
  }

  useEffect(() => {
    const getMoney = () => {
      const res = formatCurrency(amount);
      console.log(res);
      setPay(res);
    };
    getMoney(amount);
  }, []);

  return (
    <div>
      <p>{pay}</p>
    </div>
  );
};

export default CurrencySymbol;
