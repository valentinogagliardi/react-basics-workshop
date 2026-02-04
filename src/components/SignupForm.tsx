const SignupForm = () => (
  <div className="signup-form">
    <div className="card">
      <div className="card__header">
        <h2 className="card__title">Create an account</h2>
        <p className="card__description">
          Enter your information below to create your account
        </p>
      </div>
      <div className="card__content">
        <form
          onSubmit={(evt) => {
            evt.preventDefault()
          }}
        >
          <div className="form__fields">
            <div className="form__field">
              <label htmlFor="name" className="form__label">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="form__input"
              />
              <p className="form__field-description">
                We'll use this to contact you. We will not share your email with
                anyone else.
              </p>
            </div>
            <div className="form__field">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="form__input"
              />
              <p className="form__field-description">
                Must be at least 8 characters long.
              </p>
            </div>
            <div className="form__field">
              <label htmlFor="confirm-password" className="form__label">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                className="form__input"
              />
              <p className="form__field-description">
                Please confirm your password.
              </p>
            </div>
            <div className="form__field">
              <button type="submit" className="button button--primary">
                Create Account
              </button>
              <button type="button" className="button button--secondary">
                Sign up with Google
              </button>
              <p className="form__description">
                Already have an account? <a href="#">Sign in</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default SignupForm
