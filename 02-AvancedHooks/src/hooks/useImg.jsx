import { useEffect, useState } from "react";

export const useaImg = ({ word }) => {
  const [imgUrl, setImgUrl] = useState("#");
  useEffect(() => {
    setImgUrl(`https//apitest:word=${word}`);
  }, [word]);

  return { imgUrl };
};
