import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamList: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamData = data.teams
    const updatedData = teamData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  renderHome = () => {
    const {teamList} = this.state

    return (
      <div>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="logo-head">IPL Dashboard</h1>
        </div>
        <ul className="team-list-container">
          {teamList.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamInfo={eachTeam} />
          ))}
        </ul>
      <div/>
    )
  }

  render() {
      const {isLoading} = this.state 

      return (
      <div className="bg-container">
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} />
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}

export default Home
