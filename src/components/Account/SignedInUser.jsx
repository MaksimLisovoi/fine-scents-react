import { NavLink } from 'react-router-dom';

export const SignedInUser = () => {
  return (
    <>
      <div className="account__signed-in signed-in">
        <h3 className="signed-in__header">Welcome!</h3>

        <p className="signed-in__username">Miss. Jennifer Priestley</p>
        <NavLink to="/" className="account__sign-in-form--btn signed-in__btn">
          Account Information
        </NavLink>
      </div>
    </>
  );
};
