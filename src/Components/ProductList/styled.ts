import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  background-color: lightgrey;

  font-family: "sans-serif";
`;
export const Card = styled.div`
  max-width: 280px;
  img {
    width: 55px;
    height: 100px;
  }
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5px;
`;
export const Cart = styled.div`
  img {
    width: 40px;
  }
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  P {
    font-size: 10px;
    max-width: 70px;
  }
`;
export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const Button = styled.div`
  width: 60px;
  padding: 5px;
  font-size: 10px;
  background-color: lime;
  border: none;
  border-radius: 20px;
`;
