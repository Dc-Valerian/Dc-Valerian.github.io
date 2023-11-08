import "./GoodStyle.css";

const Good = () => {
  return (
    <div className="goodWrap  dark:bg-[var(--accent)] h-[550px] flex items-center justify-center mb-[30px]">
      <div className=" w-[92%] h-[90%] flex items-center flex-col">
        <div className="text dark:text-[var(--cyan)] ">
          {" "}
          <span className="span dark:text-[var(--white)]">Quality development</span> is
          the cornerstone of a{" "}
          <span className="span dark:text-[var(--white)]">thriving business.</span>
        </div>

        <div className="Holder mt-[60px] flex items-center justify-center">
          <div className="Hold">
            <div className="images">
              <img
                src="https://cdn.sanity.io/images/sthfovgv/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png"
                alt="ui"
                className="imgs"
              />
            </div>
            <div className="textHold">
              <div className="mainText dark:text-[var(--cyan)]">UI/UX</div>
              <div className="sub dark:text-[var(--white)]">
                I'm a passionate designer, dedicated to creating stunning
                digital experiences
              </div>
            </div>
          </div>

          <div className="Hold">
            <div className="images">
              <img
                src="https://cdn.sanity.io/images/sthfovgv/production/db53adca404b7410a2869db815e4ce77da2e7e53-1200x900.png"
                alt="frontend"
                className="imgs"
              />
            </div>
            <div className="textHold">

            <div className="mainText dark:text-[var(--cyan)]">Frontend Engineer</div>
            <div className="sub dark:text-[var(--white)]">
        As a frontend developer, my passion and attention to detail are dedicated to crafting visually appealing and highly functional web applications. 
            </div>
          </div>
          </div>

          <div className="Hold">
            <div className="images">
              <img
                src="https://cdn.sanity.io/images/sthfovgv/production/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png"
                alt="backend"
                className="imgs"
              />
            </div>
            <div className="textHold">
              <div className="mainText  dark:text-[var(--cyan)]">Backend Engineer</div>
              <div className="sub dark:text-[var(--white)]">
                I'm a backend developer who is enthusiastic about creating web
                applications that are both aesthetically pleasing and highly
                functional.
              </div>
            </div>
          </div>

          <div className="Hold">
            <div className="images">
              <img
                src="https://cdn.sanity.io/images/sthfovgv/production/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png"
                alt="fullstack"
                className="imgs"
              />
            </div>
            <div className="textHold">
              <div className="mainText  dark:text-[var(--cyan)]">Full-Stack Engineer</div>
              <div className="sub dark:text-[var(--white)]">
             
I am an experienced Full-Stack Developer with an insatiable enthusiasm for creating web applications that are both elegant and fully functional.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
