import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { Button, Select, Loading } from '@alicloud/console-components'
import { storiesOf } from '@storybook/react'
import { Query } from '../src/index'
import { useState } from 'react'

const Demo = () => {
  const fetchData = async () => {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(['小明', '小红']), 1000)
    })
    return data
  }
  const [refreshIndex, setRefreshIndex] = useState(0)
  const [loop, setLoop] = useState({ enable: false })

  return (
    <Query fetchData={fetchData} refreshIndex={refreshIndex} loop={loop}>
      {({ data, loading }) => {
        return (
          <Loading visible={loading} size="medium">
            <Select dataSource={data} />
            <Button
              loading={loading}
              type="primary"
              text
              onClick={() => setRefreshIndex(+new Date())}
              style={{ marginLeft: 8 }}
            >
              刷新
            </Button>
            <Button
              type="primary"
              text
              onClick={() => setLoop({ enable: true })}
              style={{ marginLeft: 8 }}
            >
              开始轮询
            </Button>
            <Button
              type="primary"
              text
              onClick={() => setLoop({ enable: false })}
              style={{ marginLeft: 8 }}
            >
              结束轮询
            </Button>
          </Loading>
        )
      }}
    </Query>
  )
}

storiesOf('Query', module).add('Query', () => {
  return <Demo />
})
