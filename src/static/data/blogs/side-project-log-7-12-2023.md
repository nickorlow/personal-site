This side project log covers work done from 4/29/2023 - 7/12/2023

This side project log is more than a bit late due to working a busy summer internship at [FUTO](https://futo.org)!

## NWS Container Deployment Service
I have finally added SSL to NWS CDS. This was challenging, as it required handling ACME challenges and certificate
distribution across a set of geo-distributed Kubernetes clusters. I detail the complexities of this in a [previous blog
I wrote](http://nickorlow.com/blog/ssl-in-nws-cds). In order to implement auto-renewing, automatic SSL, I implemented the below solution:

![Diagram of NWS SSL Architecture](/blog-images/NWS_SSL_Diagram.png)

First, a user creates a request to add SSL to their NWS CDS service through the web UI which calls the NWS API (Not pictured)

Then, the NWS API calls SSLiason (in-house written software) which adds the domain to Caddy's list of domains. Caddy will then attempt to create
an SSL certificate from an ACME server (not pictured).

The ACME server will query NWS for the challenge response by requesting a file at `/.well-known/acme-challenge` on the
domain to be verified (this is the green arrows). 

HAProxy will re-route these requests to NWS Hill Country, which is where the NWS Management Engine (NWSME) lives (this is 
the orange arrows). 

HAProxy in NWS Hill Country will then route this request to Caddy, which will solve the challenge, and then get the certificate
from the ACME server. Once it does this, it will write the certificate to a directory that is bind-mounted to both Caddy
and SSLiason. 

SSLiason will detect this new file, parse it into a k8s manifest file, and then add it to our GitOps repo which is
hosted in GitHub.

From here, the certificate will be added to all of the clusters via Rancher Fleet.

--- 

For next steps, I'd like to revise this solution such that it doesn't have a single point of failure. 
Currently, if NWS Hill Country is down (which it is about %0.025 of the time), then SSL certificates
won't be able to be created or renewed. 

To do this, I will have SSLiason implement the ACME client specification so that it can create and respond do ACME HTTP challenges. 
SSLiason will run on NWS CDS (so that it's running on all of our k8s clusters and is HA) instead of running as a standalond docker container.
I'll have SSLiason use some distributed database (probably CockroachDB) to store the HTTP challenges so that it doesn't matter
which k8s cluster the challenge request from the ACME server is routed to.

## Next Steps for NWS

- **HA NWS Management Engine:** Currently (as somewhat discussed above), the NWSME will go down when NWS Hill Country goes down. I'd like to
make it so that this isn't the case. This would likely just require that each NWS cluster runs its own instance of Rancher Fleet instead
of one central Rancher Fleet that manages all the clusters. It would also require the HA SSLiason.


- **IaC for Everything:** Currently, all NWS CDS services are defined in yaml files in a git repo, however the underlying infrastructure that
it runs on is not. Ideally, I'd like every NWS machine to run Proxmox and then have Terraform & Ansible configs to define how to set up
vms on proxmox that will run the k8s clusters that support CDS services. This should eliminate my headaches of sshing into each machine
to apply config changes and make sure everything is standardized. It should also make the process of setting up new servers easy.


- **Monitoring:** I've been working on setting up monitoring on a lot of our services at my current internship using the TIG stack (Telegraf,
InfluxDB, and Grafana). Now that I've been exposed to the usefulness of having a bunch of metrics on hand, I think it would be nice to have
some dashboards setup for NWS to monitor speed, resource usage, uptime, and traffic. Doing this would also make it possible to expose resource usage in the 
NWS dashboard.


- **Enhanced Infrastructure:** This is kind of a blanket one for things I want to do that don't fit into other categories. It includes making 
hardware upgrades (mostly adding more storage), make management more accessible (such as Dell IDRAC's WebSerial), some load testing to
identify painpoints, run an NWS machine in a cloud VM so I can say it's cross cloud (although my friends have told me this is cheating at creating 
my own cloud), and trying to figure out how to set up an Anycast network. I don't think I can setup an Anycast network without selling 
a kidney first. Renting a /24 CIDR alone would be more than I want to spend on a side project. I may look into setting it up with ipv6 only, 
however I'd still have to jump through hoops to get an Autonomous System number from an RIR. I'll probably write a whole blog about Anycast
in the coming weeks.

## Olney

`Rust, ActixWeb, PostgreSQL`

Olney is a new project I am starting with my friend [Sridhar Nandigam](https://sridharnandigam.com/). It aims to make
tracking your job applications easier. Most of my friends either use spreadsheets or Trello to track their job applications, I
think that we can make something that's a bit better for the job. Some features I'd like to have are: resume version attached to
your application, job posting notifications from job boards such as [pittcsc](github.com/pittcsc/summer2024-internships), and watching 
your email for emails from recruiters. Currently, I have part of the backend setup with basic CRUD operations. Now that I'm done with
the latest batch of NWS work, this is next on my list to work on.

---

**These projects had minimal/no work done on them:** RingGold, SQUIRREL

