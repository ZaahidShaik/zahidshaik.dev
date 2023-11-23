import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';

import '../../styles/CardComponentsStyles/MarkdownRender.css'



const MarkdownHandler = (fileContent : string) => {
  const parsedSectionContent = <ReactMarkdown children={fileContent} />
  // console.log(parsedSectionContent.props)
    const FilteredSectionCards = parsedSectionContent.props.children.split('\n##').filter(Boolean);
    // console.log(FilteredSectionCards)

    const CardContent = FilteredSectionCards.map((item: string) => item.split('\n\n').filter(Boolean))

      return CardContent;
}

const MarkdownSectionCards = (heading: string, content: string) => {
  return (
    <div className="mkd-card-outer-layer">
      <div className="mkd-card-inner-layer">
        <div className="mkd-content-card">

          <div className="mkd-card-title">
            <div className="mkd-header-outer-layer">
              <div className="mkd-header-inner-layer">
              {/* <ReactMarkdown children={`###${heading}`} /> */}
              {heading}
              </div>
            </div>
          </div>

          <div className="mkd-card-content">
          <ReactMarkdown children={`\n${content}`} />
          </div>

        </div>
      </div>
    </div>

  )
}


interface props {
    fileName: String;
}

const MarkdownRender = ({ fileName } : props) => {

    const filepath =  require("../../persistance_store/markdown/" + fileName);

    // console.log(filepath)

    const [content, setContent] = useState(" ");

    useEffect(() => {
      fetch(filepath)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [filepath]);

    const CardContent =  MarkdownHandler(content);

    
  return (
    <>
     {CardContent.map((cardItem: any, index: number) => (
      <div key={index}>
        {MarkdownSectionCards(cardItem[0], cardItem.slice(1))}
      </div>
     ))}
    </>
  )
}

export default MarkdownRender
