import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { GlobalStyles } from "./styles/GlobalStyles";

// Componente Funcional do React
function App() {
  return (
    <>
      <Header />
      <ProductList/>
      <GlobalStyles />
    </>
  );
}

export default App;
