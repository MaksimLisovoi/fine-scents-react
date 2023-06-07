import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = event.currentTarget;

    dispatch(
      authOperations.logIn({
        email: data.get('mail'),
        password: data.get('password'),
      })
    );

    form.reset();
  };
  return (
    <div className="account__sign-in-form">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="mail"
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
          By clicking "Sign In", I agree to the Terms and Conditions and Privacy
          Policy.
        </p>
        <button className="account__sign-in-form--btn">Sign in</button>
      </form>
    </div>
  );
};
