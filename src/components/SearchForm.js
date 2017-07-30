import React from 'react';
import { Input, Icon } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: cookies.get('postcode') || ''
    };
  }

  isValidSearch = text => {
    return text !== '';
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({ inputError: false });

    if (!this.isValidSearch(this.state.value)) {
      this.setState({ inputError: true });
      return;
    }

    cookies.set('postcode', this.state.value, { path: '/' });

    this.props.findRestaurants(this.state.value);
  };

  render() {
    const inputAction = {
      color: 'blue',
      labelPosition: 'right',
      icon: 'search',
      content: 'Search'
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          action={inputAction}
          placeholder="Enter Postcode..."
          error={this.state.inputError}
          disabled={this.props.loading}
          onChange={this.handleChange}
          value={this.state.value}
        />
        {this.state.inputError &&
          <div className="input-error">
            <Icon color="red" name="warning" /> Please enter a valid postcode
          </div>}
      </form>
    );
  }
}

export default SearchForm;
