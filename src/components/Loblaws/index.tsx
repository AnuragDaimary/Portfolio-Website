import React from "react";
import LoblawsMain from "assets/videos/LoblawsMain.mp4";
import useStyles from "components/Loblaws/styles";
import LoblawsSection from "components/Loblaws/LoblawsSection";

const Loblaws: React.FC = () => {
  const {
    loblawsIntro,
    loblawsIntroVideo,
    projectOverview,
    projectOverviewHeading,
    projectOverviewSection,
  } = useStyles();
  const loblawsIntroVideoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (loblawsIntroVideoRef.current) {
      loblawsIntroVideoRef.current.muted = true;
      loblawsIntroVideoRef.current.play();
    }
  }, []);
  return (
    <div>
      <div className={loblawsIntro}>
        <video ref={loblawsIntroVideoRef} className={loblawsIntroVideo}>
          <source src={LoblawsMain}></source>
        </video>
      </div>

      <LoblawsSection id="01" heading="Loblaws">
        <>
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
        </>
      </LoblawsSection>

      <LoblawsSection id="02" heading="Design Process">
        <p>Placeholder</p>
      </LoblawsSection>

      <LoblawsSection id="03" heading="Empathize">
        <div>
          <h3>Research</h3>
          <h4>Competitor Analysis</h4>

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

          <h4>Competitor Analysis</h4>
          <p>
            To validate our findings and gain deeper insights on personal
            experiences, we conducted user interviews. Eight people were
            interviewed who were frequent online shoppers for a duration of 30 -
            45 minutes. We asked open ended questions about online shopping and
            their experiences on it. Loblaws was not brought up to eliminate
            bias unless they did so themselves.
          </p>

          <h4>User Persona</h4>
          <p>
            Using the data gathered from the interviews, We created a user
            persona which represented our target audience. Moving forward, we
            catered our design solutions to this persona to be sure of who we
            are designing for and not get sidetracked.
          </p>

          <h4>Journey Map</h4>
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
        <p>It was identified during the research that:</p>
      </LoblawsSection>

      <LoblawsSection id="05" heading="Ideate">
        <>
          <h4>Task Flow</h4>
          <p>
            A new task flow was designed for mobile and web keeping in mind the
            pain areas identified in the prior research. The major change
            incorporated was the moving of the sign in/login page to the
            beginning and the addition of a use as guest feature. This feature
            caters to the users who are reluctant to sign up and create accounts
            and are notified for signup at the end of their shopping journey
            which usually leads to a bad experience and site/app abandonment.
          </p>

          <h4>User Flow</h4>
          <p>Placeholder</p>

          <h4>Information Architecture (IA)</h4>
          <p>Placeholder</p>

          <h4>Wireframe and Wire-flow Sketches</h4>
          <p>
            Keeping in mind the function of each individual screen in the task
            flow and user flow, wireframes for each screen were made from
            scratch along with wire-flows to ensure the right user flow and
            adequate amount of information given to the user per screen. This
            helped us dictate the pace as well as avoid bottle neck areas were
            usually confusion may have occurred among users.
          </p>
        </>
      </LoblawsSection>

      <LoblawsSection id="06" heading="Prototype">
        <>
          <h4>Low Fidelity Prototype</h4>
          <p>
            A working Low fidelity prototype was made on Figma which
            demonstrated early version how the app will look and feel like to
            the users. This mockup only included essential systems like the task
            flow and functionality and was without any styling and branding. We
            used this to conduct several usability tests with people to identify
            issues early and go back to the drawing board before we move on to
            high fidelity mockups and prototypes.
          </p>
        </>
      </LoblawsSection>
    </div>
  );
};

export default Loblaws;
