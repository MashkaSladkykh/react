import "./styles.css";

const Image = ({src, className, alt}) => (
    <img src={src} 
    className={className ?`App-logo ${className}` : "App-logo"}
    alt={alt} />
)

export default Image;