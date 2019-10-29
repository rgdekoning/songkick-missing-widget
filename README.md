# SONGKICK MISSING WIDGET
Songkick provides an easy way to display upcoming events (see: https://widget.songkick.com/USER_ID/songkick-widget.html), but not for past events (there is an API endpoint).

The goal was to build a past events widget in a similar way using the past-events endpoint of songkick.
see: https://www.songkick.com/developer

Had a play with the songkick API and React to display past events.

To use you need your songkick API key and your songkick artist ID.

## Display Past Events
Just use the `dist/past-events.html` in an iframe, with querystring parameters:
```
// mandatory
apiKey
artistId

// optional
page
per_page
order
style[background-color]
style[color]
```

example:
```html
<iframe src="https://rgdekoning.github.io/songkick-missing-widget/dist/past-events.html?apiKey=YOUR_SK_API_KEY&artistId=YOUR_SK_ARTIST_ID&order=desc&per_page=3&page=1" frameborder="0" style="width: 100%; height: 215px;"></iframe>
```
