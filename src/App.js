//Core
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
// Styles
import { theme } from './styles';
// Pages
import { RandomDish, FavouriteDishes } from './views';
//Components
import { NotFound, Layout } from './components';

const App = () => {
  return (
    <>
    <ThemeProvider theme = {theme}>
      <Routes>
        <Layout>
          <Route path="/" element={<RandomDish />}/>
          <Route path="/favourites" element={<FavouriteDishes />}/>
          <Route path="*" element={<NotFound/>} />
        </Layout>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
