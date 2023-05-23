import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import store from "store";
import { Provider } from 'react-redux';
import Error from "containers/errors/error404";
import Home from "containers/pages/home";
import Nosotros from "containers/pages/nosotros";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error display */}
          <Route path="*" element={<Error />} />
          {/* Home display */}
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />

        </Routes>
      </Router>
    </Provider>
    
  );
}

export default App;
