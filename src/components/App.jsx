import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { SharedLayout } from './SharedLayout';

const delay = ms => new Promise(res => setTimeout(res, ms));

const Home = lazy(async () => {
  await delay(2000);
  return import('../pages/Home');
});

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
