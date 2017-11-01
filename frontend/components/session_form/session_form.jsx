import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      ui: true // Disabled when doing autologin
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
    this.typeChars = this.typeChars.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.path !== newProps.match.path)
      this.props.clearErrors();
  }

  update(field) {
    return e => this.state.ui && this.setState({
      [field]: e.currentTarget.value
    });
  }

  submit() {
    const { ui, ... user } = this.state;
    this.props.submitForm(user).then(() => this.props.history.push('/map'));
  }

  handleSubmit(e) {
    e.preventDefault(e);
    this.submit();
  }

  buttonLabel() {
    return `Sign ${this.props.formType.slice(5, 8)}`
  }

  navLink() {
    if (this.props.formType === 'sign-in') {
      return (
        <div className="Links">
          <span className="session-active">{this.buttonLabel()}</span>
          <Link className="session-link" to="/sign-up" onClick={this.clearErrors}>Create New Account</Link>
        </div>
      );
    } else {
      return (
        <div className="Links">
          <Link className="session-link" to="/sign-in" onClick={this.clearErrors}>Sign In</Link>
          <span className="session-active">Create New Account</span>
        </div>);
    }
  }

  emailInput() {
    if (this.props.formType === 'sign-up'){
      return (
        <div>
        <br/>
          <input type="text"
            className="email-input"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="EMAIL"
            />
        </div>
      );
    } else
      return <div></div>;
  }

  typeChars(e) {
    e.preventDefault();
    this.setState({ username: '', password: '', ui: false });
    const username = "demoUser".split("");
    const password= "demosarecool".split("");

    const intervalId = setInterval(() => {
      if (username.length > 0) {
        this.setState({
          username: this.state.username + username.shift()
        });
      } else if (password.length > 0) {
        this.setState({
          password: this.state.password + password.shift()
        });
      } else {
        clearInterval(intervalId);
        this.submit();
      }
    }, 80);
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className={`fullpage-${this.props.formType}`}>
      <div className={`${this.props.formType}-form-container`}>
        <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>
          <br/>
          {this.navLink()}
          {this.renderErrors()}
          <div className={`${this.props.formType}-form`}>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className={`${this.props.formType}-input`}
                placeholder="USERNAME"
              />
            {this.emailInput()}
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.props.formType}-input`}
                placeholder="PASSWORD"
              />
            <br/>
            <div className="submit">
                <input className={`${this.props.formType}-submit`} type="submit" value={`${this.buttonLabel()}`}/>
              <br />
                <button className="demoLogin" onClick={this.typeChars}>{`guest ${this.buttonLabel()}`}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);
