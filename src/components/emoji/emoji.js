import React from 'react'

import data from '../../../data/all.json'
import NimbleEmoji from './nimble-emoji'

import { EmojiPropTypes } from '../../utils/shared-props'
import { EmojiDefaultProps } from '../../utils/shared-default-props'
import { cloneDeep } from 'lodash'

const Emoji = (props) => {
  const moddedProps = cloneDeep(props);
  for (let k in Emoji.defaultProps) {
    if (moddedProps[k] == undefined && Emoji.defaultProps[k] != undefined) {
      moddedProps[k] = Emoji.defaultProps[k]
    }
  }

  return NimbleEmoji({ ...moddedProps })
}

Emoji.propTypes /* remove-proptypes */ = EmojiPropTypes
Emoji.defaultProps = { ...EmojiDefaultProps, data }

export default Emoji
