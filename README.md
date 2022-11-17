# CS1300Development

### Describe the goal of the application and value to a user

    - The goal of the application is to buy plants from this website
    - The user can scroll through the website to find different varieties of flowers, succulents, and trees to purchase for their liking.


### Link to your deployed web application running online

    - https://sadopossum246.github.io/CS1300Development/ 

### Explain the organization of your Components, and the props and state related to them

    - There is a folder for Components, Data, and fonts
    - In the Components folder contains the different types of dropdowns for the filter and sorting
    - The main files are the larger, more important components such as the FilteredList, DisplayList, and CartList
    - THe FilteredList.js has the most of the logic and state of the program. It contains the logic for adding/removing items from the cartlist. It also has the logic for filtering and sorting the items
    - The state of the program is handled in the FilteredList.js and is passed into other components using props
    - The states being kept track of is the number of items in the cart, the total price, the state of the cartlist, and the different filters and sorting being selected
    - The Carlist is then being used to render the aggregator on the right side of the page

### Note the usability principles considered for layout and hierarchy

    - The usability principles considered for the layout and heirarchy is to place the filters at the top of the website so the users can easily see them and can chose what they want.
    - Each item is also individually organized into a card for easy reading
    - The aggregator is also on the side for the user to see what is in their cart.

