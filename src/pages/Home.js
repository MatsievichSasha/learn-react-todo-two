import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Loader } from "../components/Loader";

export const Home = () => {
  const { loading, notes, fetchNotes } =  useContext(FirebaseContext);
  /*ф-ю fetchNotes вызываем когда мы находимся на главной странице
 вызывать ее надо когда компонент проиниализирован. С помощью хоков это можно сделать 
 с помощью useEffect который позволяет эмулировать различные лайф..???useEffect в нашем случае
 заменяет componentDidMount()
 */
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} />}
    </Fragment>
  );
};
