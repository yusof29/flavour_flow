import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { StyledFormSection, StyledFlex } from "./styled/Form.styled";
import { Container } from "./styled/Container.styled";

const Form = ({ submitHandle, searchIn, setSearchIn }) => {
  return (
    <StyledFormSection>
      <Container>
        <StyledFlex>
          <div>
            <h1>Flavour Flow</h1>
            <p>Get Food Recipes for free</p>
          </div>

          <form onSubmit={submitHandle}>
            <div>
              <AiOutlineSearch size={25} />
              <input
                value={searchIn}
                onChange={(e) => setSearchIn(e.target.value)}
                type="text"
                placeholder="search ingredients"
              />
            </div>
            <button>Get</button>
          </form>
        </StyledFlex>
      </Container>
    </StyledFormSection>
  );
};

export default Form;
