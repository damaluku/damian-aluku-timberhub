import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  line-height: 15.73px;
  text-transform: capitalize;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  .logoContainer {
    display: flex;
    gap: 22.1px;
    align-items: center;

    svg {
      background: #23d899;
      transform: matrix(1, 0, 0, -1, 0, 0);
      height: 21px;
      width: 19.894737243652344px;
      left: 0px;
      top: 21px;
      border-radius: 0px;
    }

    .name {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
    }
  }

  .dimentions {
    display: flex;
    gap: 1rem;

    div {
      display: flex;
      gap: 1rem;
    }
  }
`;
