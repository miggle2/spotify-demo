import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchWithKeywordPage from './pages/SearchWithKeywordPage/SearchWithKeywordPage';
import PlaylistDetailPage from './pages/PlaylistDetailPage/PlaylistDetailPage';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';

// 0. 사이드바 있어야함 (플레이리스트, 메뉴)
// 1. 홈페이지  /
// 2. 서치페이지  /search
// 3. 서치 결과 페이지  /search/:keyword
// 4. 플레이리스트 디테일 페이지  /playlist/:id
// 5. (모바일버전) 플레이리스트 보여주는 페이지 /playlist

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="search" element={<SearchPage/>}/>
        <Route path="search/:keyword" element={<SearchWithKeywordPage/>}/>
        <Route path="playlist/:id" element={<PlaylistDetailPage/>}/>
        {/* <Route path="playlist" element={<PlaylistPage/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
