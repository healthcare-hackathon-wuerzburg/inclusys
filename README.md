# Project MediGuard

## Problem Statement

German Clinicians can share safety-related incidents anonymously via a online form. This means they get no feedback and guidance throughout this process. 
Therefore only six to 8 reports per year are created for each hospital.
The aim is to improve data quality and clinicians' commitment to reporting safety-related incidents in the healthcare sector. 
## Idea

For this a bot (mobile first) should be developed for clinicians to share, process and publish critical incidents anonymously.

### Requirements

Server:
- Python
- Cohere API-key

App:
- React Native
- Gluestack UI library

### Installation

Describe, how to install the project, like:

1) clone the repository via `git clone ...`

##### Set-up server
1) install server dependencies via `pip install -r requirements. txt`
2) start the dev server via `server.py`

##### Set-up app
1) install packages using `npm install`
2) start react-native app e.g. with expo by `npx expo start`
3) Press `w`to open in browser or scan qr code in terminal with the expoGo app to debug on device

## How to use the Project 
Start the server and the application. Add your Cohere-API key into a apiKey.py file on the server in the format:
API_KEY = <<Key>>

You can use this text for testing purposes:
```
 There are six patients and more in the ward without the designation of any employee. Occasionally, Dr. Schmidt supervises the ward. The patients feel unattended and poorly informed due to the lack of any technical or manual system to monitor their vital signs. Also, there are no alarms to transfer to other areas, so they sometimes have to wait excessively long periods alone.
``` 

## Project Overview

###### App:
Main Screens:
- Home
- ReportIncident
    - mulitstep process iterating through multiple components (found in ./components)

## Next steps

This project serves as a proof of concept for the conceptualized MediGuard app. It showcases how LLMs can support the report creating by analyzing and formatting text.
We set up the basic project for future development and added gluestack UI library. This way our figma-concept (...) can be easily converted into a production ready application frontend.



## How to Contribute

Describe, how new team members can contribute to the existing repository, like:

1) clone the repository
2) work on a dedicated branch for your feature `git branch -b feature_name`
3) create a pull request for the feature and document the changes accordingly
4) you have to write tests in order to get your PR merged
5) send changes against `main` branch

## Additional Information
Note: The Cohere API-key was exposed in this project. This key was just used for development purposes and is not important.

## Useful links:

- [Most common Git commands](https://rogerdudler.github.io/git-guide/index.de.html)
- [How to create a GitHub Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)
