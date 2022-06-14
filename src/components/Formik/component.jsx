import React, {useState} from "react";
import "./styles.scss";
import { Formik, Field } from 'formik';

const Posts = () => { 
  const [posts, setPosts] = useState([]);
  const renderFunc = (title, select, body) => {
    return(
      <article style={{"textAlign": "center"}} key={Math.random()}>
        <h2>{title}</h2>
        <p>{select}</p>
        <p>{body}</p>
      </article>
    )
  }
  const arr = ['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const mappedArr = arr.map((num) => {
    return(
      <option value={num} key={num}>{num}</option>
    )
  })

  return (
    <div>
      <Formik
        initialValues={{ title: '', body: '', select:'-'}}
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
          if (values.select === '-') {
            errors.select = 'Required';
          } 
          return errors;  
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },})
            .then((response) => response.json())
            .then((post) => { 
              setPosts([...posts, post]); 
              console.log(posts, 'kekek');              
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
            {mappedArr}
          </Field>
          {errors.select && touched.select && errors.select}
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
          {posts.map((post) => renderFunc(post.title, post.select, post.body))} 
        </div>

    </div>
  )
}

export default Posts;


