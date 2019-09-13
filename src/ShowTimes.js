import React, { Component } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export default class ShowTimes extends Component {
  render() {
    return (
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>İmsak</th>
              <th>Güneş</th>
              <th>Öğle</th>
              <th>İkindi</th>
              <th>Akşam</th>
              <th>Yatsı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.prayerTimes.length > 0
                  ? this.props.prayerTimes[0].Imsak
                  : null}
              </td>
              <td>
                {this.props.prayerTimes.length > 0
                  ? this.props.prayerTimes[0].Gunes
                  : null}
              </td>

              <td>
                {this.props.prayerTimes.length > 0
                  ? this.props.prayerTimes[0].Ogle
                  : null}
              </td>
              <td>
                {this.props.prayerTimes.length > 0
                  ? this.props.prayerTimes[0].Ikindi
                  : null}
              </td>

              <td>
                {this.props.prayerTimes.length > 0
                  ? this.props.prayerTimes[0].Aksam
                  : null}
              </td>
              <td>
                {this.props.prayerTimes.length > 0
                  ? this.props.prayerTimes[0].Yatsi
                  : null}
              </td>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    );
  }
}
