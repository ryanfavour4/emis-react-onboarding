import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes/Routes";
import { RootStore } from "./store/context/RootStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <Router>
            <RootStore>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Routers />
            </RootStore>
        </Router>
    );
}

export default App;

