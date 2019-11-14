import "./rhlConfig";
import { hot } from 'react-hot-loader/root';
import React from "react";
import { Button } from "./Button";

const App = () => <div>Component with hooks: <Button/></div>;

export default hot(App);