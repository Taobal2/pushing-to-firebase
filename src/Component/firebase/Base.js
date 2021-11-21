import React, { useState, useEffect } from "react";
import styled from "styled-components";

const base = () => {
  return (
    <Container>
      <Wrapper>
        <Card>Good</Card>
      </Wrapper>
    </Container>
  );
};

export default base;

const Container = styled.div``;
const Wrapper = styled.div``;
const Card = styled.div``;
