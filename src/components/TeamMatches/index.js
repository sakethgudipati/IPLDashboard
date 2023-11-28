import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard/index'
import LatestMatch from '../LatestMatch/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBanner: '',
    recentMatches: [],
    latestMatch: {},
  }

  componentDidMount() {
    this.getTeamInfo()
  }

  getTeamInfo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = newData

    const updatedLatestMatch = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const updatedRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    this.setState({
      teamBanner: teamBannerUrl,
      recentMatches: updatedRecentMatches,
      latestMatch: {...updatedLatestMatch},
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamBanner, recentMatches, latestMatch} = this.state
    return (
      <div>
        <img src={teamBanner} className="team-banner" alt="teambanner" />
        <h1 className="team-info-head">Latest Matches</h1>
        <div>
          <LatestMatch matchInfo={latestMatch} />
        </div>
        <ul className="recent-matches">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} matchInfo={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="match-card-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="black" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
