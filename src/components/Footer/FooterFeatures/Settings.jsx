export const Settings = () => {
  return (
    <div className="footer-features__settings">
      <h3 className="footer__header">Settings</h3>

      <div className="footer-features__block">
        <div className="footer-features__language">
          <label htmlFor="language"></label>
          <select
            className="footer-features__item"
            id="language"
            name="language"
          >
            <option value="English">English</option>
            <option value="Espanol">Espanol</option>
          </select>
        </div>
        <div>
          <label htmlFor="currancy"></label>
          <select
            className="footer-features__item"
            id="currancy"
            name="currancy"
          >
            <option value="USD">$USD</option>
            <option value="EU">€EU</option>
          </select>
        </div>
      </div>
    </div>
  );
};
