import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamInfo} = props
  const {id, name, teamImageUrl} = teamInfo

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-list">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-head">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
