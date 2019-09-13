import React, { Component } from "react";
import SelectCity from "./SelectCity";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export default class SelectCountry extends Component {
  state = {
    data: [],
    countryName: "",
    cities: [],
    dropdownOpen: false
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
      });
  }

  getCities(countryId, countryName) {
    fetch(`https://ezanvakti.herokuapp.com/sehirler?ulke=${countryId}`)
      .then(res => res.json())
      .then(cities => {
        this.setState({
          cities,
          countryName
        });
      });
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <Wrapper>
        <Dropdown
          style={{ display: "flex" }}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle caret>
            {this.state.countryName.length > 0 ? (
              this.state.countryName
            ) : (
              <div>Select Country</div>
            )}
          </DropdownToggle>
          <DropdownMenu>
            {this.state.data.map(country => (
              <div
                onClick={() => this.getCities(country.UlkeID, country.UlkeAdi)}
                key={country.UlkeID}
              >
                <DropdownItem>{country.UlkeAdi}</DropdownItem>
              </div>
            ))}
          </DropdownMenu>
        </Dropdown>

        <SelectCity cities={this.state.cities} />
      </Wrapper>
    );
  }
}
