import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { Button } from '@alicloud/console-components'
import { storiesOf } from '@storybook/react'
import { Mutation } from '../src/index'

const Demo = () => {
  const fetchData = async () => {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('ok'), 1000)
    })
    return data
  }

  return (
    <Mutation
      onSubmit={fetchData}
      refetchQuery={() => console.log('refetchQuery')}
    >
      {(create, { data, loading }) => {
        return (
          <Button
            loading={loading}
            type="primary"
            onClick={create}
            style={{ marginLeft: 8 }}
          >
            创建
          </Button>
        )
      }}
    </Mutation>
  )
}

storiesOf('Mutation', module).add('Mutation', () => {
  return <Demo />
})
