import React, { Component } from "react";
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
      <>
        <Wrapper>
          <select ref="selector" onChange={e => this.chanceHandle()}>
            <option>Select SubCity</option>

            {this.props.subCities.map(subCities => (
              <option key={subCities.IlceID} value={subCities.IlceID}>
                {subCities.IlceAdi}
              </option>
            ))}
          </select>
        </Wrapper>
        <div>
          {this.state.prayerTimes.length > 0 ? (
            <ShowTimes prayerTimes={this.state.prayerTimes} />
          ) : (
            <GhostLoading>
              <List />
            </GhostLoading>
          )}
        </div>
      </>
    );
  }
}
