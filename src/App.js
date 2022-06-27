import {
  Banner,
  Header,
  Navbar,
  ProductPreview,
  Row,
  Summary,
} from "./components";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="section__padding">
        <Navbar />
        <Banner />
        <ProductPreview />
        <Row category="phones" />
        <Row category="HeadPhones" />
        <Row category="BlueTooth Speakers" />
        <ProductPreview />
        <Row category="Laptops" />
        <Row category="Smart watches" />
        <Row category="Gaming" />
      </main>
      <Summary />
    </>
  );
}

export default App;
