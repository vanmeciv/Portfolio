# M.Sc. Geospatial Technologies Projects

- Project 1: <a href="https://geospatial.is/single-project1.html" target="_blank"/> Browser-based Geolocation Request (HTML/JavaScript)</a>
  - <a href="https://webapp.geospatial.is" target="_blank"/> Web URL</a>
  - <a href="https://github.com/vanmeciv/webapp" target="_blank"/> Repo </a>

- Project 2: 
  - <a href="https://geospatial.is/single-project2.html" target="_blank"/> Web URL (Charts.js Example v1 - Line, Mixed, & Radar) </a>

- Project 3: 
  - <a href="https://geospatial.is/single-project3.html" target="_blank"/> Web URL (Python 3.x - Geopy, Numpy, Plotly, Pandas & Mapbox) </a>
  - <a href="https://github.com/vanmeciv/icerinks/blob/master/dynamic/py/mapbox_icerink.ipynb" target="_blank"/> Repo  (Python 3.x - Geopy, Numpy, Plotly, Pandas & Mapbox) </a>
### Example:
```python
# Data Extraction
import requests, json, pandas as pd, numpy as np
from geopy import geocoders
from geopy.geocoders import Nominatim
# NHL API GET REQUEST
r = requests.get('https://statsapi.web.nhl.com/api/v1/game/##########/feed/live')
# See Repo link for redacted code
coordinates_df.to_csv('events.csv', header = True, mode = 'a')
```
```python
# Data Compilation & Plot Events
import plotly.graph_objects as go, pandas as pd, plotly.express as px
mapbox_access_token = open("mapbox_token.txt").read() # Create a local file with mapbox token
# Read CSV F
df = pd.read_csv('events.csv')
# See Repo link for redacted code
fig.show()
```
#### Output:
<img src="/img/project3-background3.jpg" alt="Image Output Example" width=40% height=40%>

- Project 4: <a href="https://geospatial.is/single-project4.html" target="_blank"/> Mixed Proportion Charting Vulnerable Populations versus Areas of World With No Home Hand Washing Facilities (Charts.js Example v2.1)</a>

- Project 5: <a href="https://geospatial.is/single-project5.html" target="_blank"/> ESRI Georeferenced Ice Rink Hosted through Mapbox displaying NHL API Data</a>
  - <a href="https://hockeyrink.geospatial.is/dynamic/" target="_blank"/> Web URL</a>
  - <a href="https://github.com/vanmeciv/icerinks" target="_blank"/> Repo </a>

- Project 6: <a href="https://geospatial.is/single-project6.html" target="_blank"/> Mapbox hosted Icerink Displaying ALL 2019 Stanley Cup Events via Static Hexbin (HTML/Javascript/Python)</a>
  - <a href="https://hockeyrink.geospatial.is/hexbin/" target="_blank"/> Web URL</a>
  - <a href="https://github.com/vanmeciv/icerinks/tree/master/hexbin" target="_blank"/> Repo </a>

- Project 7:
  - <a href="https://geospatial.is/single-project7.html" target="_blank"/> Web URL (Charts.js Example v2.2 - Displaying Major Sports Revenue Trends)</a>

- Capstone Project: 
  - <a href="https://geospatial.is/single-project_capstone.html" target="_blank"/> Web URL</a>
  - <a href="https://github.com/vanmeciv/icerinks/tree/master/finals" target="_blank"/> Repo </a>
### Example:
```python
import requests, pandas as pd, numpy as np
# See Repo link for redacted code
# Creates datafrome of events with coordinates for georeferencing
df = pd.DataFrame(list
                  (zip(results_df['result.event'],
                       results_df['result.description'],
                       results_df['team.name'],
                       results_df['team.triCode'],
                       period_df['period'],
                       time_df['periodTime'],
                       time_df['dateTime'].str[:10],
                       lat,
                       lon,
                       results_df['result.strength.name'])), 
                  columns = ['Event',
                             'Description',
                             'Team',
                             'Tricode',
                             'Period',
                             'Time',
                             'Date',
                             'Lat',
                             'Lon',
                             'Strength'])

```
```python
import plotly.graph_objects as go
fig1 = go.Figure()
# See Repo link for redacted code
# Allows user to filter Home Event Markers
fig1.add_trace(go.Scattermapbox(
        lat = home_lat,
        lon = home_lon,
        mode = 'markers',
        marker = go.scattermapbox.Marker(
            size = 20,
            color = '#0000ff',
            opacity = 0.25
        ),
        text = home_text,
        hoverinfo = 'text',
        name = "Home",
# https://plotly.com/python/hover-text-and-formatting/
        customdata = home,
        hovertemplate =
        '<b>Period</b>: %{customdata[4]}<br>'+
        '<b>Time</b>: %{customdata[5]}<br>'+
        '<b>Event</b>: %{customdata[0]}<br>'+
        '<b>Description</b>: %{customdata[1]}<br>'+
        '<b>Location</b>: %{customdata[10]}',
    ))

```
```python
# Goal Scoring Sequence
fig2 = go.Figure(go.Scattermapbox(
    mode = "markers+lines",
    lon = a_seq['Lon'],
    lat = a_seq['Lat'],
    marker = {'size': 10},
    customdata=a_seq,
    name = "1st Goal (STL)",
    hovertemplate =
        '<b>Period</b>: %{customdata[4]}<br>'+
        '<b>Time</b>: %{customdata[5]}<br>'+
        '<b>Event</b>: %{customdata[0]}<br>'+
        '<b>Description</b>: %{customdata[1]}<br>'+
        '<b>Location</b>: %{customdata[10]}',
))

```

#### Output:
<img src="img/gallery/8.jpg" alt="Image Output Example" width=50% height=50%>


# M.Sc. Cybersecurity & Leadership Projects

- Executive Interviews: <a href="https://charts.geospatial.is/" target="_blank"/> Charts.js Example of Radar Data</a>

## Contact :speech_balloon:

<a href="https://www.linkedin.com/in/isaac-vanmechelen/" target="_blank" title="My LinkedIn Profile"><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" /></a>
<a href="https://geospatial.is" target="_blank" title="My Website"><img height="32" width="32" src="https://raw.githubusercontent.com/vanmeciv/Portfolio/master/img/favicon/favicon-32x32.png" /></a>
<a href="https://geospatial.is/pdf/Van%20Mechelen_Isaac_Resume.pdf" target="_blank" title="My Resume"><img height="32" width="32" src="http://simpleicons.org/icons/adobeacrobatreader.svg" /></a>

---

## License

- Copyright 2020 © <a href="https://geospatial.is" target="_blank">Isaac Van Mechelen</a>
