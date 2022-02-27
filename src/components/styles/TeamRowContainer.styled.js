import styled from "styled-components";

const StyledTeamRowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 0.5rem;

  transition: all 0.5s;

  :hover {
    background-color: red;
    color: white;
    transform: scale(105%);
    cursor: pointer;
  }
`;

export default StyledTeamRowContainer;
