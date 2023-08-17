import './style.css';
import Logo from './images/Logo.png';
import Illustration from './images/Illustration.png';
import Logo1 from './images/Logo1.jpg';
import Logo2 from './images/Logo2.jpg';
import Logo3 from './images/Logo3.jpg';
import Logo4 from './images/Logo4.jpg';
import Logo5 from './images/Logo5.jpg';
import Logo6 from './images/Logo6.jpg';
import Logo7 from './images/Logo7.jpg';
import Icon1 from './images/Icon (1).png';
import Icon2 from './images/Icon (2).png';
import Icon3 from './images/Icon (3).png';
import unlock from './images/unlock.png';
import Iconaicon1 from './images/Iconaicon1.png';
import Iconaicon2 from './images/Iconaicon2.png';
import Iconaicon3 from './images/Iconaicon3.png';
import Iconaicon4 from './images/Iconaicon4.png';
import calender from './images/calender.png';
import custom from './images/custom.png';
import Logoi1 from './images/Logoi1.png';
import Logoi2 from './images/Logoi2.png';
import Logoi3 from './images/Logoi3.png';
import Logoi4 from './images/Logoi4.png';
import Logoi5 from './images/Logoi5.png';
import Logoi6 from './images/Logoi6.png';
import image181 from './images/image181.png';
import image192 from './images/image192.png';
import image203 from './images/image203.png';
import LogoM1 from './images/LogoM1.png';
import l1 from './images/l1.png';
import l2 from './images/l2.png';
import l3 from './images/l3.png';
import l4 from './images/l4.png';
import send1 from './images/send1.png';

import { Link } from 'react-router-dom';

