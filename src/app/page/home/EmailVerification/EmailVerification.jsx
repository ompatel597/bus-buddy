import React from 'react'

const EmailVerification = () => {
  return (
    <div className="container borderop">
        <h1>OTP Code Verification</h1>
        <form >
          <label>Enter the OTP to verify your mail :</label>
          <input
            type="text"
            
            
            name="otpCode"
            maxLength={4}
            placeholder="Enter OTP"
          />
          <button type="submit">Verify OTP Code</button>
        </form>
      </div>
  )
}

export default EmailVerification