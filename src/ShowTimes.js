import React from "react";
import { Table } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.section`
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

export default function ShowTimes({ prayerTimes }) {
  return (
    <Wrapper>
      <h4>{prayerTimes[0].MiladiTarihKisa}</h4>
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
            <td>{prayerTimes.length > 0 ? prayerTimes[0].Imsak : null}</td>
            <td>{prayerTimes.length > 0 ? prayerTimes[0].Gunes : null}</td>
            <td>{prayerTimes.length > 0 ? prayerTimes[0].Ogle : null}</td>
            <td>{prayerTimes.length > 0 ? prayerTimes[0].Ikindi : null}</td>
            <td>{prayerTimes.length > 0 ? prayerTimes[0].Aksam : null}</td>
            <td>{prayerTimes.length > 0 ? prayerTimes[0].Yatsi : null}</td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
}
