//compoents
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer"
//style
import { ThemeProvider } from "styled-components";
import { Container } from "./style/Container.styled";
import GlobalStyles from "./style/Global.styled";
//data
import CardData from "./Data/Data";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
 
  return (
    <ThemeProvider theme={theme}>
      <> 
        <GlobalStyles />
        <Header />
        <Container>
          {CardData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer/> 
      </>
    </ThemeProvider>
  );
}

export default App;
