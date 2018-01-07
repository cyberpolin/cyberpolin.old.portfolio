import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var JobDetail = (props)=>{
  console.log(props);
  const {job} = props
  return(
    <div className="row">
      <div className="job-details col-xs-11">
        <div className="profession">{job.position}</div>
        <div className="description">
          {job.description}
        </div>
        <br/>
        <div className="highlights">Projects</div>
        <ul className="list-group">
          {Object.keys(job.projects).map((project, i)=>(
            <li key={ i } className="list-group-item">
              <a href={job.projects[project].url}> {job.projects[project].title} </a>
              {job.projects[project].description}
            </li>))}
      </ul>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobs:{
        kondo_soft:{
          title:'Contractor at Kondo Soft',
          url:'http://kondosoft.com',
          date:'December 2016 - Today',
          position:'Trainer / Lead Developer',
          description:'I\'ve being forming new developers for Kondo Soft and Creatur Viajes, both local bussines, also working as a lead developer for other projects.',
          projects:{
            arapaho:{
              url:'',
              title:'Of The Wall Arapaho',
              description:'The Indian-American community Arapaho wants to recover theirs native languaje, so I build an app for them so they can read QR code from cards with simple words in english and play a sound in Arapaho.',
              highlights:['qr code', 'react native', 'sound player']
            },
            qhm:{
              url:'',
              title:'Que Hacer Merida',
              description:'This mobile app  was done with React native using Redux & Flux, I used local storage and Sagas. The app is a Yelp like, where you can search restaurant on a Mexican state. The backend of this app was made with django and a rest framework.',
              highlights:['qr code', 'react native', 'sound player']
            },
            victorias_game:{
              url:'',
              title:'Victoria\s Game',
              description:'My daugther is having problems learning to write, so I build this phaser game for IOS and Android, currently making the final touches. The idea is to teach little kids how the letters traces are done.',
              highlights:['qr code', 'javascript', 'phaser']
            },
            nuvote:{
              url:'http://repositoriodocumental.ine.mx/xmlui/',
              title:'INE dspace',
              description:'Dspace is a document repository used in a lot of Universities, The electoral ministry in Mexico needed to have a digital library where to put every book and file, so I install and make a theme for dspace at INE.',
              highlights:['compass', 'dspace', 'API']
            }
          }
        }

      }
    }
  }
  render() {
    const {jobs} = this.state
    return (

    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div id="photo-header" className="text-center">

            <div id="photo">
              <img src="https://github.com/cyberpolin/cyberpolinWebsite/raw/master/blog/static/imgs/carlos-gonzalez-web-developer.png" alt="Carlos Gonzalez"/>
            </div>
            <div id="text-header">
              <h1>Carlos Gonzalez<br/><span>Full Stack Developer</span></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-7">

          <div className="box">
            <h2><i className="fa fa-user ico"></i> About</h2>
            <p>I am a devoted full stack developer, who loves technology and how it can impact people's lives. I believe that UI is a very important part of a product; I always build thinking of the user first. The past three years, I worked for Tabasco State Government, where I approached technology solutions on a bigger scale. This year, I decided to pursue full stack web development further by attending Dev Bootcamp in San Francisco. When I'm not working, I love riding my bike, spending time with my beautiful family, going to the beach, and eating good food.</p>
          </div>

          <div className="box">
            <h2><i className="fa fa-suitcase ico"></i> Work Experience</h2>
              <div className="job clearfix">
                <div className="row">
                  <div className="details">
                    <div className="where">Contractor at Kondo Soft</div>
                    <div className="address">
                      <a href="http://kondosoft.com/" target="_blank"><i className="fa fa-globe ico"></i> http://kondosoft.com/</a>
                    </div>
                    <div className="year">December 2016 - Today</div>
                  </div>
                </div>
                {Object.keys(jobs).map((job, i)=><JobDetail job = {jobs[job]} key = {i}/>)}

                <div className="row">
                  <div className="details">
                    <div className="where">Freelancer</div>
                    <div className="address">
                      <a href="http://cyberpolin.com/" target="_blank"><i className="fa fa-globe ico"></i> http://cyberpolin.com/</a>
                    </div>
                    <div className="year">August 2016 – December 2016</div>
                  </div>
                </div>
                <div className="row">
                  <div className="job-details col-xs-11">
                    <div className="profession">Developer</div>
                    <div className="description">
                      Since I return from SF i started my work as a consultant in some local business, and also for some IT business all over Mexico. Did some jobs for upwork clients.

                      One of my passions is teach so right now I have a developer learning from me.

                      I have done a lot of work with JS, Django, and mobile, using both react native and appcelerator.
                    </div>
                    <br/>
	                <div className="profession">As a consultant...</div>
	                   <div className="description">
	                   <a href="https://creaturviajes.com">
                        Creatur </a> is one of the best travel agencys in Mexico, they ask me to improve their Developer Team, help them refactor their's administration software. And develope a new product which is going to be a car rental application(we are using react for this)
                        </div>
	                  <div className="highlights">Projects</div>
                    <ul className="list-group">
                      <li className="list-group-item"><a href="https://itunes.apple.com/mx/app/creatur-15/id1067588858?mt=8">Creatur 15 </a> - This is a mobile app for both IOS & Android where you as a prospect can find trips of your interest, and as a client can watch your intinerary, it also have a small social media sectio where you can share photos with your travel partners.</li>
                      <li className="list-group-item"><a href="https://itunes.apple.com/mx/app/embajadores-creatur/id1180730599?mt=8">Embajadores Creatur </a> - Creatur Embassadors is an app where you can refer your friends, and you earn points for it, it has a top list of top emmbasadors, it have a complete integration with aws push notification, facebbok API, Whats app, and twillio.</li>
                      <li className="list-group-item"><a href="https://github.com/kondoSoft/react-car-rental">Creatur Rent a car </a> - This application is <b>under development</b> is a full react.js app and has a django API as backend, this app takes several providers such as hertz, alamo etc. from different data sources and integrate them to be consume by a react.js(react boilerplate) front end</li>
                  </ul>
                  <div className="profession">Other projects</div>
	                  <div className="highlights">React</div>
                    <ul className="list-group">
                      <li className="list-group-item"><a href="https://itunes.apple.com/us/app/kondo-invaders/id1195679561?ls=1&mt=8">Kondo Invaders</a> - Is the first game I publish, it's coded using JS and phaser framework, the hole game is coded from scratch, and the art was made completely by a team I lead.<a href='https://github.com/kondoSoft/invaders-mobile'>Git</a></li>
                      <li className="list-group-item"><a href="https://github.com/kondoSoft/invaders-mobile/tree/develop">Kondo Capitalism</a> - A React Native game, a clone of adventure capitalism and a work in progress, still need to add art.</li>
                      <li className="list-group-item"><a href="https://github.com/kondoSoft/invaders-mobile/tree/develop">Tabasco Rinde Cuentas</a> - Is a government tools made with react.js it helps to show the state governmet expenses in real time with a firebase connection</li>
                      <li className="list-group-item"><a href="https://www.rentgene.com/">Rentgene</a> - This project came to me from a previous developer, I fix a lot of bugs and make the <a href='https://www.rentgene.com/add/rooms'>Photo uploader</a> using Sagas, also deploy it on aws using s3 buckets and react boilerplate</li>
                      <li className="list-group-item"><a href="http://online-store.cyberpolin.com/">Online store</a> - I follow Wess Boss tutorial for building an online store and add a firebase connection</li>
                      <li className="list-group-item"><a href="http://twitter.cyberpolin.com/">Twitter Conection</a> - This was my first approach into JS & node development, is a twitter API reader that follows twitter main stream and push it into the browser using websockets, if the tweet have geolocation it paint it into the map, It is using web sockets and express.</li>
                    </ul>
                  </div>
                </div>
              </div>





              <div className="job clearfix">
                <div className="row">
                  <div className="details">
                    <div className="where">Dev Bootcamp</div>
                    <div className="address">
                      <a href="http://devbootcamp.com/" target="_blank"><i className="fa fa-globe ico"></i> http://devbootcamp.com/</a>
                    </div>
                    <div className="year">April 2016 – August 2016</div>
                  </div>
                </div>
                <div className="row">
                  <div className="job-details col-xs-11">
                    <div className="profession">Developer</div>
                    <div className="description">
                      Dev Bootcamp is a 19 week intensive developer program teaching web development best practices, meta-cognitive skills to learn efficiently, and empathy and communication skills to be a good team member. I learned Ruby on Rails, Javascript, JQuery, React Native, Heroku, Twitter API, Node.js, algorithmic thinking, test driven development, and agile development.
                      <div className="highlights">Projects</div>
                      <ul className="list-group">
                        <li className="list-group-item"><a href="https://github.com/Tooconfident/Puppy_PlayDate">Puppy Playdate</a> - I joined a team of 4 where, in a span of 9 days, we built a native iOs application using React Native, Rails API, Postrges SQL. <a href="https://www.youtube.com/watch?v=aDgS4kqtQKM">View a technical video here.</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

                <div className="job clearfix">
                  <div className="row">
                    <div className="details">
                      <div className="where">Tabasco State Government</div>
                      <div className="address">
                        <a href="http://tabasco.gob.mx/" target="_blank"><i className="fa fa-globe ico"></i> http://tabasco.gob.mx/</a>
                      </div>
                      <div className="year">December 2013 – March 2016</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="job-details col-xs-11">
                      <div className="profession">CTO</div>
                      <div className="description">
                        I grew our technology group from 5 developers to 50 developers in a year. We used Python, Django, PostgresSQL, JQuery, HTML, and CSS. I created and deployed new technology standards for the Government of Tabasco, including SCRUM.
                        <div className="highlights">Highlights</div>
                        <ul className="list-group">
                          <li className="list-group-item">Implemented a CMS for the state website and unify the look and feel for all government offices in Tabasco.</li>
                          <li className="list-group-item">Migrate proprietary software to open source option like django and postgres SQL.</li>
                          <li className="list-group-item">Design and lead the development of a new software, that allow users to start the driver licenses expedition procedure from their homes.</li>
                          <li className="list-group-item">Design and lead the development of a social program that allows young people to exchange help on social matters for products, like education etc.</li>


                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="job clearfix">
                    <div className="row">
                      <div className="details">
                        <div className="where">Freelancer</div>
                        <div className="address">
                          <a href="http://utopiaw.com/" target="_blank"><i className="fa fa-globe ico"></i>http://utopiaw.com/</a>
                        </div>
                        <div className="year">2005 – Decembert 2012</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="job-details col-xs-11">

                        <div className="description">
                          As an entrepreneur, I did projects in HTML, CSS, and PHP. I provided account management and was responsible for all client facing activities, including sales, billing, and accounting.
                          <div className="highlights">Projects</div>
                          <ul className="list-group">
                            <li className="list-group-item"><a href="http://creaturviajes.com/">Creatur Viajes</a> is one of the travel lider companies in Tabasco, Mexico, they sell travel bundles to other travel companies in Mexico. The website has a custom Wordpress theme and a especially builded search plugin. Also I put together and train a group of developers for this company, they started with one developer, today they have a small team of 5 members maintaining and ERP that we build.<br/>The stack Creatur Viajes have is Python + Django + Postgres SQL, also a mobile application made in Titanium Appcelerator.</li>
                            <li className="list-group-item"><a href="http://www.colegioingles.edu.mx/">Colegio Ingles de Villahermosa</a> WordPress website, I focused on Search Engine Optimization (SEO), which is a series of techniques were a site use certain especial words or phrases so it get a better ranking on google, or others Search Engines.</li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>

          <div className="box">
            <h2><i className="fa fa-group ico"></i> Volunteer</h2>
              <div className="job clearfix">
                <div className="row">
                  <div className="details">
                    <div className="where">Python Tabasco</div>
                    <div className="address">
                      <a href="https://www.facebook.com/groups/PythonTabasco/" target="_blank"><i className="fa fa-globe ico"></i> https://www.facebook.com/groups/PythonTabasco/</a>
                    <br/><a href="https://github.com/PythonTabasco" target="_blank"><i className="fa fa-globe ico"></i> https://github.com/PythonTabasco</a>
                    </div>
                    <div className="year">January 2016 – Present</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-11 pull-right">
                    <div className="profession">Founder</div>
                    <div className="description">
                      In three months I manage to build a community of Python enthusiasts every Tuesdays and Thursdays of the week, to talk about Python and Django, the group; Python Tabasco had a 8 to 15 attendees every day.
In this study group we cover the basics of Python 3 like; basic syntax, conditional, data structures, loops, etc. Now we have plans to do a Django introduction course.                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-5">

          <div className="box clearfix">
            <h2><i className="fa fa-bullseye ico"></i> Contact</h2>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-map-marker fa-fw"></span></div>
              <div className="title  pull-right">Tabasco México</div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-phone fa-fw"></span></div>
              <div className="title only pull-right">+52 9931 17 54 35</div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-envelope fa-fw"></span></div>
              <div className="title only pull-right"><a href="mailto:cyberpolin@gmail.com" target="_blank">cyberpolin@gmail.com</a></div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-globe fa-fw"></span></div>
              <div className="title only pull-right"><a href="https://cyberpolin.com/" target="_blank">https://cyberpolin.com</a></div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-twitter-square fa-fw"></span></div>
              <div className="title pull-right">Twitter</div>
              <div className="description pull-right"><a href="http://cyberpolin.com/static/resume/" target="_blank">cyberpolin</a></div>
            </div>
            <div className="contact-item">
              <div className="icon pull-left text-center"><span className="fa fa-linkedin-square fa-fw"></span></div>
              <div className="title pull-right">linkedin</div>
              <div className="description pull-right"><a href="https://www.linkedin.com/in/cyberpolin" target="_blank">cyberpolin</a></div>
            </div>
          </div>

          <div className="box">
            <h2><i className="fa fa-tasks ico"></i> Skills</h2>
            <div className="skills clearfix">
              <div className="item-skills">
                  Full Stack Developer
              </div>
              <div className="col-sm-offset-1 col-sm-12 clearfix">
                <span className="skill badge">React.js + Redux + Sagas</span>
                <span className="skill badge">React Native</span>
                <span className="skill badge">Python + Django</span>
                <span className="skill badge">Node.js</span>
                <span className="skill badge">Express.js</span>
                <span className="skill badge">Javascript</span>
                <span className="skill badge">AWS</span>
                <span className="skill badge">HTML</span>
                <span className="skill badge">CSS</span>
                <span className="skill badge">Ruby on Rails</span>
              </div>
            </div>
            <div className="skills clearfix">
              <div className="item-skills">
                  Project Manager
              </div>
              <div className="col-sm-offset-1 col-sm-12 clearfix">
                <span className="skill badge">Leadership</span>
                <span className="skill badge">Scrum Master Certified</span>
                <span className="skill badge">Open Government</span>
              </div>
            </div>
          </div>


          <div className="box">
            <h2><i className="fa fa-university ico"></i> Education</h2>
            <ul id="education" className="clearfix">

              <li>
                <div className="year pull-left">2016 2016</div>
                <div className="description pull-right">
                  <h3>Dev Bootcamp</h3>

                  <p>Web Developer</p>
                </div>
              </li>
              <li>
                <div className="year pull-left">1998 2014</div>
                <div className="description pull-right">
                  <h3>University of Veracruz</h3>
                  <p><i className="fa fa-graduation-cap ico"></i> Bachelor</p>
                  <p>Computer Science</p>
                </div>

            </li></ul>
          </div>

          <div className="box">
            <h2><i className="fa fa-language ico"></i> Languages</h2>
            <ul className="list-group">
              <li className=" list-group-item">English<span className="skill badge pull-right">Second Language</span></li>
              <li className=" list-group-item">Spanish<span className="skill badge pull-right">Native Laguage</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    );
  }
}

export default App;
