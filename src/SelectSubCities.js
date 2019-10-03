import React, { useState, useRef } from "react";
import ShowTimes from "./ShowTimes";
import styled from "styled-components";
import { List } from "react-content-loader";

const Wrapper = styled.section`
  margin-left: 2vw;
`;

const GhostLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  width: 50%;
  padding: 3%;
`;

const SelectSubCities = ({ subCities }) => {
  const [prayerTimes, setprayerTimes] = useState([]);
  const inputRef = useRef(null);

  function getPrayerTimes(subcityId) {
    fetch(`https://ezanvakti.herokuapp.com/vakitler?ilce=${subcityId}`)
      .then(res => res.json())
      .then(prayerTimes => {
        setprayerTimes(prayerTimes);
      });
  }

  const chanceHandle = () => {
    getPrayerTimes(inputRef.current.value);
  };

  return (
    <>
      <Wrapper>
        <select ref={inputRef} onChange={() => chanceHandle()}>
          <option>Select SubCity</option>

          {subCities.map(subCities => (
            <option key={subCities.IlceID} value={subCities.IlceID}>
              {subCities.IlceAdi}
            </option>
          ))}
        </select>
      </Wrapper>
      <div>
        {prayerTimes.length > 0 ? (
          <ShowTimes prayerTimes={prayerTimes} />
        ) : (
          <GhostLoading>
            <List />
          </GhostLoading>
        )}
      </div>
    </>
  );
};

export default SelectSubCities;
