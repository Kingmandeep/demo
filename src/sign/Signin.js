import "./signin.css";
const Signin = () => {
  return (
    <div className="sign">
      <form action="#" >
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="email">
            <b>Email </b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <br></br>
          <label for="psw">
            <b>Password </b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <br></br>
          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              
            />
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="/" >
              Terms & Privacy
            </a>
            .
          </p>

          <div class="clearfix">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
