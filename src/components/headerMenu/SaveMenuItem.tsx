import React from 'react'
import { useSelector } from 'react-redux'
import { MenuItem, Box } from '@chakra-ui/core'
import { FaSave } from 'react-icons/fa'
import { saveAsJSON } from '~utils/import'
import { getComponents } from '~core/selectors/components'

const SaveMenuItem = () => {
  const components = useSelector(getComponents)

  return (
    <MenuItem onClick={() => saveAsJSON(components)}>
      <Box mr={2} as={FaSave} />
      Save components
    </MenuItem>
  )
}

export default SaveMenuItem
