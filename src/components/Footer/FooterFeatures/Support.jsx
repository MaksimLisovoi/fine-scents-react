import { NavLink } from 'react-router-dom';

export const Support = () => {
  return (
    <div className="footer-features__support">
      <h3 className="footer__header">Support</h3>

      <ul className="footer-features__block">
        <li>
          <NavLink className="footer-features__link" to="/">
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-features__link" to="/">
            Shipping
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-features__link" to="/">
            Privacy policy
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-features__link" to="/">
            Our story
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-features__link" to="/">
            FAQs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
