import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Error } from '../../ui/Error'
import { Loading } from '../../ui/Loading'
import { summaryAction } from '../../store/actions/summaryAction'
import './Summary.css'

export class Summary extends PureComponent {
  UNSAFE_componentWillMount = () => {
    this.props.dispatch(summaryAction(this.props.id))
  }

  render() {
    const { error, id, loading, summary } = this.props

    if (error) {
      return <Error err={error} />
    }

    if (loading) {
      return <Loading />
    }

    if (summary[id]) {
      let result = ''
      let summaryText = summary[id].summary
      summaryText = summaryText.split('. ')

      for (let i = 0; i < summaryText.length - 1; i++)
        result += summaryText[i] + '. '

      return (
        <React.Fragment>
          <h1 className='titleSummary'>{summary[id].title}</h1>
          <p dangerouslySetInnerHTML={{ __html: result}} />
        </React.Fragment>
      )
    } else {
      return null
    }
  }
}

Summary.propsType = {
  error: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  summary: PropTypes.string.isRequired
}
