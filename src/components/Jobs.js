import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, date, position, desc } = jobs[value]
  // console.log(company, date, position, desc)

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs &&
            jobs.map((job, index) => {
              return (
                <button
                  onClick={() => setValue(index)}
                  key={job.strapiId}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {job.company}
                </button>
              )
            })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc &&
            desc.map(item => {
              return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{item.name}</p>
                </div>
              )
            })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  )
}

export default Jobs
