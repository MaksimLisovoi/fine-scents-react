import ContentLoader from 'react-content-loader';

export const GalleryItemLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={370}
      height={600}
      viewBox="0 0 300 537"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="1" y="331" rx="0" ry="0" width="192" height="28" />
      <rect x="0" y="0" rx="0" ry="0" width="300" height="300" />
      <rect x="-3" y="449" rx="0" ry="0" width="300" height="50" />
      <rect x="0" y="376" rx="0" ry="0" width="118" height="24" />
      <rect x="246" y="331" rx="0" ry="0" width="57" height="28" />
      <rect x="271" y="343" rx="0" ry="0" width="4" height="3" />
    </ContentLoader>
  );
};
