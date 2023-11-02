# PROJECT 5 - PRODUCTIVITY PLANNER 'PROPLANX' BACK-END

In all walks of life, one finds themselves burdened with tasks and projects that they must complete within a limited timeframe - sometimes as little as a week, sometimes as much as a year, but limited nonetheless - and while sometimes they may benefit from a group to work alongside, other times they must handle such matters alone. The ProPlanX API provides the backend for the production, storage, and access of content that records such things. 

The types of content it holds are Tasks and TaskGroups (referred to from here on as just Groups). Tasks allow the user to record, as one might expect, the Tasks they need (or wish) to complete, as well as the timeframe they have to work with, whereas Groups allow the user to records the existence (and other details if they so choose) of any Groups of people that are assigned (or can be assigned) to particular Tasks.

As such, this API provides all that is needed to register users, as well as to create, alter and delete content within the database as needed, as well as to filter what content is visible to the user based on whether or not they created the content in question.

If you wish to view the final project itself, it was deployed to Heroku, and can be found here: [Deployed ProPlanX Project](https://project-5-proplanx-536622b745e3.herokuapp.com/)

If alternatively you wish to view the GitHub repo for this project, it can be found here: [ProPlanX GitHub](https://github.com/KeyWarden/Project-5-Productivity-Planner-Resubmission)

Finally, if you wish to view the README for the frontend of this project, you can do so here: [Frontend README](README_FRONT_END.md)

---

## CONTENTS

* [Project Structure](#project-structure)

* [User Stories](#user-stories)

* [Design](#design)
  * [Models](#models)

* [Features](#features)
  * [Task Endpoint](#task-endpoint)
  * [Group Endpoint](#group-endpoint)
  * [Search and Filters](#search-and-filters)

* [Technologies Used](#technologies-used)

* [Deployment](#deployment)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)

---

## Project Structure

The general structure of the project was based on that of the [Code Institute drf-api Walkthrough](https://github.com/Code-Institute-Solutions/drf-api). As the walkthrough follows an industry standard methodology for implementing an API, this was only logical. As one might expect, the structure of the model, serializer, and url files was similarly adapted from the walkthrough due to being the "pythonic" way of implementing such an API with the Django REST Framework.

## User Stories

A selection of User Stories were made for the purposes of both the frontend and backend of this project. Here, I'm going to cover those that influenced the backend, as well as whether they were designated Must Have, Should Have, or Could Have:

1. (Must Have) As a new customer, I would like to be immediately and clearly directed to the sign-up options so that I can get an account as quickly and easily as possible, as well as directed to sign-in similarly quickly so I can get back to managing my Tasks right away.
  * This refers at the backend to the need to be able to create new Profiles, as well as to access existing ones within the backend.
2. (Must Have) As a returning customer, I would like to be presented with the ability to edit, remove, add, or otherwise change my Tasks upon being presented with them, so that I can easily manage them in detail.
  * This refers to the need to implement a model and views for Tasks, as well as the Get, Post, Put, and Delete methods that affect the data within that model.
3. (Must Have) As a returning customer, I would like to be able to assign Tasks to Groups, in order to clearly show which Groups are assigned to which Tasks. And as a returning customer, I would like to be able to be able to easily edit, add, remove, or otherwise change my Groups, so that I can manage them in detail.
  * This refers to the need to implement a model and views for Groups, as well as the Get, Post, Put, and Delete methods that affect the data within that model.
4. (Should Have) As a returning customer, I would like to be able to search through my Tasks in order to quickly find specific Tasks I am looking for.
  * This refers to the desire to implement some forms of fitering to the data within the Tasks model, to control what is presented to a user and in what order.

## Design

### Models

There are a total of three models sepcifically within the ProPlanX backend - the Profile, Task and TaskGroup models. These are broken down as follows.

The **Profile** model contains data in reference to the standard User model. This was created in reference to [User Story 1](#user-stories). This allows the backend to more easily referrence the data in question, and the field names and types are broken down below:

| **type** | **field name** |
|-----|----|
| OneToOneField(User) | owner |
| DateTimeField | created_at |
| DateTimeField | updated_at |
| CharField | name |
| TextField | content |

Originally the Profile model was future-proofed in case I decided to add other features into the final app that could benefit from such, which is why the TextField for content exists, but in the end I did not have the time to implement any such features.

The **Task** model contains the information a user might want to submit to the database to record the Tasks they have or wish to complete and the timeframe to work with. This was created in reference to [User Story 2](#user-stories), and is broken down below:

| **type** | **field name** |
|-----|----|
| ForeignKey(User) | owner |
| DateTimeField | created_at |
| DateTimeField | updated_at |
| DateField | due_at |
| CharField | title |
| TextField | description |

The **TaskGroup** model contains the information a user might want to submit to the database to record any Groups they have or wish to connect with any Tasks already submitted. This was created in reference to [User Story 3](#user-stories), and is broken down below:

| **type** | **field name** |
|-----|----|
| ForeignKey(User) | owner |
| DateTimeField | created_at |
| DateTimeField | updated_at |
| ForeignKey(Task) | task |
| TextField | description |
| IntegerField | group_size |

## Features

### Task Endpoint
```
GET tasks/
POST tasks/
```
These endpoints fetch all the tasks from the database and allow the user to add new tasks to the database respectively, so long as they are an authenticated user. Due to in-built filters, the only tasks the user can see are those they created.

```
GET tasks/<int:id>
PUT tasks/<int:id>
```
These endpoints retrieve the data for a specific task from the database, and allow the user to update the data for a specific task in the database respectively. The id is used as a primary key, telling the endpoints which task is being referred to for either purpose. If the user is not the owner of the Task in question, they are denied access, and cannot edit the content within.

```
DELETE tasks/<int:id>
```
This endpoint deletes the data for a specific task from the database, allowing the user to remove tasks that are no longer needed, for any reason. The id is used as a primary key, telling the endpoint which task is being referred to for deletion. If the user is not the owner of the Task, they cannot make use of this endpoint.

This refers back to [User Stories 2 and 4](#user-stories).

### Group Endpoint
```
GET groups/
POST groups/
```
These endpoints fetch all the groups from the database and allow the user to add new groups to the database respectively, so long as they are an authenticated user. Due to in-built filters, the only groups the user can see are those they created.

```
GET groups/<int:id>
PUT groups/<int:id>
```
These endpoints retrieve the data for a specific group from the database, and allow the user to update the data for a specific group in the database respectively. The id is used as a primary key, telling the endpoints which group is being referred to for either purpose. If the user is not the owner of the Group in question, they are denied access, and cannot edit the content within.

```
DELETE groups/<int:id>
```
This endpoint deletes the data for a specific group from the database, allowing the user to remove groups that are no longer needed, for any reason. The id is used as a primary key, telling the endpoint which groups is being referred to for deletion. If the user is not the owner of the Group, they cannot make use of this endpoint.

This refers back to [User Story 3](#user-stories).

### Search and Filters

Unfortuantely due to time constraints, I was unable to implement full functionality for this feature. It was intended that the user would be able to filter exactly which Tasks and/or Groups are available to them with a text-based filter, as well as for the user to be able to change the order they are displayed based on the data contained within (for example displaying alphabetically by Title for Tasks, or in ascending order by Group Size for Groups).

In the end, I was forced to drop plans for the text-based filter entirely. However, I did manage to implement filters that prevent the user from seeing any Tasks or Groups they did not produce themselves, and I was also able to implement into the GET methods a default filter that orders the Tasks by Due Date (soonest to latest) as well as ordering the Groups by Task Title(alphabetically).

This refers back to [User Story 4](#user-stories).

## Technologies Used

* [ElephantSQL](https://www.elephantsql.com/) - An online service running a PostgreSQL server as a service.

## Deployment

This Project was deployed on Heroku. In order to prepare the backend for deployment, I had to follow the following steps:

1. Remove the root_route import from the pro_plan urls.py.
2. Import TemplateView from django.views.generic into the pro_plan urls.py.
3. Replace the root_route url path in the pro_plan urls.py with (TemplateView.as_view(template_name='index.html')).
4. Add 'api/' to the beginning of every other url path in the pro_plan urls.py except for the admin path.
5. Add a handler404 to the bottom of the pro_plan urls.py file.

Then, to finish preparing the overall project for deployment, I had to do the following:

1. Make a new directory called staticfiles, and then collect the admin and DRF staticfiles into it through the terminal.
```
mkdir staticfiles
python3 manage.py collectstatic
```
2. Compile the React application and move its files also into the staticfiles directory.
```
cd frontend
npm run build && mv build ../staticfiles/.
```
  * Note, sometimes it was necessary to repeat the second step if changes had to be made at the last minute to the React app. To do so, a different code was used to delete the existing build folder and rebuild it.
  ```
  npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.
  ```
3. In the root directory make a new file called [runtime.txt](runtime.txt) and add the following line inside it:
```
python-3.9.16
```

Finally, all that was needed was to deploy the project to Heroku. This was done through the following steps:

1. On my Heroku account, I made a new app, titled 'project-5-proplanx'.
2. In the Settings part of the dashboard, I opened Config Vars, and did the following:
  * I ensured the ALLOWED_HOSTS and CLIENT_ORIGIN keys were set to the url of the Heroku App for [the combined project](https://project-5-proplanx-536622b745e3.herokuapp.com/).
  * I ensured the DATABASE_URL key was set to the url for the ElephantSQL database.
  * I ensured the SECRET_KEY was saved in the Config Vars section as well.
3. I made sure my GitHub repo was fully up-to-date by pushing all remaining changes to the repo.
4. I manually deployed my project from the Deploy tab in the Heroku app dashboard.

## Testing

For information on Testing for the backend, please view the [Testing Document](TESTING.md).

## Credits

I used guidance from the [Code Institute drf-api Walkthrough Project](https://github.com/Code-Institute-Solutions/drf-api) on the Code Institute course as a framework for making the backend.

### Code Used

Most of the code for my back-end was originally written for my inital submission in another repository, which can be found [here](https://github.com/KeyWarden/Project-5-Productivity-Planner/tree/main).

---
