import React, {Suspense, lazy} from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import AppLayout from './layout/AppLayout';
import LoadingSpinner from './common/components/LoadingSpinner';

//lazy import
const HomePage = lazy(()=> import('./pages/HomePage/HomePage'));
const SearchPage = lazy(()=> import('./pages/SearchPage/SearchPage'));
const SearchWithKeywordPage = lazy(() => import('./pages/SearchWithKeywordPage/SearchWithKeywordPage'));
const PlaylistDetailPage = lazy(() => import('./pages/PlaylistDetailPage/PlaylistDetailPage'));
//const PlaylistPage = lazy(() => import('./pages/PlaylistPage/PlaylistPage'));


// 0. 사이드바 있어야함 (플레이리스트, 메뉴)
// 1. 홈페이지  /
// 2. 서치페이지  /search
// 3. 서치 결과 페이지  /search/:keyword
// 4. 플레이리스트 디테일 페이지  /playlist/:id
// 5. (모바일버전) 플레이리스트 보여주는 페이지 /playlist

function App() {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="search" element={<SearchPage/>}/>
          <Route path="search/:keyword" element={<SearchWithKeywordPage/>}/>
          <Route path="playlist/:id" element={<PlaylistDetailPage/>}/>
          {/* <Route path="playlist" element={<PlaylistPage/>}/> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
