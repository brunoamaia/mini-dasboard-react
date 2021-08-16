import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'

import { Creators as pageContentActions } from '../../store/ducks/pageContent'

import Bell from '../../img/bell.svg'
import Cycling from '../../img/cycling.svg'
import Help from '../../img/help.svg'
import Home from '../../img/home.svg'
import Running from '../../img/running.svg'
import Steps from '../../img/steps.svg'

import '../../styles/nav-bar.css'

interface MyProps {
  pageContent: {
    page: string
  }
  toggleContent: (page: string) => void
}
interface MyState {
}

class NavBar extends React.Component<MyProps, MyState> {
  handleChangeToContent(content: string) {
    this.props.toggleContent(content)
  }

  render() {
    const { page } = this.props.pageContent
    return (
      < aside >
      <nav>
        <button>
          <img src={Bell} alt="ligar alerta" />
        </button>

        <div className="separator" />

        <button
          className={page === 'home' ? 'active' : ''}
          onClick={() => this.handleChangeToContent('home')}
        >
          <img src={Home} alt="ir para o início" />
        </button>
        <button
          className={page === 'cycling' ? 'active' : ''}
          onClick={() => this.handleChangeToContent('cycling')}
        >
          <img src={Cycling} alt="ciclismo" />
        </button>
        <button
          className={page === 'running' ? 'active' : ''}
          onClick={() => this.handleChangeToContent('running')}
        >
          <img src={Running} alt="corrida" />
        </button>
        <button
          className={page === 'steps' ? 'active' : ''}
          onClick={() => this.handleChangeToContent('steps')}
        >
          <img src={Steps} alt="passos dados" />
        </button>
        <button className="helper">
          <img src={Help} alt="ajuda" />
        </button>
      </nav>
      </aside >
    )
  }
}

const mapStateToProps = ((state: { pageContent: any; }) => ({
  pageContent: state.pageContent
}))

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
  bindActionCreators(pageContentActions, dispatch)
)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
