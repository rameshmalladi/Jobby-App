import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobData

  return (
    <li className="container">
      <div className="img-title-container">
        <img
          className="company-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="title-rating-container">
          <h1 className="title-heading">{title}</h1>
          <div className="star-rating-container">
            <AiFillStar className="star-icon" />
            <p className="rating-text">{rating}</p>
          </div>
        </div>
      </div>
      <div className="second-part-container">
        <h1 className="description-visit-container">Description</h1>
        <p className="description-para">{jobDescription}</p>
      </div>
      <div className="location-job-type-container">
        <div className="location-icon-location-container">
          <MdLocationOn className="location-icon" />
          <p className="location">{location}</p>
        </div>
        <div className="location-icon-location-container">
          <p className="job-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
