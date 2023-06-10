---
title: "Birthday Playlist Generator - a React app using Spotify's developer API deployed to Github Pages"
date: "2020-06-16"
---

A couple of years ago I went to a 50th birthday party where the playlist consisted of the 50 (or 51) songs which had been UK number one on the celebrant's past birthdays. It had taken the Birthday Girl's daughter hours of looking up all the tracks and adding them to a Spotify playlist. So I not only thought this was a great fun idea, but also something which could (/should) be automated and so tucked this away into my list of projects ideas.

Well, I finally got around to building it: you can use it at https://playlist.mattmarch.co.uk and check out the [source code on Github](https://github.com/mattmarch/BirthdayPlaylist).

The app is a client side only React app (using Typescript), hosted on Github pages, with Github actions to automatically deploy on push and update the chart data once a week. The app first gives you a list of number one single names on your past Birthdays, and the option to "connect with Spotify" (using OAuth), at which point the app can match up songs with Spotify, display album art, and provide a button to turn the track list into a Spotify playlist.

There were 3 things I wanted to gain from this project:

1. Practice setting up an OAuth flow
2. Try out Github Actions
3. A React refresher. Last time I was properly working on a React project was before [hooks](https://reactjs.org/docs/hooks-intro.html) were stable, so it was a good refresher and chance to pick up the latest features (which are great - good riddance lifecycle methods!)

### OAuth with Spotify

The [recommended way](https://oauth.net/2/grant-types/implicit/) of using OAuth in a client only app is the _authorization code flow with PKCE_. Unfortunately this [isn't supported by Spotify](https://community.spotify.com/t5/Spotify-for-Developers/Authentication-API-failing-in-production-right-now/m-p/4960693/highlight/true#M234), and therefore the only option is using the _implicit grant flow_. This limited the learning from this, but after following [the instructions from Spotify](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) it was nice and easy to set up.

### Setting up Github Actions

There were two things I wanted Github Actions to do: automatically deploy to Github Pages on push, and automatically run a Python script to update the chart data once a week.

I expected this to have some hidden fiddliness which would make it a pain to set up (as is often the case with CI tools) but was pleasantly surprised. There were plenty of _starters_ and I quickly found ones which needed only small changes, and it worked (almost) first go. Five minutes into the couple of hours I'd put aside to set it up and it was done and working!

### A gotcha with Github Pages and Spotify OAuth flow

One pain point I encountered was with Github Pages' routing. Developing locally I was using React Router's `BrowserRouter` and using a Spotify callback URL like `localhost:3000/spotify-callback`.

Unfortunately Github Pages serves the root of repository sites at `yourgithubusername.github.io/reponame`, which messes with `BrowserRouter`, and the [easy solution is to use `HashRouter` instead](https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages).

However, the hash route appears to be stripped from the OAuth redirect (probably because the URL hash fragment carries the OAuth callback parameters). As a quick solution I instead redirected to route "`/`", and instead route on the presence of either an `access_token` or `error` hash parameter which are expected to be received on success or failure from the Spotify authorization. This makes the `Router` switch statement look like:

```jsx
<Switch>
  <Route path={["/access_token=*", "/error=*"]}>
    <SpotifyLoggedIn />
  </Route>
  <Route path="/">
    <Home />
  </Route>
</Switch>
```

Which seems like a good enough workaround!
