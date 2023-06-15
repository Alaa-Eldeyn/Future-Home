import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      Future<span>Home</span>
    </Wrapper>
  );
};
const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  font-family: "Playball", cursive;
  font-size: 38px;
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
