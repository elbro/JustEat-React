import React from 'react';
import agent from '../utils/agent';
import RestaurantResults from './RestaurantResults';
import SearchForm from './SearchForm';

const RESTAURANT_LIMIT = 1000;

class RestaurantFinder extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false
    };
  }

  findRestaurants = postcode => {
    this.setState({ isLoading: true });

    agent.getRestaurants(postcode).then(res => {
      this.setState({
        isLoading: false,
        area: res.Area,
        restaurants: res.Restaurants.slice(0, RESTAURANT_LIMIT)
      });
    });
  };

  render() {
    const { isLoading, area, restaurants } = this.state;

    return (
      <section id="restaurant-finder">
        <SearchForm
          findRestaurants={this.findRestaurants}
          loading={isLoading}
        />

        <RestaurantResults
          loading={isLoading}
          area={area}
          restaurants={restaurants}
        />
      </section>
    );
  }
}

export default RestaurantFinder;
