# React Kata

## Table of Contents

- [Introdution](#introduction)
- [Installation & Setup](#installation--setup)
- [Tasks](#tasks)
- [Requirements](#requirements)
  - [Engineering Manager](#engineering-manager)
  - [Product Owner & Design/UX](product-owner--designux)
- [Resources](#resources)
- [API Reference](#api-reference)
  - [GET /services](#get-services)
  - [GET /appointments/:serviceId](#get-appointmentsserviceId)
  - [POST /appointments/:id](#post-appointmentsid)

## Introduction

![React Kata](https://github.com/driveway-engineering/react-kata/blob/main/src/assets/logo.png?raw=true)

This project provides an interviewing screen for React engineers by providing a
mock project to build.

It uses [Create React App](https://github.com/facebook/create-react-app) with
a REST API server on a local proxy. (e.g. API calls to `/services` will forward
to `http://localhost:2000/services`)

### Notes

- **Remember**: This is an exercise and do not need to follow as robust a
  process as a production application.
- This exercise uses [Functional
  React](https://reactjs.org/docs/hooks-intro.html) with hooks, so be prepared
  to demonstrate your knowledge.
- The intent is to work through this together during the interview and should
  not be done ahead of time.
- You are not expected to finish. The intent is to see how you work through
  problems given the constraints.

## Installation & Setup

Ensure you have the following installed:

- [NodeJS 14.15.1](https://nodejs.org/en/)

Execute the following commands to get started:

```sh
git clone https://github.com/driveway-engineering/react-kata.git
cd react-kata
npm install
```

Start the local app development server:

```sh
npm start
```

In a separate terminal start the REST API server:

```sh
npm run server
```

To run unit tests:

```sh
npm test
```

## Tasks

1. **Discovery**: Read the requirements and familiarize yourself with the
   codebase and API. (~10-15 min)
1. **Organize/Plan**: Review each feature and talk through any design &
   implementation choices. Mention pros and cons of each decision. Base your
   choices on importance to Product + UX, as well as technical complexity. (~10
   min)
1. **Implement/Test**: Start building the features from the provided starter
   application. (~45-60 min)

## Requirements

Lithia Motors takes pride in helping people in all phases of their
car-ownership. It's up to our scrappy team to build a snappy UI to help users
book appointments such as oil changes, tire replacements, etc.

### Engineering Manager

- "You should feel free to use any libraries or frameworks you need, but let's
  not overbuild this. Getting the tech right is my **TOP PRIORITY!**"
- "These back-end engineers can't make a stable web service to save their lives!
  Make sure the pages still work even if the backend services are being spotty.
  Resiliency is my **TOP PRIORITY!**"

### Product Owner & Design/UX

- "Making sure people can do business with us is most important goal. As long as
  people can book an appointment with us, our shareholders will be happy!"
- "We want people to see our Logo first and a little blurb about what we
  do. After that they should be able to click a button to get the ball rolling."
- "The user should be presented with all the services available in the next two
  weeks. When they select a service, they should be presented with all the
  available appointment slots for that service. They can then select a slot and
  book it, by entering their name, email, and vehicle information.
- "Almost forgot! We should put our contact info somewhere on the landing screen
  if people want to talk to someone. It's **supportbutton@lithia.com** and the
  number is **555-872-3289.**"

## Resources

- `src/assets/`: Images & icons provided by designers.
- `src/components/`: Initial project components to build from.
- `src/server/`: Mock API server providing service information.
- `src/utils/`: Utility and middleware libraries.
- `wireframes`: Sample wireframes provided by designers.

## API Reference

### `GET` /services

Returns a list of services available within the next 14 days. Each contains:

- `id`: The unique service identifier.
- `name`: The name of the service.
- `duration`: The duration of the service in seconds.

Example JSON response:

```json
[
  {
    "id": 1,
    "name": "Replace Brakes",
    "duration": 3600
  },
  {
    "id": 2,
    "name": "Oil Change",
    "duration": 1800
  },
  {
    "id": 3,
    "name": "Rotate Tires",
    "duration": 1800
  }
]
```

### `GET` /appointments/

Returns a list of all currently available appointment blocks within the next 14
days. See the next section for details.

### `GET` /appointments/:serviceId

Returns a list of appointment blocks currently available for the requested
`Service ID` within the next 14 days. Each contains:

- `id`: The unique service appointment identifier.
- `name`: The name of the service appointment.
- `start`: The start date & time of the appointment.
- `duration`: The duration of the appointment in seconds.

Example JSON Response:

```json
[
  {
    "id": "972836c4-a389-4b23-9709-78cf33c246ed",
    "name": "Replace Brakes",
    "start": "2020-8-15T08:30:00.000Z",
    "duration": 3600
  },
  {
    "id": "b192cf15-dcc7-443d-8d2a-6604be7952f1",
    "name": "Replace Brakes",
    "start": "2020-8-23T13:00:00.000Z",
    "duration": 3600
  }
]
```

### `POST` /appointments/:id

Book the requested appointment for a particular customer and vehicle. Request
body must contain:

- `email`: The customer's contact email address.
- `name`: The customer's full name.
- `make`: The make of the vehicle they are servicing.
- `model` The model of the vehicle they are servicing.
- `modelYear`: The year of the model they are servicing.

Example JSON Request:

```json
{
  "email": "JohnDoe123@example.com",
  "customerName": "John Doe",
  "make": "Mazda",
  "model": "Miata",
  "modelYear": "2005"
}
```

The response from this endpoint is an appointment confirmation which includes:

- `id`: The unique scheduled appointment identifier.
- `serviceName`: The name of the scheduled service appointment.
- `start`: The start date & time of the appointment.
- `duration`: The duration of the appointment in a human-readable format.
- `customerName`: The customer's full name.
- `make`: The make of the vehicle they are servicing.
- `model` The model of the vehicle they are servicing.
- `modelYear`: The year of the model they are servicing.

Example JSON Response:

```json
{
  "id": "71p51iun6j0jajc7ln894q32pd",
  "serviceName": "Oil Change",
  "start": "2020-07-01T09:00:00.000Z",
  "duration": "30 minutes",
  "email": "JohnDoe123@gmail.com",
  "customerName": "John Doe",
  "make": "Mazda",
  "model": "Miata",
  "modelYear": "2005"
}
```
