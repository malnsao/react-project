import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import Route from "./route";
import Content from "@/components/Content";
import { useSelector, useDispatch } from "react-redux";
import { getCurrencies } from "@/services/auth";
import { useRef } from "react";
import { onChangeCurrency } from "@/store/reducer/authSlice";

function App() {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const mountRef = useRef(true);

  return (
    <BrowserRouter>
      <IntlProvider
        locale={language.locale}
        defaultLocale="en"
        messages={language.messages}>
        <Content>
          <Route />
        </Content>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
