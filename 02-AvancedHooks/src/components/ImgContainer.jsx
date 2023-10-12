import { useaImg } from "../hooks/useImg";

export const ImgContainer = ({ word }) => {
  const { imgUrl } = useaImg({ word });
  return (
    <section>
      <img src={imgUrl} alt={word + "img"} />
    </section>
  );
};
