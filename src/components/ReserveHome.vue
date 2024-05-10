<template>
	<div class="navigation">
        <div class="container">
          <div class="box">
            <img class="logo" src="/src/assets/head-icon.png" />
          </div>
          <p1>Student User</p1>
        </div>
        <ul>
          <li><a href="studenthome">Schedule</a></li>
          <li><a href="reservehome">Reserve</a></li>
        </ul>
        <div class="logout">
        <a href="login">Logout</a>
      </div>
      </div>
	<div class="booking-form">
	  <h2>Create Booking</h2>
	  <form @submit.prevent="createBooking">
		<div>
		  <label for="username">Username:</label>
		  <input type="text" id="username" v-model="username" required>
		</div>
		<div>
		  <label for="roomChoice">Room Choice:</label>
		  <select id="roomChoice" v-model="roomChoice" required>
			<option value="1">Room 1</option>
			<option value="2">Room 2</option>
		  </select>
		</div>
		<div>
		  <label for="timeIn">Time In:</label>
		  <input type="datetime-local" id="timeIn" v-model="timeIn" required>
		</div>
		<div>
		  <label for="timeOut">Time Out:</label>
		  <input type="datetime-local" id="timeOut" v-model="timeOut" required>
		</div>
		<div>
		  <label for="companions">Companions:</label>
		  <input type="text" id="companions" v-model="companions">
		</div>
		<button type="submit">Create Booking</button>
	  </form>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	data() {
	  return {
		username: '',
		roomChoice: '', // Changed to an empty string
		timeIn: '',
		timeOut: '',
		companions: ''
	  };
	},
	methods: {
	  async createBooking() {
		try {
		  // Parse and format timeIn and timeOut
		  const formattedTimeIn = this.formatDateTime(this.timeIn);
		  const formattedTimeOut = this.formatDateTime(this.timeOut);
  
		  // Send the formatted data to the backend
		  const response = await axios.post('http://127.0.0.1:8000/bookings/bookings/create_booking', null, {
			params: {
			  username: this.username,
			  room_choice: this.roomChoice, // Use the selected room choice
			  time_in: formattedTimeIn,
			  time_out: formattedTimeOut,
			  companions: this.companions
			}
		  });
  
		  console.log('Booking created successfully:', response.data);
		  // Reset form fields after successful booking creation
		  this.username = '';
		  this.roomChoice = '';
		  this.timeIn = '';
		  this.timeOut = '';
		  this.companions = '';
		} catch (error) {
		  console.error('Error creating booking:', error.response.data);
		  // Handle error
		}
	  },
	  formatDateTime(dateTime) {
		// Parse dateTime string to Date object
		const parsedDate = new Date(dateTime);
  
		// Format the Date object to 'YYYY-MM-DD HH:MM:SS'
		const formattedDateTime = parsedDate.toISOString().slice(0, 19).replace('T', ' ');
  
		return formattedDateTime;
	  }
	}
  }
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

