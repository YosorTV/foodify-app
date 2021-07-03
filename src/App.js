//Core
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { NotFound, Layout } from './components';
//Components

const App = () => {
  return (
    <>
    <ThemeProvider>
      <Routes>
        <Layout>
          <Route path="/" element={<h1>random</h1>}/>
          <Route path="/favourites" element={<h1>favourites</h1>}/>
          <Route path="*" element={<NotFound/>} />
        </Layout>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
