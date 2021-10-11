import "./styles.css";
import { ProductPage } from "./pages/Product/ProductPage";
import { ProductData } from "./utils/mock";

const App = () => <ProductPage {...ProductData} />;

export default App;
