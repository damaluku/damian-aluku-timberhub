import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  padding: 0 34px;
  margin-top: 83px;

  font-family: "Mukta Mahee";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 55px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  button {
    background: #ffffff;
    border: 2px solid #23d899;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    text-transform: uppercase;
    padding: 8px 16px;
    font-weight: bold;
    gap: 10px;
  }
`;
