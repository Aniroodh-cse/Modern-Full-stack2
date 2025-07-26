import './Form.css';

const Form = () => {
  return (
    <>
      <div className="formcon">
        <form className="formContainer">
          <h1>Sign Up for Today</h1>
          <p>Please fill out this form to register</p>
          <input type="username" placeholder="Username" /><br />
          <input type="email" placeholder="Email" /><br />
          <input type="password" placeholder="Password" /><br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
