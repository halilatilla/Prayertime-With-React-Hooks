import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ShowTimes from "./ShowTimes";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-left: 2vw;
`;

export default class SelectSubCities extends Component {
  state = {
    prayerTimes: [],
    subcityName: "",
    dropdownOpen: false
  };

  getPrayerTimes(subcityId, subcityName) {
    fetch(`https://ezanvakti.herokuapp.com/vakitler?ilce=${subcityId}`)
      .then(res => res.json())
      .then(prayerTimes => {
        this.setState({
          prayerTimes,
          subcityName
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
            {this.state.subcityName.length > 0 ? (
              this.state.subcityName
            ) : (
              <div>Select SubCity</div>
            )}
          </DropdownToggle>
          <DropdownMenu>
            {this.props.subCities.map(subCities => (
              <div
                onClick={() =>
                  this.getPrayerTimes(subCities.IlceID, subCities.IlceAdi)
                }
                key={subCities.IlceID}
              >
                <DropdownItem>{subCities.IlceAdi}</DropdownItem>
              </div>
            ))}
          </DropdownMenu>
        </Dropdown>

        <ShowTimes prayerTimes={this.state.prayerTimes} />
      </Wrapper>
    );
  }
}
