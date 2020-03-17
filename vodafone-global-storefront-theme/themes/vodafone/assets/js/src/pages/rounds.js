export default [
  {
    id: 1,
    title: 'ROUND 1/3 – ABOUT YOU & YOUR BUSINESS',
    showUnless: false,
    isActive: true,
    questions: [
      {
        id: 1,
        text: 'How many people in your business?',
        type: 'radio',
        showUnless: false,
        options: [
          {
            text: '1-9',
            value: '1-9'
          },
          {
            text: '10-99',
            value: '10-99'
          },
          {
            text: '100-999',
            value: '100-999'
          },
          {
            text: '1000+',
            value: '1000+'
          }
        ],
        answer: []
      },
      {
        id: 2,
        text: 'Are you employees spending their work time...',
        type: 'radio',
        showUnless: false,
        options: [
          {
            text: 'Mobile',
            value: 'MOBILE'
          },
          {
            text: 'Site/Location Based',
            value: 'SITE_LOCATION_BASED'
          },
          {
            text: 'Both',
            value: 'BOTH'
          }
        ],
        answer: ''
      },
      {
        id: 3,
        text: 'Are their devices company owned?',
        type: 'radio',
        showUnless: false,
        options: [
          {
            text: 'Yes',
            value: 'YES'
          },
          {
            text: 'No',
            value: 'NO'
          },
          {
            text: 'Mix of business and bring-your-own',
            value: 'MIX'
          }
        ],
        answer: ''
      }
    ]
  },
  {
    id: 2,
    title: 'ROUND 2/3 – YOUR MOBILE/LOCATION BASED PEOPLE',
    showUnless: false,
    isActive: true,
    questions: [
      {
        id: 4,
        text: 'What type of mobiles/tablets does your business use?',
        type: 'checkbox',
        showUnless: false,
        options: [
          {
            text: 'Apple',
            value: 'APPLE'
          },
          {
            text: 'Android',
            value: 'ANDROID'
          },
          {
            text: 'Windows',
            value: 'WINDOWS'
          },
          {
            text: 'Other',
            value: 'OTHER'
          },
        ],
        answer: []
      },
      {
        id: 5,
        text: 'What type of laptops/PCs does your business use?',
        type: 'cancellable',
        showUnless: false,
        options: [
          {
            text: 'Apple',
            value: 'APPLE'
          },
          {
            text: 'Windows',
            value: 'WINDOWS'
          },
          {
            text: 'Other',
            value: 'OTHER'
          },
          {
            text: 'None',
            value: 'NONE',
            cancel: true
          },
        ],
        answer: []
      },
      {
        id: 6,
        text: 'Where do your mobiles/laptops access your business apps, business messaging or email services?',
        type: 'radio',
        showUnless: false,
        options: [
          {
            text: 'Only on secure networks at work or over a Virtual Private Network',
            value: 'VPN'
          },
          {
            text: 'Sometimes over another business\'s wifi or network, such as at a café, lobby or other open hotspot',
            value: 'HOTSPOT'
          },
          {
            text: 'Anywhere there is mobile or wifi network access, even in other countries',
            value: 'ANYWHERE'
          }
        ],
        answer: ''
      }
    ]
  },
  {
    id: 3,
    title: 'FINAL ROUND - YOUR CYBER AWARENESS & READINESS',
    showUnless: false,
    isActive: true,
    questions: [
      {
        id: 7,
        text: 'Are you protected against latest threats, including phishing scams and data leaking apps – that are likely not protected in anti-virus nor secure networks?',
        type: 'radio',
        showUnless: false,
        options: [
          {
            text: 'Yes',
            value: 'YES'
          },
          {
            text: 'No',
            value: 'NO'
          }
        ],
        answer: ''
      },
      {
        id: 8,
        text: 'Do you think that your current solutions are sufficient for protecting you against financial bottom line impacting malware such as <span data-toggle="tooltip" data-placement="top" title="where hackers encrypt data and demand a ransom">ransomware</span> or spyware?',
        type: 'radio',
        showUnless: false,
        options: [
          {
            text: 'Yes',
            value: 'YES'
          },
          {
            text: 'No',
            value: 'NO'
          }
        ],
        answer: ''
      },
      {
        id: 9,
        text: 'Do any of the following security concerns resonate with you (now or in the future)?',
        type: 'checkbox',
        showUnless: false,
        options: [
          {
            text: 'Email phishing or <span data-toggle="tooltip" data-placement="top" title="where hackers encrypt data and demand a ransom">ransomware</span> attacks',
            value: 'PHISHING'
          },
          {
            text: 'Cloud-Based application security',
            value: 'CLOUD_BASED'
          },
          {
            text: 'Data leaking apps',
            value: 'RANSOMWARE'
          },
          {
            text: 'Stolen or lost devices',
            value: 'LOST_DEVICES'
          },
          {
            text: 'Devices with outdated or compromised operating systems',
            value: 'JAILBREAK'
          },
          {
            text: 'Risky websites and adware',
            value: 'ADWARE'
          },
          {
            text: 'Malicious apps or apps downloaded from third-party app stores',
            value: 'MALICIOUS_APPS'
          },
          {
            text: 'Unsafe or fake networks, such as in the street or near your hotel or coffee shop',
            value: 'CLONED_NETWORKS'
          },
          {
            text: 'Phishing social media or SMS messages',
            value: 'PHISHING_SOCIAL_MEDIA'
          }
        ],
        answer: []
      }
    ]
  }
]
