import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import caret from "../images/caret.svg"

const Button = ({ buttonName, className, pathName }) => (
  <Link
    to={pathName}
    className={`${className} flex transition-all duration-1000 ease-linear rounded-2xl hover:bg-blue-550 hover:text-white`}
  >
    <span className="flex items-center justify-center w-6 text-white rounded-full bg-blue-550">
      <img src={caret} alt="" className="transform -rotate-90" />
    </span>
    <p className="py-1 pr-2 ml-1 text-xs font-semibold">{buttonName}</p>
  </Link>
)

Button.propTypes = {
  buttonName: PropTypes.string,
  className: PropTypes.string,
  pathName: PropTypes.string,
}

Button.defaultProps = {
  buttonName: ``,
  className: `ml-7`,
  pathName: `#`,
}

export default Button
