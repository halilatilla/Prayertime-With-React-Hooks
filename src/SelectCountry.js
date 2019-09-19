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
    cities: [],
    defaultCountryId: ""
  };

  componentDidMount() {
    this.getCountries();
    /*  localStorage.setItem(
      "data",
      this.state.data > 0 && this.state.data.map(country => country.UlkeAdi)
    ); */
  }
  getCountries() {
    fetch("https://ezanvakti.herokuapp.com/ulkeler")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        });
      });
  }

  getCities(countryId) {
    fetch(`https://ezanvakti.herokuapp.com/sehirler?ulke=${countryId}`)
      .then(res => res.json())
      .then(cities => {
        this.setState({
          cities
        });
      });
  }

  chanceHandle = () => {
    this.getCities(this.refs.selector.value);
    this.setState({
      defaultCountryId: this.refs.selector.value
    });
  };

  render() {
    return (
      <Wrapper>
        <select ref="selector" onChange={e => this.chanceHandle()}>
          <option>Select Country</option>
          {this.state.data.map(country => (
            <option key={country.UlkeID} value={country.UlkeID}>
              {country.UlkeAdi}
            </option>
          ))}
        </select>

        <SelectCity cities={this.state.cities} />
      </Wrapper>
    );
  }
}
