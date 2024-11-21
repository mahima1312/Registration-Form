import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.getValidateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  getValidateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  renderFirstName = () => {
    const {showFirstNameError, firstName} = this.state
    const errorClassName = showFirstNameError ? 'input error' : 'input'
    return (
      <>
        <label htmlFor="firstName" className="label">FIRST NAME</label>
        <input
        id="firstName"
          className={errorClassName}
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = () => {
    const isValidLastName = this.getValidateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  getValidateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  renderLastName = () => {
    const {showLastNameError, lastName} = this.state
    const errorClassName = showLastNameError ? 'input error' : 'input'

    return (
      <>
        <label htmlFor="lastName" className="label">LAST NAME</label>
        <input
        id="lastName"
          className={errorClassName}
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.getValidateFirstName()
    const isValidLastName = this.getValidateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="first-name-container">
          {this.renderFirstName()}
          {showFirstNameError && <p className="error-msg">Required</p>}
        </div>

        <div className="last-name-container">
          {this.renderLastName()}
          {showLastNameError && <p className="error-msg">Required</p>}
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderFormSubmittedSuccessfully = () => {
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="success-msg">Submitted Successfully</p>
        <button
          className="submit-another-btn"
          type="button"
          onClick={this.onClickSubmitAnotherResponse}
        >
          Submit Another Response
        </button>
      </>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="form-container">
          {isFormSubmitted
            ? this.renderFormSubmittedSuccessfully()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
