import tailwindConfig from '../../tailwind.config';
import { socialMediaInfo } from '../constants/socials';
const themeColors = tailwindConfig.theme.extend.colors;

export const IconButton = ({ socialMedia }) => {
  const currentSocialMediaInfo = socialMediaInfo[socialMedia]
  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="h-12 w-12 flex justify-center items-center rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:scale-110"
      style={{ backgroundColor: currentSocialMediaInfo.color['600'] }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill={themeColors.primary['50']}
        viewBox="0 0 24 24">
        <path d={currentSocialMediaInfo.svgPath} />
      </svg>
    </button>
  );
}