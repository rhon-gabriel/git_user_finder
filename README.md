# Git_user_finder

This app will help you find Github users based on the login, email or name.
Additionally, you'll be able to find users, based on the number of followers, equal or less to indicated.

## How to run the app
1. Clone the repo
2. Make sure you have installed Docker and it's running
3. Run the following command: docker compose up
4. Go to http://localhost:3000

## Q: Let's say we want to add all the developers created by users (between 5,000,000 to 20,000,000 new developers per month) to our backend database. We also decide to add real-time updates to the developer database. What kind of pagination, sorting, filtering is more appropriate (backend or frontend)? How would you make sure your tool is scalable for higher volumes?
I believe that pagination, sorting and filtering for high volume of dataset should be handled on the backend. 
When data is not significantly big, e.g. for this app where I have a limit of 100 users per requests, handling it on the frontend  is ideal as it can be istantenous. However, if it's unavoidable to limit the requests on the front and there is a huge amount of data, handling operations such as sorting and filtering should be carried on the back to avoid slowing down the application and the latter should be sending on the front only what it is requested.