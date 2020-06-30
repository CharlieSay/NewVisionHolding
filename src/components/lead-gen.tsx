import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./signup.scss"
class EmailListForm extends React.Component<
  {},
  { email: String; success: boolean }
> {
  constructor(props) {
    super(props)
    this.state = { email: "", success: false }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addToMailchimp(this.state.email)
      .then(data => {
        this.setState({ success: true })
      })
      .catch((error: Error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.currentTarget.value })
  }

  render() {
    return (
      <div>
        {!this.state.success && (
          <form onSubmit={this.handleSubmit} className="signup">
            <h3>Want to find out more?</h3>
            <div>
              <input
                placeholder="email@email.com"
                name="email"
                type="text"
                className="input-box"
                onChange={this.handleEmailChange}
              />
              <button className="nv-button" type="submit">
                <span>Submit</span>
              </button>
            </div>
          </form>
        )}
        {this.state.success && (
          <div
            style={{
              maxWidth: "250px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ fontFamily: "Poppins", color: "white" }}>
              Thanks for registering your interest with us!
            </span>
            <div>
              <span role="img" aria-label="fire emoji">
                🔥🔥🔥🔥🔥
              </span>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EmailListForm