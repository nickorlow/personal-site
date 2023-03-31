It's Spring Break, and that means I finally have time to spend all day working on side projects without having to worry about school.

I figured I should write out the side projects I plan to work on over the break
 
## RingGold 
`Rust, Swift, PostgreSQL`

Last week, me and my cousin wanted to try out Apple's fitness competition feature that works with Apple Watch. It works
by giving you 1 point for every percent you complete of your move, exercise, and stand goals with a point cap of 600
per day. The issue with it was that it didn't work at all, not syncing on time if at all. I want to build a clone of it
with some additional features such as:

- **Notifications:** I didn't like how it was possible to workout and gain a bunch of points and just completely blindside your opponent. Hopefully this would encourage users to workout even more.

- **Widget/Watch Complication:** Similar to the above, adding a homescreen widget or a watch complication would make it easier to keep up with your competitor's progress. 

- **Custom Competitions:** I think it'd be nice to have competitions with custom rules and lengths so that you're not stuck with only one setting. Settings could include custom duration and custom caps on points.

I'm building the web API for it in Rust and the mobile app in Swift. I chose these languages to gain more exposure to them, also
Swift was a good choice since the app is going to be platform specific to iOS due to its need to integrate with Apple Watch. 
*(this is named after New Ringgold, PA)*

## NWS Container Deployment Service 
`C#, Rancher`

I've created my own hosting/cloud service called [Nick Web Services](https://nws.nickorlow.com). It currently allows people to deploy
dockerized applications on my geo-distributed k8s clusters running on Dell Poweredge servers. In order to actually deploy this, I 
had to manually create the Kubernetes manifest files and then ssh into each individual server and apply them. I've setup 
Rancher Fleet to automate this process by pulling the manifest from a git repo (this is something called gitops). I also
wrote an API to generate the manifest files and then upload them to a git repo. I have a video demo of this working that 
you can watch [here](https://youtu.be/WHdXWMFHuqA).

Currently, the service works for deployment but only if you don't want to use SSL or you use Cloudflare's flexible SSL
technology. I wrote a separate blog post [here](http://nickorlow.com/blog/ssl-in-nws-cds) about the challenges of doing this and how I plan on implementing it. 
I'd like to complete part of this implementation during the break.

## VerifiedBot 
`JavaScript, Rust`

This project isn't a personal project, as a lot of it was built by my friends [Arpan](https://arpan.one) and [Ben](https://benaubin.com/).
A little over a year ago, we wanted to make a Discord bot to verify that people on some Discord servers we ran 
went to the University of Texas. Initially, it worked by verifying you had a utexas.edu email address and then verifying
some additional information via LDAP. A few months ago Ben found out that using the SaaS survey software that the university uses
(qualtrics), we could have users verify themselves by using the university's SSO system. This works because qualtrics can send
data to a webhook when a survey is complete, and it can also require signing in with the university's SSO before filling out a survey.
It required that I write a [wasm wrapper for an encryption library](https://github.com/Verified-Bot/aes-gcm-siv-wasm). I wrote almost all the code for this function last year, but 
due to a bug in qualtrics, it wasn't working properly. It seems that this bug has been fixed and we can start rolling it out.


## Personal Website Facelift
`Typescript, React`

My personal website (this one) is a little overdue for some design updates. My main focus will be making it more mobile
friendly. Last year, I made some improvements to make it usable on mobile but it still doesn't feel quite right. I also
think that it has some information overload in some areas such as the projects section. I think that to mitigate this I 
might just have a small summary of each project and then you can click into each to learn more about it, similar to my 
friend [Raul's Website](https://raulhigareda.com). I'm also considering a move to tab-based navigation so that I can have
more information in each section. Further down the line, I think I might re-write it using Svelte as I'm seeing it being used more and more
and would like to get some exposure to it.

## Mahantongo
`Rust, PostgreSQL`

I'm one of the members of the Community Team that runs some UT Computer Science community Discord servers.
Currently, a Discord bot called Carlbot provides us a star-board, which is a specific channel where messages that 5 or more people
react to with a star emoji get posted. It's supposed to be a collection of the funniest and best messages sent on the server.
One of the things our server members have wanted is the addition of more '*-board' channels where you can create multiple star-board
like channels but with custom emojis. I'm writing it in Rust and I'm just hoping to use this project to get more acquainted with the language.
