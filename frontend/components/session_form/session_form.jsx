import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
    this.typeChars = this.typeChars.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.path !== newProps.match.path){
      this.props.clearErrors();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submit() {
    const user = this.state;
    this.props.submitForm(user).then(() => (this.props.history.push('/map')));
  }

  handleSubmit(e) {
    e.preventDefault(e);
    this.submit();
  }

  navLink() {
    if (this.props.formType === 'sign-in') {
      return (<div className="Links"><span>Sign In</span><Link to="/sign-up" onClick={this.clearErrors}>Create New Account</Link></div>);
    } else {
      return (<div className="Links"><Link to="/sign-in" onClick={this.clearErrors}>Sign In</Link><span>Create New Account</span></div>);
    }
  }

  typeChars(e) {
    e.preventDefault();
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
            <br/>
              <input type="text"
                className="email-input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="EMAIL"
                />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className={`${this.props.formType}-input`}
                placeholder="PASSWORD"
              />
            <br/>
            <div className="submit">
              <input type="submit" value={this.props.formType}/>
              <button className="demoLogin" onClick={this.typeChars}>guest sign-in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);
