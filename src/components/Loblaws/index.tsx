import React from "react";
import LoblawsMain from "assets/videos/LoblawsMain.mp4";
import useStyles from "components/Loblaws/styles";
import LoblawsSection from "components/Loblaws/LoblawsSection";
import DesignProcess from "assets/images/Loblaws/DesignProcess.webp";
import Companies from "assets/images/Loblaws/Companies.webp";
import UserPersonna from "assets/images/Loblaws/Persona.webp";
import JourneyMap from "assets/images/Loblaws/JourneyMap.webp";
import UserFlow from "assets/images/Loblaws/UserFlow.webp";
import InformationArchitecture from "assets/images/Loblaws/InformationArchitecture.webp";
import WireframeImages from "assets/images/Loblaws/WireframeImages.webp";
import LoblawsPrototype from "assets/videos/LoblawsPrototype.mp4";

const Loblaws: React.FC = () => {
  const {
    loblawsIntro,
    loblawsIntroVideo,
    projectOverview,
    projectOverviewHeading,
    projectOverviewSection,
    loblawsSectionContainer,
    loblawsSectionContent,
    loblawsSectionContentHeading,
    loblawsSectionContentSubheading,
    loblawsPrototype,
    halfWidthImg,
    prototypeButton,
    prototypeLink,
    loblawsSectionContentTertiaryHeading,
    loblawsSectionSubContent,
    paddingLeft,
    backgroundCover,
  } = useStyles();

  return (
    <div>
      <div className={backgroundCover}></div>
      <div className={loblawsIntro}>
        <video muted autoPlay loop playsInline className={loblawsIntroVideo}>
          <source src={LoblawsMain} type="video/mp4"></source>
        </video>
      </div>

      <LoblawsSection id="01" heading="Loblaws">
        <div className={loblawsSectionContent}>
          <p>
            Loblaws is Canada’s number one food distributor who are well known
            for their fresh produce. They have been in in the industry for
            around a hundred years now and is a trusted brand among consumers.
            They currently hold the highest market share in the Canadian retail
            food industry at 34.10 percent and provide both online and in person
            services. Their current business goal is to acquire new users and
            retain existing user to further strength market share.
          </p>
          <div className={projectOverview}>
            <h3 className={projectOverviewHeading}>Project Overview</h3>
            <div className={loblawsSectionContainer}>
              <div>
                <div className={projectOverviewSection}>
                  <h4>Challenge</h4>
                  <p>
                    Identify areas in their service where they lack, and come up
                    with effective solutions to tackle them while boosting
                    customer retention and maximizing revenue generation.
                  </p>
                </div>
                <div className={projectOverviewSection}>
                  <h4>Solution</h4>
                  <p>
                    A re-design of the existing mobile application with better
                    flow of navigation and features that improve the overall
                    experience of making a purchase.
                  </p>
                </div>
              </div>
              <div>
                <div className={projectOverviewSection}>
                  <h4>Role</h4>
                  <p>User Researcher, UI Design</p>
                </div>
                <div className={projectOverviewSection}>
                  <h4>Time</h4>
                  <p>Four Months</p>
                </div>
                <div className={projectOverviewSection}>
                  <h4>Tools</h4>
                  <p>Figma, Photoshop, Miro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoblawsSection>

      <LoblawsSection id="02" heading="Design Process">
        <div className={loblawsSectionContent}>
          <img
            src={DesignProcess}
            alt="Design process: Empathize then define then ideate then prototype then test"
          />
        </div>
      </LoblawsSection>

      <LoblawsSection id="03" heading="Empathize">
        <div className={loblawsSectionContent}>
          <h3 className={loblawsSectionContentHeading}>Research</h3>
          <h4 className={loblawsSectionContentSubheading}>
            Competitor Analysis
          </h4>

          <img
            src={Companies}
            alt="Companies: Loblaws, Costco wholesale, walmart"
          />

          <p>
            We chose to conduct a Competitor Analysis because it helps us draw
            comparisons and explore how our ideas stand along others that go
            along a similar parth. In our case, it were competitor brands that
            already exist and have a similar product already in the market. This
            research method helped us identify areas where our service lacks and
            where it has scope for improvement and where it is good.
          </p>

          <p>
            This included identifying the value proposed by each competitor, the
            business goals each have, and identifying functions they have
            incorporated into their product that addresses the business goals,
            comparing them with each other from a visual perspective,
            identifying their target audience and their needs, and how they are
            currently addressing the needs, and the context of use.
            Accessibility of each competitor was taken into account.
          </p>

          <p>
            Next, we conducted a heuristic evaluation and a SWOT analysis of the
            Loblaws website.
          </p>

          <div className={loblawsSectionSubContent}>
            <h5 className={loblawsSectionContentTertiaryHeading}>
              Heuristic Evaluation
            </h5>
            <p>
              We evaluated the Loblaws website and mobile app on the basis of
              Nielson Norman’s ten rules of usability. These are a set of
              principles that help evaluate an interface for issues. This method
              can help detect many critical issues early in the design process
              that can be avoided.
            </p>

            <h5 className={loblawsSectionContentTertiaryHeading}>
              S.W.O.T Analysis
            </h5>
            <p>
              We conducted a S.W.O.T. analysis between Loblaws and its
              competitors (Walmart and Costco) which identified each of their
              Strengths, Weaknesses, Opportunities for improvement and possible
              Threats.
            </p>
            <p>
              This was especially helpful as it would point out if any of the
              competitor is capitalizing on any of Loblaws’s weaknesses. We
              would also find out where the competitors are lacking and can
              incorporate design changes to address them gaining an advantage
              over the competition.
            </p>
          </div>

          <h4 className={loblawsSectionContentSubheading}>User Interview</h4>
          <p>
            To validate our findings and gain deeper insights on personal
            experiences, we conducted user interviews. Eight people were
            interviewed who were frequent online shoppers for a duration of 30 -
            45 minutes. We asked open ended questions about online shopping and
            their experiences on it. Loblaws was not brought up to eliminate
            bias unless they did so themselves.
          </p>

          <div className={loblawsSectionSubContent}>
            <h5 className={loblawsSectionContentTertiaryHeading}>Findings</h5>
            <ul className={paddingLeft}>
              <li>Interruptions occur while adding items to cart</li>
              <li>
                Item substitution feature is turned on by default and is not
                prominently visible
              </li>
              <li>Limited locations available for delivery</li>
              <li>
                Users face difficulty switching between delivery and pickup
              </li>
              <li>User is forced to create an account to use their services</li>
            </ul>
          </div>

          <h4 className={loblawsSectionContentSubheading}>User Persona</h4>
          <img src={UserPersonna} alt="user personna" />
          <p>
            Using the data gathered from the interviews, We created a user
            persona which represented our target audience. Moving forward, we
            catered our design solutions to this persona to be sure of who we
            are designing for and not get sidetracked.
          </p>

          <h4 className={loblawsSectionContentSubheading}>Journey Map</h4>
          <img src={JourneyMap} alt="journey map" />
          <p>
            With the target audience defined, we mapped an instance of a journey
            a user would take while shopping on Loblaws. This helped us identify
            and pinpoint problem areas faced by users at each point. We also
            mapped the users feelings at each problem point and sorted them on
            the basis of severity.
          </p>
          <p>
            With these, we generated &apos;How may we&apos; statements where we
            could work upon to improve the system.
          </p>
        </div>
      </LoblawsSection>

      <LoblawsSection id="04" heading="Defining the Problem">
        <div className={loblawsSectionContent}>
          <p>It was identified during the research that:</p>
          <ul className={paddingLeft}>
            <li>
              Loblaws suffers from a broken flow of navigation which often leads
              to site abandonment by a section of users who are reluctant to
              sign up.
            </li>
            <li>
              User often face difficulty locating items on the website and app
              while using the navigation bar due to poor categorization and
              information overload.
            </li>
            <li>
              Inconsistencies and bugs in the UI as well as confusing use of UI
              components.
            </li>
            <li>A lack of a query and question/answer system.</li>
          </ul>
        </div>
      </LoblawsSection>

      <LoblawsSection id="05" heading="Ideate">
        <div className={loblawsSectionContent}>
          <h4 className={loblawsSectionContentSubheading}>Task Flow</h4>
          <p>
            A new task flow was designed for mobile and web keeping in mind the
            pain areas identified in the prior research. The major change
            incorporated was the moving of the sign in/login page to the
            beginning and the addition of a use as guest feature. This feature
            caters to the users who are reluctant to sign up and create accounts
            and are notified for signup at the end of their shopping journey
            which usually leads to a bad experience and site/app abandonment.
          </p>

          <h4 className={loblawsSectionContentSubheading}>User Flow</h4>
          <img className={halfWidthImg} src={UserFlow} alt="user flow" />

          <h4 className={loblawsSectionContentSubheading}>
            Information Architecture (IA)
          </h4>
          <img src={InformationArchitecture} alt="information architecture" />

          <h4 className={loblawsSectionContentSubheading}>
            Wireframe and Wire-flow Sketches
          </h4>
          <img src={WireframeImages} alt="wireframes" />
          <p>
            Keeping in mind the function of each individual screen in the task
            flow and user flow, wireframes for each screen were made from
            scratch along with wire-flows to ensure the right user flow and
            adequate amount of information given to the user per screen. This
            helped us dictate the pace as well as avoid bottle neck areas were
            usually confusion may have occurred among users.
          </p>
        </div>
      </LoblawsSection>

      <LoblawsSection id="06" heading="Prototype">
        <div className={loblawsSectionContent}>
          <h4 className={loblawsSectionContentSubheading}>
            Low Fidelity Prototype
          </h4>

          <video muted controls className={loblawsPrototype}>
            <source src={LoblawsPrototype} />
          </video>

          <p>
            A working Low fidelity prototype was made on Figma which
            demonstrated early version how the app will look and feel like to
            the users. This mockup only included essential systems like the task
            flow and functionality and was without any styling and branding. We
            used this to conduct several usability tests with people to identify
            issues early and go back to the drawing board before we move on to
            high fidelity mockups and prototypes.
          </p>

          <button className={prototypeButton}>
            <a
              className={prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/proto/8f2ilOGvvcQIHV5KFJGBIf/Loblaws-UI?page-id=0%3A1&type=design&node-id=1-21600&viewport=3455%2C-1436%2C0.21&scaling=scale-down&starting-point-node-id=1%3A23571&show-proto-sidebar=1"
            >
              Click here to go to Prototype
            </a>
          </button>

          <p>
            You can test out the live Figma mockup yourself if you want as well!
          </p>
        </div>
      </LoblawsSection>
    </div>
  );
};

export default Loblaws;
