/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		// {
		// 	module: 'MMM-Sounds',
		// 	config: {
		// 		startupSound:   'wobble.wav',
		// 		quietTimeStart: '23:00',      // 11pm
		// 		quietTimeEnd:   '07:00'       // 7am
		// 	}
		// },
		{
			module: "MMM-SimpleLogo",
			position: "middle_center",
			classes: 'cheshire',
			config: {
				fileUrl: 'modules/MMM-SimpleLogo/public/cheshire.gif',
				width: '100%',
				position: 'center',
				text: '',
			}
		},
		{
			module: "MMM-SimpleLogo",
			position: "middle_center",
			classes: 'eat',
			config: {
				fileUrl: 'modules/MMM-SimpleLogo/public/eatme.png',
				width: '100%',
				position: 'left',
				text: '',
			}
		},
		{
			module: "MMM-SimpleLogo",
			position: "middle_center",
			classes: 'drink',
			config: {
				fileUrl: 'modules/MMM-SimpleLogo/public/drinkme.png',
				width: '100%',
				position: 'right',
				text: '',
			}
		},
		{
			module: "MMM-SimpleLogo",
			position: "middle_center",
			classes: 'castle',
			config: {
				fileUrl: 'modules/MMM-SimpleLogo/public/castle.png',
				width: '100%',
				position: 'left',
				text: '',
			}
		},
		{
			module: "MMM-SimpleLogo",
			position: "middle_center",
			classes: 'teaparty',
			config: {
				fileUrl: 'modules/MMM-SimpleLogo/public/teaparty.png',
				width: '100%',
				position: 'right',
				text: '',
			}
		},
		{
			disabled: false,
			classes: "photo",
			module: "MMM-Selfieshot",
			config: {
				shootMessage: "Smile like a Cheshire cat!"
			}
		},
		{
			module: 'MMM-SimpleText',
			classes: 'intro-text',
			position: 'bottom_center',
			config: {
				   text: {
					 'value': 'Hello there —— you seem lost.'
				   },
				   fontURL: {
					 'value': 'Tahoma, Geneva, sans-serif'
				   },
				   fontSize: {
					 'value': 'xx-large'
				   },
				   fontStyle: {
					 'value': 'italic'
				   },
				   color: {
					 'value': '#FFFFFF'
				   }
			   }
	   },
	   {
		module: 'MMM-SimpleText',
		classes: 'eatdrink-text',
		position: 'bottom_center',
		config: {
			   text: {
				 'value': 'You come across a table with a mysterious treat and a suspicious potion.'
			   },
			   fontURL: {
				 'value': 'Tahoma, Geneva, sans-serif'
			   },
			   fontSize: {
				 'value': 'xx-large'
			   },
			   fontStyle: {
				 'value': 'italic'
			   },
			   color: {
				 'value': '#FFFFFF'
			   }
		   }
   		},
		   {
			module: 'MMM-SimpleText',
			classes: 'castletea-text',
			position: 'bottom_center',
			config: {
				   text: {
					 'value': 'In the distance, you can hear the noises of the Mad Hatter’s tea party and you see the castle of the Red Queen.'
				   },
				   fontURL: {
					 'value': 'Tahoma, Geneva, sans-serif'
				   },
				   fontSize: {
					 'value': 'xx-large'
				   },
				   fontStyle: {
					 'value': 'italic'
				   },
				   color: {
					 'value': '#FFFFFF'
				   }
			   }
			   },
		{
			module: 'MMM-SimpleText',
			classes: 'outro-text',
			position: 'bottom_center',
			config: {
				   text: {
					 'value': 'Thank you for visiting our Wonderland. '
				   },
				   fontURL: {
					 'value': 'Tahoma, Geneva, sans-serif'
				   },
				   fontSize: {
					 'value': 'xx-large'
				   },
				   fontStyle: {
					 'value': 'italic'
				   },
				   color: {
					 'value': '#FFFFFF'
				   }
			   }
			},

	   {
			module: 'MMM-SimpleText',
			classes: 'email',
			position: 'bottom_center',
			config: {
				text: {
					'value': 'Hello World!'
				  },
				  fontURL: {
					'value': 'Tahoma, Geneva, sans-serif'
				  },
				  fontSize: {
					'value': 'xx-large'
				  },
				  fontStyle: {
					'value': 'italic'
				  },
				  color: {
					'value': '#FFFFFF'
				  }
			}
	   },
	   {
		module: 'MMM-SimpleText',
		classes: 'excellent-text',
		position: 'bottom_center',
		config: {
			text: {
				'value': 'Excellent choice!'
			  },
			  fontURL: {
				'value': 'Tahoma, Geneva, sans-serif'
			  },
			  fontSize: {
				'value': 'xx-large'
			  },
			  fontStyle: {
				'value': 'italic'
			  },
			  color: {
				'value': '#FFFFFF'
			  }
		}
	   },
	   {
		module: 'MMM-SimpleText',
		classes: 'splendid-text',
		position: 'bottom_center',
		config: {
			text: {
				'value': 'Splendid!'
			  },
			  fontURL: {
				'value': 'Tahoma, Geneva, sans-serif'
			  },
			  fontSize: {
				'value': 'xx-large'
			  },
			  fontStyle: {
				'value': 'italic'
			  },
			  color: {
				'value': '#FFFFFF'
			  }
		}
	   },
	   {
		module: 'MMM-SimpleText',
		classes: 'logo',
		position: 'bottom_center',
		config: {
			text: {
				'value': "Delta Gamma's Anchor Down the Rabbit Hole 2023"
			  },
			  fontURL: {
				'value': 'Tahoma, Geneva, sans-serif'
			  },
			  fontSize: {
				'value': 'xx-large'
			  },
			  fontStyle: {
				'value': 'bold'
			  },
			  color: {
				'value': '#FFFFFF'
			  }
		}
	   },
	   {
		module: "MMM-SimpleLogo",
		position: "middle_center",
		classes: 'alice',
		config: {
			fileUrl: 'modules/MMM-SimpleLogo/public/alice.png',
			width: '15%',
			position: 'left',
			text: '',
		}
		},
		{
			module: "MMM-SimpleLogo",
			position: "middle_center",
			classes: 'rabbit',
			config: {
				fileUrl: 'modules/MMM-SimpleLogo/public/rabbit.png',
				width: '30%',
				position: 'right',
				text: '',
			}
			},
	//    {
	// 		module: 'MMM-Motion-Detection',
	// 		classes: 'motion',
	// 		config: {
	// 			// force the use of a usb webcam on raspberry pi
	// 			useUSBCam: true,
	// 			// recognition interval in seconds (smaller number = faster but more CPU intensive!)
	// 			interval: 3,
	// 			// Notificaiton Delay after movement stops being sensed (in seconds).
	// 			motionStopDelay: 120,
	// 			// Threshold for motion detection, smaller numbers means more sensitive
	// 			detectionThreshold: 1000,
	// 			// Turn off display when no motion is detected.
	// 			turnOffDisplay: true
	// 		}
	// 	}, 
	   
		{
			module: 'MMM-pages',
			config: {
				modules:
				[["motion"], ["cheshire", "intro-text"], ["eat", "drink", "eatdrink-text", "first-choice"], 
				["castle", "teaparty", "castletea-text", "second-choice"], ["cheshire", "outro-text", "photo"],
				["photo", "alice", "rabbit", "logo"]],
				// fixed: ["MMM-Sounds"],
				hiddenPages: {
					"cat": ["cheshire"],
					"excellent-eat": ["eat", "excellent-text"],
					"excellent-drink": ["drink", "excellent-text"],
					"splendid-castle": ["castle", "splendid-text"],
					"splendid-tea": ["teaparty", "splendid-text"],
				},
				homePage: 1
			}
		},
		// {
		// 	module: 'MMM-Buttons',
		// 	classes: 'first-choice',
		// 	config: {
		// 		buttons: [
		// 			{
		// 				pin: 25,
		// 				name: "left",
		// 				longPress: {
		// 					notification: "LEFT_FIRST",
		// 					payload: {}
		// 				},
		// 				shortPress: {
		// 					notification: "LEFT_FIRST",
		// 					payload: {}
		// 				}
		// 			},
		// 			{
		// 				pin: 24,
		// 				name: "right",
		// 				longPress: {
		// 					notification: "RIGHT_FIRST",
		// 					payload: {}
		// 				},
		// 				shortPress: {
		// 					notification: "RIGHT_FIRST",
		// 					payload: {}
		// 				}
		// 			}
		// 		]
		// 	}
		// },
		// {
		// 	module: 'MMM-Buttons',
		// 	classes: 'second-choice',
		// 	config: {
		// 		buttons: [
		// 			{
		// 				pin: 25,
		// 				name: "left",
		// 				longPress: {
		// 					notification: "LEFT_SECOND",
		// 					payload: {}
		// 				},
		// 				shortPress: {
		// 					notification: "LEFT_SECOND",
		// 					payload: {}
		// 				}
		// 			},
		// 			{
		// 				pin: 24,
		// 				name: "right",
		// 				longPress: {
		// 					notification: "RIGHT_SECOND",
		// 					payload: {}
		// 				},
		// 				shortPress: {
		// 					notification: "RIGHT_SECOND",
		// 					payload: {}
		// 				}
		// 			}
		// 		]
		// 	}
		// },
		{
            module: 'MMM-KeyBindings',
			classes: "keybindings",
            config: {
				evdev: {enabled: false},
				enableKeyboard: true,
				handleKeys: ['k'],
				// actions: [{
				// 	key: "a",
				// 	state: "KEY_PRESSED",
				// 	instance: "SERVER",
				// 	mode: "DEFAULT",
				// 	notification: "LETTER",
				// 	payload: {key: "a" }
				//   }]
            }
        },
		{
			disabled: false,
			module: "MMM-Keyboard",
			classes: "keyboard",
			position: "middle_center",
			config: {
				startWithNumbers: false,
				startUppercase: false,
				alwaysShow: true,
				debug: false
			}
		},
		{
            module: 'MMM-OnScreenMenu',
            position: 'bottom_right',
			classes: "menu",
            /* Valid positions: 'top_right', 'top_left', 'bottom_right', 'bottom_left' */
            config: {
                touchMode: false,
                enableKeyboard: true,
                // ... see more options below
            }
        },
		{
			module: 'MMM-NotificationTrigger',
			//This module works in Background, so you don't need to describe `position`.
			config: {
			  useWebhook: false, // If you want to activate webhook as Notification emitter, set true. (eg. IFTTT)
			  triggers:[ // Array of triggers.
				{
				  //trigger: "motion-detected", //REQUIRED
				  trigger: "MAX_PAGES_CHANGED",
				  fires: [ // Array of fires. You can enable multi-firing with one trigger.
					// {
					// 	fire: "PAGE_INCREMENT"
					// },
					{
						fire: "PLAY_SOUND",
						payload: (payload) => {
							return {
								sound: 'Intro_Audio.wav'
							}
						}
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "Welcome to Delta Gamma’s Wonderland: Anchor Down the Rabbit Hole."
							}
						},
						delay: 3000,
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "As you go through your journey, you will have to make a series of decisions."
							}
						},
						delay: 7500,
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "Let your need guide your behavior."
							}
						},
						delay: 11800,
					},
					{
						fire: "PAGE_CHANGED",
						payload: (payload) => {
							return 2
						},
						delay: 14500,
					},
					// {
					// 	fire: "CHANGE", 
					// 	payload: (payload) => {
					// 		return {
					// 			txt: "You come across a table with a mysterious treat and a suspicious potion."
					// 		}
					// 	},
					// 	delay: 14500,
					// },
				  ],
				},
				{
					trigger: "NEW_PAGE",
					triggerPayloadFilter: (payload) => { //OPTIONAL should return true or false
						if (payload == 2) {
						  return true
						}
						return false
					  },
					fires: [
					{
						fire: "PLAY_SOUND",
						payload: (payload) => {
							return {
								sound: 'p2.wav'
							}
						}
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "You come across a table with a mysterious treat and a suspicious potion."
							}
						},
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "Do you want to eat the cake or drink the potion?"
							}
						},
						delay: 4000,
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "Use the left and right buttons to make your choice."
							}
						},
						delay: 7000,
					},
				]
				},
				{
					trigger: "NEW_PAGE",
					triggerPayloadFilter: (payload) => { //OPTIONAL should return true or false
						if (payload == 3) {
						  return true
						}
						return false
					  },
					fires: [
					{
						fire: "PLAY_SOUND",
						payload: (payload) => {
							return {
								sound: 'p3.wav'
							}
						}
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "In the distance, you can hear the noises of the Mad Hatter’s tea party and you see the castle of the Red Queen."
							}
						},
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "In which direction do you head?"
							}
						},
						delay: 8000,
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "Visit either one you like: they’re both mad."
							}
						},
						delay: 10000,
					},
				]
				},
				{
					trigger: "LEFT_FIRST",
					fires: [
						{
							fire: "SHOW_HIDDEN_PAGE",
							payload: (payload) => {
								return "excellent-eat"
							}
						}, 
						{
							fire: "PLAY_SOUND",
							payload: (payload) => {
								return "excellent.wav"
							}
						}, 
						{
							fire: "PAGE_INCREMENT",
							delay: 2000,
						}
					]
				},
				{
					trigger: "RIGHT_FIRST",
					fires: [
						{
							fire: "SHOW_HIDDEN_PAGE",
							payload: (payload) => {
								return "excellent-drink"
							}
						},
						{
							fire: "PLAY_SOUND",
							payload: (payload) => {
								return "excellent.wav"
							}
						},
						{
							fire: "PAGE_INCREMENT",
							delay: 2000,
						}
					]
				},
				{
					trigger: "LEFT_SECOND",
					fires: [
						{
							fire: "SHOW_HIDDEN_PAGE",
							payload: (payload) => {
								return "splendid-castle"
							}
						}, 
						{
							fire: "PLAY_SOUND",
							payload: (payload) => {
								return "splendid.wav"
							}
						}, 
						{
							fire: "PAGE_INCREMENT",
							delay: 2000,
						}
					]
				},
				{
					trigger: "RIGHT_SECOND",
					fires: [
						{
							fire: "SHOW_HIDDEN_PAGE",
							payload: (payload) => {
								return "splendid-tea"
							}
						},
						{
							fire: "PLAY_SOUND",
							payload: (payload) => {
								return "splendid.wav"
							}
						},
						{
							fire: "PAGE_INCREMENT",
							delay: 2000,
						}
					]
				},

				{
					trigger: "NEW_PAGE",
					triggerPayloadFilter: (payload) => { //OPTIONAL should return true or false
						if (payload == 4) {
						  return true
						}
						return false
					  },
					fires: [
					{
						fire: "PLAY_SOUND",
						payload: (payload) => {
							return {
								sound: 'p4.wav'
							}
						}
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "I'd love to get a picture of you before you go."
							}
						},
						delay: 2000,
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "Get ready for your closeup!"
							}
						},
						delay: 4700,
					},
					{
						fire: "SELFIE_SHOOT",
						payload: (payload) => {
							return {
							shootCountdown: 5,
							displayResult: true,
							playShutter: true,
							displayCountdown: true,
						  }
						},
						delay: 7000,
					}, 
					{
						fire: "PAGE_CHANGED",
						payload: (payload) => {
							return 5
						},
						delay: 15000,
					}
				]
				},
				{
					trigger: "NEW_PAGE",
					triggerPayloadFilter: (payload) => { //OPTIONAL should return true or false
						if (payload == 5) {
						  return true
						}
						return false
					  },
					fires: [
					{
						fire: "PLAY_SOUND",
						payload: (payload) => {
							return {
								sound: 'Outro.wav'
							}
						}
					},
					{
						fire: "CHANGE", 
						payload: (payload) => {
							return {
								txt: "Delta Gamma Anchor Down the Rabbit Hole 2023"
							}
						},
						delay: 4700,
					},
					// {
					// 	fire: "CHANGE", 
					// 	payload: (payload) => {
					// 		return {
					// 			txt: "Now, there’ll be no time to play, no time for joy, no time for friends – not even time to make amends. "
					// 		}
					// 	},
					// 	delay: 2700,
					// },
					// {
					// 	fire: "CHANGE", 
					// 	payload: (payload) => {
					// 		return {
					// 			txt: "Goodbye, sweet friend! "
					// 		}
					// 	},
					// 	delay: 11700,
					// },
					{
						fire: "HOME_PAGE",
						delay: 13000,
					}
				]
				},
			  ]
			},
		  },	
		//   {
		// 	module: "MMM-Sounds",
		// 	classes: "intro",
		// 	config: {
		// 		startupSound: 'Intro_Audio.wav'
		// 	}
		//   }, 
		//   {
		// 	module: "MMM-Sounds",
		// 	classes: "p2",
		// 	config: {
		// 		startupSound: 'p2.wav'
		// 	}
		//   }, 
		//   {
		// 	module: "MMM-Sounds",
		// 	classes: "p3",
		// 	config: {
		// 		startupSound: 'p3.wav'
		// 	}
		//   }, 
		//   {
		// 	module: "MMM-Sounds",
		// 	classes: "p4",
		// 	config: {
		// 		startupSound: 'p4.wav'
		// 	}
		//   },
		//   {
		// 	module: "MMM-Sounds",
		// 	classes: "p5",
		// 	config: {
		// 		startupSound: 'p5.wav'
		// 	}
		//   },
		//   {
		// 	module: "MMM-Sounds",
		// 	classes: "outro",
		// 	config: {
		// 		startupSound: 'Outro.wav'
		// 	}
		//   },		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
