import React, { Component } from "react";
import SelectSubCities from "./SelectSubCities";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-left: 2vw;
`;

export default class SelectCity extends Component {
  state = {
    subCities: []
  };

  getSubCities(cityId) {
    fetch(`https://ezanvakti.herokuapp.com/ilceler?sehir=${cityId}`)
      .then(res => res.json())
      .then(subCities => {
        this.setState({
          subCities
        });
      });
  }

  chanceHandle = () => {
    this.getSubCities(this.refs.selector.value);
  };
  render() {
    return (
      <Wrapper>
        <select ref="selector" onChange={e => this.chanceHandle()}>
          <option>Select City</option>

          {this.props.cities.map(cities => (
            <option key={cities.SehirID} value={cities.SehirID}>
              {cities.SehirAdi}
            </option>
          ))}
        </select>
        <SelectSubCities subCities={this.state.subCities} />
      </Wrapper>
    );
  }
}
