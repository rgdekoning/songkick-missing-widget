import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';

class PastEventsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDateFormatted: moment(props.start.date).format('ddd D MMM'),
      eventVenue: props.venue.displayName,
      eventCity: props.location.city,
      link: props.uri,
    };
  }

  render() {
    const {
      eventDateFormatted, eventVenue, eventCity, link,
    } = this.state;

    return (
      <div className="events__list-item">
        <div className="events__list-item__details">
          <div className="events__list-item__date">
            {eventDateFormatted}
          </div>

          <div className="events__list-item__location">
            <div className="events__list-item__venue">{eventVenue}</div>
            <div className="events__list-item__city">{eventCity}</div>
          </div>
        </div>

        <div className="events__list-item__btn-info__wrapper">
          <a className="events__list-item__btn-info" href={link}>Meer info</a>
        </div>
      </div>
    );
  }
}

PastEventsListItem.propTypes = {
  start: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired,
  venue: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
};

export default PastEventsListItem;
