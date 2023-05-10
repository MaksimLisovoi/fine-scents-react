export const SideBar = ({ mainImg, mainImgDesktop, heading }) => {
  return (
    <div className="second-main">
      <div className="second-main__body">
        <div className="second-main__sidebar sidebar">
          <div className="sidebar__content">
            <h1 className="sidebar__content--heading">{heading}</h1>
            <p className="sidebar__content--text">
              You can define the text for the subtitle
            </p>
          </div>
          <div className="sidebar__content--block">
            <button className="sidebar-btn">
              <span className="sidebar__content--text">SEE MORE</span>
            </button>
          </div>
        </div>
        <div className="second-main__img">
          <picture>
            <source media="(min-width: 950px)" srcSet={mainImgDesktop} />

            <source media="(min-width: 320px)" srcSet={mainImg} />
            <img src={mainImg} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};
