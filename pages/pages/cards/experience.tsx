import React from 'react';



interface CardContentProps {
    title: string;
    affiliation?: string;
    date: string;
    description: string[];
}

interface ImageContentProps {
    thumbnail: string;
}

type ExpereinceProps = CardContentProps & ImageContentProps & {
    left?: boolean;
}


function Experience({title, affiliation, date, description, thumbnail, left}: ExpereinceProps) {

  const imageContent = <ImageContent thumbnail={thumbnail} />;
  const cardContent = <CardContent title={title} affiliation={affiliation} date={date} description={description}/>

  return (
    <div className="experience-card-container">
      {
        left ?
          <>{imageContent} {cardContent}</> :
          <>{cardContent} {imageContent}</>
      }
    </div>
  );
}

function CardContent({title, affiliation, date, description}: CardContentProps) {
  return <div className="experience-card-content">
    <div className="experience-card-header">
      <h3 className='experience-card-title'>{title}</h3>
      <div className='experience-card-date'>{date}</div>
    </div>
    <div className='experience-card-affiliation'>{affiliation}</div>
    <ul>
      {description.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>;
}

function ImageContent({thumbnail}: ImageContentProps) {
    return <img className='experience-img' src={thumbnail} alt='' width={200} height={200}/>
}

export default Experience;