/*
This is empty on purpose! Your code to build the resume will go here.
 */



var work = {
	"jobs": [
		{
			"employer": "FedEx Services",
			"title": "associate technical analyst",
			"location": "Memphis, TN",
			"date": "2014 - present",
			"description": "Worked on the \"Development Frameowrk\" team, which provided a common platform for all fedex developers in order to make development faster and eaiser."
		},
		{
			"employer": "Tennessee State University",
			"title": "lab technican",
			"date": "2012 - 2013",
			"location": "Nashville, TN",
			"description": "troubleshoot computers, set up computer labs"
		},
		{
			"employer": "Edible Arrangements",
			"title": "Crew Worker",
			"date": "2011-2012",
			"location": "Memphis, TN",
			"description": "Worked on the arrangements, put the fruit together."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Mans Best Friend",
			"dates": "2014",
			"description": "Matches dogs with partner.",
			"image": "images/197x148.gif"
		}

	]
};

var bio = {
	"name": "Docterryome Wilkins",
	"role": "Software Developer",
	"contacts": {
		"email": "docterryome@gmail.com",
		"mobile": "615-579-9803",
		"location": "Memphis, TN"
	},
	"picture": "images/facepic.png",
	"welcomeMessage": "Hey, welcome to my resume!",
	"facebook": "https://www.facebook.com/docterryome",
	"github": "https://github.com/Docterryome",
	"skills": ["javascript", "css", "html", "java", "spring", "jenkins"],
	"skills_data": [3,4,5,6,4,4]
};

var education = {
	"schools": [
	{
		"name": "Tennessee State University",
		"location": "Nashville, TN",
		"years": "2009 - 2014",
		"degree": "BA",
		"major": "Computer Science",
		"url": "http://www.tnstate.edu/",
		"graduate": true
	}
	],
	"onlineCourses": [
		{
			"name": "JavaScript Basics",
			"nanodegree": "Front-End Developer",
			"courses": ["Intro to HTML and CSS", "Responsive Web Design", "JavaScript Basics"],
			"url": "http://www.udacity.com",
			"completed": false
		}
	]
};


	console.log(bio.skills.length);
	$("#header").append(HTMLbioPic.replace("%data%",bio.picture));
	$('#header').append(HTMLheaderName.replace("%data%",formatName(bio.name)));
	$('#header').append(HTMLskillsStart);
	
	bio.diplayContacts = function(){
		for(contact in bio.contacts){
			var my_contacts = HTMLcontactGeneric.replace("%contact%", contact);
			my_contacts = my_contacts.replace("%data%", bio.contacts[contact]);
			$('#topContacts').append(my_contacts);
		}
	};
	bio.diplayContacts()
	
	if(bio.skills.length > 0){
	bio.skills.forEach(addSkill);
}

function addSkill(element){
	$('#skills').append(HTMLskills.replace("%data%", element));
}


function displayWork(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		console.log(HTMLworkStart);
		var formattedWork = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		formattedWork += HTMLworkTitle.replace("%data%",work.jobs[job].title);
		formattedWork += HTMLworkDates.replace("%data%",work.jobs[job].date);
		formattedWork += HTMLworkLocation.replace("%data%",work.jobs[job].location);
		formattedWork += HTMLworkDescription.replace("%data%", work.jobs[job].description);
		console.log(formattedWork);
		$('.work-entry:last').append(formattedWork);
	}
}

displayWork();

$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});

$("#main").append(internationalizeButton);

function formatName(name){
	whole_name = name.trim().split(" ");
	american_name = "";
	for(name in whole_name){
		american_name += properNoun(whole_name[name])+ " ";
	}
	return american_name.trim();
}

function inName(){
	var name_array = bio.name.trim().split(" ");
	var firstName = properNoun(name_array[0]);
	var lastName = name_array[1].toUpperCase();
	return firstName + " " + lastName;
}


function properNoun(element){
	var my_noun = element.toLowerCase();
	return my_noun.replace(my_noun[0], my_noun[0].toUpperCase());
}

projects.display = function() {
	for(project in projects.projects){
		$('#projects').append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
		var projectObject = projectTitle + projectDates  + projectDescription + projectImage;
		console.log(projectObject);
		$('.project-entry:last').append(projectObject);
	}
};

education.display = function(){
	for(school in education.schools){
		$('#education').append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var schoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolYears = HTMLschoolDates.replace("%data%", education.schools[school].years);
		var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var schoolObject = schoolName + schoolDegree + schoolCity  + schoolYears + schoolMajor;
		console.log(schoolObject);
		$('.education-entry:last').append(schoolObject);
	}
	$('#education').append(HTMLonlineClasses);
	for(classes in education.onlineCourses){
		var HTMLonlineTitle;
		var HTMLonlineSchool;
		var HTMLonlineDates;
		var HTMLonlineURL;
	}
};

projects.display();
education.display();
$('#mapDiv').append(googleMap);
