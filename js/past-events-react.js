'use strict';

class PastEventsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Gespeelde data",
            events: []
        };
    }

    componentDidMount() {
        this.props.events
            .then(events => this.setState({events: events}));
    }

    render() {
        return (
            <div className="events__container">
                <h2 className="events__title">{this.state.title}</h2>
                <div className="events__list__containers">
                    {this.state.events.map((listItem) =>
                        <PastEventsListItem {...listItem} />
                    )}
                </div>
            </div>
        );
    }
}

class PastEventsListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventDateFormatted: moment(props.start.date).format('ddd D MMM'),
            eventVenue: props.venue.displayName,
            eventCity: props.location.city,
            link: props.url,
        };
    }

    render () {
        return (
            <div className="events__list-item">
                <div className="events__list-item__details">
                    <div className='events__list-item__date'>
                        {this.state.eventDateFormatted}
                    </div>

                    <div className="events__list-item__location">
                        <div className="events__list-item__venue">{this.state.eventVenue}</div>
                        <div className="events__list-item__city">{this.state.eventCity}</div>
                    </div>
                </div>

                <div className="events__list-item__btn-info__wrapper">
                    <a className="events__list-item__btn-info" href="{this.state.link}">Meer info</a>
                </div>
            </div>
        );
    }
}

const fetchSkEvents = async (url) => {
    const data = await fetch(url).then(response => response.json());

    return data.resultsPage.results.event;
};

const buildSkUrlByQuerystring = (urlParams) => {
    const artistId = urlParams.get('artistId');
    const apiKey = urlParams.get('apiKey');
    const page = urlParams.get('page') || 1;
    const perPage = urlParams.get('per_page') || 50;
    const orderBy = urlParams.get('order') || 'asc';

    return `https://api.songkick.com/api/3.0/artists/${artistId}/gigography.json?apikey=${apiKey}&order=${orderBy}&page=${page}&per_page=${perPage}`;
};

const fetchSkEventsByQuerystring = (urlParams) => {
    return fetchSkEvents(
        buildSkUrlByQuerystring(urlParams)
    );
};

(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const backgroundColor = urlParams.get('style[background-color]') || 'black';
    const textColor = urlParams.get('style[color]') || 'white';

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;

    ReactDOM.render(
        <PastEventsList
            title="Gespeelde data"
            events={fetchSkEventsByQuerystring(urlParams)}
        />,
        document.getElementById('past-events-container')
    );

})();


