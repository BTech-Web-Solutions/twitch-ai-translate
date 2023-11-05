import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({
  fromOrTo,
  value,
  setFrom = () => {},
  setTo = () => {},
  apiCountries,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("COUNTRY");

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    if (fromOrTo === "from") {
      setFrom(country.langCode);
    } else {
      setTo(country.langCode);
    }
    setIsVisible(false);
  };

  return (
    <>
      <div
        className="countries"
        value={selectedCountry.langCode}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="countries__selected-country">
          {selectedCountry === "COUNTRY" ? (
            <span>COUNTRY</span>
          ) : (
            <img src={selectedCountry.image} alt={selectedCountry.name} />
          )}
        </div>
        {isVisible && (
          <span className="countries__dropdown">
            {apiCountries.map((country) => (
              <img
                key={country.name}
                src={country.image}
                alt={country.name}
                onClick={() => handleCountryClick(country)}
              />
            ))}
          </span>
        )}
      </div>
    </>
  );
};

export default Dropdown;
