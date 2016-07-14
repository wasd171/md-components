
import React from 'react'
import {Snackbar, Button} from '../../../'

export default class SnackbarRoute extends React.Component {

  state = {
    visible: false
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    return (
      <div>
        <section>
          <h2>Snackbar</h2>
          <Button onClick={this.toggle}>
            Toggle
          </Button>
        </section>
        <Snackbar
          text='Ethernet settings saved'
          action='Undo'
          onAction={this.toggle}
          visible={this.state.visible}
        />
      </div>
    )
  }

}
