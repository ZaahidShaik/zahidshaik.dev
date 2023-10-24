import React, { useEffect, useState } from 'react'

// import file from '../../persistance_store/markdown/Amazon.md'
import ReactMarkdown from 'react-markdown';


interface props {
    fileName: String;
}

const MarkdownRender = ({ fileName } : props) => {

    const filepath =  require("../../persistance_store/markdown/" + fileName);

    // const [markownFile, setMarkownFile] = useState(" ")

    // console.log(filepath)

    const [content, setContent] = useState("");

    useEffect(() => {
      fetch(filepath)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [filepath]);

    
  return (
    <div>
     <ReactMarkdown children={content} />
    </div>
  )
}

export default MarkdownRender
