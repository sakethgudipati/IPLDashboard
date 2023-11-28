import './index.css'

const MatchCard = props => {
  const {matchInfo} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchInfo

  return (
    <li className="match-container">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
