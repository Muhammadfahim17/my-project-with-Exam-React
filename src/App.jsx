import React from 'react'
import './App.css'
import image1 from './assets/Combined shape 16724 (1).png'
import image2 from './assets/Petro.png'
import image3 from './assets/mockup (1).png'
import image4 from './assets/watrch video.png'
import image5 from './assets/sponser.png'
import image6 from './assets/icon (9).png'
import image7 from './assets/icon (10).png'
import image8 from './assets/icon (11).png'
import image9 from './assets/Group 8.png'
import image10 from './assets/Group.png'
import image11 from './assets/Group (1).png'
import image12 from './assets/pattern.png'
import image13 from './assets/icon (12).png'
import image14 from './assets/icon (13).png'
import image15 from './assets/icon (14).png'
import image16 from './assets/icon (15).png'
import image17 from './assets/icon (16).png'
import image18 from './assets/Group 8 (1).png'
import image19 from './assets/Group (2).png'
import image20 from './assets/Group (3).png'
import image21 from './assets/Group (4).png'
import image22 from './assets/Group (5).png'
import image23 from './assets/arrow.png'
import image24 from './assets/star.png'
import image25 from './assets/Ellipse.png'
import image26 from './assets/Ellipse (1).png'
import image27 from './assets/Ellipse (2).png'
import image28 from './assets/Slide Switcher.png'
import image29 from './assets/Group 4 (1).png'
import image30 from './assets/Bg (1).png'
import image31 from './assets/Combined shape 16072.png'
import image32 from './assets/Combined shape 15714.png'
import image33 from './assets/Combined shape 15712 (1).png'
import image34 from './assets/label.png'
import image35 from './assets/Rectangle 2 (1).png'
import image36 from './assets/Rectangle 2.1 (1).png'
import image37 from './assets/Rectangle (16).png'
import image38 from './assets/Rectangle (15).png'
import image39 from './assets/Rectangle (14).png'
import image40 from './assets/Rectangle (13).png'
import image41 from './assets/pattern (2).png'
import image42 from './assets/Rectangle (17).png'
import image43 from './assets/Rectangle 2.1 (2).png'
import image44 from './assets/Rectangle (18).png'
import image45 from './assets/Rectangle (19).png'
// import image18 from './assets/icon (17).png'
import Card from './components/card'
import Card2 from './components/card2'
import Card3 from './components/card3'
import Card4 from './components/card4'

