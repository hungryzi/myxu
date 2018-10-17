import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MintForm extends Component {
  mint() {
    console.log('minted');
  }

  render() {
    return <Button onClick={() => this.mint()}>Mint</Button>
  }
}

export default MintForm;
