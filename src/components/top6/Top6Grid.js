import React from 'react'
import { Table, Divider, Tag } from 'antd'

const Top6Grid = (props) => {
  const { top6 } = props

  const columns = [{
    title: 'Team',
    dataIndex: 'team',
    key: 'team'
  },
  {
    title: 'Proj',
    dataIndex: 'projected',
    key: 'projected'
  },
  {
    title: 'Act',
    dataIndex: 'actual',
    key: 'actual'
  }
  ]

  const data = top6.map(team => {
    return {
      team: team.team,
      img: team.img,
      projected: team.projected,
      actual: team.actual
    }
  })

  return (
    <div id="top6-content">
      <div id="top6-title">
        <h1>Top 6</h1>
      </div>
      <div id="top6-grid">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Top6Grid
