import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import testImage from '../images/SongArtTest.jpg';

const CardExampleWithAvatar = () => (
  <Card className="competition-card">
    <CardMedia className="competition-card-image">
      <img src={testImage}/>
    </CardMedia>
    <CardTitle className="competition-card-title" title="$Song Title" subtitle="$Artist Name" />
    <CardText className="competition-card-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions className="competition-card-actions">
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;



/*
const { name } = props;
Card { name }
*/