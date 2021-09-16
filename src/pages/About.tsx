import React, { ReactElement, useState, useEffect } from 'react';
import { Box, Grid, Typography, Card } from '@material-ui/core';
import styled from 'styled-components';

const Information = [
  {
    title: "My Journey",
    body: "I started off my journey down this path as a programmer long before I even knew I was going to end up here, in year 7 when I was tinkering with minecraft plugins, trying to become a developer in some RPG server. Fast forward 6-7 years, and here I am still fascinated with code."
  },
  {
    title: "Skills and Experience",
    body: "Experienced in full stack web development, primarily ReactJs (Typescript) and NodeJs/Golang backend development. Experienced in using Docker as well as Github pages for deployment."
  }
]

const Cards = [
  {
    heading: 'Frontend Development',
    content: 'ReactJS',
  },
  {
    heading: 'Backend Development',
    content: 'Golang, NodeJS, Python, Java',
  },
  {
    heading: 'Data Analytics',
    content: 'Numpy, Pandas',
  },
  {
    heading: 'Scripting',
    content: 'Bash, Perl',
  }
]

const CardContainer = styled(Card)`
  height: 100px;
  width: 300px;
  border-radius: 3px;
  padding: 5px;
`;


const About: React.FC = ({}): ReactElement => {
  return (
    <Box margin="150px">
      <Grid container justifyContent="space-between" spacing={5}>
        <Grid item xs={12} md={5}>
          {Information.map((obj)=> {
            return (
              <>
                <Typography variant="h5" color="primary">
                  {obj.title}
                </Typography>
                <Typography variant="body1" color="secondary">
                  {obj.body}
                </Typography>
              </>
            )
          })}
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            gridGap="20px"
          >
            {Cards.map((card) => {
              return (
                <CardContainer
                  style={{
                    background: "#2F3034"
                  }}
                  elevation={10}
                >
                  <Typography variant="subtitle1" color="primary">
                    {card.heading}
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    {card.content} 
                  </Typography>
                </CardContainer>
              )
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;