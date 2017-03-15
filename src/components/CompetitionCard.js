import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import testImage from '../images/SongArtTest.jpg';

const CompetitionCard = (props) =>{
  const {
    songTitle,
    artistName,
    contestDescription
    } = props;
  return <Card className="competition-card">
    <CardMedia className="competition-card-image">
      <img src={testImage}/>
    </CardMedia>
    <CardTitle className="competition-card-title" title={songTitle} subtitle={artistName} />
    <CardText className="competition-card-text">
      {contestDescription}
    </CardText>
    <CardActions className="competition-card-actions">
    {/*TODO make the action button a play button*/}
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
};


export default CompetitionCard;



/*
const { name } = props;
Card { name }
*/