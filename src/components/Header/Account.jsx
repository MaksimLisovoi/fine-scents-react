import { AccountBlock } from 'components/Account/AccountBlock';
import { SignedInUser } from 'components/Account/SignedInUser';
import { useAuth } from 'hooks/useAuth';

export const Account = ({ isOpenAccMenu, toggleAccMenu, isHomePage }) => {
  const { isLoggedIn } = useAuth();
  return (
    <div
      className={`navigation-desktop__item account ${
        isOpenAccMenu ? 'is-open' : ''
      }  ${!isHomePage ? 'not-main-page' : 'main-page'}`}
    >
      <div className="flex-space-between-position">
        <h2 className="navigation-desktop__header">account</h2>
        <button
          onClick={toggleAccMenu}
          className="navigation-desktop__button"
          type="button"
          aria-expanded="false"
          aria-controls="navigation-desktop__item account"
        >
          close
        </button>
      </div>

      {isLoggedIn ? <SignedInUser /> : <AccountBlock />}
    </div>
  );
};
