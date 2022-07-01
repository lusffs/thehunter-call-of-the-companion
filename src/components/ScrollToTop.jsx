import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const history = useLocation()
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [history]);

  return null;
}

export default ScrollToTop;
