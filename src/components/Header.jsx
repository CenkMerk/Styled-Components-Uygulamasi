import {
  StyledHeader,
  Nav,
  Logo,
  Image,
} from "../style/Header.styled.jsx";
import { Container } from "../style/Container.styled.jsx";
import { Button } from "../style/Button.styled.jsx";
import { Flex } from "../style/Flex.styled.jsx";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="../assets/logo.svg" alt="Logo" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="../assets/illustration-mockups.svg" alt="HeaderImage" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
