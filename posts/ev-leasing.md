---
title: "Lease or no lease: a spreadsheet turned mini web app"
date: "2023-07-06"
---

## Checking out work's electric car scheme

One of the many employee benefits offered by [Ghyston](https://www.ghyston.com) is an electric car leasing scheme. The details are the same as offered by other companies: you lease a new electric vehicle (EV) for a few years, the lease includes insurance/tax/maintenance, and crucially the lease payment is taken from your salary pre-tax and you instead pay a small benefit in kind tax. This lets you drive a nice new electric car around town, whilst you save your marginal tax rate off the cost of the lease.

Naturally curious, I went to the lease provider's website, chose a not too extravagant electric car I quite liked the look of, filled out a couple of details and got a quote back. £400 a month. That seems quite high? Or maybe it's reasonable? How much do I pay already on maintenance, and insurance, and road tax? How much do I pay in fuel? How much would an EV cost to power? What am I spending on second hand petrol cars amortised over their ownership?

Never one to shy away when some numbers are in need of crunching I put together a quick spreadsheet. And... I got the slightly disappointing answer I'd expected all along: whilst it might be nice to drive a new EV over my 10 year old petrol car, it is far from a sensible financial decision, at least with my annual mileage.

## Building something

So that was it. I'd spent a good half an hour finding numbers and making a spreadsheet and I didn't even have an excuse to buy a new car to show for it. But maybe it wasn't entirely wasted; I could share it and let others use it too.

The problem is, unless they really want what you've built, no-one is that enthusiastic about checking out someone else's spreadsheet. Were it a little web app though... still probably no-one would care. But just maybe they'll at least have a quick poke about. Plus I've been looking for an excuse to try out Chart.js for a while, so it wouldn't be a total waste of effort.

Building the app was simple: `npm create vite`, add some form inputs, translate the spreadsheet formulae into TypeScript, add a chart, splash some Tailwind on it until it looks half decent, and throw it up on Netlify. Easily done in... well... most of my weekend...

Anyway, presenting "Lease or no lease":

![screenshot showing the lease or no lease web a](/ev-leasing/lease-or-no-lease.png "A screenshot showing the lease-or-no-lease application in a browser")

[Have a go here](https://lease-or-no-lease.mattmarch.co.uk/) and see how much you can justify an electric car to yourself/your significant other.
