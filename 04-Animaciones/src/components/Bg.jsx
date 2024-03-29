import tailwindConfig from '../../tailwind.config';
const themeColors = tailwindConfig.theme.extend.colors;

const linesColor = themeColors.primary['50']
export const BackGround = () => {
  return (
    <div className="fixed" style={{ width: '100vw', height: '100vh' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnssvgjs="http://svgjs.dev/svgjs"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        {/* url(&quot;#SvgjsLinearGradient1681&quot;) */}
        <g mask="url(&quot;#SvgjsMask1680&quot;)" fill="none">
          <rect width="1920" height="1080" x="0" y="0" fill={"url(#CustomLinearGradient)"}></rect>
          <path className="lineBg" d="M -616.8463065969189,639 C -520.85,603 -328.85,466.6 -136.84630659691894,459 C 55.15,451.4 151.15,585.4 343.1536934030811,601 C 535.15,616.6 631.15,542.2 823.1536934030811,537 C 1015.15,531.8 1111.15,610 1303.153693403081,575 C 1495.15,540 1659.78,357.8 1783.153693403081,362 C 1906.52,366.2 1892.63,549.2 1920,596" stroke={linesColor} opacity={.3} strokeWidth="2"></path>
          <path className="lineBg" d="M -543.3588559198489,645 C -447.36,586.4 -255.36,356.6 -63.35885591984891,352 C 128.64,347.4 224.64,619.2 416.6411440801511,622 C 608.64,624.8 704.64,350 896.6411440801511,366 C 1088.64,382 1184.64,696.8 1376.6411440801512,702 C 1568.64,707.2 1747.97,406 1856.6411440801512,392 C 1965.31,378 1907.33,584 1920,632" stroke={linesColor} opacity={.3} strokeWidth="2"></path>
          <path className="lineBg" d="M -235.7386316164815,495 C -139.74,530.8 52.26,698 244.2613683835185,674 C 436.26,650 532.26,384.6 724.2613683835185,375 C 916.26,365.4 1012.26,609 1204.2613683835184,626 C 1396.26,643 1492.26,470.6 1684.2613683835184,460 C 1876.26,449.4 2117.11,580.2 2164.2613683835184,573 C 2211.41,565.8 1968.85,453.8 1920,424" stroke={linesColor} opacity={.3} strokeWidth="2"></path>
          <path className="lineBg" d="M -601.2866603519158,615 C -505.29,577 -313.29,430.8 -121.28666035191583,425 C 70.71,419.2 166.71,564.8 358.7133396480842,586 C 550.71,607.2 646.71,509.8 838.7133396480842,531 C 1030.71,552.2 1126.71,691.8 1318.7133396480842,692 C 1510.71,692.2 1678.46,544.6 1798.7133396480842,532 C 1918.97,519.4 1895.74,609.6 1920,629" stroke={linesColor} opacity={.3} strokeWidth="2"></path>
          <path className="lineBg" d="M -497.86325601479666,368 C -401.86,438.2 -209.86,721.2 -17.86325601479664,719 C 174.14,716.8 270.14,363.4 462.13674398520334,357 C 654.14,350.6 750.14,659 942.1367439852033,687 C 1134.14,715 1230.14,499.2 1422.1367439852033,497 C 1614.14,494.8 1802.56,693 1902.1367439852033,676 C 2001.71,659 1916.43,464.8 1920,412" stroke={linesColor} opacity={.3} strokeWidth="2"></path>
          <path className="lineBg" d="M -796.0102038457544,541 C -700.01,518.8 -508.01,405.6 -316.0102038457544,430 C -124.01,454.4 -28.01,655 163.9897961542456,663 C 355.99,671 451.99,487.6 643.9897961542456,470 C 835.99,452.4 931.99,594.6 1123.9897961542456,575 C 1315.99,555.4 1444.79,373.2 1603.9897961542456,372 C 1763.19,370.8 1856.8,529.6 1920,569" stroke={linesColor} opacity={.3} strokeWidth="2"></path>
          <path className="lineBg" d="M -910.9338298192847,552 C -814.93,535.2 -622.93,449.2 -430.93382981928477,468 C -238.93,486.8 -142.93,649.8 49.06617018071523,646 C 241.07,642.2 337.07,439 529.0661701807153,449 C 721.07,459 817.07,696.2 1009.0661701807153,696 C 1201.07,695.8 1306.88,440.2 1489.0661701807153,448 C 1671.25,455.8 1833.81,677.6 1920,735" stroke={linesColor} opacity={.3} strokeWidth="2"></path>
        </g>
        <defs>
          <mask id="SvgjsMask1680">
            <rect width="1920" height="1080" fill="#ffffff"></rect>
          </mask>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1681">
            <stop stopColor="rgba(27, 0, 62, 1)" offset="0"></stop>
            <stop stopColor="rgba(0, 0, 0, 1)" offset="1"></stop>
          </linearGradient>
          <linearGradient id="CustomLinearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary['600'], stopOpacity: 1 }} />
            <stop offset="40%" style={{ stopColor: themeColors.primary['950'], stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.primary['950'], stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};