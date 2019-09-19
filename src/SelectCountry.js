import React, { Component } from "react";
import SelectCity from "./SelectCity";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export default class SelectCountry extends Component {
  state = {
    data: [],
    cities: []
  };

  componentDidMount() {
    this.getCountries();
  }

  getCountries() {
    fetch("https://ezanvakti.herokuapp.com/ulkeler")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        });
        localStorage.setItem("data", JSON.stringify(data)); //data added to local storage
      });
  }

  getCities(countryId) {
    fetch(`https://ezanvakti.herokuapp.com/sehirler?ulke=${countryId}`)
      .then(res => res.json())
      .then(cities => {
        localStorage.setItem("cities", JSON.stringify(cities));
      });
    //countryId added to local storage
  }

  chanceHandle = () => {
    this.getCities(this.refs.selector.value); //selected value sent to func.
    console.log(JSON.parse(localStorage.getItem("data")));
  };

  render() {
    return (
      <Wrapper>
        <select ref="selector" onChange={e => this.chanceHandle()}>
          <option>Select Country</option>
          {JSON.parse(localStorage.getItem("data"))
            ? JSON.parse(localStorage.getItem("data")).map(country => (
                <option key={country.UlkeID} value={country.UlkeID}>
                  {country.UlkeAdi} - {country.UlkeID}
                </option>
              ))
            : this.state.data.map(country => (
                <option key={country.UlkeID} value={country.UlkeID}>
                  {country.UlkeAdi} - {country.UlkeID}
                </option>
              ))}
        </select>

        <SelectCity
          cities={
            JSON.parse(localStorage.getItem("cities"))
              ? JSON.parse(localStorage.getItem("cities"))
              : []
          }
        />
      </Wrapper>
    );
  }
}
