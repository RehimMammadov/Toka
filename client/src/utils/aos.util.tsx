import { useEffect } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      offset: 70,
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAOS;