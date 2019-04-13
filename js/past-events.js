const urlParams = new URLSearchParams(window.location.search);
const backgroundColor = urlParams.get('style[background-color]') || 'black';
const textColor = urlParams.get('style[color]') || 'white';

const artistId = urlParams.get('artistId') || 9778444;
const apiKey = urlParams.get('apiKey') || 'io09K9l3ebJxmxe2';
const page = urlParams.get('page') || 1;
const perPage = urlParams.get('per_page') || 3;
const orderBy = urlParams.get('order') || 'asc';
const url = `https://api.songkick.com/api/3.0/artists/${artistId}/gigography.json?apikey=${apiKey}&order=${orderBy}&page=${page}&per_page=${perPage}`;

document.body.style.backgroundColor = backgroundColor;
document.body.style.color = textColor;

const getJSON = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (xhr.status >= 200 && xhr.status < 400) {
            callback(xhr.response);
        }
    };
    xhr.send();
};

const getPastEvents = () => {

};

const buildPastEvents = () => {
    getJSON(url, (data) => {
        const events = data.resultsPage.results.event;
        console.log(events);
        events.forEach(function(item, index, array) {
            const event_date_formatted = moment(item.start.date).format('ddd D MMM');
            const event_date = `<div class='events__list-item__date'>${event_date_formatted}</div>`;

            const event_performer = item.performance[0].artist.displayName;
            const event_venue = item.venue.displayName;
            const event_city = item.location.city;

            if(event_date_formatted !== 'Invalid date') {
                $('.events__list__container').append(
                    `<div class="events__list-item">
                        <div class="events__list-item__details">
                            <div class='events__list-item__date'>
                                ${event_date_formatted}
                            </div>
    
                            <div class="events__list-item__location">
                                <div class="events__list-item__venue">${event_venue}</div>
                                <div class="events__list-item__city">${event_city}</div>
                            </div>
                        </div>
                        
                        <div class="events__list-item__btn-info__wrapper">
                            <a class="events__list-item__btn-info" href="${item.uri}">Meer info</a>
                        </div>
                    </div>`
                );
            }
        });
    });
};

buildPastEvents();
