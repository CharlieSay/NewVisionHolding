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
      <div style={{paddingBottom: `32px`}}>
        {!this.state.success && (
          <form onSubmit={this.handleSubmit} className="signup">
            <div>
              <input
                placeholder="your@email.com"
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
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              textAlign: "center",
              fontSize: "32px",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            Your free bundle is on its way!
          </h1>
          <span style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              textAlign: "center",
              fontSize: "12px",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}>Please allow up to 15 minutes for your bundle to land in your inbox!</span>
        </div>
        )}
      </div>
    )
  }
}

export default EmailListForm
