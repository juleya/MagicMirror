/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
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
	{
		  module: "MMM-GroveGestures",
		  position: "bottom_center",
		  config: {
			autoStart: true, //When Mirror starts, recognition will start.
			verbose:false, // If set as `true`, useful messages will be logged.
			recognitionTimeout: 1000, //Gesture sequence will be ended after this time from last recognized gesture.
			cancelGesture: "WAVE", //If set, You can cancel gesture sequence with this gesture.
			visible: true, //Recognized gesture sequence will be displayed on position

			idleTimer: 1000*60*30, // `0` for disable, After this time from last gesture, onIdle will be executed.
			onIdle: { 
			},
			onDetected: {
			  notificationExec: {
				notification: "GESTURE_DETECTED",
			  },
			  
			},

			gestureMapFromTo: { 
			  "Up": "UP",
			  "Down": "DOWN",
			  "Left": "LEFT",
			  "Right": "RIGHT",
			  "Forward": "FORWARD",
			  "Backward": "BACKWARD",
			  "Clockwise": "CLOCKWISE",
			  "anti-clockwise": "ANTICLOCKWISE",
			  "wave": "WAVE"
			},

			defaultNotification: "GESTURE",
			pythonPath: "/usr/bin/python",

			defaultCommandSet: "default",
			commandSet: {
			  "default": {
				"FORWARD-BACKWARD": {
				  notificationExec: {
					notification: "ASSISTANT_ACTIVATE",
					payload: null
				  }
				},
				"LEFT-RIGHT": {
					moduleExec: {
					  module: ["MMM-GroveGestures"], 
					  exec: (module, gestures) => {
						module.sendNotification("PLAY_SOUND", {sound: 'camera.wav', delay: 500})
						module.sendNotification("DELAY_TRIGGER3")
					  }
					}
				},
				"CLOCKWISE": {
				  moduleExec: {
					module: [],
					exec: (module, gestures) => {
					  module.hide(1000, null, {lockstring:"GESTURE"})
					}
				  }
				},
				"ANTICLOCKWISE": {
				  moduleExec: {
					module: [],
					exec: (module, gestures) => {
					  module.show(1000, null, {lockstring:"GESTURE"})
					}
				  }
				},
				"LEFT": {
					moduleExec: {
					  module: ["MMM-GroveGestures"], 
					  exec: (module, gestures) => {
						module.sendNotification("SHOW_HIDDEN_PAGE", "teaparty")
						module.sendNotification("PLAY_SOUND", {sound: 'teaparty.wav', delay: 0})
						module.sendNotification("DELAY_TRIGGER2")
					  }
					}
				},
				"RIGHT": {
					moduleExec: {
					  module: ["MMM-GroveGestures"], 
					  exec: (module, gestures) => {
						module.sendNotification("SHOW_HIDDEN_PAGE", "drink")
						module.sendNotification("PLAY_SOUND", {sound: 'excellent.wav', delay: 0})
						module.sendNotification("DELAY_TRIGGER")
					  }
					}
				},
				"UP": {
					moduleExec: {
					  module: ["MMM-GroveGestures"], 
					  exec: (module, gestures) => {
						module.sendNotification("SHOW_HIDDEN_PAGE", "cat")
						module.sendNotification("PLAY_SOUND", {sound: 'welcome.wav', delay: 2500})
					  }
					}
				},
				"DOWN": {
					moduleExec: {
					  module: ["MMM-GroveGestures"], 
					  exec: (module, gestures) => {
						module.sendNotification("SHOW_HIDDEN_PAGE", "cake")
						module.sendNotification("PLAY_SOUND", {sound: 'options.wav', delay: 1500})
					  }
					}
					
				}
			  },
			},
		  }
		},
		{
			module: "MMM-SimpleLogo",
			class: 'meself',
			position: "middle_center",
			config: {
			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "fullscreen_above",
			classes: 'cheshire',
			config: {
				maxWidth: "100%",       
				style: '1',            
				ownImagePath: 'https://media0.giphy.com/media/oNvEMf4dw4UB4aJn0e/giphy.gif?cid=790b76114e660badb36d83c33c08620bcd079071d68bc6d2&rid=giphy.gif&ct=g',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "top_left",
			classes: 'cake',
			config: {
				maxWidth: "50%",      
				style: '1',            
				ownImagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flanidinette.files.wordpress.com%2F2020%2F06%2Fdscf9200.jpg%3Fw%3D1650&f=1&nofb=1&ipt=1f53cf911bf43afd4b42d03df05cc3182a042dca595927b5f074ecb4866d06b1&ipo=images',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "top_right",
			classes: 'drink',
			config: {
				maxWidth: "50%",       
				style: '1',            
				ownImagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F22%2Fc4%2Fb8%2F22c4b8c401be21d6a3038fde94cbb3a8.png&f=1&nofb=1&ipt=1669419ee7473fc423748c5d3a3ec0e5dfcced54c21223595fece7f6fb09c966&ipo=images',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
			}
		},
				{
			module: "MMM-EyeCandy",
			position: "top_left",
			classes: 'party',
			config: {
				maxWidth: "50%",       
				style: '1',            
				ownImagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.luxuriousmagazine.com%2Fwp-content%2Fuploads%2F2018%2F09%2FAlices-adventures-in-Wonderland-Afternoon-Tea-St-James-Hotel-Taj-1.jpg&f=1&nofb=1&ipt=c54d19018faa0f3796905cbdab3ecbbd1ffd8784eea11e5e040c22b1065ec8b1&ipo=images',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "top_right",
			classes: 'castle',
			config: {
				maxWidth: "50%",       
				style: '1',            
				ownImagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F96%2Fa9%2F49%2F96a949f7b1619b7005dfca6d3821e877.jpg&f=1&nofb=1&ipt=e92fb1f5b2112ed06c1045806d412efd9f7ee7de422af14c003a9c4b95befc88&ipo=images',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "middle_center",
			classes: 'selfie',
			config: {
				maxWidth: "100%",       
				ownImagePath: 'self',      
			}
		},
		{
			module: 'MMM-pages',
			config: {
					modules:
						[[ "clock", "calendar" ], ["cheshire"]],
					fixed: ["MMM-GroveGestures", "MMM-Sounds"],
					hiddenPages: {
						"cat": ["MMM-Sounds", "MMM-GroveGestures", "cheshire"],
						"cake": ["MMM-Sounds", "MMM-GroveGestures", "cake", "drink"],
						"drink": ["MMM-Sounds", "MMM-GroveGestures", "drink"],
						"teacastle": ["MMM-Sounds", "MMM-GroveGestures", "party", "castle"],
						"teaparty": ["MMM-Sounds", "MMM-GroveGestures", "party"],
						"self": ["MMM-Sounds", "selfie"],
					},
			}
		},	
		{
			module: 'MMM-Sounds',
			config: {
				defaultDelay: 50,
				startupSound: 'wobble.wav',
			}
		},

		{
		  module: 'MMM-NotificationTrigger',
		  config: {
			useWebhook: false, 
			triggers:[ 
			  {
				trigger: "DELAY_TRIGGER", 
				fires: [ 
				  {
					fire:"SHOW_HIDDEN_PAGE",
					payload: (payload) => { 
					  return "teacastle"
					},
					delay: 2500, 
					exec: "ls -l" 
				  },
				],
			  },
			  {
				  trigger: "DELAY_TRIGGER2",
				  fires: [
					  {
						fire:"SHOW_HIDDEN_PAGE", 
						payload: (payload) => { 
						  return "cat"
						},
						delay: 2500, 
						exec: "ls -l" 
					  },
				  ],
			  },
			  {
				  trigger: "DELAY_TRIGGER3",
				  fires: [
					  {
						fire:"DELAY_TRIGGER4", 
						delay: 0, 
						exec: "raspistill -o modules/MMM-SimpleLogo/public/logo.png" 
					  },
					  {
						fire:"SHOW_HIDDEN_PAGE", 
						payload: (payload) => { 
						  return "self"
						},
						delay: 5000, 
					  },
				  ],
			  },
			 ]
		 
		},
		}
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
