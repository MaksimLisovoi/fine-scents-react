export const Account = ({ isOpenAccMenu, closeAccMenu, isHomePage }) => {
  return (
    <div
      className={`navigation-desktop__item account ${
        isOpenAccMenu ? 'is-open' : ''
      }  ${!isHomePage ? 'not-main-page' : ''}`}
    >
      <div className="flex-space-between-position">
        <h2 className="navigation-desktop__header">account</h2>
        <button
          onClick={closeAccMenu}
          className="navigation-desktop__button"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item account"
        >
          close
        </button>
      </div>
      <div className="account-block">
        <div className="flex-space-between-position btn-position">
          <button className="account-block__btn active">Sign in</button>
          <button className="account-block__btn">Create account</button>
        </div>
        <div className="account__sign-in-form">
          <form>
            <label>
              <input
                type="email"
                name="mail"
                id="mail"
                className="account__sign-in-form--input margin-bottom-40"
                placeholder="Email"
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                id="password"
                className="account__sign-in-form--input"
                placeholder="Password"
              />
            </label>
            <button className="forgot-pass">Forgot Password</button>
            <p className="account__sign-in-form--paragraph">
              By clicking "Sign In", I agree to the Terms and Conditions and
              Privacy Policy.
            </p>
            <button className="account__sign-in-form--btn">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};