const App = () => {
  return (
    <div>

      <div className="allheader">
      <div className="header">
      <div className="logoheader">
        <img src={image1} alt="" />
        <img  src={image2} alt="" />
      </div>
      <div className="textheader">
        <p>Home</p>
        <p>Adverties</p>
        <p>Supports</p>
        <p>Contact</p>
      </div>
      <button>Get Started</button>
      </div>

      <div className="centerheader">
        <div className="texcentertheader">
          <h1>Experience your ultimate mobile
          application</h1>
          <p>Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best
          design system guidelines ever.</p>
          <div className="btncenterheader">
            <button>Get Started</button>
            <img src={image4} alt="" />
          </div>
          <div className="sponsorcenterheader">
            <img src={image5} alt="" />
          </div>
        </div>
        <img style={{'width' : '500px','zIndex' : '1'}} src={image3} alt="" />
      </div>
      </div>

      <img className='q1' src={image35} alt="" />
      <img className='q2' src={image36} alt="" />
      <img className='q3' src={image37} alt="" />
      <img className='q4' src={image38} alt="" />
      <img className='q5' src={image39} alt="" />
      <img className='q6' src={image40} alt="" />
      <img className='q7' src={image41} alt="" />


      <div className="meet">
        <h3 style={{'textAlign' : 'center','color' :'#244886','fontWeight' : 'bold'}}>Quality features</h3>
        <h1 style={{'textAlign' : 'center','margin' : '15px 0px','fontSize' : '34px','color' : '#0F2137'}}>Meet exciting feature of app</h1>
        <div className="cartmeet">
          <Card image={image6} name="Vector Editing" des="Get your blood tests delivered athome collect a sample from the your blood tests."/>
          <Card image={image7} name="Customize & Monitoring" des="Get your blood tests delivered athome collect a sample from the your blood tests."/>
          <Card image={image8} name="Vector Editing" des="Get your blood tests delivered athome collect a sample from the your blood tests."/>
        </div>
      </div>

      <div className="telefoncenter">
      <img style={{'zIndex' : '1'}} src={image9} alt="" />
      <div className="asaidtelefon">
      <div className="texttelefon">
        <h3 style={{'color' : '#244886','fontWeight' : 'bold','fontSize' : '18px'}}>Core features</h3>
        <h1 style={{'color': '#0F2137','fontSize' : '45px','lineHeight' : '40px','margin' : '60px 0px'}}>Smart Jackpots that you may love this anytime & anywhere</h1>
        <div className="smart">
          <img src={image10} alt="" />
          <div className="textsmart">
            <h3 style={{'color' : '#0F2137','fontWeight' : 'bold'}}>Smart Features</h3>
            <p style={{'color' : '#343D48', 'padding' : '10px 0px'}}>Get your blood tests delivered at let home collect sample from the victory of the managments.your blood tests.</p>
          </div>
        </div>
      </div>
      <div className="texttelefon">
        <div className="smart">
          <img src={image11} alt="" />
          <div className="textsmart">
            <h3 style={{'color' : '#0F2137','fontWeight' : 'bold'}}>Secure Contents</h3>
            <p style={{'color' : '#343D48', 'padding' : '10px 0px'}}>Get your blood tests delivered at let home collect sample from the victory of the managments. your blood tests.</p>
          </div>
        </div>
      </div>
      </div>
      </div>

      <img className='vector1' src={image12} alt="" />


    <div className="appcenter">
      <h3 style={{'textAlign' : 'center','color' : '#244886','fontSize' : '20px','fontWeight' : 'bold'}}>Quality features</h3>
      <h1 style={{'textAlign' : 'center' , 'color' : '#0F2137','margin' : '40px 0px'}}>Meet exciting feature of app</h1>
      <div className="totalappcart">
        <Card2 image={image13} name="Smart Features" des="Get your blood tests delivered at let home collect sample from the victory of the managments."/>
        <Card2 image={image14} name="Smart Features" des="Get your blood tests delivered at let home collect sample from the victory of the managments."/>
        <Card2 image={image15} name="Smart Features" des="Get your blood tests delivered at let home collect sample from the victory of the managments."/>
        <Card2 image={image16} name="Smart Features" des="Get your blood tests delivered at let home collect sample from the victory of the managments."/>
        <Card2 image={image17} name="Smart Features" des="Get your blood tests delivered at let home collect sample from the victory of the managments."/>
        <Card2 image={image13} name="Smart Features" des="Get your blood tests delivered at let home collect sample from the victory of the managments."/>
      </div>
    </div>


    <div className="jacpot">
      <div className="textjacpot">
        <h3 style={{'textAlign' : 'center','color' : '#244886','fontSize' : '20px','fontWeight' : 'bold'}}>Core features</h3>
        <h1 style={{'color': '#0F2137','fontSize' : '45px','lineHeight' : '60px',}}>Smart Jackpotsthat you may love this anytime & anywhere</h1>
        <p style={{'color' : '#02073E', 'lineHeight' : '40px','fontSize' : '17px','fontWeight' : 'bold'}}>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
        <button style={{'backgroundColor' : '#1F3E76','color' : 'white','padding' : '12px 30px','borderRadius': '25px','fontWeight' : 'bold'}}>Get Started</button>
      </div>
      <img src={image18} alt="" />
    </div>


    <div className="box">
      <h3 style={{'textAlign' : 'center','color' : 'white','fontSize' : '20px','fontWeight' : 'bold'}}>Whats the function</h3>
      <h1 style={{'color': 'white','fontSize' : '45px','lineHeight' : '60px','textAlign' : 'center'}}>Let’s see how it works</h1>
      <div className="totalcartbox">
        <Card3 image={image19} name="Set disbursement Instructions" des="Get your blood tests delivered athome collect a sample from theyour blood tests." />
        <Card3 image={image20} name="Assembly retrieves funds from your " des="Get your blood tests delivered athome collect a sample from theyour blood tests." />
        <Card3 image={image21} name="Assembly initiates disbursement" des="Get your blood tests delivered athome collect a sample from theyour blood tests." />
        <Card3 image={image22} name="Customer receives funds payment" des="Get your blood tests delivered athome collect a sample from theyour blood tests." />
      </div>
    </div>

    <img className='arrow' src={image23} alt="" />

    <div className="clientbox">
      <h3 style={{'textAlign' : 'center','color' : '#244886','fontSize' : '20px','fontWeight' : 'bold'}}>Testimunial</h3>
      <h1 style={{'color': '#0F2137','fontSize' : '45px','lineHeight' : '60px','textAlign' : 'center'}}>Meet Client Satisfaction</h1>
      <div className="totalcartclient">
        <Card4 image={image24} name="Modern look & trending design" des="Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer." image1={image25} nameimage1="Denny Hilguston" desimage1="@denny.hil" />
        <Card4 image={image24} name="Modern look & trending design" des="Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer." image1={image26} nameimage1="Denny Hilguston" desimage1="@denny.hil" />
        <Card4 image={image24} name="Modern look & trending design" des="Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer." image1={image27} nameimage1="Denny Hilguston" desimage1="@denny.hil" />
      </div>
    </div>

    <img className='arrow2' src={image28} alt="" />
      

    <div className="secure">
      <img style={{'width' : '600px'}} src={image29} alt="" />
      <div className="textsecure">
        <h3 style={{'textAlign' : 'center','color' : '#244886','fontSize' : '20px','fontWeight' : 'bold'}}>Core features</h3>
        <h1 style={{'color': '#0F2137','fontSize' : '45px','lineHeight' : '60px',}}>Secure Payment Transaction System with #1 Ranking</h1>
        <p style={{'color' : '#02073E', 'lineHeight' : '40px','fontSize' : '17px','fontWeight' : 'bold'}}>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
        <button style={{'backgroundColor' : '#1F3E76' , 'padding' : '12px 30px','color' : 'white','fontWeight': 'bold','borderRadius' : '25px'}}>Learn More</button>
      </div>
    </div>

    <img className='bg2' src={image30} alt="" />


    <div className="plan">
    <h3 style={{'textAlign' : 'center','color' : 'white','fontSize' : '20px','fontWeight' : 'bold'}}>Whats the function</h3>
    <h1 style={{'color': 'white','fontSize' : '45px','lineHeight' : '60px','textAlign' : 'center'}}>Let’s see how it works</h1>
    <div className="totalcartpaln">
    <div style={{'backgroundColor' : '#2F5392','zIndex' : '1'}} className="plancart1">
      <h2>Free Plan</h2>
      <p>For Small teams or office</p>
      <div className="textplan">
        <img src={image31} alt="" />
        <span>Ultimate access to all course, exercises and assessments</span>
      </div>
      <div className="textplan">
        <img src={image31} alt="" />
        <span>Free acess for all kind of exercise corrections with downloads.</span>
      </div>
      <div className="textplan">
        <img src={image31} alt="" />
        <span>Total assessment corrections with free download access system</span>
      </div>
      <div className="textplan">
        <img  src={image31} alt="" />
        <span>Unlimited download of courses on the mobile app contents</span>
      </div>
      <div className="textplan">
        <img  src={image31} alt="" />
        <span>Download and print courses and exercises in PDF</span>
      </div>
      <button style={{'backgroundColor' : 'white' ,'color' : '#2F5392', 'fontWeight' : 'bold','padding' : '12px 30px','borderRadius' : '25px','marginLeft' : "150px"}}>Signup Now</button>
    </div>
    <div style={{'backgroundColor' : '#FFFFFF'}} className="plancart1">
      <h2 style={{'color' : 'black'}}>Premium</h2>
      <p style={{'color' : 'gray'}}>For Small teams or office</p>
      <div className="textplan">
        <img src={image31} alt="" />
        <span style={{'color' : '#343D48'}}>Ultimate access to all course, exercises and assessments</span>
      </div>
      <div className="textplan">
        <img src={image31} alt="" />
        <span style={{'color' : '#343D48'}}>Free acess for all kind of exercise corrections with downloads.</span>
      </div>
      <div className="textplan">
        <img src={image31} alt="" />
        <span style={{'color' : '#343D48'}}>Total assessment corrections with free download access system</span>
      </div>
      <div className="textplan">
        <img  src={image31} alt="" />
        <span style={{'color' : '#343D48'}}>Unlimited download of courses on the mobile app contents</span>
      </div>
      <div className="textplan">
        <img  src={image31} alt="" />
        <span style={{'color' : '#343D48'}}>Download and print courses and exercises in PDF</span>
      </div>
      <button style={{'backgroundColor' : '#1F3E76' ,'color' : 'white', 'fontWeight' : 'bold','padding' : '12px 30px','borderRadius' : '25px','marginLeft' : "150px"}}>Signup Now</button>
    </div>
    </div>
    <img className='w1' src={image42} alt="" />
    {/* <img className='w2' src={image42} alt="" /> */}
    <img className='w3'  src={image44} alt="" />
    <img className='w4' src={image45} alt="" />

    <img className='rec' src={image34} alt="" />

    <div className="recom">
      <p style={{'color' : '#343D48','fontWeight' : 'bold' ,'fontSize' : '18px'}}>Starting from</p>
      <h2 style={{'color' : '#25CB9E','fontWeight'  :'bold' ,'fontSize' : '25px'}}>49.99/mo</h2>
    </div>

    </div>

    <div className="footer">
      <h3 style={{'textAlign' : 'center','color' : '#244886','fontSize' : '20px','fontWeight' : 'bold'}}>Frequent Question</h3>
      <h1 style={{'color': 'black','fontSize' : '45px','lineHeight' : '60px','textAlign' : 'center'}}>Do you have any question</h1>
      <div className="totalcartfooter">
        <div className="cart1footer">
          <img src={image32} alt="" />
          <div className="textfootercart">
            <h3>How to contact with riders emergency ?</h3>
          </div>
        </div>
        <div className="cart1footer">
          <img src={image32} alt="" />
          <div className="textfootercart">
            <h3>App installation failed, how to update system information?</h3>
          </div>
        </div>
        <div className="cart1footer">
          <img src={image33} alt="" />
          <div className="textfootercart">
            <h3>Website reponse taking time, how to improve?</h3>
            <p style={{'color' : '#343D48','lineHeight' : '30px'}}>Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.</p>
          </div>
        </div>
        <div className="cart1footer">
          <img src={image32} alt="" />
          <div className="textfootercart">
            <h3>New update fixed all bug and issues</h3>
          </div>
        </div>
      </div>
    </div>


    <div className="aboutinfo">
      <div className="totalcartabout">
        <div className="cartabout1">
          <h2>About Us</h2>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>About Us</p>
          <p>Copyright</p>
          <p>Popular Campaign</p>
        </div>
        <div className="cartabout1">
          <h2>Our Information</h2>
          <p>Return Policy </p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Site Mapt</p>
          <p>Store Hours</p>
        </div>
        <div className="cartabout1">
          <h2>My Account</h2>
          <p>Press inquiries</p>
          <p>Social media </p>
          <p>directories</p>
          <p>Images & B-roll</p>
          <p>Permissions</p>
        </div>
        <div className="cartabout1">
          <h2>Policy</h2>
          <p>Application security</p>
          <p>Software principles</p>
          <p>Unwanted software policy</p>
          <p>Responsible supply chain</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default App