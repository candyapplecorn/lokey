import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
<<<<<<< HEAD
      email: ''
=======
      email: '',
      ui: true // Disabled when doing autologin
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
    this.typeChars = this.typeChars.bind(this);
  }

  componentWillReceiveProps(newProps) {
<<<<<<< HEAD
    if(this.props.match.path !== newProps.match.path){
      this.props.clearErrors();
    }
  }

  update(field) {
    return e => this.setState({
=======
    if(this.props.match.path !== newProps.match.path)
      this.props.clearErrors();
  }

  update(field) {
    return e => this.state.ui && this.setState({
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
      [field]: e.currentTarget.value
    });
  }

  submit() {
<<<<<<< HEAD
    const user = this.state;
    this.props.submitForm(user).then(() => (this.props.history.push('/map')));
=======
    const { ui, ... user } = this.state;
    this.props.submitForm(user).then(() => this.props.history.push('/map'));
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
  }

  handleSubmit(e) {
    e.preventDefault(e);
    this.submit();
  }

  buttonLabel() {
<<<<<<< HEAD
    const form = this.props.formType.slice(5, 8);
    return "Sign " + form;
=======
    return `Sign ${this.props.formType.slice(5, 8)}`
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
  }

  navLink() {
    if (this.props.formType === 'sign-in') {
<<<<<<< HEAD
      return (<div className="Links"><span className="session-active">{this.buttonLabel()}</span><Link className="session-link" to="/sign-up" onClick={this.clearErrors}>Create New Account</Link></div>);
    } else {
      return (<div className="Links"><Link className="session-link" to="/sign-in" onClick={this.clearErrors}>Sign In</Link><span className="session-active">Create New Account</span></div>);
=======
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
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
    }
  }

  emailInput() {
    if (this.props.formType === 'sign-up'){
<<<<<<< HEAD
      return(
=======
      return (
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
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
<<<<<<< HEAD
    }else {
      return <div></div>;
    }
=======
    } else
      return <div></div>;
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
  }

  typeChars(e) {
    e.preventDefault();
<<<<<<< HEAD
    const username = "demoUser".split("");
    const password= "demosarecool".split("");
=======
    this.setState({ username: '', password: '', ui: false });
    const username = "demoUser".split("");
    const password= "demosarecool".split("");

>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
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
