import styled from "styled-components";

export const Wrapper = styled.header`
border-bottom:1px solid #bdb6b6;
background-color: #f3f3f3cc;
  .container {
    max-width: 1060px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    .h1-svg{
        padding: 10px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .svg-text{
      padding-left: 5px;
      p{
        padding-left: 7px;
      }
      
    }

    h1 {
      text-transform: capitalize;
      color: #4f4a4a;
    }

    .menu {
      .svg-text,
      span {
        color: #4f4a4a;
        display: flex;
        align-items: center;
        
       
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        
        li {
          padding: 10px;
        }
      }
    }
  }
`;
