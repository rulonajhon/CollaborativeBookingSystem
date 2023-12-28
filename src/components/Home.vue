<script setup>

</script>

<template>
 <head>
  <div class="header">
    <title>Library Room Booking System</title>
  </div>
  
  <!-- Add Vue.js CDN and any required stylesheets here -->
</head>
    <!-- Main content area for room availability -->
    <div class="main-content">
      <h1>Library Discussion Room Booking System</h1>
      <h2>Schedule of Reservations</h2>
      <!-- Booking table structure -->
      <div class="booking-table">
        <div v-for="day in week" class="day-column">
          <h3>{{ day.name }}</h3>
          <div v-for="time in day.timeslots" class="timeslot">
            <div v-if="time.isBooked" class="booking">
              <span>Room {{ time.room }}</span>
              <span>{{ time.students }} students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
<body>
  <div id="app">
    <!-- Sidebar for user navigation -->
    <div class="sidebar">
      <div class="user-profile">
        <!-- User profile image and info -->
      </div>
      <div class="navigation">
        <div class="container">
          <div class="box">
          </div>
          <p1>Student User</p1>
        </div>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Reserve</a></li>
        </ul>
        <div class="logout">
        <a href="#">Logout</a>
      </div>
      </div>
      <div class="history">
        <h1>History</h1>
      </div>
      <div class="discussion">
        <h1>Discussion Room</h1>
      </div>
     
    </div>
    
  </div>

</body> 
</template>
<style scoped>
.main-content{
  padding-right: 770px;
  display: flex;
  flex-direction:column;
  align-items: stretch;
  background-color: rgb(233, 112, 130);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.main-content h1{
  font-size: 32px;
padding-left: 120px ;}
.discussion h1{
  padding-right: 300px;
  padding: 30px;
  color: rgb(205, 205, 205);

}
.discussion{
  padding-right: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: rgb(255, 255, 255);
  position: fixed;
  left: 830px;
  top: 90px;
  bottom: 0;
  border-top: 2px solid rgb(204, 213, 213);
  border-left: 2px solid rgb(204, 213, 213);
}
.history h1{
  padding: 30px;
  color: rgb(205, 205, 205);
 font-size: 30px;

}
.history{
  padding-right: 500px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: rgb(255, 255, 255);
  position: fixed;
  left: 192px;
  top: 90px;
  bottom: 0;
  border-top: 2px solid rgb(204, 213, 213);
  border-right: 2px solid rgb(204, 213, 213);
}
.navigation .logout a{
display: flex;
justify-content: flex-start;
 color: black;
 padding: 40px;
 padding-right: 100px;
}
.navigation{
display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: rgb(221, 230, 230);
  position: fixed;
  left: 0;
  top: 91px;
  bottom: 0;
  
}
.navigation li {
  list-style: none;
  color: black;

}
.navigation li a{
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  color: black;
}

.container .box {
    background-color: aqua;
    padding-top: 100px;

   display: flex;
   justify-content: flex-start;
   border-radius: 50px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 15px;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
</style>