.student-reserveempty-container {
	width: 100%;
	display: flex;
	overflow: auto;
	min-height: 100vh;
	align-items: center;
	flex-direction: column;
  }
  .student-reserveempty-student-reserveempty {
	width: 100%;
	height: 910px;
	display: flex;
	position: relative;
	align-items: flex-start;
	flex-shrink: 0;
  }
  .student-reserveempty-reservebg {
	top: 124px;
	left: 0px;
	width: 1500px;
	height: 784px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
	justify-content: flex-start;
	background-color: rgba(245, 247, 250, 1);
  }
  .student-reserveempty-reservewhite {
	top: -15px;
	left: 33px;
	width: 1854px;
	height: 715px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-radius: 10px;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-text {
	top: 24px;
	left: 24px;
	color: rgb(48, 48, 48);
	width: 434px;
	height: auto;
	position: absolute;
	font-size: 20px;
	font-style: Bold;
	text-align: left;
	font-family: "Inter";
	font-weight: 700;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-overview {
	top: 217px;
	left: 848px;
	width: 1005px;
	height: 655px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-radius: 10px;
	background-color: var(--dl-color-primary-0);
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-text01 {
	top: 24px;
	left: 24px;
	color: rgba(48, 48, 48, 1);
	width: 192px;
	height: auto;
	position: absolute;
	font-size: 20px;
	font-style: Semi Bold;
	text-align: left;
	font-family: Inter;
	font-weight: 700;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-overview-table {
	gap: 5px;
	top: 43px;
	left: 33px;
	width: 939px;
	height: 519px;
	display: flex;
	padding: 10px;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-overview-header {
	gap: 8px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-number {
	gap: 10px;
	width: 120px;
	height: 40px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-text03 {
	color: rgba(48, 48, 48, 1);
	height: auto;
	font-size: 12px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: 20px;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-student-number {
	gap: 10px;
	width: 140px;
	height: 40px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-text07 {
	color: rgba(48, 48, 48, 1);
	height: auto;
	font-size: 12px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: 20px;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-department {
	gap: 10px;
	width: 120px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-text11 {
	color: rgba(48, 48, 48, 1);
	height: auto;
	font-size: 12px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: 20px;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-course-year {
	gap: 10px;
	width: 100px;
	height: 40px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-text13 {
	color: rgba(48, 48, 48, 1);
	height: auto;
	font-size: 12px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: 20px;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-time-in {
	gap: 10px;
	width: 120px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-text15 {
	color: rgba(48, 48, 48, 1);
	height: auto;
	font-size: 12px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: 20px;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-time-out {
	gap: 10px;
	width: 120px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-text17 {
	color: rgba(48, 48, 48, 1);
	height: auto;
	font-size: 12px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: 20px;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-frame1321314512 {
	gap: 10px;
	width: 144px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-text19 {
	color: rgba(48, 48, 48, 1);
	height: auto;
	font-size: 12px;
	font-style: Medium;
	text-align: center;
	font-family: Inter;
	font-weight: 500;
	line-height: 20px;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-overviewone {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year01 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in1 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out1 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-overviewone1 {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num1 {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num1 {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept1 {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year02 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in2 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out2 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit1 {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-overviewone2 {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num2 {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num2 {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept2 {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year03 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in3 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out3 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit2 {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-overviewone3 {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num3 {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num3 {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept3 {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year04 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in4 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out4 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit3 {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-overviewone4 {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num4 {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num4 {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept4 {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year05 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in5 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out5 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit4 {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-overviewone5 {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num5 {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num5 {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept5 {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year06 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in6 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out6 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit5 {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-overviewone6 {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num6 {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num6 {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept6 {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year07 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in7 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out7 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit6 {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-overviewone7 {
	gap: 56px;
	width: 921px;
	display: flex;
	padding: 10px 10px 10px 0;
	box-sizing: content-box;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: rgba(206, 206, 206, 1);
	border-style: solid;
	border-width: 0 0 1px;
	justify-content: center;
  }
  .student-reserveempty-room-num7 {
	gap: 10px;
	width: 66px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-student-num7 {
	gap: 10px;
	width: 102px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-dept7 {
	gap: 10px;
	width: 60px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-course-year08 {
	gap: 10px;
	width: 62px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-in8 {
	gap: 10px;
	width: 67px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-time-out8 {
	gap: 10px;
	width: 65px;
	height: 23px;
	display: flex;
	padding: 10px;
	align-items: center;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-edit7 {
	gap: 20px;
	width: 98px;
	height: 24px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	justify-content: center;
  }
  .student-reserveempty-confirm {
	gap: 8px;
	top: 540px;
	left: 804px;
	width: 160px;
	height: 45px;
	display: flex;
	padding: 0 20px;
	position: absolute;
	align-items: center;
	flex-shrink: 0;
	border-color: #eda3be;
	border-radius: 10px;
	justify-content: center;
	background-color: rgba(237, 163, 190, 1);
  }
  .student-reserveempty-text21 {
	color: rgba(255, 255, 255, 1);
	width: 100px;
	height: auto;
	font-size: 16px;
	font-style: Bold;
	text-align: center;
	font-family: "Inter";
	font-weight: 700;
	line-height: normal;
	border-color: #eda3be;
	font-stretch: normal;
	text-decoration: none;
	background-color: rgb(237, 163, 190);
  }
  .student-reserveempty-reservearoom {
	top: 200px;
	left: 66px;
	width: 749px;
	height: 601px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-radius: 10px;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-choosearoom {
	top: 0px;
	left: 0px;
	width: 749px;
	height: 120px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-choosearoom1 {
	gap: 8px;
	top: 10px;
	left: 24px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: center;
  }
  .student-reserveempty-text22 {
	color: rgba(48, 48, 48, 1);
	width: 200px;
	height: auto;
	font-size: 20px;
	font-style: Semi Bold;
	text-align: left;
	font-family: Inter;
	font-weight: 700;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-room2 {
	gap: 24px;
	top: 51px;
	left: 425px;
	width: 203px;
	height: 24px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-box2 {
	width: 203px;
	height: 24px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
  }
  .student-reserveempty-text24 {
	color: rgba(31, 37, 68, 1);
	right: 0px;
	width: 171px;
	bottom: -1px;
	height: auto;
	position: absolute;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-text25 {
	color: rgba(31, 37, 68, 1);
  }
  .student-reserveempty-text26 {
	color: rgba(48, 48, 48, 1);
  }
  .student-reserveempty-room1 {
	gap: 24px;
	top: 52px;
	left: 24px;
	width: 203px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-direction: column;
  }
  input[type="radio"] {
	transform: scale(1.2); /* Adjust the scale factor as needed */
  }
  .student-reserveempty-box1 {
	width: 203px;
	height: 24px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
  }
  .student-reserveempty-text28 {
	left: 32px;
	color: rgba(48, 48, 48, 1);
	width: 171px;
	height: auto;
	position: absolute;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-credit-card {
	top: 100px;
	left: 0px;
	width: 749px;
	height: 158px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-credit-card1 {
	gap: 8px;
	top: 24px;
	left: 24px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: center;
  }
  .student-reserveempty-choosearoom2 {
	gap: 8px;
	display: flex;
	align-items: center;
  }
  .student-reserveempty-text30 {
	color: rgba(48, 48, 48, 1);
	width: 200px;
	height: auto;
	font-size: 20px;
	font-style: Semi Bold;
	text-align: left;
	font-family: Inter;
	font-weight: 700;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-cardnumber {
	gap: 5px;
	top: 58px;
	left: 24px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-text32 {
	color: rgba(48, 48, 48, 1);
	width: 104px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-cardnumber1 {
	width: 200px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-expration-date {
	gap: 16px;
	top: 58px;
	left: 274px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-cardnumber2 {
	gap: 5px;
	width: 200px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-text34 {
	color: rgba(48, 48, 48, 1);
	width: 104px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-cardnumber3 {
	width: 200px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput1 {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-cardnumber4 {
	gap: 5px;
	top: 58px;
	left: 524px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-text36 {
	color: rgba(48, 48, 48, 1);
	width: 104px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-cardnumber5 {
	width: 200px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput2 {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-add-student{
	position: relative;
  }
  .student-reserveempty-student-info {
	top: 248px;
	left: 0px;
	width: 749px;
	height: 249px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-addastudent {
	gap: 4px;
	top: 24px;
	left: 24px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-direction: column;
  }
  .student-reserveempty-addastudent1 {
	gap: 8px;
	display: flex;
	align-items: center;
  }
  .student-reserveempty-addastudent2 {
	gap: 8px;
	display: flex;
	align-items: center;
  }
  .student-reserveempty-text38 {
	color: rgba(48, 48, 48, 1);
	width: 200px;
	height: auto;
	font-size: 20px;
	font-style: SemiBold;
	text-align: left;
	font-family: Inter;
	font-weight: 600;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-name {
	gap: 5px;
	top: 56px;
	left: 24px;
	width: 300px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-direction: column;
  }
  .student-reserveempty-text40 {
	color: rgba(48, 48, 48, 1);
	width: 48px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-fill-name {
	width: 300px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput3 {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-uic-email-address {
	gap: 5px;
	top: 56px;
	left: 434px;
	width: 300px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-direction: column;
  }
  .student-reserveempty-text42 {
	color: rgba(48, 48, 48, 1);
	width: 156px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-fill-email-address {
	width: 300px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput4 {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	margin-right: 2px;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-student-id {
	gap: 5px;
	top: 149px;
	left: 24px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-text44 {
	color: rgba(48, 48, 48, 1);
	width: 104px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-cardnumber6 {
	width: 200px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput5 {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-college-department {
	gap: 16px;
	top: 149px;
	left: 280px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-college-department1 {
	gap: 5px;
	width: 200px;
	display: flex;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-text46 {
	color: rgba(48, 48, 48, 1);
	width: 171px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-fill-college-department {
	width: 200px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput6 {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-course-year09 {
	gap: 5px;
	top: 149px;
	left: 534px;
	width: 200px;
	display: flex;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	flex-direction: column;
  }
  .student-reserveempty-text48 {
	color: rgba(48, 48, 48, 1);
	width: 130px;
	height: auto;
	font-size: 16px;
	font-style: Medium;
	text-align: left;
	font-family: Inter;
	font-weight: 500;
	line-height: 150%;
	font-stretch: normal;
	text-decoration: none;
  }
  .student-reserveempty-fill-course-year {
	width: 200px;
	height: 40px;
	display: flex;
	position: relative;
	align-items: center;
	flex-shrink: 1;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
  }
  .student-reserveempty-textinput7 {
	fill: #303030;
	color: #303030;
	width: 100%;
	border-color: #CECECE;
	background-color: var(--dl-color-primary-0);
  }
  .student-reserveempty-add-student {
	gap: 8px;
	top: 529px;
	left: 574px;
	width: 160px;
	height: 45px;
	display: flex;
	padding: 0 20px;
	position: absolute;
	align-items: center;
	flex-shrink: 0;
	border-color: #cecece;
	border-radius: 10px;
	justify-content: center;
	background-color: rgba(206, 206, 206, 1);
  }

  .student-reserveempty-add-student.button {
	text-align: left; /* Align the button text to the left */
	background-color: rgba(0, 255, 255, 0);
  }
  
  .student-reserveempty-text50.button {
	background-color: pink; /* Change the background color to pink */
	padding: 10px 20px; /* Add padding for better appearance */
	border-radius: 10px; /* Add rounded corners */
	cursor: pointer; /* Change cursor to pointer on hover */
	
  }
  
  .student-reserveempty-text50 {
	color: rgba(245, 247, 250, 1);
	width: 100px;
	height: auto;
	font-size: 16px;
	font-style: Bold;
	text-align: center;
	font-family: Inter;
	font-weight: 700;
	line-height: normal;
	border-color: #CECECE;
	font-stretch: normal;
	text-decoration: none;
	background-color: #CECECE;
  }
  .student-reserveempty-nav-bar-top {
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
  .student-reserveempty-text52 {
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
  .student-reserveempty-text53 {
	color: #eda3be;
  }
  .student-reserveempty-text55 {
	color: #303030;
  }


</style>
