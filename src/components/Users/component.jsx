import "./styles.css";
import User from "./User";
import data from "./mockData"

const Users = () => (
  <div className="Users">
    {data.map (post => (<User key={post.id} {...post}/>))}
  </div>
)

export default Users;
