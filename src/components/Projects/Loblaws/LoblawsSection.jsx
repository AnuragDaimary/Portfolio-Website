const LoblawsSection = ({ heading, id, content}) => {
  return (
    <section className="font-sans">
      <h3 className="mb-[50px]">
        <span className="mr-[30px]">{id}</span>
        {heading}
      </h3>
      {content}
    </section>
  )
}

export default LoblawsSection