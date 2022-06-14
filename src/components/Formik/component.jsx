import React, {useState} from "react";
import "./styles.scss";
import { Formik, Field } from 'formik';

const Posts = () => { 
  const [posts, setPosts] = useState([]);
  const renderFunc = (title, select, body) => {
    return(
      <article style={{"textAlign": "center"}}>
        <h2>{title}</h2>
        <p>{select}</p>
        <p>{body}</p>
      </article>
    )
  }

  return (
    <div>
      <Formik
        initialValues={{ title: '', body: '', select:''}}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          } else if (values.title.length < 3 ) {
            errors.title = 'Invalid title. Title length should be > 3';
          }
          if (!values.body) {
            errors.body = 'Required';
          } else if (values.body.length < 3 ) {
            errors.title = 'Invalid body. Body length should be > 3';
          } 
          if (values.select === '0') {
            errors.select = 'Required';
          } 
          return errors;  
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(posts),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },})
            .then((response) => response.json())
            .then((posts) => { 
              setPosts(values); 
              console.log(values, 'kekek');              
            })
            .finally(setSubmitting(false), resetForm(''));
          }
        }
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}
          <textarea
            type="textarea"
            name="body"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.body}
          />
          {errors.body && touched.body && errors.body}
          <Field as="select" name="select">
            <option value="0"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
          <input
            type="submit"
            name="submit"
            disabled={isSubmitting}
            value='submit'
          />
        </form>
        )}
      </Formik>
        <div className="box">
          {renderFunc(posts.title, posts.select, posts.body)} 
        </div>

    </div>
  )
}

export default Posts;


