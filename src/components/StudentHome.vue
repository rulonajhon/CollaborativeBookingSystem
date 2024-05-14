<template>
  <div>
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

    <!-- Sidebar for user navigation -->
    <div class="sidebar">
      <!-- User profile image and info -->
      <div class="user-profile">
        <!-- User profile image and info go here -->
      </div>
      <div class="navigation">
        <div class="container">
          <div class="box">
            <img class="logo" src="/src/assets/head-icon.png" />
          </div>
          <p>Student User</p>
        </div>
        <ul>
          <li><a href="studenthome">Schedule</a></li>
          <li><a href="reservehome">Reserve</a></li>
        </ul>
        <div class="logout">
          <a href="login">Logout</a>
        </div>
      </div>
      <div class="history">
        <div class="box">
          <table class="table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Student ID</th>
                <th>Room Choice</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Companions</th>
                <th>Student Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="booking in week" :key="booking.BookingID">
                <td>{{ booking.BookingID }}</td>
                <td>{{ booking.StudentID }}</td>
                <td>{{ booking.RoomChoice }}</td>
                <td>{{ booking.TimeIn }}</td>
                <td>{{ booking.TimeOut }}</td>
                <td>{{ booking.Companions }}</td>
                <td>{{ booking.StudentName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: [], // Weekly bookings data will be stored here
      // Define weeklyBookings array to store fetched data
      weeklyBookings: [], 
    };
  },
  mounted() {
    // Fetch weekly bookings data and update 'week' property
    this.fetchWeeklyBookings();
  },
  methods: {
    async fetchWeeklyBookings() {
      try {
        const response = await fetch('http://127.0.0.1:8000/bookings/bookings/weekly_bookings');
        const data = await response.json();
        
        console.log('Fetched weekly bookings data:', data); // Log the fetched data

        // Set the fetched data to 'week' property
        this.week = data;

      } catch (error) {
        console.error('Error fetching weekly bookings:', error);
      }
    },
  },
};
</script>



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

.home-container {
	width: 100%;
	display: flex;
	overflow: auto;
	min-height: 100vh;
	align-items: center;
	flex-direction: column;
  }
  .home-student-scheduleempty {
	width: 100%;
	height: 1487px;
	display: flex;
	position: relative;
	align-items: flex-start;
	flex-shrink: 0;
  }
  .home-reservationgreybg {
	top: 124px;
	left: 0px;
	width: 1400px;
	height: 1000px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(245, 247, 250, 1);
  }
  .home-reservationsched {
	top: 36px;
	left: 33px;
	width: 1854px;
	height: 1294px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-radius: 10px;
	background-color: var(--dl-color-primary-0);
  }
  .home-text {
	top: 24px;
	left: 24px;
	color: rgba(48, 48, 48, 1);
	width: 434px;
	height: auto;
	position: absolute;
	font-size: 20px;
	font-style: Bold;
	text-align: left;
	font-family: Inter;
	font-weight: 700;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-calendar-body {
	top: 236px;
	left: 57px;
	width: 1300px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-calendar-dayeader {
    width: 1300px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-freespace {
	gap: 10px;
	width: 188px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-sunday {
	gap: 10px;
	width: 230px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-text02 {
	color: rgba(48, 48, 48, 1);
	width: 210px;
	height: auto;
	font-size: 20px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-monday {
	gap: 10px;
	width: 230px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-text04 {
	color: rgba(48, 48, 48, 1);
	width: 210px;
	height: auto;
	font-size: 20px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-tuesday {
	gap: 10px;
	width: 230px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-text06 {
	color: rgba(48, 48, 48, 1);
	width: 210px;
	height: auto;
	font-size: 20px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-wednesday {
	gap: 10px;
	width: 230px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-text08 {
	color: rgba(48, 48, 48, 1);
	width: 210px;
	height: auto;
	font-size: 20px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-thursday {
	gap: 10px;
	width: 230px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-text10 {
	color: rgba(48, 48, 48, 1);
	width: 210px;
	height: auto;
	font-size: 20px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-friday {
	gap: 10px;
	width: 230px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-text12 {
	color: rgba(48, 48, 48, 1);
	width: 210px;
	height: auto;
	font-size: 20px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-saturday {
	gap: 10px;
	width: 231px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-text14 {
	color: rgba(48, 48, 48, 1);
	width: 210px;
	height: auto;
	font-size: 20px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-sevenrow {
    width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text16 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-eightrow {
    width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one01 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text18 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two01 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three01 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four01 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five01 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six01 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven01 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight01 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-ninerow {
    width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one02 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text20 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two02 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three02 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four02 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five02 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six02 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven02 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight02 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-tenrow {
	width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one03 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text22 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two03 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three03 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four03 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five03 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six03 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven03 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight03 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-elevenrow {
    width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one04 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text24 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two04 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three04 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four04 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five04 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six04 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven04 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight04 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-twelverow {
	width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one05 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text26 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two05 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three05 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four05 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five05 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six05 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven05 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight05 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-onerow {
	width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one06 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text28 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two06 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three06 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four06 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five06 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six06 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven06 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight06 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-tworow {
	width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one07 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text30 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two07 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three07 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four07 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five07 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six07 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven07 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight07 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-threerow {
	width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one08 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text32 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two08 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three08 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four08 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five08 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six08 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven08 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight08 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-fourrow {
	width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one09 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text34 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two09 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three09 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four09 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five09 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six09 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven09 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight09 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-fiverow {
	width: 1300px;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-one10 {
	gap: 10px;
	width: 188px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-text36 {
	color: rgba(48, 48, 48, 1);
	width: 186px;
	height: auto;
	font-size: 20px;
	font-style: Regular;
	text-align: center;
	font-family: Inter;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-two10 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-three10 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-four10 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-five10 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-six10 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-seven10 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: center;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
	justify-content: center;
  }
  .home-eight10 {
	gap: 10px;
	width: 230px;
	height: 100px;
	display: flex;
	padding: 30px 10px;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(242, 242, 242, 1);
	border-style: solid;
	border-width: 1px;
	flex-direction: column;
  }
  .home-nav-bar-top {
	top: 0px;
	left: 0px;
	width: 1920px;
	height: 124px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(245, 247, 250, 1);
	border-style: solid;
	border-width: 1px;
	background-color: rgba(255, 255, 255, 1);
  }
  .home-text38 {
	top: 47px;
	left: 57px;
	color: rgb(237, 163, 190);
	width: 700px;
	height: auto;
	position: absolute;
	font-size: 24px;
	font-style: Extra Bold;
	text-align: left;
	font-family: "Inter";
	font-weight: 700;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
  }
  .home-text39 {
	color: #eda3be;
  }
  .home-text41 {
	color: #313131;
  }
</style>
