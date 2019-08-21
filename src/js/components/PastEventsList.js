import React from 'react';
import PropTypes from 'prop-types';
import PastEventsListItem from './PastEventsListItem';
import helpers from '../helpers';

const { fetchSkEventsByQuerystring: fetchEvents } = helpers;

class PastEventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      events: [],
      fetched: false,
    };
  }

  async componentDidMount() {
    const { skParams } = this.props;

    try {
      const events = await fetchEvents(skParams);
      this.setState({ events, fetched: true });
    } catch (error) {
      this.setState({ fetched: false });
    }
  }

  pastEventsListItems() {
    const { events, fetched } = this.state;

    if (!events || !fetched) {
      return (
        <div className="events__list-item">list empty</div>
      );
    }

    return events.map((event) => {
      const {
        id, start, venue, location, uri,
      } = event;

      return (
        <PastEventsListItem
          start={start}
          venue={venue}
          location={location}
          uri={uri}
          key={id}
        />
      );
    })
  }

  render() {
    const { title } = this.state;

    return (
      <div className="events__container">
        <h2 className="events__title">{title}</h2>
        <div className="events__list__containers">
          { this.pastEventsListItems() }
        </div>
      </div>
    );
  }
}

PastEventsList.propTypes = {
  title: PropTypes.string,
};

PastEventsList.defaultProps = {
  title: 'Gespeelde data',
};

export default PastEventsList;
