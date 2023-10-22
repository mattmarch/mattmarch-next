---
title: "Airtable pricing changes: a lesson in trusting proprietary free tiers"
date: "2023-10-22"
---

I'm building my own wedding website. Yes, I should have known better. As it's been my full time job for a fair few years I should have remembered that software development is a frustrating and easy to underestimate activity. But that's not the point of this post!

Being the current _cool_ thing, and [already having some experience](/posts/dependency-rot) in it, I picked [Next.js](https://nextjs.org/). Since most of the content would be static and the guest list isn't expected to change very often I could generate personalised pages for each guest at build time so, among other reasons, it seemed like a good idea.

The next question was data. All of our wedding planning has been happening in a big Google Sheets spreadsheet. We needed something where it's easy to import the guest information into the wedding site, and easy to export/view the RSVPs.

[Airtable](https://www.airtable.com/) seemed like a great option here, kind of a cross between a spreadsheet and a relational database with a nice UI and a well documented API. Our usage fell easily within the free tier and there were no API usage limits (other than a rate limit of 5 requests per second which only posed a problem at build time, and could be worked around with some clever caching)!

Then [the pricing changed](https://support.airtable.com/docs/changes-to-airtable-plans). One of the new restrictions in particular was cause for concern:

> API calls per workspace/per month: 1000

Now, we're not having a massive wedding - but this is a very low limit and sounded problematic. To increase this it was $24 a month, which admittedly isn't much in wedding terms, but given everything else about our wedding website falls easily within free tiers it was an uncomfortable extra cost.

So on my next free weekend day I stripped Airtable out of the app and replaced it with [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres). Already being familiar with SQL and Postgres this was surprisingly quick and also much cleaner to implement than Airtable. I started to question why I hadn't gone with Postgres from the start...

How about that all important import/export process? I spent a little time writing some spreadsheet formulae to translate data into `INSERT` statements to get the data into the site. Then a very short SQL script to export the data to CSV and we were there!

And yes, before you say it, technically Vercel could change their Postgres pricing terms. But given Postgres is so ubiquitous it should be a lot easier to migrate to a new free or cheap Postgres provider if that does happen!
