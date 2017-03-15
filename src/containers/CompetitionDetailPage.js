import React, { Component } from 'react';

export default class CompetitionDetailPage extends Component { 
  constructor(props) {
	  super(props);
    const competitions = [
      {artImage: "../images/SongArtTest.jpg",
      songName:"My Song 1",
      artistName:"Artist 1",
      Details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
      SoundCloudLink:"https://soundcloud.com/ujico/lullaby",
      Prizes:["Prize 1","Prize 2","Prize 3"],
      StemsLink:"https://puu.sh/uJAa3/9a94e2da7e.png",
      StartDate:"February 1st, 2017",
      EndDate:"March 2nd, 2017",
      WinnerAnnounced:"March 10th, 2017"
      }];
  }

  render() {
	return (
    <div>
      <div> Detail { this.props.params.competitionId } </div>
      <div> test</div>
    </div>
		);
  }
}
