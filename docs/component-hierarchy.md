## Component Hierarchy

**SplashContainer**
 - Splash
  + SplashNavBar
    - Logo
    - SignUpContainer
    - LogInContainer

**SignUpContainer**
 - SignUp (modal)

**LogInContainer**
 - LogIn (modal)

**HomeContainer**
 - Home
  + NavBar
    - Logo
    - UserDropDownContainer
    - UploadFormContainer
  + FeedIndexContainer
  + DiscoverIndexContainer

**UserDropDownContainer**
 - UserDropDown
  + ProfileViewContainer
  + logout

**UploadFormContainer**
 - UploadForm (modal)

**FeedIndexContainer**
 - FeedItemContainer

**FeedItemContainer**
 - FeedItem
  + PhotoContainer

**PhotoContainer**
 - Photo

**ProfileViewContainer**
 - ProfileView
  + NavBar
  + UserInfoContainer

**UserInfoContainer**
 - UserInfo
  + EditInfoContainer

**EditInfoContainer**
 - EditInfo

**DiscoverIndexContainer**
 - DiscoverIndex
  + DiscoverItemContainer

**DiscoverItemContainer**
 - DiscoverItem


## Routes

|           Path            |        Component        |
|---------------------------|-------------------------|
| "/about"                  |   "SplashContainer"     |
| "/signup"                 |   "SignUpContainer"     |
| "/login"                  |   "LogInContainer"      |
| "/"                       |     "HomeContainer"     |
| "/user/:UserId"           | "ProfileViewContainer"  |
| "/user/:UserId/edit"      |   "EditInfoContainer"   |
| "/photo/:PhotoId"         |    "PhotoContainer"     |
