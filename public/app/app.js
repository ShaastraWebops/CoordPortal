angular.module('userApp',['appRoutes','mainController','ngMaterial','submitController'])
.config(function(){
})
.constant('APPS',
{
	"Concept and Design": {
		"Creative branding and Design Head": {
			name: "Creative branding and Design Head",
			app_name: 'Head_Creative Branding _ Design_Shaastra2019',
			date: '16.04.2017'
		},
		"Creative branding and Design Coordinator": {
			name: "Creative branding and Design Coordinator",
			app_name: "Coordinator_Creative Branding and Design_Shaastra2019",
			date: '16.04.2017'
		},
		"Creative Ambience Head": {
			name: "Creative Ambience Head",
			app_name: "Head_Creative Ambience_Shaastra2019",
			date: '16.04.2017'
		},
		"Creative Ambience Coordinator": {
			name: "Creative Ambience Coordinator",
			app_name: "Coordinator_Creative Ambience_Shaastra2019.docx-3_merged",
			date: '16.04.2017'
		},
		"VFX and Video Editing Head": {
			name: "VFX and Video Editing Head",
			app_name: "Head_VFX And Video Editing_Shaastra2019",
			date: '16.04.2017'
		},
		"VFX and Video Editing Coordinator": {
			name: "VFX and Video Editing Coordinator",
			app_name: "Coordinator_VFX And Video Editing_Shaastra2019",
			date: '16.04.2017'
		},
		"Media Head": {
			name: "Media Head",
			app_name: "Head_Media_Shaastra2019",
			date: '16.04.2017'
		},
		"Media Coordinator": {
			name: "Media Coordinator",
			app_name: "Coordinator_Media_Shaastra2019",
			date: '16.04.2017'
		}
	},

	"Envisage":{
		"Coordinator Application": {
			name: "Coordinator Application",
			app_name: "Shaastra2019_Envisage_CoordinatorApplication",
			date: '16.04.2017'
		}
	},

	"Events":{
		"Coordinators":{
			name: "Coordinators"
		},
		"Events Head":{
			name: "Events Head"
		},
		"Techsoc":{
			name: "Techsoc"
		},
		"Strategists":{
			name: "Startegists"
		}
	},

	"Evolve": {
		"Summit Coordinator": {
			name: "Summit Coordinator",
			app_name: "Shaastra 2019_Evolve_Summit_CoordinatorApplication",
			date: '16.04.2017'
		},
		"Spotlight Coordinator": {
			name: "Spotlight Coordinator",
			app_name: "Shaastra 2019_Evolve_Spotlight_CoordinatorApplication",
			date: '16.04.2017'
		},
		"Relaunch Coordinator": {
			name: "Relaunch Coordinator",
			app_name: "Shaastra 2019_Evolve_Relaunch_CoordinatorApplication",
			date: '16.04.2017'
		},
		"Summit Super Coordinator": {
			name: "Summit Super Coordinator",
			app_name: "Shaastra 2019_Evolve_Summit_SuperCoordinatorApplication",
			date: '14.04.2017'
		},
		"Spotlight Super Coordinator": {
			name: "Spotlight Super Coordinator",
			app_name: "Shaastra 2019_Evolve_Spotlight_CoordinatorApplication",
			date: '14.04.2017'
		},
		"Relaunch Super Coordinator": {
			name: "Relaunch Super Coordinator",
			app_name: "Shaastra 2019_Evolve_Relaunch_CoordinatorApplication",
			date: '14.04.2017'
		}
	},

	"Finance":{
		"Finance Coordinator": {
			name: "Finance Coordinator",
			app_name: "Coordinator_Finance_Shaastra",
			date: '16.04.2017'
		},
		"Finance Manager" : {
			name: "Finance Manager",
			app_name: "Manager_Finance_Shaastra",
			date: '12.04.2017'
		}
	},

	"Operations and Infrastructure Planning":{
		"Operations Head": {
			name: "Operations Head",
			app_name: "OPERATONS HEAD APPLICATION",
			date: '13.04.2017'
		},
		"Catering Head": {
			name: "Catering Head",
			app_name: "CATERING HEAD APPLICATION",
			date: '13.04.2017'
		},
		"General Arrangements Coordinator": {
			name: "General Arrangements Coordinator",
			app_name: "GA COORDINATOR APPLICATION ",
			date: '16.04.2017'
		},
		"Catering Coordinator": {
			name: "Catering Coordinator",
			app_name: "CATERING COORDINATOR APPLICATION",
			date: '16.04.2017'
		}
	},

	"Publicity":{
		"Coordinator Application": {
			name: "Coordinator Application",
			app_name: "Shaastra 2019 Publicity Coordinator Application",
			date: '16.04.2017'
		},
		"Strategist": {
			name: "Strategist",
			app_name: "Shaastra 2019 Publicity Strategist Application",
			date: '16.04.2017'
		}
	},

	"Hospitality":{
		"Coordinator Application": {
			name: "Coordinator Application",
			app_name: "Hospitality_Coordinator_Shaastra19",
			date: '16.04.2017'
		},
		"Head": {
			name: "Head",
			app_name: "Hospitality_Head_Shaastra19",
			date: '16.04.2017'
		}
	},

	"QMS":{
		"QMS Asst Manager": {
			name: "QMS Asst Manager",
			app_name: "QMS_Asst Manager ( Event Verticals)",
			date: '13.04.2017'
		},
		"QMS Manager": {
			name: "QMS Manager",
			app_name: "QMS_Manager ( Departments)",
			date: '13.04.2017'
		}
	},

	"Shows and Exhibitions":{
		"Shows Coordinator": {
			name: "Shows Coordinator",
			app_name: "Shows_S_E_Coordinator",
			date: '14.04.2017'
		},
		"Exhibitions Super Coordinator": {
			name: "Exhibitions Super Coordinator",
			app_name: "Exhibitions_S_E_Supercoordinator",
			date: '14.04.2017'
		},
		"Tech and Innovation Fair Super Coordinator": {
			name: "Tech and Innovation Fair Super Coordinator",
			app_name: "TIF_S_E_Supercoordinator",
			date: '14.04.2017'
		},
		"Tech Creation Super Coordinator": {
			name: "Tech Creation Super Coordinator",
			app_name: "Techcreation_S_E_Supercoordinator",
			date: '14.04.2017'
		},
		"Exhibitions Coordinator": {
			name: "Exhibitions Coordinator",
			app_name: "Exhibitions_S_E_Coordinator",
			date: '16.04.2017'
		},
		"Tech and Innovation Fair Coordinator": {
			name: "Tech and Innovation Fair Coordinator",
			app_name: "TIF_S_E_Coordinator",
			date: '16.04.2017'
		},
		"Tech Creation Coordinator": {
			name: "Tech Creation Coordinator",
			app_name: "Techcreation_S_E_Coordinator",
			date: '16.04.2017'
		}
	},

	"Sponsorship and Public Relations":{
		"Corporate Relations": {
			name: "Corporate Relations",
			app_name: "Corporate relations_Sponsorship _ PR_Coordinator",
			date: '14.04.2017'
		},
		"PR Executives": {
			name: "PR Executives",
			app_name: "PR Executive_Sponsorship _ PR_Coordinator",
			date: '18.04.2017'
		},
		"Engage and Endaevour": {
			name: "Engage and Endaevour",
			app_name: "Engage-Endeavour_Sponsorship _ PR",
			date: '15.04.2017'
		}
	},

	"Webops":{
		"Frontend Coordinator": {
			name: "Frontend Coordinator",
			app_name: "Shaastra_2019_WebOps_Frontend_Application",
			date: '27.05.2017'
		},
		"Backend Coordinator": {
			name: "Backend Coordinator",
			app_name: "Shaastra_2019_WebOps_BackendApplication",
			date: '27.05.2017'
		},
		"Frontend Super Coordinator": {
			name: "Frontend Super Coordinator",
			app_name: "Shaastra_2019_WebOps_Frontend_Application",
			date: '16.04.2017'
		},
		"Backend Super Coordinator": {
			name: "Backend Super Coordinator",
			app_name: "Shaastra_2019_WebOps_BackendApplication",
			date: '16.04.2017'
		},
		"MobOps Super Coordinator": {
			name: "MobOps Super Coordinator",
			app_name: "Shaastra_2019_WebOps_Hybrid_Application",
			date: '16.04.2017'
		},
		"MobOps Coordinator": {
			name: "MobOps Coordinator",
			app_name: "Shaastra_2019_WebOps_Hybrid_Application",
			date: '16.04.2017'
		}
	}
})
.constant('DEPARTMENTS', {
  	"Concept and Design" : {
  		name: "CD",
  		emails: ["rakshanaa", "anuj"]
  	},
  	"Envisage": {
  		name: "Envisage",
  		emails: ["adhitya", "pravallika"]
  	},
  	"Evolve": {
  		name: "Evolve",
  		emails: ["lsk", "sdheeraj"]
  	},
  	"Events": {
  		name: "Events",
  		emails: ["prateekm", "pooja","pruthviraj"]
  	},
  	"Finance": {
  		name: "Finance",
  		emails: ["samanth", "sowmith"]
  	},
  	"Operations and Infrastructure Planning": {
  		name: "O&IP",
  		emails: ["ramtikar", "hiteshmeena"]
  	},
  	"Publicity": {
  		name: "Publicity",
  		emails: ["py", "parthd"]
  	},
  	"Hospitality": {
  		name: "Hospitality",
  		emails: ["py", "parthd"]
  	},
  	"QMS": {
  		name: "QMS",
  		emails: ["namitha", "shiva.b"]
  	},
  	"Shows and Exhibitions": {
  		name: "Shows",
  		emails: ["ishasingh","meet"]
  	},
  	"Sponsorship and Public Relations": {
  		name: "Spons",
  		emails: ["siddhesh", "sabyasachi"]
  	},
  	"Webops": {
  		name: "Webops",
  		emails: ["akshayanand", "nilay"]
  	}

})
.constant('EVENTS',
{
	"Coordinators":{
		"Events Coordinator": {
			name: "Events Coordinator",
			app_name: "Events Coordinator Application Shaastra 19",
			date: '16.04.2017'
		}
	},
	"Events Head":{
		"Aerofest Head": {
			name: "Aerofest Head",
			app_name: "Aerofest Head Application Shaastra 19",
			date: '16.04.2017'
		},
		"BEvents Head": {
			name: "Bevents Head",
			app_name: "BEvents Head Application Shaastra19",
			date: '16.04.2017'
		},
		"Coding Head": {
			name: "Coding Head",
			app_name: "Coding Head Application Shaastra 19",
			date: '16.04.2017'
		},
		"D_B Head": {
			name: "D_B Head",
			app_name: "D_B Head Application Shaastra 19",
			date: '16.04.2017'
		},
		"Elecfest Head": {
			name: "Elecfest Head",
			app_name: "Elecfest Head Application Shaastra 19",
			date: '16.04.2017'
		},
		"Flagships Head": {
			name: "Flagships Head",
			app_name: "Flagships Head Application Shaastra 19",
			date: '16.04.2017'
		},
		"I_Q Head": {
			name: "I_Q Head",
			app_name: "I_Q Head Application Shaastra 19",
			date: '16.04.2017'
		},
		"REvents Head": {
			name: "REvents Head",
			app_name: "REvents Head Application Shaastra19",
			date: '16.04.2017'
		},
		"Workshops Head": {
			name: "Workshops Head",
			app_name: "Workshops Head Application Shaastra 19",
			date: '16.04.2017'
		}
	},
	"Techsoc":{
		"TechSoc Head": {
			name: "TechSoc Head",
			app_name: "TechSoc Head Application Shaastra 19",
			date: '16.04.2017'
		},
	},
	"Strategists":{
		"Strategist Head": {
			name: "Strategist Head",
			app_name: "Strategist Application Shaastra 19",
			date: '16.04.2017'
		}
	}
})
