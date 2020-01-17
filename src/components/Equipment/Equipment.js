import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Error } from '../../ui/Error'
import { Image } from '../../ui/Image'
import { Loading } from '../../ui/Loading'
import { equipmentAction } from '../../store/actions/equipmentAction'
import './Equipment.css'

export class Equipment extends PureComponent {
  UNSAFE_componentWillMount = () => {
    this.props.dispatch(equipmentAction(this.props.id))
  }

  render() {
    const { equipment, error, loading } = this.props

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (equipment[this.props.id]) {
      return (
        <div>
          <h1 className='equipmentTitle'>Equipment</h1>
          { equipment[this.props.id] && equipment[this.props.id].map(item =>
              <div className='containerEquipment' key={item.number}>
                <Image
                    src={'https://spoonacular.com/cdn/equipment_100x100/' + item.image}
                    alt={item.image}
                    type='equipment'
                  />
                  <div className='equipmentName'>
                    {item.name}
                  </div>
              </div>
            )
          }
        </div>
      )
    } else {
      return null
    }
  }
}

Equipment.propsType ={
  id: PropTypes.number.isRequired
}
