import React from 'react';
import { CourseCardProps } from "./course-card-props";
import {
    Container,
    Title,
    Author,
    Image
} from './course-card-styles';

export const CourseCard = (props: CourseCardProps) => {
  const img =
    props.urlImage != ''
      ? props.urlImage
      : 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35160991368917.5e303bd02c67f.jpg';
  
  return (
    <Container>
      <Image source={{
          uri: img,
          }} />
      <Title>{props.title}</Title>
      <Author>{props.author}</Author>
    </Container>
  );
};

