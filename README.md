# PhotOn

[PhotOn live][photon]

[photon]: https://phot-on.herokuapp.com/

PhotOn is a full-stack web application inspired by 500px. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.


## Features

  * User accounts with secure authentication

  * Customizable user profile

  * Photo detailed View

  * Upload photos

  * Browse photos of followed users

  * Discover new users to follow

  * Follow/Unfollow Users

  * Modal components

----
### Overview

  * Users can upload high resolution photos.

  * Uploaded photos appear on the user's profile page in a grid format

  * A photo can be viewed and edited in a Modal.

  * Users can customize their profile picture, cover picture, and biography.

  * Users can follow/unfollow other users.

  * The home feed page features photos of currently followed users.

  * Users can discover new users through the Discover page.
----
### Landing Page

  * The landing page features a splash image and welcome message.

  ![landing](/docs/screenshots/splash.png)


  * Users can login or signup from the top nav bar, or demo the site with a guest login. The Auth Modal-like window features two form-types that can be toggled between from within each modal.

  ![signup](/docs/screenshots/signup.png)



### User Home Feed

  * Users get a list of photos from users they are currently following

  ![home feed](/docs/screenshots/homefeed.png)


  * Photos can be enlarged by clicking on them and viewed in a dedicated Modal displaying the photo title, description, and author.

  ![photo view](/docs/screenshots/photoView.png)


### Navigation Bar

  * The top navigation bar is available through out the application and grants the user quick access to:
    + Logout
    + Upload a photo
    + Profile page
    + Home Feed
    + Discover page

  * The navigation bar is set to persist even when the user scrolls down the page.

  ![navbar](/docs/screenshots/navbar.png)



### User Profile

  * Comes with a default cover and profile photo on sign up.

  ![default user](/docs/screenshots/defaultProfile.png)


  * Uploaded photos appear in a grid below the user's information

  ![profile](/docs/screenshots/profile.png)


  * Users can edit their biography, cover photo, and profile photo through the edit profile button. The button opens an edit form in a modal for a more stylish a modern look with the ability to go back to the profile page without the need to reroute the user.

  ![user edit](/docs/screenshots/profileEdit.png)


  * Photos can be edited or deleted through the photo view modal. The photo view modal containing the photo edit button leads to a different modal for editing the photo details. Once the new details are saved the user is taken back to photo view modal displaying the updated details.

  ![photo view](/docs/screenshots/photoViewOwn.png)

### Discover

  * The page is populated with photos of users that are not currently followed by the active user.

  ![discover](/docs/screenshots/discover.png)


  * The user can click on any photo in the feed to display a larger version of the photo with all the details including the author.

  ![photo view](/docs/screenshots/photoView.png)


  * Clicking on the author's name redirects the user to the authors profile page where they can view all the authors work and possibly follow that author.


______
## Future Directions
  * Optimize page load with an infinite scroll

  * Users can like other users photos

  * Photos can be tagged and searched by tag name.

  * Notifications when a user receive a like on one of their photos or when a followed user posts a new photo


___

See the development [README][readme] for a list of components, wireframes, sample state, and DB schema.

[readme]: docs/README.md
