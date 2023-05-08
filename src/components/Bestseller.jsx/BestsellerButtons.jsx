export const BestsellerButtons = () => {
  return (
    <div className="bestseller__buttons-block">
      <button className="bestseller__button bestseller-prev control-prev">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="52"
            y="52"
            width="52"
            height="52"
            transform="rotate(-180 52 52)"
            fill="#333333"
          />
          <path
            d="M20 26L29.6491 16L31 17.4L22.7018 26L31 34.6L29.6491 36L20 26Z"
            fill="#E5DFD3"
          />
        </svg>
      </button>
      <button className="bestseller__button bestseller-next control-next">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="52"
            height="52"
            transform="matrix(1 0 0 -1 0 52)"
            fill="#333333"
          />
          <path
            d="M32 26L22.3509 16L21 17.4L29.2982 26L21 34.6L22.3509 36L32 26Z"
            fill="#E5DFD3"
          />
        </svg>
      </button>
    </div>
  );
};
