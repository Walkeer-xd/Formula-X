# Formula-X

A One Stop Solution for Formula-1 Fans.

## Project Description

This application is a Formula 1 companion platform that provides users with season schedules, driver and team information, race details, leaderboards, and F1-related news.  
The app will also support a basic login system so users can personalise their experience, such as selecting a favourite team.

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Frontend:** React
- **Other:** REST API, JWT authentication (planned)

---

## MVP Features

- **Season Schedule** – View all races in a selected season, including dates, locations, and status.
- **Drivers & Teams** – Browse drivers and teams with relevant details such as nationality, team association, and numbers.
- **Leaderboard** – Display points standings for drivers or teams per season.
- **News** – Show relevant F1 news articles from various sources.
- **Basic Login** – Allow users to sign up and log in to access personalised features.

---

## Data Entities & Fields

### **User**

- `id`
- `email`
- `passwordHash`
- `favouriteTeam`

### **Season**

- `id`
- `year`
- `description`

### **Race**

- `id`
- `seasonId`
- `name`
- `trackId`
- `date`
- `time`
- `status`

### **Driver**

- `id`
- `name`
- `teamId`
- `country`
- `number`

### **Team**

- `id`
- `name`
- `baseCountry`

### **Track**

- `id`
- `name`
- `country`
- `layoutImageUrl`

### **LeaderboardEntry**

- `id`
- `seasonId`
- `driverId/teamId`
- `points`

### **NewsArticle**

- `id`
- `title`
- `content/url`
- `publishedAt`

---
