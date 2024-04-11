import styled, { css } from "styled-components";

export const StyledNavBar = styled.div`
  ${({ color }) => css`
    background-color: black;
    color: ${color || "white"};
    position: absolute;
    top: 0;
    width: 100vw;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
