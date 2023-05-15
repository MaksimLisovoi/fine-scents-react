import { NavLink } from 'react-router-dom';

export const About = ({
  isHomePage,
  toggleAboutMenu,
  isOpenAboutMenu,
  closeAboutMenu,
}) => {
  return (
    <div
      className={`navigation-desktop__item about ${
        isOpenAboutMenu && !isHomePage ? 'is-open' : ''
      } ${!isHomePage ? 'not-main-page' : 'main-page'} `}
    >
      <div className="flex-space-between-position">
        <h2 className="navigation-desktop__header">about</h2>
        <button
          onClick={toggleAboutMenu}
          className="navigation-desktop__button"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item shop"
        >
          close
        </button>
      </div>

      <div>
        <NavLink
          onClick={closeAboutMenu}
          to="about"
          className="navigation-desktop__section-about"
        >
          <h3 className="about-header">Our Charity Mission</h3>
          <p className="about-paragraph">
            Our mission has always been to inspire, connect and uplift people
            through fragrance.
          </p>
          <p className="about-paragraph arrow">
            And so, our work with mental health charities over the past decade
            is a natural evolution of this mission.
          </p>
        </NavLink>
      </div>
    </div>
  );
};
