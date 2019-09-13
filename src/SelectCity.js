import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import SelectSubCities from "./SelectSubCities";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-left: 2vw;
`;

export default class SelectCity extends Component {
  state = {
    cityName: "",
    subCities: [],
    dropdownOpen: false
  };

  getSubCities(cityId, cityName) {
    fetch(`https://ezanvakti.herokuapp.com/ilceler?sehir=${cityId}`)
      .then(res => res.json())
      .then(subCities => {
        this.setState({
          subCities,
          cityName
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
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {this.state.cityName.length > 0 ? (
              this.state.cityName
            ) : (
              <div>Select City</div>
            )}
          </DropdownToggle>
          <DropdownMenu>
            {this.props.cities.map(cities => (
              <div
                onClick={() =>
                  this.getSubCities(cities.SehirID, cities.SehirAdi)
                }
                key={cities.SehirID}
              >
                <DropdownItem>{cities.SehirAdi}</DropdownItem>
              </div>
            ))}
          </DropdownMenu>
        </Dropdown>

        <SelectSubCities subCities={this.state.subCities} />
      </Wrapper>
    );
  }
}
