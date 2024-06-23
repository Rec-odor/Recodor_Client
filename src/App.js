import GlobalStyle from './components/GlobalStyle.js';

import Home from './pages/Home.js';
import ProductList from './pages/ProductList.js';
import BrandList from './pages/BrandList.js';
import FindFavor from './pages/FindFavor.js';
import DetailPage from './pages/DetailPage.js';

import Result16 from './pages/resultpage/Result16.js';
import Result22 from './pages/resultpage/Result22.js';
import Result34 from './pages/resultpage/Result34.js';

import { Routes, Route } from 'react-router-dom';
import MyPage from './pages/MyPage.js';
import WishList from './pages/WishList.js';
import SearchPage from './pages/SearchPage.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/brand" element={<BrandList />} />
        <Route path="/findfavor" element={<FindFavor />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/products/:dataId" element={<DetailPage />} />

        <Route path="/survey-result-16" element={<Result16 />} />
        <Route path="/survey-result-22" element={<Result22 />} />
        <Route path="/survey-result-34" element={<Result34 />} />
      </Routes>
    </>
  );
}

export default App;
