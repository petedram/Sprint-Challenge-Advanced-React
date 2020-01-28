import React from "react";
import { Card } from 'semantic-ui-react'



export default function DisplayPlayers(props){
    return (
    <Card>
      <Card.Content>
        <Card.Header>{props.player.name}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        {props.player.country}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      Search Interest: {props.player.searches}
      </Card.Content>
    </Card>

    )

}

