import React from "react";
import "./About.css";
import aboutImg from "../Assets/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Hey There, My name is Nkechukwu Nnanyere a product designer and Front- End Developer from Nigeria, I do a bit of illustration when I’m bored or feel like exploring colors & figma and I earn from it too.
              </p>
              <p className="about__text p__color">
              My journey into tech started in 2022 Immediately after My secondary Education September to be precise  on one of my daily Routines (Watching Anime) show on YouTube I stumbled on a video by logos by Nick in that video he was creating a logo and somehow I ended up watching the full 4min video.
              </p>
              <p className="about__text p__color">
              Days gone and I found myself always coming back to watch videos from his YouTube channel, he was using a software called Inkscape and at that time I was using a low end laptop so I couldn’t use photoshop but could use Inkscape.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;