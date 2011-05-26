this.manifest = {
    "name": i18n.get("title"),
    "icon": "../Icon.png",
    "settings": [
        {
            "tab":  i18n.get("general"),
            "group": i18n.get("behavior"),
            
            "name": "Behavior_label",
            "type": "text",
            "label": i18n.get("Behavior_label"),
            "text": i18n.get("Behavior_label-text")
        },
        {
            "tab": i18n.get("general"),
            "group": i18n.get("behavior"),
            "name": "Behavior_openLinksIn",
            "type": "radioButtons",
            "label": i18n.get("Behavior_openLinksIn"),
            "options": [
                {
                    "value": "GmailTab",
                    "text": i18n.get("Behavior_openLinksIn-GmailTab")
                },
                {
                    "value": "activeTab",
                    "text": i18n.get("Behavior_openLinksIn-activeTab")
                },
                {
                    "value": "newTab",
                    "text": i18n.get("Behavior_openLinksIn-newTab")
                },
                {
                    "value": "newWindow",
                    "text": i18n.get("Behavior_openLinksIn-newWindow")
                }
            ]
        },
        {
            "tab": i18n.get("general"),
            "group": i18n.get("GoogleApps"),
            "name": "GoogleApps_enable",
            "type": "checkbox",
            "label": i18n.get("enable")
        },
        {
            "tab": i18n.get("general"),
            "group": i18n.get("GoogleApps"),
            "name": "GoogleApps_domain",
            "type": "text",
            "label": i18n.get("GoogleApps_domain"),
            "text": i18n.get("GoogleApps_domain-text")
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("sounds"),
            "name": "Sounds_enable",
            "type": "checkbox",
            "label": i18n.get("enable")
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("sounds"),
            "name": "Sounds_volume",
            "type": "slider",
            "label": i18n.get("Sounds_volume"),
            "max": 1,
            "min": 0,
            "step": 0.01,
			"display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("sounds"),
            "name": "Sounds_Non-Breaking_SPace",
            "type": "description",
            "text": ""
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("sounds"),
            "name": "Sounds_description",
            "type": "description",
            "text": i18n.get("Sounds_description")
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("sounds"),
            "name": "Sounds_name",
            "type": "text",
            "label": i18n.get("Sounds_name"),
            "text": i18n.get("Sounds_name-text")
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("sounds"),
            "name": "Sounds_choose",
            "type": "button",
            "text": i18n.get("Sounds_choose")
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("HeadViewer"),
            "name": "HeadViewer_description",
            "type": "description",
            "text": i18n.get("HeadViewer_description")
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("HeadViewer"),
            "name": "HeadViewer_interval",
            "type": "popupButton",
            "label": "Show each email for",
            "options": [
                {
                    "value": "2",
                    "text": "2 seconds"
                },
                {
                    "value": "5",
                    "text": "5 seconds"
                },
                {
                    "value": "10",
                    "text": "10 seconds"
                },
                {
                    "value": "15",
                    "text": "15 seconds"
                },
                {
                    "value": "20",
                    "text": "20 seconds"
                },
                {
                    "value": "30",
                    "text": "30 seconds"
                },
                {
                    "value": "45",
                    "text": "45 seconds"
                },
                {
                    "value": "60",
                    "text": "a minute"
                }
            ]
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("HeadViewer"),
            "name": "HeadViewer_autoHide",
            "type": "checkbox",
            "label": "Close the Head Viewer when there is nothing to show"
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("HeadViewer"),
            "name": "HeadViewer_Non-Breaking_SPace",
            "type": "description",
            "text": ""
        },
        {
            "tab": i18n.get("notifications"),
            "group": i18n.get("HeadViewer"),
            "name": "HeadViewer_closeBehavior",
            "type": "radioButtons",
            "label": "Clicking on the \"close\" button will:",
            "options": [
                {
                    "value": "closeAll",
                    "text": "close Head Viewer on every window, until you reopen it"
                }
            ]
        }
    ]
};