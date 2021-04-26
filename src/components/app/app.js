import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';

import Row from '../Row';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details/item-details';

import './app.css';
import ItemList from '../item-list/item-list';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    const { getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>
        <Record field='gender' lebal='Gender' />
        <Record field='eyeColor' lebal='Eye Color' />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>

    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <ItemList
            getData={getAllPeople}
            onItemSelected={() => { }}>
            {(name) => <span>{name}</span>}
          </ItemList>

          <ItemList
            getData={getAllPlanets}
            onItemSelected={() => { }}>
            {(name) => <span>{name}</span>}
          </ItemList>

        </div>
      </ErrorBoundry>
    );
  }
}

/* structure

 <App
      <newSwapiService getPerson getStarship getStarshipImage getPersonImage>

      const personDetails =
        (<itemDetails  itemId = {9} getData = {getPerson} getImageUrl ={getPersonImage}
          <Record field = '' lebel = ''>
        >)
      const starshipDeteils =
        (<<itemDetails  itemId = {5} getData = {getStarship} getImageUrl = {getStarshipImage}
          <Record field = '' lebel = ''>
        >)
      const planet = <RandomPlanet>

      return(
          {planet}
          <Row left = {personDetails} Right = {starshipDeteils}>
      )
  >

 <itemDetails
      const { itemId, getData, getImageUrl } = this.props
      const Record = ({field, lebal, item}) return ({label},{item[field]})
      return (
        src = {image}
        {name}
        {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            });
        }
      )
  >

 <People-pege>
 <item-list {withData}
  const { data, onItemSelected, children: renderLabel } = props
  const { getAllPeople } = new SwapiService()
  export default withData(ItemList, getAllPeople)
  >

 <random-planet>
 <Row>
 <SwapiService>
 */