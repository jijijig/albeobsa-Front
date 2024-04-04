<<<<<<< HEAD
import React from "react";
export default function Home() {
  return (
  
    <p>
      Hello, world!
    </p>
 
  );
}

=======
"use client";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
  <Container>
    <p>
      Hello, world!
    </p>
  </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
`;
>>>>>>> 6b985d4c3184b2abb14d2fa02c70f465f62a713f
