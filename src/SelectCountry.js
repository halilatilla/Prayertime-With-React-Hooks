import React, { Component } from "react";
//import SelectCity from "./SelectCity";
import { Container, Row, Col } from "reactstrap";

export default class AllTimes extends Component {
  state = {
    data: [],
    cities: [],
    subCities: [],
    prayerTimes: []
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

  getCities(countryId) {
    fetch(`https://ezanvakti.herokuapp.com/sehirler?ulke=${countryId}`)
      .then(res => res.json())
      .then(cities => {
        this.setState({
          cities
        });
      });
  }

  getSubCities(cityId) {
    fetch(`https://ezanvakti.herokuapp.com/ilceler?sehir=${cityId}`)
      .then(res => res.json())
      .then(subCities => {
        this.setState({
          subCities
        });
      });
  }

  getPrayerTimes(subcityId) {
    fetch(`https://ezanvakti.herokuapp.com/vakitler?ilce=${subcityId}`)
      .then(res => res.json())
      .then(prayerTimes => {
        this.setState({
          prayerTimes
        });
      });
  }

  render() {
    console.log(this.state.prayerTimes[0]);

    return (
      <Container>
        <Row>
          <Col>
            Country Id : {this.state.countryId}
            {this.state.data.map(country => (
              <div
                onClick={() => this.getCities(country.UlkeID)}
                key={country.UlkeID}
              >
                {country.UlkeAdi}
                {country.UlkeID}
              </div>
            ))}
          </Col>
          <Col>
            {this.state.cities.map(cities => (
              <div
                onClick={() => this.getSubCities(cities.SehirID)}
                key={cities.SehirID}
              >
                SubCity Name {cities.SehirAdi}
              </div>
            ))}
          </Col>
          <Col>
            {this.state.subCities.map(subcity => (
              <div
                key={subcity.IlceID}
                onClick={() => this.getPrayerTimes(subcity.IlceID)}
              >
                {" "}
                {subcity.IlceAdi}{" "}
              </div>
            ))}
          </Col>
          <Col>
            {this.state.prayerTimes.map(prayers => (
              <div key={prayers.MiladiTarihUzunIso8601}>
                Aksam {prayers.Aksam}
              </div>
            ))}
            {this.state.prayerTimes.length > 0
              ? this.state.prayerTimes[0].Aksam
              : null}
          </Col>
        </Row>
      </Container>
    );
  }
}
