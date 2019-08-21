# SONGKICK MISSING WIDGET
Had a play with the songkick API to display past events.

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
