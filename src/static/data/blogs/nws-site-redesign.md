This blog is also avaliable to read on the [NWS blog]().

The NWS website got a facelift recently and with it came some technical changes.
I also figured that I would take this time to explain how some of NWS' services work
and how I plan to expand upon them in the future.
## Addition of new API Features

With this update, the NWS API got 3 new features: Uptime Monitoring, Incident Reporting, 
and Blogging.

###Uptime Monitoring
Uptime Monitoring has been a part of the NWS website since its creation, however
it was achieved by calling the API of the uptime monitoring service we use directly. This
came with issues such as rate limiting if too many people visited the NWS website and
we exposed the API key to clients, making it so that an attack in which someone
causes our API key to be ratelimited would be possible.

In this update, Uptime Monitoring was baked into the NWS API itself. The API still calls
out to the aforementioned uptime monitoring service however, now the NWS website
gets all of it's information from the NWS API. This fixes both of the problems above and
allows for us to add more data to the endpoint in the future.

There were two approaches I tried for this and ultimately decided on one. The first 
approach was to store the uptime data in a static variable in the API and whenever a 
user requested the data and the data was stale, we would fetch new data and return that.
This was seen as a potential solution as it prevents API calls from being made when people aren't
visiting the NWS website a lot. 
//TODO: FINISH

### Incident reporting

### Blogging
Blogging is not yet incorporated into the NWS website, however the backend is built out.
The Blogging part of this 

## NWS Website Redesign
