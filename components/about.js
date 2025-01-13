import { setDynamicBackground } from "../scripts/utils.js"; 


export function loadAboutSection() {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about");
  aboutSection.id = "about";  // Add an id to the hero section for targeting it with JS

  aboutSection.innerHTML = `
  <div class="container">
    <h2>About Us</h2>

    <div class="about-content">
      <div class="about-text">
        <h3>Who We Are</h3>
        <div class="about-text-flex">
          <p class="about-text-content">
          NYR Events is a top-rated event planning and management firm dedicated to crafting wholesome and memorable experiences for our diverse <em>local and international clients</em> using non-conventional and timeless production techniques. We are passionate event planners dedicated to creating unforgettable experiences. Whether it's a lavish wedding, an intimate corporate event, or a milestone celebration, we treat every occasion as an opportunity to bring your vision to life.
          
          Our team is made up of creative professionals who are experts in all aspects of event planning — from design and décor to logistics and vendor management. We understand the importance of every detail, ensuring that every event, big or small, runs seamlessly and leaves a lasting impression.
          </p>
        

          <div class="badge-container">
            <img src="../assets/images/main-logo-white.png" >
          </div>
        </div>
      </div>
    </div>
  <hr>

    <div class="services-content">
      <div class="services">
        <h3>Services</h3>
        <div class="services-cards-container">
          <div class="services-card">
              <i class="fa-solid fa-calendar-check"></i>
              <h4>Event Coordination</h4>
              <p>Full-service coordination from planning to execution.</p>
          </div>
          <div class="services-card">
              <i class="fa-solid fa-location-dot"></i>
              <h4>Venue Sourcing</h4>
              <p>Assistance with finding and decorating the perfect venue.</p>
          </div>
          <div class="services-card">
              <i class="fa-solid fa-people-group"></i>
              <h4>Guest Management</h4>
              <p>RSVP tracking, seating arrangements, and guest assistance.</p>
          </div>
          <div class="services-card">
              <i class="fa-solid fa-utensils"></i>
              <h4>Catering</h4>
              <p>Customized menu planning with dietary considerations.</p>
          </div>
          <div class="services-card">
              <i class="fa-solid fa-camera"></i>
              <h4>Photography and Videography</h4>
              <p>Professional photographers and videographers.</p>
          </div>
          <div class="services-card">
              <i class="fa-solid fa-envelope"></i>
              <h4>Custom Invitations and Stationery</h4>
              <p>Designing and printing event invitations and materials.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-cta">
      <a href="#contact" class="cta-button primary">Plan My Event</a>   
      <a href="#contact" class="cta-button secondary">More About Us</a>
    </div>
   
  </div>  
  `

  document.getElementById("main-content").appendChild(aboutSection);

  // Background images for About Section
  const aboutBackgroundImages = [
    "../assets/images/image6.jpg",
    "../assets/images/image7.jpg",
    "../assets/images/image3.jpg",
    "../assets/images/image4.jpg",
    "../assets/images/image1.jpg",
    "../assets/images/image2.jpg",
    "../assets/images/image8.jpg",
    "../assets/images/image9.jpg"
  ];

  const badgeContainer = aboutSection.querySelector(".badge-container");
  setDynamicBackground(badgeContainer, aboutBackgroundImages, 7000);
}


// <div class="about-text">
// <h3>What to Expect from Us</h3>
// <ul>
//   <li><strong>Personalized Planning</strong>: Every client is unique, and we take the time to get to know your vision and preferences. Our team works with you to create a customized plan that aligns with your style, budget, and needs.</li>
//   <li><strong>Attention to Detail</strong>: From selecting the perfect venue to designing stunning décor, no detail is too small. We make sure every element of your event is carefully coordinated to ensure a smooth experience.</li>
//   <li><strong>Seamless Execution</strong>: We handle all the logistics, so you don’t have to worry about a thing. Our experienced team is there to ensure everything runs according to plan, so you can enjoy your special day with peace of mind.</li>
//   <li><strong>Creative & Unique Ideas</strong>: Whether you're envisioning a traditional celebration or something more contemporary, our team will offer creative suggestions and innovative solutions to bring your ideas to life in ways you may not have imagined.</li>
// </ul>
// </div>



{/* <div class="why-choose-us">
<h3>Why Choose Us?</h3>

<p class="why-choose-us-content">For every event, we take complete charge of the entire planning process, down to the last detail of event production and execution. We pay close attention to our clients' needs and preferences, working with a network of excellent vendors to deliver an exquisite and gold-standard event experience. Here are some reasons why NYR Events stands out:
<ul>
<li><strong>Personalized Planning:</strong> From venue sourcing and detailed briefs to final negotiations, we handle everything to ensure the event reflects your unique vision.</li>
<li><strong>Trusted Vendor Network:</strong> Access to trusted vendors who offer high-quality services, making your event flawless from start to finish.</li>
<li><strong>End-to-End Coordination:</strong> We oversee all aspects of your event—from guest access and crowd control to the complete event schedule.</li>
<li><strong>Attention to Detail:</strong> Our team ensures that even the smallest details are meticulously planned to guarantee a seamless experience.</li>
<li><strong>Commitment to Excellence:</strong> We pride ourselves on delivering exceptionally high standards, allowing you to enjoy your event without stress.</li>
</ul>
<br>
<br>
It makes a world of difference to hire NYR Events as your official event planners and managers. We trust that you'll take the first right step toward actualizing your dream event by booking us.
<br>
<br>
We await your call/email today.
</p>
</div>
<hr> */}