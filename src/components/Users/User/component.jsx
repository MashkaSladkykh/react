import "./styles.css";

const User = ({name, email, phone, company, website}) => (
  <article className="User">
    <h2 className="User-name">{name}</h2>
    <a href={email} className="User-mail">{email}</a>
    <p>
      <a href={phone} className="User-phone">{phone}</a>
    </p>
    <section className="User-company">
      <h3>{company.name}</h3>
      <p>{company.catchPhrase}</p>
    </section> 
    <a href={website} className="User-website">{website}</a>
  </article>
)


export default User;
