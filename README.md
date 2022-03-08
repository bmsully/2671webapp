
# Typing 2.671 Web App

This is a web-page application that was created in Spring 2022 for 2.671 Measurement & Instrumentation. It was specifically created for Go Forth and Measure which is a self-led project with the goal of teaching the fundamentals of experimental Design, Experimentation, Interpretation, and Communication. I took the skills learned from IAP 2022 Weblab (6.148) and created this web app to assist in my project. I am examining the effects various computer keyboard mechanisms have on typing, specifically typing force, speed, and accuracy. The web app is part of the experimentation portion and is set up to provide random passages for the user to type, logging keystrokes and timestamps, then providing the data in a downloadable CSV format for further data analysis.

## How it works

On arriving to the website, a random passage of length between 100 and 150 characters is presented. The internal clock begins timing upon every reload of the webpage. A user can begin typing in the text box. Keystrokes will be logged with timestamps. When done typing, the keystroke, timestamp, and passage data can be downloaded by clicking on the 'Export to CSV' link. The user then resets the page which fetches and displays a new passage, clears the previously typed text, and resets the data collection.

## Packages and Resources

- api.quotable.io is used to fetch random passages for the typing tests
- react-csv is used to format the text logging data into a CSV format and provide a link for this file to be downloaded.

## Future Improvements

- Add brief explanation of how webpage works, similar to the How it works section above
- Improve the UI of the app with more basic coloring; generalize to be non-2.671 specific
- Improve the styling of the CSV Link so always visible as a button but inactive when nothing has been typed
- Add fields to change the minimum and maximum lengths of the passages

## Thanks

Thank you to the Weblab (6.148) staff for the web skeleton

*Last updated by Brady Sullivan 3/7/2022 2:18 PM EST*