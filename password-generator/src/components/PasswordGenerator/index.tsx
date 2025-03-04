import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Checkbox from '../Checkbox'

import passwordGif from '../../assets/gif/password.gif'
import copyIcon from '../../assets/icons/copy.svg'
import refreshIcon from '../../assets/icons/refresh.svg'

import './index.css'

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8)
  
  // Function to generate random password string
  const generateRandomPassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const specialChars = '!@#$%^&*()_+{}[]|:;"<>,.?/~'

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars

    // Function to set inital password to a random string with 8 characters
    let password = ''
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length)
      password += allChars.charAt(randomIndex)
    }

    return password
  }

  const [userPassword, setUserPassword] = useState(generateRandomPassword())

  const onChangePasswordLength = (value: any) => {
    setPasswordLength(value)
  }

  return (
    <div className="password-wrapper">
      <div className="gif">
        <img src={passwordGif} alt="Password Gif" />
      </div>
      <div className="tac">
        <h2 className="title">PASSWORD GENERATOR</h2>
        <p className="subtitle">
          Ensure online account safety by creating strong and secure passwords
        </p>
      </div>
      <div className="password-input-wrapper">
        <div className="password-field">
          <input
            type="text"
            placeholder="your password"
            value={userPassword}
          />
          <img
            src={refreshIcon}
            alt="refresh the password"
            onClick={() => setUserPassword(generateRandomPassword())}
          />
        </div>
        <button className="copy-btn">
          <img src={copyIcon} alt="copy password" />
          Copy
        </button>
      </div>
      <span className="fw-500">Weak</span>
      <div className="slider">
        <div>
          <label id="slider-label">Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className="slider-style"
        />
      </div>
      <div className="elements">
        <Checkbox id="uppercase" label="Uppercase" checked={true} name="upper" />
        <Checkbox id="lowercase" label="Lowercase" checked={false} name="lower" />
        <Checkbox id="numbers" label="Numbers" checked={false} name="numbers" />
        <Checkbox
          id="special chars"
          label="Special Characters"
          checked={true}
          name="specialChars"
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
