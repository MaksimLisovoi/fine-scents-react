export const Newsletter = () => {
  return (
    <div className="footer__newsletter">
      <h2 className="footer__newsletter--header">newsletter</h2>

      <form name="subscribe" className="footer__form">
        <label>
          <input
            type="email"
            name="mail"
            id="mail"
            className="footer__form--input"
            placeholder="Email"
          />
        </label>
        <label className="footer__form--checkbox">
          <input type="checkbox" name="policy" value="policy" />
          Subscribe to receive communications from Fine Scents about our
          products and services. By subscribing, you confirm you have read and
          accept our privacy policy
        </label>
      </form>
    </div>
  );
};
