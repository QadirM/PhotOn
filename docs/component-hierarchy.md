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
| "/"                       |   "SplashContainer"     |
| "/signup"                 |   "SignUpContainer"     |
| "/login"                  |   "LogInContainer"      |
| "/home"                   |     "HomeContainer"     |
| "/home/user/:UserId"      | "ProfileViewContainer"  |
| "/home/user/:UserId/edit" |   "EditInfoContainer"   |
| "/home/photo/:PhotoId"    |    "PhotoContainer"     |
