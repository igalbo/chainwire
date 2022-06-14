# Currency Exchange Rates App

This project shows exchange rates for currency pairs in a graph.
The project was created for [Chainwire](https://chainwire.org/).

Deployment: https://igalbo.github.io/chainwire

## Preview

![ezgif-3-cd0e76db46](https://user-images.githubusercontent.com/68712178/173560637-9c712d0f-7563-44e1-8335-3d41781ebc1c.gif)

## Packages used

In this project I used:

- React Router for navigation:

  -- I chose to use "useParams" to navigate between currency pairs, as this makes it easy to add pairs in the future, and keeps it DRY

  -- HashRouter instead of BrowserRouter for easier deployment on GitHub pages

- React Date Range:

  -- I was considering using MaterialUI's component, but didn't want to install the whole mui package (some features required a "pro" subscription due to a recent change), so I decided to go with this one

- Date Fns - for easier date manipulation

- Recharts - chart

### How this app works behind the scenes

I created a backend server:

Repo: https://github.com/igalbo/chainwire-server

Deployment: https://chainwire-server.herokuapp.com/

As well as a MongoDB Atlas database and a remote json file with rates data (currency api required a paid subscription).

When date ranges are selected, the app fetches the requested dates and pairs from the backend server.

The backend checks if the exact ranges already exist in the MongoDB database.
- If they do, it returns it to the app and a chart is drawn.
- If not, the server then searches for a wider range of dates in our database from which we can extract the requested range. If they exist, it extracts the requested dates and sends to the app.
- Lastly, if neither is found, the backend fetches the data from the remote json file, stores it in the database and sends to the app.

\*Since the json files are static, they currently have dates ranging from June 12, 2021 to June 20, 2022 (I "invented" the dates from June 11, 2022 to June 20, 2022)
