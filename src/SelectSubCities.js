import React, { Component } from "react";
import ShowTimes from "./ShowTimes";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-left: 2vw;
`;

export default class SelectSubCities extends Component {
  state = {
    prayerTimes: []
  };

  getPrayerTimes(subcityId) {
    fetch(`https://ezanvakti.herokuapp.com/vakitler?ilce=${subcityId}`)
      .then(res => res.json())
      .then(prayerTimes => {
        this.setState({
          prayerTimes
        });
      });
  }

  chanceHandle = () => {
    this.getPrayerTimes(this.refs.selector.value);
  };
  render() {
    return (
      <Wrapper>
        <select ref="selector" onChange={e => this.chanceHandle()}>
          <option>Select SubCity</option>

          {this.props.subCities.map(subCities => (
            <option key={subCities.IlceID} value={subCities.IlceID}>
              {subCities.IlceAdi}
            </option>
          ))}
        </select>
        {this.state.prayerTimes.length > 0 && (
          <ShowTimes prayerTimes={this.state.prayerTimes} />
        )}
      </Wrapper>
    );
  }
}
