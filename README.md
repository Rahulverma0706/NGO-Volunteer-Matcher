# NGO Volunteer Matcher

**NGO Volunteer Matcher** is a simple web application that matches volunteers with NGOs based on their location, availability, and interests. It allows NGOs to post volunteer opportunities and volunteers to register, making it easy to find matching opportunities.

## Features

- **NGO Registration**: NGOs can post volunteer opportunities with location, availability, and cause area.
- **Volunteer Registration**: Volunteers can register by providing their name, location, availability, and interests.
- **Matching**: The system matches volunteers to relevant NGO opportunities based on their location and interests.
- **LocalStorage**: Data is stored locally in the browser using `localStorage`.

## Tech Stack

- **Frontend**: React.js
- **State Management**: React `useState`
- **Storage**: LocalStorage (No Backend)
- **Deployment**: Vercel

## Deployed Application

You can check out the live application here:  
[NGO Volunteer Matcher - Live Demo](https://ngo-volunteer-matcher.vercel.app/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/NGO-Volunteer-Matcher.git
   ```

2. Navigate to the project folder:

   ```bash
   cd NGO-Volunteer-Matcher
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

   This will run the app on `http://localhost:3000`.

## Usage

1. **NGO Form**: Enter NGO details (name, location, cause, required availability) and click "Post Opportunity".
2. **Volunteer Form**: Register as a volunteer by providing your name, location, availability, and interests.
3. **Matching Section**: After registering a volunteer, the matching NGOs will be displayed based on location and cause area.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
