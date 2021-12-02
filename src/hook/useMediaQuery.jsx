import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (props) => {
  const [check, setCheck] = useState(
    window.document.documentElement.clientWidth <= (props || 1376)
  );

  const resize = useCallback(() => {
    setCheck(window.document.documentElement.clientWidth <= (props || 1376));
  }, [props]);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return check;
};
