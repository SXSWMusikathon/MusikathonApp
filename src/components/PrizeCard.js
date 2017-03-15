import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import testImage from '../images/SongArtTest.jpg';
import './PrizeCard.css'
import first from '../images/FirstPlace.png'
import second from '../images/SecondPlace.png'
import third from '../images/ThirdPlace.png'

const CompetitionCard = (props) =>{
  const {place} = props;
  var trophyImage
  if (place==="1") trophyImage = first;
  if (place==="2") trophyImage = second;
  if (place==="3") trophyImage = third;
  return (
  <Card className="prize-card">
    <CardMedia >
      <img alt = "trophy image" className="prize-card-image" src={trophyImage}/>
    </CardMedia>
  </Card>
  )};


export default CompetitionCard;



/*
const { name } = props;
Card { name }
*/