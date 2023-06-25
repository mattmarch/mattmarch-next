---
title: "Dependency rot: why I rewrote this site (again) in Next.js"
date: "2023-06-25"
---

Back in 2020, global pandemic in full swing and nationwide lockdowns calling off all other commitments, I started a blog. With all my newfound free time I could work on a myriad of interesting projects, follow them up with insightful blog posts, and rise to the acclaimed heights of getting to the front page of Hacker News.

So I got to work. I threw away my previous abandoned attempt of a Github Pages Jekyll blog, picked the cool Javascript framework of the day: Gatsby, and created a simple bespoke blog. I wrote my [first post](/posts/gatsby-website.md) detailing writing the site, and shortly after published a [second post](/posts/birthday-playlist.md). This was surely going to be the start of something great.

## 3 years later...

This post you're reading now is my 3rd blog entry, published over 3 years since the 2nd. What happened? At first: life slowly started going back to normal so I had less free time, and some projects fizzed out disappointingly such that I had little to write about.

But then something else started to happen. Since first publishing the blog dependabot PRs had been coming in one by one. Initially I had the momentum to quickly test and merge the changes, but then laziness took over: after all, how bad can an outdated dependency in a static blog be?

It wasn't long before they started to pile up and when I did have some good ideas I could put down into a blog post, I was greeted with this:

![screenshot showing 22 PRs from dependabot](/dependency-rot/dependabot-prs.png "A screenshot showing 22 PRs from dependabot")

That is already starting to look bad but in reality it's much worse than that - upon looking into the details you can see that dependabot has (understandably) given up on me, and has stopped raising PRs for the 106 total issues it's found:

![screenshot showing dependabot PRs are stopped and 106 total issues](/dependency-rot/dependabot-alerts.png "A screenshot showing 106 total issues and that PRs have been paused.")

## Dependency rot

So when recently I really did want to write a blog post I had a look at what would be involved in getting everything up to date - and it wasn't a pretty sight:

- 39 direct dependencies
- 2 major React versions behind for React and associated libraries
- 3 Gatsby versions behind, including some major changes on how images should be used
- Various packages completely deprecated and no longer compatible with latest React/Gatsby

In other words, _dependency rot_ had set in. Normally this is something you think about in terms of sprawling legacy code bases, but it was applicable here too: I'd built the entire blog in a weekend, did I really want to spend another weekend fixing dependencies?

**Wouldn't it be faster to just rewrite it from scratch?**

I'd also not touched (or heard all that much about) Gatsby since first writing the blog. But I had been playing around recently with a little thing which has been getting some industry buzz lately called Next.js. It's even the top suggestion in the ["Start a New React Project" guide](https://react.dev/learn/start-a-new-react-project) in the official React docs.

So I recreated my Gatsby blog by loosely following the Next.js tutorial (but using Tailwind CSS and the new app router). This was a much more enjoyable experience than painfully updating all the dependencies on my old site. And here we are now!

## Plans for the future

This time I'm not going to lie to myself and commit to regular posts. But I am going to try to keep on top of keeping everything up to date, so that when in future writing inspiration does hit, I have no excuse not to.

Let's hope my next blog post won't be in 2026 about rewriting this blog in yet another web framework!
