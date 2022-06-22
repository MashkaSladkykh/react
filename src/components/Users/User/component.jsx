import {connect} from "react-redux";

import { removeUser } from "../../../store/users/actions";

import  "./styles.scss";

const User = ({email, name, phone, website, id, removeUser}) => (
  <article className="User" style={{border:"1px, solid, black"}}>
    <h2 className="User-name">{name}</h2>
    <a href={email} className="User-mail">{email}</a>
    <p>
      <a href={phone} className="User-phone">{phone}</a>
    </p>
    <p>
      <a href={website} className="User-website">{website}</a>
    </p>
    <button onClick={() => removeUser(id)}>Remove</button>
  </article>
)

const mapDispatchToProps = {
  removeUser,
}

export default connect(null, mapDispatchToProps)(User);





