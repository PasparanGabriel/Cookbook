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
    const { error, loading, summary } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (summary[this.props.id]) {
      return (
        <div>
          <h1 className='summaryTitle'>{summary[this.props.id].title}</h1>
          <p className='summaryText' dangerouslySetInnerHTML={{ __html: summary[this.props.id].summary}} />
        </div>
      )
    } else {
      return null
    }
  }
}

Summary.propsType ={
  id: PropTypes.number.isRequired
}
