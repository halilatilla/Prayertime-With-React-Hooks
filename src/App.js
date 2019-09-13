import React from "react";
import SelectCountry from "./SelectCountry";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: palevioletred;
  height: 50vh;
`;
function App() {
  return (
    <Wrapper>
      <SelectCountry />
    </Wrapper>
  );
}

export default App;
