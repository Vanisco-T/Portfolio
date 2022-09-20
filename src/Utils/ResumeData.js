import FacebookIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedIn from '@material-ui/icons/LinkedIn'
import { WebOutlined, NetworkWifi,AssignmentIndOutlined,TimeToLeaveOutlined,Language } from '@material-ui/icons'
import GithubIcon from '@material-ui/icons/GitHub'
import sport from '../Asset/Images/sport.png'
import java from '../Asset/Images/java.jpeg'
import network from '../Asset/Images/network.png'
import c from '../Asset/Images/c.jpeg'
import port from '../Asset/Images/port.png'
import Timetable from '../Asset/Images/Timetable.jpg'
import gess from '../Asset/Images/gess.png'


export default {  
    name:'Tadiha Vanisco',
    birthday: '1st January 2002',
    title:'Js Developper And Network Student',
    email:'tvanisco@gmail.com',
    phone:'+237654255923',
    about:'My names are Ntousse Tadiha Vanisco, I am 20 years old and admitted at the Master 1 at the University Of Yaounde 1, in the sub-branch of Network and Operating System.\n\nI have completed many school project like Blooming game,School Time Table,Administration and configuration of network with it services and several other as seen in the portfolio part with also personnal project like sample social media app,sport app,resume app, music app and so on.',
    socials:{
        Telegram:{
            link:'https://t.me/VaniscoT',
            text:'TadihaTelegram',
            icon:<FacebookIcon/>
        },
        Twitter:{
            link:'https://www.facebook.com/tadiha.vanesco',
            text:'TadihaTwitter',
            icon:<TwitterIcon/>
        },
        LinkedIn:{
            link:'https://www.facebook.com/tadiha.vanesco',
            text:'TadihaLinkedIn',
            icon:<LinkedIn/>
        },
        Github:{
            link:'https://github.com/Vanisco-T',
            text:'TadihaGithub',
            icon:<GithubIcon/>
        },
    },
    experiences:[
        {
            title:'Network Admin And Js Developper',
            date:'2021-Present',
            description:'Since 2021 i started working with network equiment,simulation and the various configuration of services and in development i use Js with it various framework.'
        },
        {
            title:'Data Structure and Algorithm',
            date:'2020-2021',
            description:'This period i dicide to understand the knowlage behind data structure and algorithm.'
        },
        {
            title:'Programming',
            date:'2019-2020',
            description:'It was at my first year at the university so i did programming in various langaguage like c,c++,java,python and also implement CRUD in those languages.'
        }
    ],
    education:[
        {
            title:'Bachelor 3',
            date:'sept 2021- Aug 2022',
            description:'This academic year i was doing bachelor 3 degree in the sub branch of operating system and network'
        },
        {
            title:'Bachelor 2',
            date:'sept 2020- Aug 2021',
            description:'This academic year i was doing bachelor 2 and it was fondamentals'
        },
        {
            title:'Bachelor 1',
            date:'sept 2019- Aug 2020',
            description:'This academic year i was doing bachelor 1 and it was fondamentals'
        }
    ],
    services:[
        {
            title:'Web Dev',
            description:'I have been a web developper for more than 2 years',
            icon:<WebOutlined/>
        },
        {
            title:'Network Admin and Supervisor',
            description:'I have been a Network Admin for more than 6 month and i am still studying',
            icon:<NetworkWifi/>
        },
        {
            title:'Branding Identity',
            description:'You make you good services that is brand and leave a trace',
            icon:<AssignmentIndOutlined/>
        },
        {
            title:'Fast Delivery',
            description:'I deliver your product as fast and soon as possible',
            icon:<TimeToLeaveOutlined/>
        },
    ],
    skills:[
        {
            title:'FRONT-END',
            description:[
                "ReactJS",
                'JavaScript',
                'Bootstrap',
                'Material UI'
            ]
        },
        {
            title:'BACK-END',
            description:[
                "Node JS",
            ]
        },
        {
            title:'DATABASES',
            description:[
                "FireBase",
                'MySql',
                'MongoDb',
            ]
        },
        {
            title:'CONTROLS',
            description:[
                "Git",
                'GitHub',
                'SCRUM',
            ]
        },
        {
            title:'NETWORK',
            description:[
                "Configurations",
                'Simulations',
                'Administration',
                'Supervision'
            ]
        },
    ],
    portofolio:[
        {
            tag:'Front-end',
            image:sport,
            title:'Sport App',
            caption:'A simple app to shape your body',
            description:'This is a front-end build in react to simplifier user to practice sport',
            links:[
                {
                    link:'https://github.com/Vanisco-T/Sport-App',
                    icon:<GithubIcon/>
                },
                {
                    link:'https://sport-app.pages.dev/',
                    icon:<Language/>
                },
                {
                    link:'',
                    icon:''
                }
            ]
        },
        {
            tag:'C',
            image:c,
            title:'C Programming',
            caption:'Manipulation of C file',
            description:'This is a C project that manipulate files and perfom various function',
            links:[
                {
                    link:'https://github.com/Vanisco-T/File-in-C',
                    icon:<GithubIcon/>
                },
                {
                    link:'https://github.com/Vanisco-T/File-in-C',
                    icon:<Language/>
                },
                {
                    link:'',
                    icon:''
                }
            ]
        },
        {
            tag:'Full-Stack',
            image:gess,
            title:'School Teaching',
            caption:'Teaching App Like Google-classroom',
            description:'This a full-stack app that is capable of managing various classes in which we can create different classes,assign teacher to classes then student join the classes and can have all information about the classe like cours,document,his mark and so on.',
            links:[
                {
                    link:'https://github.com/Vanisco-T/Gess-App',
                    icon:<GithubIcon/>
                },
                {
                    link:'',
                    icon:''
                },
                {
                    link:'',
                    icon:''
                }
            ]
        },
        {
            tag:'Network',
            image:network,
            title:'Network Config',
            caption:'Network Services Configuration',
            description:'This project consist of configuring a web-server,ssh,dns,dhcp and mail-server using the network stimulator marionnet',
            links:[
                {
                    link:'https://github.com/Vanisco-T/Network-Config',
                    icon:<GithubIcon/>
                },
                {
                    link:'https://github.com/Vanisco-T/Network-Config',
                    icon:<Language/>
                },
                {
                    link:'',
                    icon:''
                }
            ]
        },
        {
            tag:'Front-end',
            image:port,
            title:'Portfolio',
            caption:'This is a complete resume of me',
            description:'This is a front-end build to say every on me and my evolution in computer sciences',
            links:[
                {
                    link:'https://github.com/Vanisco-T/Sport-App',
                    icon:<GithubIcon/>
                },
                {
                    link:'https://sport-app.pages.dev/',
                    icon:<Language/>
                },
                {
                    link:'',
                    icon:''
                }
            ]
        },
        {
            tag:'Java',
            image:java,
            title:'Association Rules',
            caption:'Generating Association Rules',
            description:'This project was base on implementing various data structures,with aprori algorithm and use it to implement association rule',
            links:[
                {
                    link:'https://github.com/Vanisco-T/Association-Rule-Java',
                    icon:<GithubIcon/>
                },
                {
                    link:'https://github.com/Vanisco-T/Association-Rule-Java',
                    icon:<Language/>
                },
                {
                    link:'',
                    icon:''
                }
            ]
        },
        {
            tag:'Full-Stack',
            image:Timetable,
            title:'School Time-Table',
            caption:'Genneration of Time Table',
            description:'This a full-stack app that is capable of generating a school time base on the addition of information like:Teacher,Cours,Classes and so on that enter in the database',
            links:[
                {
                    link:'https://github.com/Vanisco-T/school-planning-final',
                    icon:<GithubIcon/>
                },
                {
                    link:'',
                    icon:''
                },
                {
                    link:'',
                    icon:''
                }
            ]
        },
    ]
}