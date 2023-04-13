import LoblawsSection from "./LoblawsSection";

const Loblaws = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-red-400 relative z-[2]"></div>
      <LoblawsSection id="01" heading="Loblaws" content={
        <div className="pl-[70px] nice-text">
          <p>Loblaws is Canada’s number one food distributor who are well known for their fresh produce. They have been in in the industry for around a hundred years now and is a trusted brand among consumers. They currently hold the highest market share in the Canadian retail food industry at 34.10 percent and provide both online and in person services. Their current business goal is to acquire new users and retain existing user to further strength market share. </p>
          
          <div className="w-[80%] mt-[125px] border border-white1 m-auto p-[50px] rounded-[20px] bg-gradient-to-tr from-white1 to-white2">
            <h4 className="text-[64px]">Project Overview</h4>
            <div className="flex gap-[80px]">
              <div className="flex-[5]">
                <h5 className="text-[32px] translate-x-0 m-0">Challenge</h5>
                <p className="mb-[50px] mt-[10px]">Identify areas in their service where they lack, and come up with effective solutions to tackle them while boosting customer retention and maximizing revenue generation.</p>
                <h5 className="text-[32px] translate-x-0 m-0">Solution</h5>
                <p className="mt-[10px]">A re-design of the existing mobile application with better flow of navigation and features that improve the overall experience of making a purchase.</p>
              </div>
              <div className="flex-[2]">
                <h5 className="text-[32px] translate-x-0 m-0">Role</h5>
                <p className="mt-[10px] mb-[20px]">User Researcher, UI Design</p>
                <h5 className="text-[32px] translate-x-0 m-0">Time</h5>
                <p className="mt-[10px] mb-[20px]">Four Months</p>
                <h5 className="text-[32px] translate-x-0 m-0">Tools</h5>
                <p className="mt-[10px] mb-[20px]">Figma, Photoshop, Miro</p>
              </div>
            </div>
          </div>
        </div>
      } />

      <LoblawsSection id="03" heading="Empathize" content={
        <div className="pl-[70px] nice-text">
          <h4 className="text-[40px]">Research</h4>

          <h5 className="text-[36px] font-normal translate-x-0 m-0 mt-[50px]">Competitor Analysis</h5>
          <p className="mt-[30px]">We chose to conduct a Competitor Analysis because it helps us draw comparisons and explore how our ideas stand along others that go along a similar parth. In our case, it were competitor brands that already exist and have a similar product already in the market. This research method helped us identify areas where our service lacks and where it has scope for improvement and where it is good. </p>
          <p className="mt-[30px]">This included identifying the value proposed by each competitor, the business goals each have, and identifying functions they have incorporated into their product that addresses the business goals, comparing them with each other from a visual perspective, identifying their target audience and their needs, and how they are currently addressing the needs, and the context of use. Accessibility of each competitor was taken into account.</p>
          <p className="mt-[30px] mb-[50px]">Next, we conducted a heuristic evaluation and a SWOT analysis of the Loblaws website. </p>
          
          <div className="ml-12">
          <h6 className="text-[36px] font-light">Heuristic Evaluation</h6>
          <p className="mt-[30px] mb-[50px]">We evaluated the Loblaws website and mobile app on the basis of Nielson Norman’s ten rules of usability. These are a set of principles that help evaluate an interface for issues. This method can help detect many critical issues early in the design process that can be avoided.</p>

          <h6 className="text-[36px] font-light">S.W.O.T Analysis</h6>
          <p className="mt-[30px]">We conducted a S.W.O.T. analysis between Loblaws and its competitors (Walmart and Costco) which identified each of their Strengths, Weaknesses, Opportunities for improvement and possible Threats. </p>
          <p className="mt-[30px] mb-[50px]">This was especially helpful as it would point out if any of the competitor is capitalizing on any of Loblaws’s weaknesses. We would also find out where the competitors are lacking and can incorporate design changes to address them gaining an advantage over the competition.</p>
          </div>

          <h5 className="text-[36px] font-normal translate-x-0 m-0 mt-[100px]">User Interview</h5>
          <p className="mt-[30px] mb-[50px]">To validate our findings and gain deeper insights on personal experiences, we conducted user interviews. Eight people were interviewed who were frequent online shoppers for a duration of 30 - 45 minutes. We asked open ended questions about online shopping and their experiences on it. Loblaws was not brought up to eliminate bias unless they did so themselves.</p>
          
          <div className="ml-12">
            <h6 className="text-[36px] font-light">Findings</h6>
            <ul className="pl-4 list-disc">
              <li>Interruptions occur while adding items to cart</li>
              <li>Item substitution feature is turned on by default and is not prominently visible</li>
              <li>Limited locations available for delivery</li>
              <li>Users face difficulty switching between delivery and pickup</li>
              <li>User is forced to create an account to use their services</li>
            </ul>
          </div>

          <h5 className="text-[36px] font-normal translate-x-0 m-0 mt-[100px]">User Persona</h5>
          <p className="mt-[30px]">Using the data gathered from the interviews, We created a user persona which represented our target audience. Moving forward, we catered our design solutions to this persona to be sure of who we are designing for and not get sidetracked.</p>
          
          <h5 className="text-[36px] font-normal translate-x-0 m-0 mt-[100px]">Journey Map</h5>
          <p className="mt-[30px]">With the target audience defined, we mapped an instance of a journey a user would take while shopping on Loblaws. This helped us identify and pinpoint problem areas faced by users at each point. We also mapped the users feelings at each problem point and sorted them on the basis of severity. </p>
          <p className="mt-[30px]">With these, we generated ‘How may we’ statements where we could work upon to improve the system.</p>
        </div>
      } />
    </div>
  );
};

export default Loblaws;
