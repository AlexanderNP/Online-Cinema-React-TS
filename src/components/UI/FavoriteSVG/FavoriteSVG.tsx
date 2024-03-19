import "./FavoriteSVG.css";

interface FavoriteSVGProps {
  onClick?: () => void;
  style?: string | undefined;
}

export const FavoriteSVG = ({ onClick, style }: FavoriteSVGProps) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width="4.60vw"
      height="4.60vh"
    >
      <g
        fill={style ? style : "#FFFFFF"}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M49.963,20.911c-0.1,-0.4 -0.5,-0.7 -0.9,-0.7l-6.7,-0.4l-2.4,-6.3c-0.1,-0.3 -0.5,-0.6 -0.9,-0.6c-0.4,0 -0.8,0.3 -1,0.5l-0.063,0.164v-10.575c0,-0.552 -0.448,-1 -1,-1h-24c-0.552,0 -1,0.448 -1,1v44c0,0.358 0.191,0.689 0.502,0.867c0.311,0.178 0.693,0.177 1.002,-0.003l11.496,-6.706l11.496,6.706c0.155,0.091 0.33,0.136 0.504,0.136c0.172,0 0.344,-0.044 0.498,-0.133c0.311,-0.178 0.502,-0.509 0.502,-0.867v-16.206l1.063,-0.683l5.6,3.7c0.3,0.3 0.8,0.2 1.1,0c0.4,-0.3 0.5,-0.7 0.4,-1.1l-1.7,-6.5l5.2,-4.2c0.3,-0.3 0.4,-0.7 0.3,-1.1zM42.662,25.111c-0.3,0.2 -0.4,0.6 -0.3,1l1.2,4.6l-4,-2.6c-0.1,-0.1 -0.3,-0.2 -0.5,-0.2c-0.2,0 -0.4,0.1 -0.6,0.1l-5.021,3.725l2.221,-5.725c0.1,-0.3 0,-0.8 -0.3,-1l-4.7,-3l5.8,-0.2c0.4,-0.1 0.7,-0.3 0.9,-0.7l1.7,-4.4l1.6,4.5c0.2,0.3 0.5,0.6 0.9,0.6l4.8,0.3z"></path>
        </g>
      </g>
    </svg>
  );
};
