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
  const {
    Imsak,
    Gunes,
    Ogle,
    Ikindi,
    Aksam,
    Yatsi,
    MiladiTarihUzun
  } = prayerTimes[0];

  return (
    <Wrapper>
      <h4>{MiladiTarihUzun}</h4>
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
          {prayerTimes.length > 0 ? (
            <tr>
              <td>{Imsak}</td>
              <td>{Gunes}</td>
              <td>{Ogle}</td>
              <td>{Ikindi}</td>
              <td>{Aksam}</td>
              <td>{Yatsi}</td>
            </tr>
          ) : null}
        </tbody>
      </Table>
    </Wrapper>
  );
}
