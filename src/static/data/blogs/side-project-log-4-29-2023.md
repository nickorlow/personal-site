This side project log covers work done from 3/27/2023 - 4/29/2023

This side project log is a bit late due to it being a busy month of school, but today is my last day!

## SEPTA Site
This week, I published SEPTA Site on Github, you can find it here: [github.com/nickorlow/septa-site](https://github.com/nickorlow/septa-site).

I made a few tweaks to it in terms of styling and also wrote a descriptive README to give people instructions on how to run it as I don't want
to host it myself since it handles credentials from another service.

## SQUIRREL
SQUIRREL, short for SQL Query Util-Izing Rust's Reliable and Efficient Logic, is a SQL database that I am writing in Rust. Currently, it can
parse CREATE TABLE commands, and works with the data types varchar and int. I plan to implement basic CRUD operations, then add JOINs, and
then try to make it wire-compatible with Postgres.

This project is currently not open-sourced as I am waiting to add more features and polish it up more.


## Swole Control
This one isn't a *personal* project, however it is a project that I worked on with a group. We began working on it in February as a part of a
club at UT called Texas Convergent. We recently presented it at the club's demo day and won the prize for having the best business.

Swole Control is an app that monitors machine usage at a gym on a machine-by-machine level, providing gym goers with information about what machines
are free (this is a major pain point as a gym goer myself). It also provides gym owners with statistics on which machines are most popular, providing
them valuable insights into their business.

To achieve this, we built hardware that consisted of an ESP-32 micro controller and an ultrasonic distance sensor. This hardware is mounted on a gym machine
and it measures the distance to the nearest object. It then sends this measurement to a Rust backend which stores it in a Firestore database (although we had
a fork of it that worked with Postgres). The backend then uses these measurements and compares them to a baseline to determine if there is a user at a machine.
Our mobile app then reads this from the Firestore database (it's planned to have it read this from the API to have a better-defined application boundary). The
frontend is written in React Native.

---

**These projects had minimal/no work done on them:** RingGold, and NWS Container Deployment Service

