import { render } from "solid-js/web";
import { ThemeProvider } from 'solid-styled-components';
import App from './containers/App';
import { themes } from './utils/themeConfig';
import "./assets/css/main.css"
import './globalStyles';

render(
  () => (
    <ThemeProvider theme={themes.default}>
      <App />
    </ThemeProvider>
  ),
  document.getElementById('root') as any
);
