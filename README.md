# SkyBnb - Reviews

> Microservice which handles all the reviews for a specific Skybnb household

## Related Projects

  - https://github.com/sky-bnb/component-booking-gi
  - https://github.com/sky-bnb/component-calendar
  - https://github.com/sky-bnb/component-picture-modal-GC

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Usage](#Usage)

## Requirements
- MongoDB version 4.0.3 installed

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Usage

#### Seeding the Database
From the root directory of this service, run `npm run seed-data`. This will generate all the sample data for the reviews.

#### Building the Client
From the root directory of this service, run `npm run build`. This will generate `bundle.js` in the `client/dist` directory. 

#### Running the Server
From the root directory of this service, run `npm run start`. This will start up a localhost on port 3001 with the client files. Open a web browser and visit `http://localhost:3001/`.

