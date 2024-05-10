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
            <img class="logo" src="/src/assets/head-icon.png" />
          </div>
          <p1>Student User</p1>
        </div>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Reserve</a></li>
        </ul>
        <div class="logout">
        <a href="login">Logout</a>
      </div>
      </div>
      <div class="history">
        <h1>History</h1>
        <div class="box">
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Student Number</th>
      <th scope="col">Department</th>
      <th scope="col">Course & Year</th>
      <th scope="col">Time-In</th>
      <th scope="col">Time-Out</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>1 pm</td>
    </tr>
    <tr>
      <td scope="row">2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>1 pm</td>
    </tr>
    <tr>
      <td scope="row">3</td>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>1 pm</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
      <!-- <div class="discussion">
        <h1>Discussion Room</h1>
      </div> -->
     
    </div>
    
  </div>

</body> 
</template>
<style scoped>
.main-content{
  padding-right: 970px;
  display: flex;
  flex-direction:column;
  align-items: stretch;
  background-color: rgb(233, 112, 130);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.container p1 {
  color: black;
  font-size: 25px;
  font-weight: 500;
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
  border-top: 2px solid rgb(255, 255, 255);
  border-left: 2px solid rgb(204, 213, 213);
}
.history h1{
  padding: -120px;
  padding-left: 40px;
  color: rgb(205, 205, 205);
 font-size: 50px;
text-decoration: none;
align-self: flex-start;

 
}
.history{
  padding-right: 1400px;
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
.history .box {

  width: 1400px;
  height: 570px;
  padding: 70px;
}
.history .box {
  padding: 20px; /* Add padding for spacing */
}

.history .table {
  width: 100%; /* Set the width to fill its container */
  border-collapse: collapse; /* Collapse borders */
}

.history .table th,
.history .table td {
  border-bottom: 2px solid #ddd; /* Add border */
  padding: 15px; /* Add padding */
  color: black;
  text-align: left; /* Align text to the left */
}

.history .table th {
  background-color: #f1f1f1; /* Set background color for header */
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
   
  
   display: flex;
   justify-content: flex-start;
   border-radius: 50px;

}
.container .box img{
  height: 200px;
  border-radius: 125px;

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
