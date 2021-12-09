import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;

  .container {
    margin: 30px auto;
    max-width: 590px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .itens li {
      display: flex;

      font-size: 13px;
      padding: 3px;
    }
    .bnt {
      display: flex;
    }
    .itens-bnt {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .MuiCard-root {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 200px;
      padding: 20px;
      margin: 20px;
    }
  }
`;
