import styled from "styled-components";

export const StyledResultsSection = styled.section`
  padding: 40px 0;
`;

export const StyledFilter = styled.div`
  padding: 0 0 20px 0;
  text-align: center;

  button {
    font-size: 15px;
    border: 1px solid #d61c4e;
    color: #d61c4e;
    background-color: #f8cbd7;
    margin-right: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    outline: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-bottom: 10px;
    }

    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease-in background-color 0.3s;

    &:hover {
      background-color: #d61c4e;
      color: white;
    }
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 20px 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const StyledCard = styled.div`
  background-color: #f8cbd7;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);
  grid-column: span 1 / span 1;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    text-align: center;
    padding: 16px 8px;

    h2 {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 8px;
    }

    p {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 18px;
    }
  }
`;

export const StyledNoAvailable = styled.div`
  color: green;
  text-align: center;
  grid-column: span 3 / span 3;
`;

export const StyledLoading = styled.div`
  color: green;
  text-align: center;
  grid-column: span 3 / span 3;
`;
