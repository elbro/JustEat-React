import React from 'react';
import { Item, Header, Rating, Container, Icon } from 'semantic-ui-react';

const Restaurant = ({ Name, Stars, Logo, Cuisines }) => {
  return (
    <Item>
      <Item.Image size="tiny" src={Logo} />
      <Item.Content verticalAlign="middle">
        <Item.Header>
          {Name}
        </Item.Header>
        <Item.Meta>
          <Rating icon="star" defaultRating={Stars} maxRating={6} disabled />
        </Item.Meta>
        <Item.Description className="cuisine-type">
          {Cuisines}
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

const RestaurantResults = props => {
  if (props.loading) {
    return <Icon loading name="spinner" size="large" />;
  }

  if (!props.restaurants) {
    return <div />;
  }

  return (
    <Container text>
      <Header as="h2" block textAlign="center">
        <Icon name="food" />
        <Header.Content>
          {props.restaurants.length} restaurants found{' '}
          {props.area ? 'in ' + props.area : ''}
        </Header.Content>
      </Header>

      <Item.Group divided>
        {props.restaurants.map(x => {
          return (
            <Restaurant
              Name={x.Name}
              Logo={x.Logo.length === 1 ? x.Logo[0].StandardResolutionURL : ''}
              Stars={x.RatingStars}
              Cuisines={x.CuisineTypes.map(type => type.Name).join(', ')}
              key={x.Id}
            />
          );
        })}
      </Item.Group>
    </Container>
  );
};

export default RestaurantResults;
