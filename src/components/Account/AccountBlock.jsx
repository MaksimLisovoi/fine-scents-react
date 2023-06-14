import { useState } from 'react';
import { AccountControls } from './AccountControls';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const AccountBlock = () => {
  const [isRegisterSelect, setIsRegisterSelect] = useState(false);
  const [isLogInSelect, setIsLogInSelect] = useState(true);

  const onRegisterClick = () => {
    setIsRegisterSelect(true);
    setIsLogInSelect(false);
  };

  const onLogInClick = () => {
    setIsLogInSelect(true);
    setIsRegisterSelect(false);
  };
  return (
    <div className="account-block">
      <AccountControls
        isRegisterSelect={isRegisterSelect}
        onRegisterClick={onRegisterClick}
        onLogInClick={onLogInClick}
      />
      {isRegisterSelect ? <SignUp /> : <SignIn />}
    </div>
  );
};
