import { Settings } from './Settings';
import { Social } from './Social';
import { Support } from './Support';

export const FooterFeatures = () => {
  return (
    <div className="footer-features">
      <Support />
      <Settings />
      <Social />
    </div>
  );
};
