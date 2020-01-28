import React from "react";
import { useAPI } from '../hooks/useAPI';
import { Card, Header, Container, Icon} from 'semantic-ui-react'
import { Chart } from "react-google-charts";
import DisplayPlayers from '../components/DisplayPlayers';

export default function ListPlayers(){

    const url = 'http://localhost:5000/api/players';
    const result = useAPI(url);


    console.log('from list',result);

    const chartDataTest = [['Name', 'Searches' ]];

    result.forEach((item) => {
        chartDataTest.push([item.name, item.searches]);
      });

    console.log('test array', chartDataTest);


    
    return (
        <div>
            <Container text>
                <br />
                <Icon size='massive' name='soccer' />
                <Header as='h1'>Women's World Cup 2015</Header>
                <Header as='h3'>Player Search Interest</Header>
                <br />
            </Container>            


            <Chart
                width={'1500px'}
                height={'300px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={chartDataTest}
                options={{
                    title: 'title...',
                    seriesType: 'bars',
                    series: { 101: { type: 'line' } },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
            <br />
            <br />

           
                <Card.Group itemsPerRow={4} stackable>
                    {result.map(item => (
                    <DisplayPlayers player={item} />
                     ))}  
                </Card.Group>
              
            </div>
            );
}
