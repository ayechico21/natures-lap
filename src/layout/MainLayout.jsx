import { useRef } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToFooter={scrollToFooter} />
      <ScrollToTop />
      <Outlet/>
      <Footer ref={footerRef} />
    </>
  );
};

export default MainLayout;