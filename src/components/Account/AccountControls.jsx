export const AccountControls = ({
  onRegisterClick,
  onLogInClick,
  isRegisterSelect,
}) => {
  return (
    <div className="flex-space-between-position btn-position">
      <button
        onClick={onLogInClick}
        className={`account-block__btn ${!isRegisterSelect ? 'active' : ''} `}
      >
        Sign in
      </button>
      <button
        onClick={onRegisterClick}
        className={`account-block__btn ${!isRegisterSelect ? '' : 'active'} `}
      >
        Create account
      </button>
    </div>
  );
};
