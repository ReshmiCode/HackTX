# Neighborhood Support

Help support your local neighbourhood community get through difficult times through jointly funding necessary projects!

 - HackTX: [Devpost](https://devpost.com/software/neighborhood-support)
 - Submission: [Youtube](https://youtu.be/oHhY5xMpZi0)
 - Deployment: [Azure](https://jolly-meadow-0830c4310.azurestaticapps.net)

### Inspiration
Our team was inspired to build an application to help people get through the difficult times during COVID-19. With rising unemployment and household expenses being an increasing burden on the community, there has been an stark rise in the number of people who can no longer afford to pay rent. This inspired us to build Neighbourhood Support, an easy to use application that lets the community band together to help support each other and ensure that your impact enriches the quality of life in your locality.

### What it does
Our application helps connect people to opportunities to fund struggling families. A group of people that are facing difficult financial situations can choose to add items that they would like to be funded through community support on our website. Then without revealing personally identifyable information we can expose these difficulties to their local community and allow people to jointly fund these requests.

### How I built it
We built our application using a series of new and modern technologies. Our front-end is designed using **React**. For the backend we decided to go with a **MySQL** database hosted on **Hasura Cloud** that connects to our application through a **GraphQL API** & the **Apollo Client**. Our designs and UI was created through **Ant Design**. Finally to deploy our application we used **Azure Static Web Apps**. We also use locality referencing through the **Google Maps API** to identify who to support in a community.

### Challenges I ran into
We ran into challenges in using MySQL as a database option. This was fairly new to us and quite different in integrating with our application. Other challenges included connecting our backend and frontend together. While we were able to test both independently there were challenges in putting them together that involved a lot of learning with the Apollo Client.

### Accomplishments that I'm proud of
Proud of having designed an API that is based on GraphQL. This was a new technology that our team had not tried before and getting it to work as a prototype for our hackathon submission is awesome. Having migrated from using standard REST APIs to GraphQL is a huge achievement.

### What I learned

##### Workshops at HackTX
 - Deploying to Azure Static Web Apps
 - Design and UI

##### New Things
 - Hasura Cloud
 - GraphQL
 
### What's next for Neighborhood Support

Integrating with Stripe for automatic payment processing and connecting it to a rich array of other side services such as Twilio and SendGrid for a more wholesome experience for the user.
