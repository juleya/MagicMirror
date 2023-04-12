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
			config: {}
		},
		{
			module: 'MMM-SimpleText',
			classes: 'initial-text',
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
	//    {
	// 		module: 'MMM-Motion-Detection',
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
				[["menu", "email", "keybindings", "keyboard"], ["keyboard", "keybindings"], ["keyboard", "cheshire", "initial-text"], ["eat", "drink"], ["eat"], ["drink"], ["castle", "teaparty"], ["castle"], ["teaparty"],
				["cheshire"]],
				// fixed: ["MMM-Sounds"],
				hiddenPages: {
					"cat": ["cheshire"],
					"eatordrink": ["eat", "drink"],
					"selecteat": ["eat"],
					"selectdrink": ["drink"],
					"castleortea": ["castle", "teaparty"],
					"selectcastle": ["castle"],
					"selecttea": ["teaparty"],
				},
			}
		},
		// {
		// 	module: 'MMM-Buttons',
		// 	config: {
		// 		buttons: [
		// 			{
		// 				pin: 25,
		// 				name: "left",
		// 				longPress: {
		// 					notification: "LEFT",
		// 					payload: {}
		// 				},
		// 				shortPress: {
		// 					notification: "LEFT",
		// 					payload: {}
		// 				}
		// 			},
		// 			{
		// 				pin: 24,
		// 				name: "right",
		// 				longPress: {
		// 					notification: "RIGHT",
		// 					payload: {}
		// 				},
		// 				shortPress: {
		// 					notification: "RIGHT",
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
				  trigger: "MAX_PAGES_CHANGED", //REQUIRED
				//   triggerSenderFilter: (sender) => { //OPTIONAL should return true or false
				// 	if (sender == "....") {
				// 	  return true
				// 	}
				// 	return false
				//   },
				//   triggerPayloadFilter: (payload) => { //OPTIONAL should return true or false
				// 	if (typeof payload.value !== 'undefined' && payload.value > 0) {
				// 	  return true
				// 	}
				// 	return false
				//   },
				  fires: [ // Array of fires. You can enable multi-firing with one trigger.
					{
					  fire: "asdjfajs",
					  //fire: "SELFIE_SHOOT", //REQUIRED
					  payload: (payload) => { //OPTIONAL. transform received payload to what your target module wants.
						return {
							shootCountdown: 5,
							displayResult: true,
							playShutter: true,
							displayCountdown: true,
						  }
					  },
					  delay: 1000, //OPTIONAL, if this is set, your outgoing notification will be fired after delay.
					//   exec: "ls -l" //OPTIONAL, if exists, this script will be executed, and the result will be returned with "OUTGOING_NOTIFICATION_RESULT" and payload.  Can also be specified as a function which accepts the payload as an argument and returns the command to execute.
					},
					{
						fire: "KEYBOARD",
						payload: (payload) => {
							return {
								key: "uniqueKey",
								style: "default"
							}
						},
						delay: 500,
					}
				  ],
				},
				{
					trigger: "LEFT",
					fires: [
						{
							fire: "PAGE_INCREMENT", 
							payload: (payload) => {
								return 1;
							}
						},
						{
							fire: "PAGE_INCREMENT",
							payload: (payload) => {
								return 2;
							},
							delay: 2000,
						}
					]
				},
				{
					trigger: "RIGHT",
					fires: [
						{
							fire: "PAGE_INCREMENT", 
							payload: (payload) => {
								return 2;
							}
						}, 
						{
							fire: "PAGE_INCREMENT",
							payload: (payload) => {
								return 1;
							},
							delay: 2000,
						}

					]
				}
			  ]
			},
		  },	
		  {
			module: "MMM-Sounds",
			classes: "intro",
			config: {
				startupSound: 'Intro_Audio.wav'
			}
		  }, 
		  {
			module: "MMM-Sounds",
			classes: "p2",
			config: {
				startupSound: 'p2.wav'
			}
		  }, 
		  {
			module: "MMM-Sounds",
			classes: "p3",
			config: {
				startupSound: 'p3.wav'
			}
		  }, 
		  {
			module: "MMM-Sounds",
			classes: "p4",
			config: {
				startupSound: 'p4.wav'
			}
		  },
		  {
			module: "MMM-Sounds",
			classes: "p5",
			config: {
				startupSound: 'p5.wav'
			}
		  },
		  {
			module: "MMM-Sounds",
			classes: "outro",
			config: {
				startupSound: 'Outro.wav'
			}
		  },		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
