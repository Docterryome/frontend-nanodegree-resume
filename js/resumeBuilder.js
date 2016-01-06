/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs": [
		"job": {
			"employer": "FedEx Services",
			"title": "associate technical analyst",
			"location": "Memphis, TN",
			"description": "Worked on the \"Development Frameowrk\" team, which provided a common platform for all fedex developers in order to make development faster and eaiser."
		}
	]
};

var projects = {
	"projects": [
		"project": {
			"title": "Mans Best Friend",
			"dates": "2014",
			"description": "Matches dogs with partner.",
			"image": "images/197x148.gif"
		}

	]
}

var bio = {
	"name": name,
	"role": "Software Developer",
	"contacts": {
		"email": "docterryome@gmail.com",
		"mobile": "615-579-9803",
	},
	"picture": "images/facepic.png",
	"welcomeMessage": "Hey, welcome to my resume!",
	"facebook": "https://www.facebook.com/docterryome",
	"github": "https://github.com/Docterryome",
	"skills": ["javascript", "css", "html", "java", "spring", "jenkins"]
};

/*bio.name = HTMLheaderName.replace("%data%", bio.name);
bio.role = HTMLheaderRole.replace("%data%", bio.role);
bio.contactInfo.phoneNumber = HTMLmobile.replace("%data%", bio.contactInfo.phoneNumber);
bio.contactInfo.email = HTMLemail.replace("%data%", bio.contactInfo.email);
bio.picture = HTMLbioPic.replace("%data%", bio.picture);
var nioceSkills = "";
for(var i = 0; i < bio.skills.length; i++){
	nioceSkills += HTMLskills.replace("%data%",bio.skills[i]);
}
bio.welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.picture);
$("#header").append(bio.contactInfo.email);
$("#header").append(bio.contactInfo.phoneNumber);
$("#header").append(HTMLskillsStart)
$("#header").append(nioceSkills);
$("#header").append(bio.welcomeMessage);
*/


var education = {
	"schools": [
	{
		"name": "Tennessee State University",
		"city": "Nashville, TN",
		"years": "2009 - 2014",
		"degree": "BA",
		"major": "Computer Science",
		"url": "http://www.tnstate.edu/",
		"graduate": true
	}
	],
	"onlineCourses": [
		{
			"name": "udacity",
			"nanodegree": "Front-End Developer",
			"courses": ["Intro to HTML and CSS", "Responsive Web Design", "JavaScript Basics"],
			"url": "http://www.udacity.com",
			"completed": false
		}
	]
};


$("#education").append(HTMLschoolStart);
