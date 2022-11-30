--Readme document for Arzoo Singh (arzoos1@uci.edu, 14085212) Meghna Kaligotla (mkaligot@uci.edu, 75273038)--

How many assignment points do you believe you completed (replace the *'s with your numbers)?
20/20

7/7 A functional web app
5/5 The ability to control the web app with basic gestures (5 points, 1 per gesture)
2/2 The ability to control the web app with custom gestures (2 points)
2/2 Following good principles of UI design (2 points)
1/2 Creating a compelling app (2 points)
2/2 A readme and demo video which explains how these features were implemented and their design rationale (2 point)

How long, in hours, did it take you to complete this assignment?
~15 hours

What online resources did you consult when completing this assignment? (list specific URLs)
Playlist embed (new feature): https://developer.spotify.com/documentation/widgets/generate/embed/
Styling tables CSS: https://css-tricks.com/complete-guide-table-element/


What classmates or other individuals did you consult as part of this assignment? What did you discuss?
N/a

Design Choices of Gesture:
These actions and their corresponding gestures can be found in an outlined manner on the home page of our Spotify web app.

Basic Gestures
1. Logging in - Open Hand
We chose to use the open hand gesture for logging in because an open hand is one of the more simple or rudimentary gestures that came within the hand tracking repository. Logging in is, similarly, a simple action within our revamped Spotify web app.

2. Loading Profile Information - Two Open Hands
We chose to use the two open hands gesture for loading profile information after the user has logged in because the typical thing to do on our app after logging in (open hand) would be to load profile info (two open hands). In this way, two open hands is an appropriate gesture to follow a single open hand.

3. Search - Hand Pointing
If a user has typed a keyword in the search bar and wants to search, they would just have to point their hand. We thought this would be an appropriate gesture because pointing is a directional gesture, which, in a way, is a symbol to “go”. This gesture mirrors the action of searching for something and pressing enter to “go.”

4. Open Album on Spotify - One Closed Hand
We chose to use one closed hand to prompt our app to open a specific album on Spotify because a closed hand signifies a choice or a selection. In this same way, pressing the “Open Album on Spotify” button is a selection.

5. Open Profile on Spotify - Two Closed Hands
We chose to use two closed hands to prompt our app to open the user’s profile on Spotify because just like one closed hand, two closed hands signifies a choice being made aka the pressing of a button. However, here, since the user’s profile is more central to the user’s Spotify account and is thus more important, we assigned the action to be completed with two closed hands instead of one.

Custom Gestures

1. Move Left on Carousel - One hand Pointing (“L” shape) + One Closed hand
We decided to use the custom gesture of One hand Pointing + One Closed hand because the one hand pointing in an “L” shape signifies to move left on the carousel.

2. Move Right on Carousel - One Open hand + One Closed hand 
For this gesture, we wanted to initially include something more specific than involved taking in values for hand positions, but we ended up using one open hand + one closed hand to move right on the carousel. We figured that this gesture is different enough from its counterpart above, so the user wouldn’t have too much trouble remembering it.

Is there anything special we need to know in order to run your code?

In the demo video, you'll notice that we added a feature on the album and 
track pages that allows a webplayer. This will not show when you run this app
initially. This is because if we left the code for the webplayer uncommented, 
the app would get a compiler error. We realized that the compiler
error had no real effect on the app, so we figured out we could simply see the 
webplayer by uncommenting lines AFTER the app was already running.

If you wish to see the webplayer on your end as well, you can run the app and then 
uncomment line 28 in both the TS files for the album and track components