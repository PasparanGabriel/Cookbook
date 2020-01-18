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
    const { equipment, error, id, loading } = this.props
    let number = 0

    if (error)
      return <Error err={error} />

    if (loading)
      return <Loading />

    if (equipment[id]) {
      return (
        <div>
          { !!equipment[id].length && <h1 className='titleEquipment'>Equipment</h1> }
          { equipment[id] && equipment[id].map(item =>
              <div className='containerEquipment' key={number++}>
                <div className='imgEquipment'>
                  <Image
                    src={'https://spoonacular.com/cdn/equipment_100x100/' + item.image}
                    alt={item.image}
                    type='equipment'
                  />
                </div>
                  <div className='nameEquipment'>
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
