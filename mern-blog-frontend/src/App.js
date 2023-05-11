import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, FullPost, Signup, AddPost, Login } from "./pages";
import React from "react";
import { fetchAuthMe } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route  path="/add-post" element={<AddPost />} />
          <Route  path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> 
      </Container>
    </>
  );
}

export default App;
