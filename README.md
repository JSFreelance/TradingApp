## A AngularJS Trading App 

###Requirements list
- [x] REQ1: Build a web app that will allow us Create Retrieve Update and Delete foreign exchange trades. 
The app will be composed composed in two layers:
	* Web APP (Angular.js)
	* REST API (Django + Django REST Framework)
- [x] REQ2: The main page will retrieve the existing trades, sorted by booking date, and structured as show in picture 1
- [x] REQ3: The page described in the REQ2, should be paginated and only will display 5 elements per page, using the pagination structure defined in picture 1.
- [x] REQ4: In the page described in REQ, should have a button that pop ups a dialog which allows the user to enter a new trade, as described in the picture 2. The initial value of the currencies dropdown should be empty, and once the user enters a value in both of them, the frontend app should retieve the latest rate for the selected currency pair and display it.
The buy amount is not editable, and should be automatically calculated by multiplying the rate against the sell amount.
- [x] REQ5: The user will be able to edit an existing trade by clicking the pencil icon of the specific row, which will popup a dialog as described in the picture 3. The only editable field will be the sell amount, and if it changes, the interface should reflect the new calculation of the buy amount by using the rate previously stored for that trade at that time.
- [x] REQ6: The user will be able to delete an existing trade by click the X icon as described in the picture 4. A confirmation dialog will pop up asking the confirmation of the user.
- [ ] REQ7: As we expect a huge amount trades being created/modified by the users in real time, the database performance could be a problem. We'll queue the saving transaction of the trade model into an asynchronous process, that will be triggered every time a trade is created or modified, but will provide instant confirmation to the front end app.
- [ ] REQ8: We don't have a direct connection with a central rate provider, we'll need to connect to an external service that will give us this information through an API. This service will be http://fixer.io. Unfortunately, the service doesn't allow many concurrent API calls and could close the connection. We'll create a background process that will run every 5 minutes, which will cache all the rate combinations for all the currencies available in our service. Later on,  we can use this cache to display the rate information to the end user and to make our trading calculations.
- [ ] REQ9: This app should be self-contained and ready to be shipped and deployed with an automatic script that install all dependencies and services in  an isolated machine.