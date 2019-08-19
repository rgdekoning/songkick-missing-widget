import React from 'react';
import PropTypes from 'prop-types';
import PastEventsListItem from './PastEventsListItem';

class PastEventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      events: [],
    };
  }

  componentDidMount() {
    const { events } = this.props;
    events.then((listItems) => {
      this.setState({ events: listItems });
    });
  }

  render() {
    const { title, events } = this.state;

    return (
      <div className="events__container">
        <h2 className="events__title">{title}</h2>
        <div className="events__list__containers">
          { events.map((listItem) => {
            const {
              id, start, venue, location, uri,
            } = listItem;

            return (
              <PastEventsListItem
                start={start}
                venue={venue}
                location={location}
                uri={uri}
                key={id}
              />
            );
          }) }
        </div>
      </div>
    );
  }
}

PastEventsList.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.object.isRequired,
};

export default PastEventsList;
