# SPA React App - Movie Trailer Viewer

Welcome to the Movie Trailer Viewer Single Page Application (SPA) built with React! This application allows users to view and filter movie trailers fetched from an exposed Third party API of BMS.

## Features

1. **Data Fetching**: The app utilizes a third-party exposed API to make GET calls and fetch movie data and language filters.

2. **Filtering and Preview**: The fetched movie data is distributed into two distinguished array stores to display filters and preview cards. On the left side, users can filter video on choosing languages from an array of different languages . On the right side, they can preview movie trailers.

3. **Trailer Video Component**: When a user clicks on any preview card, a trailer video component opens up just below the card. Users can watch the movie trailer from this component.

4. **Close Trailer Video**: Users have the option to close the trailer video component by clicking on the close icon and application revert back to preview mode.

## Getting Started

To run this application on your local machine, follow these steps:

1. Clone the repository:

```
git clone https://https://github.com/compilerd/BMS-Trailer-SPA.git
```

2. Install dependencies:

```
cd BMS-Trailer-SPA
npm install
```

3. Run the development server:

```
npm start
```

Open your browser and go to `http://localhost:3000` to view the app.

## Technologies Used

- React
- HTML5,
- CSS3 (for styling)
- Media Queries (responsive CSS)
- Vanilla JavaScript

## Contributing

We welcome contributions to enhance the app's functionality or fix issues. If you have any ideas, bug reports, or suggestions, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Happy movie trailer viewing! 🍿🎬
