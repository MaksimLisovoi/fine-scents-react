export const GallerySliderCtrls = () => {
  return (
    <div className="section-gallery__slideshow-controls">
      <button className="section-gallery__slideshow-btn gallery-prev">
        <svg
          width="161"
          height="8"
          viewBox="0 0 161 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.646454 4.35354C0.451187 4.15828 0.451187 3.84169 0.646454 3.64643L3.82843 0.464452C4.0237 0.26919 4.34027 0.26919 4.53554 0.464452C4.73079 0.659715 4.73079 0.976297 4.53554 1.17156L1.70711 3.99999L4.53554 6.82841C4.73079 7.02368 4.73079 7.34026 4.53554 7.53552C4.34027 7.73078 4.0237 7.73078 3.82843 7.53552L0.646454 4.35354ZM161 4.5L1 4.49999L1 3.49999L161 3.5L161 4.5Z"
            fill="#E5DFD3"
          />
        </svg>
      </button>
      <button className="section-gallery__slideshow-btn gallery-next">
        <svg
          width="161"
          height="8"
          viewBox="0 0 161 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M160.354 4.35354C160.549 4.15828 160.549 3.8417 160.354 3.64644L157.172 0.464456C156.976 0.269194 156.66 0.269194 156.464 0.464457C156.269 0.659719 156.269 0.976301 156.464 1.17156L159.293 3.99999L156.464 6.82842C156.269 7.02368 156.269 7.34026 156.464 7.53552C156.66 7.73079 156.976 7.73079 157.172 7.53552L160.354 4.35354ZM3.0598e-08 4.5L160 4.49999L160 3.49999L-3.0598e-08 3.5L3.0598e-08 4.5Z"
            fill="#E5DFD3"
          />
        </svg>
      </button>
    </div>
  );
};