function Home() {
    return(

      
        <html>
            <head>
                <title>Me!</title>
                
            </head>
            <body>
                {/* navbar start */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto text-center mt-2 navbar-brand">
                        {/* Link tag makes page go to another page without reloading
                         <Link to='/Servie'> */}
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to='/Service'>Service</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Feature">Feature</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Product">Product</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Testimonial">Testimonial</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/FAQ">FAQ</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mt-2 row1">
                        <li className="ms-3">
                        <button className="btn0 ">
                            <Link to="/Login">Login</Link>

                        </button>
                        </li>
                        <li className="ms-3">
                        <button className="btn1">
                            <Link to="/Signup">Sign up</Link>

                        </button>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                
                {/* main */}
                
                <section className="main bg-body-tertiary py-5 mt-5">
                <div className="container mt-5">
                    <div className="row row1">

                    <div className="col-lg-4 order-lg-1  ">
                        <img src={Illustration} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-8 my-5 order-lg-0">
                        <h1>Lessons and insights <br /> <span>from 8 years</span></h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                        <button className="btn2"><a href="">Register</a></button>
                    </div>
                    </div>
                </div>
                </section>


                {/* client start */}
                <section className="clie">
                <div className="container py-4 ">

                    <h1>Our Clients</h1>
                    <p>We have been working with some Fortune 500+ clients</p>

                    <div className="row py-4 row1" >

                        <div className="col-1 m-auto col1" >
                            <img src={Logo1} alt=""/>
                        </div>
                        <div className="col-1 m-auto col1">
                            <img src={Logo2} alt=""/>
                        </div>
                        <div className="col-1 m-auto col1">
                            <img src={Logo3} alt=""/>
                        </div>
                        <div className="col-1 m-auto col1">
                            <img src={Logo4} alt=""/>
                        </div>
                        <div className="col-1 m-auto col1">
                            <img src={Logo5} alt=""/>
                        </div>
                        <div className="col-1 m-auto col1">
                            <img src={Logo6} alt=""/>
                        </div>
                        <div className="col-1 m-auto col1">
                            <img src={Logo7} alt=""/>
                        </div>
                        
                    </div>
                </div>

                </section>

                {/* community start */}
                <section className="comm">
                    <div className="container text-center py-3">
                        <h1>Manage your entire community <br/> in a single system</h1>
                        <p>Who is Nextcent suitable for?</p>
                                <div className="row row1">
                                    <div className="col-lg-4 col-11 px-5 py-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={Icon1} 
                                                className="my-3" alt=""/>
                                                <h1>Membership Organisations</h1>
                                                <p>Our membership management software provides full automation of membership renewals and payments</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-11 px-5 py-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={Icon2} className="my-3" alt=""/>
                                                <h1>National <br/> Associations</h1>
                                                <p>Our membership management software provides full automation of membership renewals and payments</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-11 px-5 py-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={Icon3} className="my-3"  alt=""/>
                                                <h1>Clubs And <br/> Groups</h1>
                                                <p>Our membership management software provides full automation of membership renewals and payments</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </section>

                {/* <!-- about start --> */}
                <section className="about">
                    <div className="container py-3">
                        <div className="row row1">
                            <div className="col-lg-4">
                                <img src={unlock} alt=""/>
                            </div>
                            <div className="col-lg-8 my-5 px-5">
                                <h1 >
                                    The unseen of spending three <br/>years at Pixelgrade
                                </h1>
                                <p> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                                    vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                                </p>
                                <button className="btn3"><a href="">Learn more</a></button>
                            </div>
                        </div>
                    </div>

                </section>


                {/* <!-- achieve --> */}
                <section className="achieve bg-body-tertiary">
                    <div className="container py-4">
                        <div className="row ">
                            
                            <div className="col-lg-6 my-5 col0">
                                <h1>Helping a local <br/><span>business reinvent itself</span></h1>
                                <p>We reached here with our hard work and dedication</p>
                            </div>

                            <div className="col-lg-6">

                                <div className="row py-4 row1">
                                    <div className="col-6">
                            
                                        <div className="row row2">
                                            <div className="col-3 me-3">
                                                <img src={Iconaicon1} alt=""/>
                                            </div>
                                            <div className="col-6">
                                                <h2>2,245,341</h2>
                                                <h6>Members</h6>
                                            </div>
                                        </div>
                            
                                    </div>
                                    <div className="col-6 ">
                            
                                        <div className="row row2">
                                            <div className="col-3 me-3">
                                                <img src={Iconaicon2} alt=""/>
                                            </div>
                                            <div className="col-6">
                                                <h2>46,328</h2>
                                                <h6>Clubs</h6>
                                            </div>
                                        </div>
                                        
                                    </div>
                            
                                </div>
                                <div className="row row1">
                                    <div className="col-6">
                            
                                        <div className="row row2">
                                            <div className="col-3 me-3">
                                                <img src={Iconaicon3} alt=""/>
                                            </div>
                                            <div className="col-6">
                                                <h2>828,867</h2>
                                                <h6>Even Bookings</h6>
                                            </div>
                                        </div>
                                        
                            
                                    </div>
                                    <div className="col-6">
                            
                                        <div className="row row2">
                                            <div className="col-3 me-3">
                                                <img src={Iconaicon4} alt=""/>
                                            </div>
                                            <div className="col-6">
                                                <h2>1,926,436</h2>
                                                <h6>Payments</h6>
                                            </div>
                                        </div>
                                    </div>
                            
                                </div>
                                
                            </div>
                            

                        </div>
                    </div>
                </section>

                {/* <!-- Calender start --> */}
                <section className="about ">
                    <div className="container py-3">
                        <div className="row row1">
                            <div className="col-lg-4 my-5">
                                <img src={calender} alt=""/>
                            </div>
                            <div className="col-lg-8 my-5 px-5">
                                <h1 >
                                    How to design your site footer like <br/>we did

                                </h1>
                                <p>
                                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                                    massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                                    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
                                    euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                                    faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                                    Donec consectetur faucibus ipsum id gravida.
                                </p>
                                <button className="btn3">
                                    <a href="">Learn more</a>
                                </button>


                            </div>
                        </div>
                    </div>
                
                </section>

                {/* <!-- Customer/update start --> */}
                <section className="customer bg-body-tertiary">
                    <div className="container py-3">

                        <div className="row row1">
                            <div className="col-lg-4 ">
                                <img src={custom} alt="" className="img1"/>
                            </div>
                            <div className="col-lg-8 py-3 px-5">
                                <p>
                                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                                    tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                                    enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                                    molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                                    Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
                                    sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero
                                    condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                                </p>
                                <h1>Tim Smith</h1>
                                <p className="p1">British Dragon Boat Racing Association
                                </p>

                                <div className="row py-3 m-auto row1">
                                    <div className="col-1 m-auto col1">
                                        <img src={Logoi1} alt=""/>
                                    </div>
                                    <div className="col-1 m-auto col1">
                                        <img src={Logoi2} alt=""/>
                                    </div>
                                    <div className="col-1 m-auto col1">
                                        <img src={Logoi3} alt=""/>
                                    </div>
                                    <div className="col-1 m-auto col1">
                                        <img src={Logoi4} alt=""/>
                                    </div>
                                    <div className="col-1 m-auto col1">
                                        <img src={Logoi5} alt=""/>
                                    </div> 
                                    <div className="col-1 m-auto col1">
                                        <img src={Logoi6} alt=""/>
                                    </div>
                                    <div className="col-4 col-md-5 m-auto col2">
                                        <a href="">Meet all customer -&gt;</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- upadate start --> */}
                <section className="update py-5">
                    <div className="container text-center">

                        <div className="row row1">
                            <div className="col-lg-7 m-auto">

                                <h1>Caring is the new marketing</h1>
                                <p >
                                    The Nexcent blog is the best place to read about the latest membership insights, trends and more. See
                                    who's joining the community, read about how our community are increasing their membership income and
                                    lot's more.
                                ​</p>
                            </div>

                        </div>


                                <div className="row pb-5">

                                    <div className="col-lg-4 col-12 my-2">
                                        <div className="card row1">
                                            <img src={image181} alt="" />
                                        
                                        </div>
                                        <div className="col-lg-10 col-7 m-auto">
                                            <div className="card card1 py-3 px-3 bg-body-tertiary">
                                                <h2>Creating Streamlined Safeguarding Processes with OneRen</h2>
                                                <a href="">Readmore -&gt;</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-12 my-2">
                                        <div className="card row1">
                                            <img src={image192} alt="" />
                                        </div>
                                        <div className="col-lg-10 col-7 m-auto">
                                            <div className="card card1 py-3 px-3  bg-body-tertiary">
                                                <h2>What are your safeguarding responsibilities and how can you manage them?</h2>
                                                <a href="">Readmore -&gt;</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-12  my-2">
                                        <div className="card row1">
                                            <img src={image203} alt="" />
                                        </div>
                                        <div className="col-lg-10 col-7 m-auto">
                                            <div className="card card1 py-3 px-3 bg-body-tertiary">
                                                <h2>Revamping the Membership Model with Triathlon Australia </h2>
                                                <a href="">Readmore -&gt;</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>   
                    </div>
                
                </section>

                {/* <!-- Footer start --> */}
                <section className="footer bg-body-tertiary">
                    <div className="container py-4">
                        <div className="row row1">
                            <div className="col-lg-12 text-center">
                                <h1 >
                                    Pellentesque suscipit <br/> fringilla libero eu.
                                </h1>
                                <button className="btn5">
                                    <a href="">Get a demo -&gt;</a>
                                </button>
                            </div>
                        </div>
                    </div>

                </section>

                {/* <!-- Footer1 start --> */}
                <section className="footer1 ">
                    <div className="container py-4">
                        <div className="row py-4 row1">
                            <div className="col-11 m-auto">

                                <div className="row">

                                    <div className="col-lg-5 py-3">
                                        <img className="pb-3" src={LogoM1} alt=""/>
                                        <p className="py-4">
                                            Copyright © 2020 Nexcent ltd. <br/> All rights reserved
                                        </p>

                                        <div className="row row1">
                                            
                                            <div className="col-1 pe-4">
                                                <a href="">
                                                    <img src={l1} alt=""/>
                                                </a>
                                            </div>
                                            <div className="col-1  px-4">
                                                <a href="">
                                                    <img src={l2} alt=""/>
                                                </a>
                                            </div>
                                            <div className="col-1  px-4">
                                                <a href="">
                                                    <img src={l3} alt=""/>
                                                </a>
                                            </div>
                                            <div className="col-1  px-4">
                                                <a href="">
                                                    <img src={l4} alt=""/>
                                                </a>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="col-lg-2">
                                        <h1>Company</h1>
                                        <h2><a href="">About us</a></h2>
                                        <h2><a href="">Blog</a></h2>
                                        <h2><a href="">Contact us</a></h2>
                                        <h2><a href="">Pricing</a></h2>
                                        <h2><a href="">Testimonials</a></h2>
                                    </div>

                                    <div className="col-lg-2">
                                        <h1>Support</h1>
                                        <h2><a href="">Help center</a></h2>
                                        <h2><a href="">Terms of service</a></h2>
                                        <h2><a href="">Legal</a></h2>
                                        <h2><a href="">Privacy policy</a></h2>
                                        <h2><a href="">Status</a></h2>
                                    </div>

                                    <div className="col-lg-3">
                                        <h1 className="pb-4">Stay up to date</h1>
                                        <div className="row row1">

                                            <div className="email" >
                                                <input type="email" placeholder="  Your email address" />
                                                <a href="index.html">
                                                    <img src={send1} alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

            </body>

        </html>


    );
    
}

export default Home;