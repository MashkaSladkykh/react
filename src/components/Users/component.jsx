import {useEffect} from "react";
import {connect} from "react-redux";

import {setUsers} from '../../store/users/actions';
import {selectUsers, selectUsersLength} from '../../store/users/selectors';

import User from './User';

import './styles.scss';

const Users = ({users, usersLength, setUsers}) => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, []);

  return (
   <div>
     <h1>Users count: {usersLength}</h1>
     <ul className="Wrapper">
       {users.length === 0
         ? <div>Empty state</div>
         : users.map(user => <User key={user.id} {...user} />)
       }
     </ul>
   </div>
  )
}

const mapStateToProps = state => ({
  users: selectUsers(state),
  usersLength: selectUsersLength(state),
})

const mapDispatchToProps = {
  setUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);