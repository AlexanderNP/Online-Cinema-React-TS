import styles from './SliderArrow.module.css'

interface SliderArrowProps{
  direction: string;
  onClick?: () => void;
}

export const SliderArrow = ({ onClick, direction }: SliderArrowProps) => {
  return (
    <div className={styles.sliderArrows} onClick={onClick}>
      {direction === "left" ? (
        <svg className={styles.sliderArrowsLeft} width="8.000000" height="16.000000" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <g opacity="0.200000">
            <path id="Vector" d="M8 16L0 8L8 0L8 16Z" fill="#F2F2F2" fillOpacity="1.000000" fillRule="nonzero"/>
          </g>
        </svg>
      ) : (
        <svg className={styles.sliderArrowsRight} width="8.000000" height="16.000000" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <g opacity="0.200000">
            <path id="Vector" d="M8 16L0 8L8 0L8 16Z" fill="#F2F2F2" fillOpacity="1.000000" fillRule="nonzero"/>
          </g>
        </svg>
      )}
    </div>
  );
};

