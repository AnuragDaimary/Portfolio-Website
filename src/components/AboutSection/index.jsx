const AboutSection = (({ sectionName, sectionContent }) => {
  return (
    <div className="about-section">
      <h5>{sectionName}</h5>
      <div className="flex mt-[100px]">
        <div className="flex-1"></div>
        {sectionContent}
      </div>
    </div>
  )
})

export default AboutSection;