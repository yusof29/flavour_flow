import styled from "styled-components";

export const StyledFormSection = styled.section`
  padding: 40px 0;
  display: flex;
  align-items: center;
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;

    h1 {
      font-size: 36px;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 10px;
    }

    p {
      color: ${({ theme }) => theme.colors.secondary};
      margin-bottom: 10px;
      font-size: 20px;
    }
  }

  form {
    display: flex;
    align-items: center;

    div {
      width: 300px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      border-radius: 50px;
      margin-right: 10px;
      background-color: #e2dddd;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);

      @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 200px;
      }

      input {
        width: 100%;
        padding: 10px;
        background-color: transparent;
        outline: none;
        border: none;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 18px;
      }
    }

    button {
      font-size: 18px;
      background-size: 200% auto;
      color: white;
      padding: 10px 30px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: 0.5s;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3),
        0 4px 6px -4px rgb(0 0 0 / 0.3);
      background-image: linear-gradient(
        45deg,
        #d61c4e 0%,
        #ec4899 51%,
        #d61c4e 100%
      );

      &:hover {
        background-position: right center;
      }
    }
  }
`;
