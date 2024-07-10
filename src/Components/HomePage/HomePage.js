import React, {useState} from 'react'
import MenuBar from '../MenuBar/MenuBar';
import Feed from "../Feed/Feed";
import "./HomePage.css";
import { useParams, useLocation } from 'react-router';

const HomePage = ({category , searchTerm, menuBar}) => {

  let {categoryId} = useParams()

  return (
    <>
      <Feed category = {categoryId != undefined ? categoryId : category} searchTerm = {searchTerm} menuBar={menuBar} />
    </>
  )
}

export default HomePage