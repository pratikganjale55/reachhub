# ReachHub

The application should efficiently process and display chess player data from the Lichess.org API.

## Features

- Users can see top 50 classical chess players..
- Content can be downloaded CSV file of Top 50 player rating history.
- User can see rating history as per username .
- Rating history in chart.

## Technologies Used

- Frontend:
  - React.js
  - CSS (with Flexbox/Grid for layout)
  - Axios (for making HTTP requests)
- Backend:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object modeling)
- Other:
  - Zod (for form validation)
  - React Router (for client-side routing)
  - Axios (for making HTTP requests)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/pratikganjale55/reachhub
```

2. Install package:

```bash
 cd Frontend
 npm install
 npm run dev

 cd Backend
 npm install
 npm start
```

3.Add credientals as a DATABASE url (MongoDB) <br/> 4. Open http://localhost:5173/ to view it in the browser <br/> 5. Open http://localhost:8080 to backend run in the browser <br/>

![Homepage](./Frontend/src/assets/PlayerTable.png)
![Player Rating History](./Frontend/src/assets/HistoryChart.png)
![Login](./Frontend/src/assets/Login.png)
![Signup](./Frontend/src/assets/Signup.png)
