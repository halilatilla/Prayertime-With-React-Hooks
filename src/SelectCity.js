import React, { useState, useRef } from "react";
import SelectSubCities from "./SelectSubCities";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-left: 2vw;
`;

const SelectCity = ({ cities }) => {
  const [subCities, setsubCities] = useState([]);
  const inputRef = useRef(null);

  function getSubCities(cityId) {
    fetch(`https://ezanvakti.herokuapp.com/ilceler?sehir=${cityId}`)
      .then(res => res.json())
      .then(subCities => {
        setsubCities(subCities);
      });
  }

  const chanceHandle = () => {
    getSubCities(inputRef.current.value);
  };

  return (
    <Wrapper>
      <select ref={inputRef} onChange={e => chanceHandle()}>
        <option>Select City</option>
        {cities.map(cities => (
          <option key={cities.SehirID} value={cities.SehirID}>
            {cities.SehirAdi}
          </option>
        ))}
      </select>
      <SelectSubCities subCities={subCities} />
    </Wrapper>
  );
};

export default SelectCity;
