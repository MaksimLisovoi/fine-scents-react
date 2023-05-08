import { NavLink } from 'react-router-dom';

export const Social = () => {
  return (
    <div className="footer-features__social">
      <h3 className="footer__header">Social media</h3>

      <ul className="footer-features__block">
        <li>
          <NavLink className="footer-features__link" to="/">
            Instagram
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-features__link" to="/">
            Facebook
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-features__link" to="/">
            Twitter
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-features__link" to="/">
            YouTube
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
